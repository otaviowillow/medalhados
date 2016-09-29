<template>
  <div class="youtube-video">
    <iframe width="896" height="504" src="https://www.youtube.com/embed/nsDXSJpXQck" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
  }
</script>

<style lang="stylus">
  .youtube-video
    width 896px
    float none
    margin 0 auto
</style>