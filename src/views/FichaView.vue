<template>
  <div class="fichas">
    <div class="main-card">
      <div>
        <vinho-detalhes :vinho="vinho" :pontuacao.sync="pontuacao"></vinho-detalhes>

        <notas :tipo="vinho.tipo" :nota-total.sync="notaTotal"></notas>

        <botao-voto :vinho="vinho" :vinho-key="vinhoKey" :nota-total="notaTotal" :usuario="usuario"></botao-voto>
      </div>
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
        pontuacao: 100
      }
    },

    route: {
      data ({ to }) {
        this.$dispatch('is-authenticated')
        this.$dispatch('is-admin', this.usuario)
        this.vinhoKey = to.params.id
        this.$bindAsObject('vinho', firebase.database().ref('vinhos/' + this.vinhoKey))
        this.$bindAsObject('usuario', firebase.database().ref('usuarios').child(firebase.auth().currentUser.uid))
        this.checkIfAllowed()
      }
    },

    computed: {
      usuario() {
        return firebase.auth().currentUser
      }
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
      checkIfAllowed() {
        var vinho = firebase.database().ref('usuarios/' + this.usuario.uid + '/vinhos/' + this.vinhoKey)

        vinho.once('value', (snapshot) => {
          if(snapshot.val() == null)
            return this.$router.go('/')

          if(snapshot.val().avaliado == true)
            return this.$router.go('/vinho/' + this.vinhoKey)

          return
        })
      }
    }
  }
</script>
