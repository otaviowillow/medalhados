<template>
  <div class="main-wrapper">

    <header class="main-header">
      <object v-link="{ path: '/' }" data="static/img/medalhados_logo_lateral.png"></object>

      <nav class="main-menu">
        <ui-button v-link="{ name: 'degustador' }" type="flat">Degustador</ui-button>
        <ui-button v-link="{ name: 'fichas' }" type="flat">Fichas</ui-button>
        <ui-button v-link="{ name: 'vinhos' }" type="flat">Vinhos</ui-button>
        <ui-button v-link="{ name: 'revista' }" type="flat">Revista</ui-button>
        <ui-button v-link="{ name: 'video' }" type="flat">Video</ui-button>
        <ui-button icon="lock_outline" v-link="{ name: 'adicionar-vinho' }" type="flat">Adicionar vinho</ui-button>
      </nav>
    </header>

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

  .main-header
    width 90%
    padding 25px 5%
    object
      display inline-block
      vertical-align middle
      height 60px

  .main-menu
    display inline-block
    float right
    vertical-align middle
    .ui-button-content
      color white
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