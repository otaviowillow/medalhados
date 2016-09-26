<template>
  <div class="usuario-input">
    <blockquote>
      <p>Esse vinho é meio merda</p>
      <i class="material-icons">format_quote</i>
      <cite>Otavio Padovani</cite>
    </blockquote>
  </div>
</template>

<script>
  export default{
    props: {
      usuario: {}
    }
  }
</script>

<style lang="stylus">
  .usuario-input
    display flex
    align-items center
    blockquote
      *
        display inline-block
      p
        font-size 1.5em
      p::first-letter
          font-size 200%
      cite
        font-style italic
        width 100%
        clear both
</style>