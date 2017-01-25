<template>
  <div class="reset-email">
    <ui-textbox name="email" :value.sync="email" label="Email"></ui-textbox>
    <ui-button @click.prevent="resetEmail">Enviar</ui-button>
  </div>
</template>

<script>
  import * as firebase from 'firebase'

  export default{
    data() {
      return {
        email: ''
      }
    },
    methods: {
      resetEmail() {
        var auth = firebase.auth();
        var emailAddress = this.email;

        auth.sendPasswordResetEmail(emailAddress).then(function() {
          // Email sent.
        }, function(error) {
          // An error happened.
        });
      }
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

</style>