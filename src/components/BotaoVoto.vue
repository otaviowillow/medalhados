<template>
  <div>
    <div class="button-fab">
      <ui-fab @click="computarVotos" icon="local_bar" color="accent">Default, Raised</ui-fab>
    </div>

    <ui-modal type="small" :show.sync="show.vote">
      <h3 slot="header"></h3>
      <div class="medal">
        <h3>Pontuação Concedida</h3>
        <object :data="medal"></object>
        <h2>{{ votosTotal }}</h2>
      </div>
      <footer slot="footer">
        <ui-button @click="avaliarVinho" color="success">Confirmar</ui-button>
      </footer>
    </ui-modal>
  </div>
</template>

<script>
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
        votosTotal: 0,
        notTotal: 86
      }
    },

    computed: {
      medal() {
        console.log(this.votosTotal +" "+" "+this.notTotal+" "+this.notTotal * .8)
        console.info(this.votosTotal +" "+" "+this.notaTotal+" "+this.notaTotal * .8)

        if(this.votosTotal > this.notTotal * .8)
          return 'static/img/gold_medal.svg'

        if(this.votosTotal > this.notTotal * .6)
          return 'static/img/silver_medal.svg'

        return 'static/img/bronze_medal.svg'
      }
    },

    methods: {
      computarVotos() {
        var self = this
        var radios = document.getElementsByClassName('ui-radio-input')

        self.votosTotal = 0

        for(var i = 0; i < radios.length; i++)
          if(radios[i].checked)
            self.votosTotal += parseInt(radios[i].value)

        this.show.vote = true
      },
      adicionarNotas() {
        var notasRef = firebase.database().ref('notas')


        console.log(this.vinho)
      },
      avaliarVinho() {
        var usuarioVinhos = firebase.database().ref('usuarios/' + firebase.auth().currentUser.uid + '/vinhos')

        this.adicionarNotas()

        usuarioVinhos.push({
          avaliado: true,
          tipo: this.vinho.tipo,
          medalha: this.medal,
          key: this.vinhoKey,
          nota: this.votosTotal
        })

        this.$router.go('/vinhos')
      }
    }
  }
</script>

<style lang="stylus">
  .ui-modal-container
    width 250px !important
  .button-fab
    position relative
    width 100%
    .ui-fab
      position absolute
      top -30px
      right 30px
  .medal
    text-align center
    h3
      padding 0 0 20px 0
    object, h2
      display inline-block
      vertical-align middle
    object
      height 60px
    h2
      font-size 4.5em
</style>