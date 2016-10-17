<template>
  <div class="vinhos-view">
    <div v-if="$loadingRouteData"><ui-progress-circular type="indeterminate"></ui-progress-circular></div>

    <div v-if="!$loadingRouteData">
      <carta-do-presidente v-if="ficha" :vinho="ficha"></carta-do-presidente>

      <div class="card testado" v-else>
        <header :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"></header>
        <p>Não há mais fichas esse mês</p>
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
        backgroundImage: '/static/img/wine-tasting.jpg',
        vinhos: [],
        avaliados: [],
        usuario: {},
        ficha: {},
      }
    },

    components: {
      Vinho,
      CartaDoPresidente
    },

    route: {
      data () {
        return Promise.all([
          this.fetchVinhos(),
          this.fetchAvaliados()
        ]).then(() => {
          this.setFicha()
        });
      }
    },

    computed: {
      usuario() {
        return firebase.auth().currentUser
      }
    },

    methods: {
      fetchVinhos() {
        var self = this
        var vinhos = []
        var vinhosRef = firebase.database().ref('vinhos')
        var avaliadosPeloUsuario = firebase.database().ref('usuarios/' + this.usuario.uid + '/vinhos')

        return vinhosRef.once("value").then(function(snapshot) {
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

        return avaliadosPeloUsuario.orderByChild("avaliado").equalTo(true).once("value").then((snapshot) => {
          snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();

            self.avaliados.push(childData)
          });
        });
      },
      fetchUsuario() {
        this.usuario = firebase.auth().currentUser
      },
      setFicha() {
        var fichas = _.differenceBy(this.vinhos, this.avaliados, 'key')

        console.log(fichas[0])

        if (fichas)
          this.ficha = fichas[0]
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
      width 100%
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
        background-size cover
        background-position center
        background-repeat no-repeat
        width 100%
        height 250px
      p
        padding 30px 0
</style>