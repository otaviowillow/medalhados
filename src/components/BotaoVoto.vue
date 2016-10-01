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
          return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/gold_medal.svg?alt=media&token=67110758-8a97-4a4b-a74b-cb7e2f567916'

        if(this.votosTotal > this.notTotal * .6)
          return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/silver_medal.svg?alt=media&token=734bd64a-2a20-48a1-9ac9-231fa6171c14'

        return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/bronze_medal.svg?alt=media&token=7c908e1c-639e-4821-812b-eee65187c0a8'
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
      avaliarVinho() {
        var usuarioVinhos = firebase.database().ref('usuarios/' + firebase.auth().currentUser.uid + '/vinhos')

        usuarioVinhos.push({
          avaliado: true,
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