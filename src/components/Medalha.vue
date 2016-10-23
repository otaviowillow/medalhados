<template>
  <div class="medalha">
    <div class="wrapper">
      <h3 :class="medal">{{ nota }}</h3>
      <h4>{{ medal }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      nota: 0
    },

    data() {
      return {
        notaTotal: 97
      }
    },

    computed: {
      medal() {
        console.info(this.notaTotal +" "+" "+this.nota+" "+this.notaTotal * .8)

        if(this.nota > this.notaTotal * .8)
          return 'duplo-ouro'

        if(this.nota > this.notaTotal * .6)
          return 'ouro'

        return 'prata'
      }
    }
  }
</script>

<style lang="stylus">
  .medalha
    width 55px
    height 55px
    h3
      width 45px
      text-align center
      vertical-align middle
      padding 12px 0
      border-radius 50%
    .duplo-ouro
      background gold
      border 4px solid goldenrod
    .ouro
      background gold
      border 4px solid goldenrod
    .prata
      background silver
      border 4px solid slategray
    h4
      background white
      width 75px
      font-size .7em
      text-align center
      padding 3px 0
      margin -12px 0 0 -13px
      border 1px solid black
</style>