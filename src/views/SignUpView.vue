<template>
  <div class="card signup-view">
    <!--<object class="logo" data="/static/img/gold_medal.svg"></object>-->
    <img class="logo" src="/static/img/medalhados_logo.png">
    <p>Bem-vindo ao primeiro clube de degustadores do Brasil.</p>
    <p>E, talvez, do mundo.</p>

    <!--<button class="facebook-login" @click="facebookSignIn"><i class="fa fa-facebook"></i> Login with Facebook</button>-->
    <div class="fields">
      <ui-textbox name="primeiroNome" :value.sync="primeiroNome" label="Primeiro Nome"></ui-textbox>
      <ui-textbox name="ultimoNome" :value.sync="ultimoNome" label="Último Nome"></ui-textbox>
      <ui-textbox name="email" :value.sync="email" label="Email"></ui-textbox>
      <ui-textbox name="senha" :value.sync="senha" label="Senha" type="password"></ui-textbox>
      <ui-button @click.prevent="signUp">Acessar</ui-button>
    </div>
  </div>
</template>

<script>
  import * as firebase from 'firebase'

  export default{
    data() {
      return {
        primeiroNome: '',
        ultimoNome: '',
        email: '',
        senha: ''
      }
    },

    methods: {
      signUp() {
        var displayName = this.primeiroNome + " " + this.ultimoNome

        firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then((user) => {
          user.updateProfile({
            displayName: displayName
          }).then(function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(function (result) {
              this.$dispatch('is-authenticated')
              window.location.reload()
            }).catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
            });
          }, function(error) {
            // An error happened.
          });
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        })
      }
    }
  }
</script>

<style lang="stylus">
  .signup-view
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