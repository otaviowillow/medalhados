<template>
  <div class="botao-voto-view">
    <ui-button @click="computarVotos" icon="done" color="success" class="confirmar">Confirmar</ui-button>

    <ui-modal type="small" :show.sync="show.vote">
      <h3 slot="header">Pontuação Concedida</h3>
      <div class="medal">
        <medalha :nota="nota"></medalha>
      </div>
      <footer slot="footer">
        <ui-button @click="avaliarVinho" color="success">Votar</ui-button>
      </footer>
    </ui-modal>
  </div>
</template>

<script>
  import Medalha from '../components/Medalha.vue'

  export default{
    props: {
      vinho: {},
      vinhoKey: '12',
      usuario: {},
      notaTotal: 0,
    },

    data() {
      return {
        show: {
          vote: false
        },
        nota: 0
      }
    },

    components: {
      Medalha
    },

    methods: {
      computarVotos() {
        var self = this
        var radios = document.getElementsByClassName('ui-radio-input')

        self.nota = 0

        for(var i = 0; i < radios.length; i++)
          if(radios[i].checked)
            self.nota += parseInt(radios[i].value)

        this.show.vote = true
      },
      avaliarVinho() {
        var usuarioVinhos = firebase.database().ref('usuarios/' + firebase.auth().currentUser.uid)

        console.log(this.vinhoKey)

        usuarioVinhos.child('vinhos').child(this.vinhoKey).set({
          avaliado: true,
          tipo: this.vinho.tipo,
          key: this.vinhoKey,
          nota: this.nota
        });

        this.$router.go('/vinho/' + this.vinhoKey)
      }
    }
  }
</script>

<style lang="stylus">
  .botao-voto-view
    text-align right
    .confirmar
      display inline-block
      margin 20px
    .ui-modal-body
      padding-bottom 0
    .medal
      text-align center
      .medalha
        display inline-block
        width auto
        height auto
        .wrapper
          h3
            font-size 3em
            width 80px
            padding 20px 0
          h4
            display inline-block
            top -20px
            font-size .9em
            width auto
            padding 8px 12px
            margin 0
</style>