<template>
  <header class="main-header" v-if="authenticated">
    <object v-link="{ path: '/' }" data="static/img/medalhados_logo_lateral.png"></object>

    <nav class="main-menu">
      <ui-button v-link="{ name: 'degustador' }" type="flat">Degustador</ui-button>
      <ui-button v-link="{ name: 'fichas' }" type="flat">Fichas</ui-button>
      <ui-button v-link="{ name: 'vinhos' }" type="flat">Vinhos</ui-button>
      <!--<ui-button v-link="{ name: 'revista' }" type="flat">Revista</ui-button>-->
      <ui-button v-link="{ name: 'video', params: { id: 'qYN1M9oc8-w' } }" type="flat">Video</ui-button>
      <ui-button v-if="usuario.isAdmin" icon="lock_outline" v-link="{ name: 'adicionar-vinho' }" type="flat">Adicionar vinho</ui-button>
    </nav>
  </header>
</template>

<script>
  export default {
    props: {
      usuario: {},
      authenticated: false
    },
//    created: function () {
//      return Promise.all([
//        this.checkUsuario()
//      ]).then(() => {
//        console.log(this.usuario)
//        this.loaded = true
//      });
//    },

//    created: function() {
//      console.log(this.usuario)
//      return Promise.all([
//        this.usuario
//      ]).then(() => {
//        console.log(this.usuario)
//        this.loaded = true
//      });
//    },

//    created: function() {
//      console.log(this.usuario)
//      return Promise.all([
//        this.getLatestVideo(),
//        this.checkUsuario()
//      ]).then(() => {
//        console.log(this.usuario)
//        this.loaded = true
//      });
//    },
//
////    computed: {
////      isAdmin() {
////        var userRef = firebase.database().ref('usuarios').child(firebase.auth().currentUser.uid)
////
////        console.info('LOADING HEADER')
////
////        userRef.once('value', (snapshot) => {
////          console.info(snapshot.val().isAdmin)
////
////
////          return snapshot.val().isAdmin
////        })
//////        console.log(firebase.auth().currentUser)
//////        return firebase.auth().currentUser
////      }
////    },
//
//    methods: {
//      goTo(route) {
//        this.$router.go(route)
//      },
//      checkUsuario() {
//        console.log(firebase.auth().currentUser)
//        this.usuario = firebase.auth().currentUser
//      },
//      getLatestVideo() {
//        var videoRef = firebase.database().ref('latest').child('video')
//
//        return videoRef.once('value').then((snapshot) => {
//          this.latestVideo = snapshot.val()
//        })
//      }
//    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  .main-header
    width 90%
    padding 25px 5%
    object
      display inline-block
      vertical-align middle
      height 60px

  .main-menu
    display inline-block
    float right
    vertical-align middle
    .ui-button-content
      color white
    .v-link-active
      border-bottom 3px solid white
</style>