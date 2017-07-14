<template>
  <div class="admin-usuario card">

    <div v-if="!proibido" v-for="vinho in usuario.vinhos">
      <div class="avaliado" v-if="vinhoComparado.amostra == vinho.key && vinho.avaliado">
        <h2>{{ vinhoComparado.amostra }}</h2>
        <p>Nota: <strong @keypress.enter.prevent="mudarNota" contenteditable>{{ vinho.nota }}</strong></p>
        <footer>
          <ui-icon-button type="secondary" icon="delete" @click="showModal = true"></ui-icon-button>
        </footer>
      </div>

      <div class="nao-avaliado" v-if="vinhoComparado.amostra == vinho.key && !vinho.avaliado">
        <h2>{{ vinhoComparado.amostra }}</h2>
        <footer>
          <ui-icon-button type="secondary" icon="close" @click="naoPermitirAvaliacao"></ui-icon-button>
        </footer>
      </div>
    </div>

    <div class="proibido" v-if="proibido">
      <h2>{{ vinhoComparado.amostra }}</h2>
      <footer>
        <ui-icon-button type="secondary" icon="done" @click="permitirAvaliacao"></ui-icon-button>
      </footer>
    </div>

    <ui-modal :show.sync="showModal">
      <h3 slot="header">Cuidado!</h3>
      <p>Você não pode desfazer essa ação. Tem certeza que deseja excluir?</p>
      <div class="footer" slot="footer">
        <ui-button @click="showModal = false">Não</ui-button>
        <ui-button @click="removerAvaliacao">Sim</ui-button>
      </div>
    </ui-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  },
  props: {
    usuario: {},
    vinhoComparado: {}
  },
  computed: {
    proibido() {
      if(this.usuario.vinhos) {
        var vinho = _.find(this.usuario.vinhos, { 'key': this.vinhoComparado.amostra });

        if(vinho && vinho.avaliado !== undefined)
          return false

        return true
      }

      return true
    }
  },
  methods: {
    permitirAvaliacao() {
      var vinho = firebase.database().ref('usuarios/' + this.usuario.id + '/vinhos/' + this.vinhoComparado.amostra)

      vinho.update({
        'key': this.vinhoComparado.amostra,
        'avaliado': false
      })
    },
    naoPermitirAvaliacao() {
      var vinho = firebase.database().ref('usuarios/' + this.usuario.id + '/vinhos/' + this.vinhoComparado.amostra)

      vinho.child('avaliado').remove();
    },
    mudarNota(event) {
      var nota = event.target.innerHTML
      var vinho = firebase.database().ref('usuarios/' + this.usuario.id + '/vinhos/' + this.vinhoComparado.amostra)

      vinho.update({'nota' : nota})
    },
    removerAvaliacao() {
      var vinho = firebase.database().ref('usuarios/' + this.usuario.id + '/vinhos')

      vinho.child(this.vinhoComparado.amostra).remove();

      this.showModal = false
    }
  }
}
</script>

<style lang="stylus">
  .admin-usuario
    h2, p
      padding 8px
    p
      padding-top 0
    strong
      padding 2px
      border 1px solid black
    .avaliado
      background rgba(76,175,80,.12)
    .nao-avaliado
      background rgba(33,150,243,.12)
    .proibido
      background rgba(244,67,54,.12)
</style>
