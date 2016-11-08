<template>
  <div class="card login-view">
    <!--<object class="logo" data="/static/img/gold_medal.svg"></object>-->
    <img class="logo" src="/static/img/medalhados_logo.png">
    <p>Bem-vindo ao primeiro clube de degustadores do Brasil.</p>
    <p>E, talvez, do mundo.</p>

    <!--<button class="facebook-login" @click="facebookSignIn"><i class="fa fa-facebook"></i> Login with Facebook</button>-->
    <div class="fields">
      <ui-textbox name="email" :value.sync="email" label="Degustador"></ui-textbox>
      <ui-textbox name="senha" :value.sync="senha" label="Senha" type="password"></ui-textbox>
      <ui-button @click.prevent="emailSignIn">Acessar</ui-button>
    </div>
  </div>
</template>

<script>
  import * as firebase from 'firebase'

  export default{
    data() {
      return {
        email: '',
        senha: ''
      }
    },

    methods: {
      emailSignIn() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then((result) => {
          this.$dispatch('is-authenticated', result)
//          window.location.reload()
        })
      },

      facebookSignIn() {
        var self = this
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithRedirect(provider).then((result) => {
          var token = result.credential.accessToken;
          var user = result.user;w

          console.log(user)
//          this.$router.go('/')
          //window.location.reload()
        })
      }
    }
  }
</script>

<style lang="stylus">
  .login-view
    background white
    text-align center
    width 500px
    padding 60px 0
    float none
    margin 50px auto
    .fields
      display inline-block
      width 250px
      padding 20px
      border 1px solid #ccc
      border-radius 5px
    .logo, .facebook-login
      display inline-block
      float none
      clear both
    .logo
      height 150px
      margin 0 0 20px 0
    p
      padding 0 0 20px 0
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