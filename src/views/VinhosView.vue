<template>
  <div class="vinhos-view">
    <div v-if="!$loadingRouteData">
      <ul>
        <li v-for="vinho in vinhos" :class="vinho.avaliado ? 'avaliado' : ''">
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
        usuario: {}
      }
    },

    ready: function () {
      this.fetchVinhos()
      this.fetchUsuario()
    },

    components: {
      Vinho
    },

    methods: {
      fetchVinhos() {
        var self = this;
        var vinhosRef = firebase.database().ref('vinhos');

        vinhosRef.once("value")
          .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var key = childSnapshot.key;
              self.vinho = childSnapshot.val();

              self.vinho.key = key
              self.vinhos.push(self.vinho)
            });
          });
      },
      fetchUsuario() {
        var userRef = firebase.auth().currentUser

        this.usuario = userRef
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
</style>