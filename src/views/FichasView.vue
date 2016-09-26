<template>
  <div class="fichas">
    <div class="main-card">
      <vinho-detalhes :vinho="vinho"></vinho-detalhes>

      <botao-voto :vinho="vinho" :vinho-key="vinhoKey" :nota-total="notaTotal"></botao-voto>

      <notas :tipo="vinho.tipo" :nota-total.sync="notaTotal"></notas>
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import VinhoDetalhes from '../components/VinhoDetalhes.vue'
  import BotaoVoto from '../components/BotaoVoto.vue'
  import Notas from '../components/Notas.vue'

  export default{
    name: 'FichasView',

    data() {
      return {
        vinho: {},
        vinhoKey: '',
        notaTotal: 0
      }
    },

    route: {
      data ({ to }) {
        this.vinhoKey = to.params.id
        this.$bindAsObject('vinho', firebase.database().ref('vinhos/' + this.vinhoKey))
      }
    },

    components: {
      VinhoDetalhes,
      BotaoVoto,
      Notas
    }
  }
</script>