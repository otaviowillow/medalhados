<template>
  <div class="fichas">
    <div class="main-card">
      <vinho-detalhes :vinho="vinho"></vinho-detalhes>

      <botao-voto :vinho="vinho" :vinho-key="vinhoKey"></botao-voto>

      <notas :tipo="vinho.tipo"></notas>
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
        vinhoKey: ''
      }
    },

    route: {
      data ({ to }) {
        this.vinhoKey = to.params.id
        console.log(this.vinhoKey)
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