<template>
  <div class="fichas">
    <div class="main-card">
      <vinho-detalhes :vinho="vinho" :pontuacao.sync="pontuacao"></vinho-detalhes>

      <notas :tipo="vinho.tipo" :nota-total.sync="notaTotal"></notas>

      <botao-voto :vinho="vinho" :vinho-key="vinhoKey" :nota-total="notaTotal" :usuario="usuario"></botao-voto>
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
        notaTotal: 0,
        pontuacao: 0
      }
    },

    route: {
      data ({ to }) {
        this.vinhoKey = to.params.id
        this.$bindAsObject('vinho', firebase.database().ref('vinhos/' + this.vinhoKey))
        this.$bindAsObject('usuario', firebase.database().ref('usuarios').child(firebase.auth().currentUser.uid))
      }
    },

    ready: function () {
      this.novaNota()
    },

    components: {
      VinhoDetalhes,
      BotaoVoto,
      Notas
    },

    events: {
      'mudar-nota' : function (value) {
        this.pontuacao = value
      }
    },

    methods: {
      novaNota() {
        var self = this
        var radios = document.getElementsByClassName('ui-radio-input')

        self.pontuacao = 0

        for(var i = 0; i < radios.length; i++)
          if(radios[i].checked)
            self.pontuacao += parseInt(radios[i].value)

        self.$dispatch('mudar-nota', self.pontuacao)
      }
    }

  }
</script>