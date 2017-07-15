<template>
  <div class="vinhos-view">
    <!--<p v-if="!loaded">Loading...</p>-->

    <div v-if="loaded">
      <ul v-if="medalhados.length > 0">
        <li v-for="vinho in medalhados">
          <vinho :vinho="vinho" :key="vinhoKey" :usuario="usuario"></vinho>
        </li>
      </ul>

      <div class="card" v-else>
        <carta-do-presidente></carta-do-presidente>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import Vinho from '../components/Vinho.vue'
  import CartaDoPresidente from '../components/CartaDoPresidente.vue'

  export default {
    name: 'VinhosView',

    data() {
      return {
        vinhos: [],
        avaliados: [],
        medalhados: [],
        loaded: false
      }
    },

    route: {
      data ({ to }) {
        this.$dispatch('is-authenticated')
        this.$dispatch('is-admin', this.usuario)
      }
    },

    ready: function() {
      return Promise.all([
        this.fetchVinhos(),
        this.fetchAvaliados()
      ]).then(() => {
        this.setMedalhados(),
        this.loaded = true
      })
    },

    components: {
      Vinho,
      CartaDoPresidente
    },

    computed: {
      usuario() {
        return firebase.auth().currentUser
      }
    },

    methods: {
      fetchVinhos() {
        var self = this
        var vinhosRef = firebase.database().ref('vinhos')
        var vinhos = []

        return vinhosRef.once("value").then((snapshot) => {
          snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key
            self.vinho = childSnapshot.val()

            self.vinho.key = key
            self.vinhos.push(self.vinho)
          });
        });
      },
      fetchAvaliados() {
        var self = this
        var avaliadosPeloUsuario = firebase.database().ref('usuarios/' + this.usuario.uid + '/vinhos')

        return avaliadosPeloUsuario.once("value").then((snapshot) => {
          snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();

            if(childData.avaliado == true)
              self.avaliados.push(childData)
          });
        });
      },
      fetchNota() {
        var avaliadosPeloUsuario = firebase.database().ref('usuarios/' + this.usuario.uid + '/vinhos')

        return avaliadosPeloUsuario.once('value', (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            if(childSnapshot.val().key == this.vinho.key) {
              console.log(childSnapshot.val().nota)
              childSnapshot.val().nota
            }
          })
        })
      },
      fetchUsuario() {
        this.usuario = firebase.auth().currentUser
      },
      setMedalhados() {
        this.medalhados = _.intersectionBy(this.vinhos, this.avaliados, 'key')
      }
    }
  }
</script>

<style lang="stylus">
  .vinhos-view
    .nav-buttons
      width 95%
      padding 0 2.5%
      text-align right
    .ui-toolbar
      position absolute
      top 0
      left 0
      width 90%
      padding 0 5%
      *
        text-shadow none
    ul
      display flex
      flex-wrap wrap
      justify-content space-around
      width 90%
      padding 0 5%
      li
        display flex
        flex-flow column
        justify-content flex-end
        background-color white
        flex 0 0 300px
        height 350px
        margin 0 0 20px 0

    .testado
      background white
      width 500px
      float none
      margin 0 auto
      text-align center
      header
        background url("/static/img/wine-tasting.jpg")
        background-size cover
        background-position center
        background-repeat no-repeat
        width 100%
        height 250px
      p
        padding 30px 0
</style>
