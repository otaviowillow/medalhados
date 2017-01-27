<template>
  <div class="card login-view">
    <!--<object class="logo" data="/static/img/gold_medal.svg"></object>-->
    <img class="logo" src="/static/img/medalhados_logo_color.png">
    <p>Bem-vindo ao primeiro clube de degustadores do Brasil.</p>
    <p>E, talvez, do mundo.</p>

    <div class="fields">
      <ui-textbox name="email" :value.sync="email" label="Degustador"></ui-textbox>
      <ui-textbox name="senha" :value.sync="senha" label="Senha" type="password" @keypress.enter.prevent="emailSignIn"></ui-textbox>
      <ui-button @click.prevent="emailSignIn">Acessar</ui-button>
    </div>

    <!--<div v-else class="fields">-->
      <!--<p>Digite seu email para que possamos lhe enviar uma requisição para resetar sua senha</p>-->
      <!--<reset-email></reset-email>-->
    <!--</div>-->

    <!--<button @click.prevent="resetOn">Esqueceu sua senha?</button>-->
  </div>
</template>

<script>
  import * as firebase from 'firebase'
  import ResetEmail from '../components/ResetEmail.vue'

  export default{
    data() {
      return {
        email: '',
        senha: '',
        reset: false
      }
    },

    components: {
      ResetEmail
    },

    methods: {
      resetOn() {
        console.log(this.reset)
        this.reset = !this.reset
        console.log(this.reset)
      },

      emailSignIn() {
        var self = this

        firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then((result) => {
          this.$dispatch('is-authenticated', result)
        }, function(error) {
          console.log(error)

          switch (error.code) {
            case 'auth/invalid-email':
              self.$dispatch('display-error', 'O e-mail está formatado incorretamente')
              break;
            case 'auth/user-not-found':
              self.$dispatch('display-error', 'Não há um usuário com esse email. Certifique-se que sua conta está registrada')
              break;
            case 'auth/user-disabled':
              self.$dispatch('display-error', 'Esse usuário foi desabilitado')
              break;
            case 'auth/wrong-password':
              self.$dispatch('display-error', 'Sua senha foi digitada incorretamente')
              break;
          }
        });
      },

      facebookSignIn() {
        var self = this
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithRedirect(provider).then((result) => {
          var token = result.credential.accessToken;
          var user = result.user;

          console.log(user)
//          this.$router.go('/')
          //window.location.reload()
        })
      }
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  .login-view
    background white
    text-align center
    width 80%
    padding 60px 5%
    float none
    margin 50px auto
    @media screen and (min-width: $tablet)
      width 500px
      padding 60px 0
    .fields
      display inline-block
      width 90%
      padding 20px
      border 1px solid #ccc
      border-radius 5px
      @media screen and (min-width: $tablet)
        width 250px
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