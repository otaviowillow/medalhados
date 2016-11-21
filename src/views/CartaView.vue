<template>
  <div class="carta-view">
    <carta-do-presidente></carta-do-presidente>
  </div>
</template>

<script>
  import CartaDoPresidente from '../components/CartaDoPresidente.vue'
  export default{
    components:{
      CartaDoPresidente
    },
    route: {
      data ({ to }) {
        this.$dispatch('is-authenticated')
        this.$dispatch('is-admin', this.usuario)
      }
    },
    computed: {
      usuario() {
        return firebase.auth().currentUser
      }
    }
  }
</script>
