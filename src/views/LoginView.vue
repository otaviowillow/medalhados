<template>
  <div>
    <button @click="facebookSignIn">Facenook</button>
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
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          this.$router.go('/fichas')
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

</style>