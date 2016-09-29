<template>
  <div v-for="notas in categoria" class="notas card" :nota-total.sync="notaTotal">
    <aside :style="{ backgroundImage: 'url(' + notas.foto_url + ')' }">
      <h3>{{ notas.categoria }}</h3>
    </aside>
    <div class="notas">
      <nota v-for="subcategoria in notas.subcategorias"
            :categoria="notas.categoria"
            :subcategoria="subcategoria.categoria"
            :notas="subcategoria.notasPossiveis"
            :selecionada.sync="subcategoria.selecionada | toInt">
      </nota>
    </div>
  </div>
</template>

<script>
  import Nota from '../components/Nota.vue'
  import notas from '../notas'

  export default {
    props: {
      tipo: '',
      notaTotal: 0
    },

    computed: {
      categoria() {
        var self = this

        switch (self.tipo) {
          case 'Tinto':
            for(var i = 0; i < notas.tintos.length; i++)
              this.notaTotal += notas.tintos[i].nota

            return notas.tintos
            break;
          default:
            for(var i = 0; i < notas.tintos.length; i++)
              this.notaTotal += notas.tintos[i].nota

            return notas.tintos
            break;
        }
      }
    },

    components: {
      Nota
    }
  }
</script>

<style lang="stylus">
  .notas
    display flex
    min-height 120px;
    aside
      display flex
      align-items flex-end
      flex: 0 0 300px;
      background-position left top
      background-size cover
      background-repeat no-repeat
      h3
        color white
        font-size 1.6em
        text-shadow 1px 1px 1px rgba(0,0,0,.2)
        padding 20px
    .notas
      display flex
      flex-direction column
      justify-content center
      flex 1 auto
      padding 20px
</style>