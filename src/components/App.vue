<template>
  <div class="main-wrapper">
    <!--<ui-tabs type="text"-->
             <!--background-color="clear"-->
             <!--text-color="white"-->
             <!--text-color-active="white"-->
             <!--indicator-color="white">-->
      <!--<ui-tab @selected="goTo('/fichas')" header="Fichas"></ui-tab>-->
      <!--<ui-tab @selected="goTo('/degustador')" header="Degustador"></ui-tab>-->
      <!--<ui-tab @selected="goTo('/revista')" header="Revista"></ui-tab>-->
      <!--<ui-tab @selected="goTo('/video')" header="Video"></ui-tab>-->
      <!--<ui-tab @selected="goTo('/vinhos')" header="Vinhos"></ui-tab>-->
    <!--</ui-tabs>-->

    <!--<object data="static/img/medalhados_logo.svg"></object>-->
    <!--<user-bar></user-bar>-->

    <nav class="main-menu">
      <ui-button v-link="{ name: 'degustador' }" type="flat">Degustador</ui-button>
      <ui-button v-link="{ name: 'vinhos' }" type="flat">Vinhos</ui-button>
      <ui-button v-link="{ name: 'revista' }" type="flat">Revista</ui-button>
      <ui-button v-link="{ name: 'video' }" type="flat">Video</ui-button>
    </nav>

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

  export default {
    data() {
      return {
        selected: ''
      }
    },
    components: {
      UserBar
    },
    methods: {
      goTo(route) {
        this.$router.go(route)
      }
    }
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

  .main-menu
    .v-link-active
      border-bottom 3px solid white

  .main-card
    background white
    width 90%
    margin 0 auto
    box-shadow 1px 1px 1px #000
    header
      width 90%
      padding 5% 5% 2.5% 5%
  .card
    box-shadow 1px 1px 1px #ccc
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