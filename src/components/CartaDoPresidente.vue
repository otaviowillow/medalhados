<template>
  <div class="card carta">
    <h2>Mensagem do Presidente</h2>

    <p>{{ vinho.intro }}</p>

    <img class="signature" src="/static/img/signature.png">

    <footer>
      <ui-button v-link="{ name: 'video', params: { id: vinho.video } }">Video Aula</ui-button>
      <ui-button v-link="{ path: 'ficha/' + vinho.key }">Ficha do Mês</ui-button>
    </footer>
  </div>
</template>

<script>
  export default {
    props: {
      vinho: {}
    }
  }
</script>

<style lang="stylus">
  .carta
    background white
    width 450px
    padding 20px
    margin 0 auto 50px auto
    h2, p
      margin 0 0 25px 0
      line-height 1.5em
      white-space pre-wrap
    .signature
      float right
      height 70px
      margin-bottom 20px
    footer
      width 100%
      padding 0
    .ui-button
      margin-left 15px
</style>