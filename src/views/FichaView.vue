<template>
  <div class="fichas">
    <div class="main-card">
      <vinho-detalhes :vinho="vinho"></vinho-detalhes>

      <botao-voto :vinho="vinho" :vinho-key="vinhoKey" :nota-total="notaTotal" :usuario="usuario"></botao-voto>

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
        usuario: {},
        notaTotal: 0
      }
    },

    route: {
      data ({ to }) {
        this.vinhoKey = to.params.id
        this.$bindAsObject('vinho', firebase.database().ref('vinhos/' + this.vinhoKey))
        this.$bindAsObject('usuario', firebase.database().ref('usuarios').child(firebase.auth().currentUser.uid))
      }
    },

    components: {
      VinhoDetalhes,
      BotaoVoto,
      Notas
    },
  }
</script>