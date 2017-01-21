<template>
  <div class="youtube-video">
    <!--<iframe :src="videoUrl" frameborder="0" allowfullscreen></iframe>-->
    <iframe :src="videoUrl"frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    <ul>
      <li v-for="video in videos">
        <img :src="video.thumbnail" @click="openVideo(video.url)">
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        video_url: '96432729',
        videos: [
          {
            thumbnail: '/static/img/claquetes_001.jpeg',
            url: '198637172'
          },
          {
            thumbnail: '/static/img/claquetes_002.jpeg',
            url: '198625928'
          },
          {
            thumbnail: '/static/img/claquetes_003.jpeg',
            url: '198626945'
          },
          {
            thumbnail: '/static/img/claquetes_004.jpeg',
            url: '198627637'
          },
          {
            thumbnail: '/static/img/claquetes_005.jpeg',
            url: '198628342'
          }
        ]
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
        return 'https://player.vimeo.com/video/' + this.video_url + '?color=9c00f0&title=0&byline=0&portrait=0'
      }
    },
    methods: {
      openVideo(video) {
        this.video_url = video
      }
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  .youtube-video
    text-align center
    iframe
      width 90%
      height 200px
      float none
      margin 30px auto
      @media screen and (min-width: $tablet)
        width 560px
        height 315px
        margin 0 auto
    ul
      margin 20px 0 0 0
      li
        display inline-block
        padding 5px
      img
        width 180px
        cursor pointer
</style>