<template>
  <div>
    <div>this is revista body</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
    route: {
      data ({ to }) {
        this.$dispatch('is-authenticated')
      }
    }
  }
</script>

<style>

</style>