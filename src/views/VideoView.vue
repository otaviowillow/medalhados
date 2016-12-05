<template>
  <div class="youtube-video">
    <iframe :src="videoUrl" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        video_url: ''
      }
    },
    route: {
      data({to}) {
        this.$dispatch('is-authenticated')
        this.$dispatch('is-admin', this.usuario)
        return {
          video_url: to.params.id
        }
      }
    },
    computed: {
      usuario() {
        return firebase.auth().currentUser
      },
      videoUrl() {
        return 'https://www.youtube.com/embed/' + this.video_url
      }
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  .youtube-video
    width 90%
    height 200px
    float none
    margin 30px auto
    @media screen and (min-width: $tablet)
      width 896px
      height 504px
      margin 0 auto
    iframe
      width 100%
      height 100%
</style>