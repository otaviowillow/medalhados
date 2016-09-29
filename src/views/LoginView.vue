<template>
  <div class="card login-view">
    <object class="logo" data="/static/img/gold_medal.svg"></object>
    <button class="facebook-login" @click="facebookSignIn"><i class="fa fa-facebook"></i> Login with Facebook</button>
  </div>
</template>

<script>
  import * as firebase from 'firebase'

  export default{
    route: {
      data ({ to }) {
        document.title = 'Medalhados - Login'
      }
    },

    methods: {
      facebookSignIn() {
        var self = this
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;

          self.$dispatch('is-authenticated')
          self.$router.go('/vinhos')
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
      }
    }
  }
</script>

<style lang="stylus">
  .login-view
    background white
    text-align center
    width 300px
    padding 60px 0
    float none
    margin 50px auto
    .logo, .facebook-login
      display inline-block
      float none
      clear both
    .logo
      height 150px
      margin 0 0 40px 0
    .facebook-login
      background #3b5998
      color white
      font-size 1em
      padding 10px 25px
      border none
      cursor pointer
      border-radius 10px
      &:hover
        background darken(#3b5998, 10)
      i
        vertical-align middle
        font-size 1.7em
</style>