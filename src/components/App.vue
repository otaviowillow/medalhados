<template>
  <div class="main-wrapper">

    <main-header></main-header>

    <router-view
            class="view"
            keep-alive
            transition
            transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
  import UserBar from '../components/UserBar.vue'
  import MainHeader from '../components/MainHeader.vue'

  export default {
    data() {
      return {
        selected: '',
        authenticated: false,
      }
    },
    events: {
      'is-authenticated' : function () {
        this.authenticated = true
      }
    },
    components: {
      UserBar,
      MainHeader
    },
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  body
    padding 0
    margin 0
    font-family 'Roboto', sans-serif
    font-weight 300
  .ui-tabs-body
    display none
  h2
    font-size 2em
  h3
    font-size 1.4em
  .ui-button-flat
    &:hover
      background transparent !important

  .main-card
    background white
    width 90%
    margin 0 auto
    box-shadow 1px 1px 3px rgba(0,0,0,.3)
    header
      width 90%
      padding 5% 5% 2.5% 5%
  .card
    box-shadow 1px 1px 3px rgba(0,0,0,.3)
    footer
      display flex
      justify-content flex-end
      align-items center
      width 90%
      padding 0 5%
  .has-background
    position relative
    *
      position relative
      z-index 2
      color white
      text-shadow 1px 1px 1px rgba(0,0,0,.7)
    &:before
      content ''
      background linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.4));
      position absolute
      bottom 0
      left 0
      width 100%
      height 50%
      z-index 1

  .main-wrapper
    &:before
      content ''
      background $mainColor
      position absolute
      top 0
      left 0
      height 250px
      width 100%
      z-index -1
</style>