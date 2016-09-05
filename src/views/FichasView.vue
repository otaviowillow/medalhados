<template>
  <div class="fichas">
    <div class="main-card">
      <vinho-detalhes :vinho="vinho"></vinho-detalhes>

      <botao-voto :vinho="vinho"></botao-voto>

      <div v-for="notas in vinho.notas" class="card">
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
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import VinhoDetalhes from '../components/VinhoDetalhes.vue'
  import Nota from '../components/Nota.vue'
  import BotaoVoto from '../components/BotaoVoto.vue'

  export default{
    name: 'FichasView',

    data() {
      return {
        vinho: {}
      }
    },

    route: {
      data ({ to }) {
        document.title = 'Medalhados - Ficha'
        this.vinho = store.fetchIndividualVinho()
      }
    },
    components: {
      Nota,
      VinhoDetalhes,
      BotaoVoto
    },
    events: {
      'adicionar-voto' : function (voto) {

      },
    }
  }
</script>

<style lang="stylus">
  .fichas
    .card
      display flex
      aside
        display flex
        align-items flex-end
        flex: 0 0 300px;
        background-position left top
        background-size cover
        background-repeat no-repeat
        h3
          color white
      .notas
        display flex
        flex-direction column
        justify-content center
        flex 1 auto

</style>