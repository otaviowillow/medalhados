<template>
  <div class="vinhos-view">
    <ul>
      <li v-for="vinho in vinhos" :class="vinho.avaliado ? 'avaliado' : ''">
        <vinho :vinho="vinho"></vinho>
      </li>
    </ul>
  </div>
</template>

<script>
  import store from '../store'
  import Vinho from '../components/Vinho.vue'

  export default{
    data() {
      return {
        vinhos: []
      }
    },

    route: {
      data ({ to }) {
        document.title = 'Medalhados - Ficha'
        this.vinhos = store.fetchVinhos()
      }
    },

    components: {
      Vinho
    },
  }
</script>

<style lang="stylus">
  .vinhos-view
    .nav-buttons
      width 100%
      text-align right
    .ui-toolbar
      position absolute
      top 0
      left 0
      width 100%
      *
        text-shadow none
    ul
      display flex
      flex-wrap wrap
      justify-content space-around
      li
        display flex
        flex-flow column
        justify-content flex-end
        background-color white
        flex 0 0 250px
        height 300px
</style>