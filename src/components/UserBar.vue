<template>
  <div>
    <aside>
      <img :src="usuario.photoURL">
    </aside>
    <h4>{{ usuario.displayName }}</h4>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        usuario: {}
      }
    },
    ready: function () {
      this.usuario = firebase.auth().currentUser
    }
  }
</script>
