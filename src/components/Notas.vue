<template>
  <div class="notas">
    <div class="card nota-card-header">
      <aside></aside>

      <div class="notas-individuais">
        <nota-header></nota-header>
      </div>
    </div>

    <div v-for="notas in categoria" class="card">
      <aside class="card-shadow" :style="{ backgroundImage: 'url(' + notas.foto_url + ')' }">
        <h3>{{ notas.categoria }}</h3>
      </aside>
      <div class="notas-individuais">
        <nota v-for="subcategoria in notas.subcategorias"
              :categoria="notas.categoria"
              :subcategoria="subcategoria.categoria"
              :notas="subcategoria.notasPossiveis"
              :selecionada.sync="subcategoria.selecionada | toInt">
        </nota>
      </div>
    </div>
  </div>
</template>

<script>
  import Nota from '../components/Nota.vue'
  import NotaHeader from '../components/NotaHeader.vue'
  import notas from '../notas'

  export default {
    data() {
      return {
        selecionada: 0
      }
    },

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
      Nota,
      NotaHeader
    }
  }
</script>

<style lang="stylus">
  .notas
    .card
      display flex
      margin-top 8px
    .nota-card-header
      box-shadow none
    aside
      display flex
      align-items flex-end
      justify-content flex-end
      flex 0 0 300px
      background-position center top
      background-size cover
      background-repeat no-repeat
      h3
        color white
        font-size 1.6em
        text-shadow 1px 1px 1px rgba(0,0,0,.2)
        padding 20px
    .notas-individuais
      flex 1 auto
      justify-content center
      display flex
      flex-direction column
      .nota-individual
        &:nth-child(even)
          background #ccc
</style>