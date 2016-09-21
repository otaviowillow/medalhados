<template>
  <div class="button-fab">
    <ui-fab @click="computarVotos" icon="local_bar" color="accent" tooltip="Envie suas notas" tooltip-position="left center">Default, Raised</ui-fab>
  </div>

  <ui-modal :show.sync="show.vote">
    <p>asdasdasd</p>
  </ui-modal>
</template>

<script>
  export default{
    props: {
      vinho: {}
    },

    data() {
      return {
        show: {
          vote: false
        }
      }
    },

    methods: {
      computarVotos() {
        //console.log()
      },
      avaliarVinho() {
        this.usuarioVinhos.push({
          vinho_id: this.vinho.key,
          avaliado: true,
          nota: 82
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