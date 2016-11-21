<template>
  <header class="main-header" v-if="authenticated">
    <object v-link="{ path: '/' }" data="static/img/medalhados_logo_lateral.png"></object>

    <nav class="main-menu">
      <ui-button v-link="{ name: 'degustador' }" type="flat">Degustador</ui-button>
      <ui-button v-link="{ name: 'fichas' }" type="flat">Fichas</ui-button>
      <ui-button v-link="{ name: 'vinhos' }" type="flat">Vinhos</ui-button>
      <!--<ui-button v-link="{ name: 'revista' }" type="flat">Revista</ui-button>-->
      <ui-button v-link="{ name: 'video', params: { id: 'qYN1M9oc8-w' } }" type="flat">Video</ui-button>
      <ui-button v-if="admin" v-link="{ name: 'adicionar-vinho' }" type="flat" icon="lock_outline">Adicionar vinho</ui-button>
    </nav>
  </header>
</template>

<script>
  export default {
    props: {
      admin: false,
      authenticated: false
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

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
</style>