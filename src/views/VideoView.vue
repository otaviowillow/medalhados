<template>
  <div class="youtube-video">
    <iframe width="896" height="504" :src="videoUrl" frameborder="0" allowfullscreen></iframe>
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
  .youtube-video
    width 896px
    float none
    margin 0 auto
</style>