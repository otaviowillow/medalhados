<template>
  <div>
    <div class="button-fab">
      <ui-fab @click="computarVotos" icon="local_bar" color="accent">Default, Raised</ui-fab>
    </div>

    <ui-modal type="small" :show.sync="show.vote">
      <h3 slot="header"></h3>
      <p>{{ votosTotal }}</p>
      <footer slot="footer">
        <ui-button @click="avaliarVinho">Votar</ui-button>
      </footer>
    </ui-modal>
  </div>
</template>

<script>
  export default{
    props: {
      vinho: {},
      vinhoKey: '12'
    },

    data() {
      return {
        show: {
          vote: false
        },
        votosTotal: 0
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
          vinho_id: this.vinhoKey,
          nota: this.votosTotal
        })
      }
    }
  }
</script>

<style lang="stylus">
  .button-fab
    position relative
    width 100%
    border 1px solid red
    .ui-fab
      position absolute
      top -30px
      right 30px
</style>