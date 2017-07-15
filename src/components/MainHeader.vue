<template>
  <header class="main-header" v-if="authenticated">
    <object class="logo-principal" v-link="{ path: '/' }" data="static/img/medalhados_logo_lateral.png" @click="hideMenu"></object>

    <ui-icon-button class="icon-menu" icon="menu" type="clear" color="white" @click="toggleMenu"></ui-icon-button>

    <nav class="main-menu">
      <ui-button v-link="{ name: 'degustador' }" type="flat" @click="toggleMenu">Degustador</ui-button>
      <ui-button v-link="{ name: 'fichas' }" type="flat" @click="toggleMenu">Fichas</ui-button>
      <ui-button v-link="{ name: 'vinhos' }" type="flat" @click="toggleMenu">Vinhos</ui-button>
      <!-- <ui-button @click="goTo('http://assine.medalhados.com.br/revista-virtual/')" type="flat">VinhoMagazine</ui-button> -->
      <!-- <ui-button v-link="{ name: 'video', params: { id: '198637172' } }" type="flat" @click="toggleMenu">Video</ui-button> -->
      <ui-button v-link="{ name: 'logout' }" color="primary" @click="toggleMenu">Sair</ui-button>
      <ui-button v-if="admin" v-link="{ name: 'admin' }" type="flat" icon="lock_outline" color="white" @click="toggleMenu">Admin</ui-button>
    </nav>
  </header>
</template>

<script>
  export default {
    props: {
      admin: false,
      authenticated: false
    },

    methods: {
      toggleMenu() {
        var navMenu = document.getElementsByClassName('main-menu')[0]

        navMenu.classList.toggle('show')
      },
      hideMenu () {
        var navMenu = document.getElementsByClassName('main-menu')[0]

        navMenu.classList.remove('show')
      },
      goTo(url) {
        var win = window.open(url, '_blank')

        win.focus()
      }
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  .main-header
    width 90%
    padding 25px 5%
    .icon-menu
      float right
      display inline-block
      @media screen and (min-width: $tablet)
        display none
    .v-link-active.logo-principal
      position relative
      display inline-block
      vertical-align middle
      height 40px
      border none
      z-index 10
      cursor pointer
      @media screen and (min-width: $tablet)
        height 60px
    .main-menu
      display none
      position fixed
      top 0
      left 0
      width 100%
      height 85%
      float right
      vertical-align middle
      padding 25% 0 0 0
      overflow auto
      @media screen and (min-width: $tablet)
        position static
        display inline-block
        width auto
        height auto
        padding 0
        overflow initial
    .ui-button
      float left
      clear both
      margin 20px
      @media screen and (min-width: $tablet)
        float none
        clear none
        margin 0
    .ui-button-content
      color black
      @media screen and (min-width: $tablet)
        color white
    .v-link-active
      border-bottom 3px solid white
    .show
      display inline-block
      background white
      z-index 9
      @media screen and (min-width: $tablet)
        background transparent
</style>
