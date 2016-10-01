<template>
  <div class="vinhos-view">
    <div v-if="!$loadingRouteData">
      <ul>
        <li v-for="vinho in medalhados">
          <vinho :vinho="vinho" :key="vinhoKey" :usuario="usuario"></vinho>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import Vinho from '../components/Vinho.vue'

  export default {
    name: 'VinhosView',

    data() {
      return {
        vinhos: [],
        avaliados: [],
        usuario: {}
      }
    },

    ready: function () {
      this.fetchVinhos()
      this.fetchUsuario()
      this.fetchAvaliados()
    },

    components: {
      Vinho
    },

    computed: {
      medalhados() {
        return _.difference(this.avaliados, this.vinhos, 'key')
      }
    },

    methods: {
      fetchVinhos() {
        var self = this
        var vinhosRef = firebase.database().ref('vinhos')

        vinhosRef.once("child_added").then(function(snapshot) {
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

        avaliadosPeloUsuario.orderByChild("avaliado").equalTo(true).on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();

            self.avaliados.push(childData)
          });
        });
      },
      fetchUsuario() {
        this.usuario = firebase.auth().currentUser
      },
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
</style>