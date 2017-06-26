<template>
  <div class="listar-user">
    <ul class="main-card">
      <li class="card" v-for="usuario in usuarios">
        <div class="flex">
          <aside>
            <h3>{{ usuario.primeiroNome }} {{ usuario.ultimoNome }}</h3>
            <p>{{ usuario.email }}</p>
          </aside>
          <nav>
            <ui-icon-button color="red" icon="delete" type="secondary" @click="prepareToRemove(usuario)"></ui-icon-button>
          </nav>
        </div>
        <ul class="vinhos" v-if="usuario.vinhos">
          <h4>Vinhos testados:</h4>
          <li v-for="vinho in usuario.vinhos">
            <h2>{{ vinho.key }}</h2>
            <em><strong>Nota:</strong> {{ vinho.nota }}</em>
          </li>
        </ul>
      </li>
    </ul>

    <ui-modal :show.sync="showModal">
      <h3 slot="header">Cuidado!</h3>
      <p v-if="usuarioToBeRemoved">Você não pode desfazer essa ação. Tem certeza que deseja excluir <strong style="font-weight: 700">{{ usuarioToBeRemoved.displayName }}</strong>?</p>
      <div class="footer" slot="footer">
        <ui-button @click="showModal = false">Não</ui-button>
        <ui-button @click="removeUsuario(usuarioToBeRemoved.id)">Sim</ui-button>
      </div>
    </ui-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        usuarios: [],
        usuarioToBeRemoved: {},
        showModal: false
      }
    },
    route: {
      data ({ to }) {
        Promise.all([
          this.fetchUsuarios()
        ])
      }
    },

    methods: {
      fetchUsuarios() {
        var usuariosRef = firebase.database().ref('/usuarios')

        return usuariosRef.on('value', (snapshot) => {
          this.usuarios = snapshot.val()
        })
      },
      prepareToRemove(usuario) {
        this.usuarioToBeRemoved = usuario
        this.showModal = true
      },
      removeUsuario(userId) {
        var usuarios = this.usuarios
        var usuariosRef = firebase.database().ref('/usuarios').child(userId)

        usuariosRef.remove()
        this.showModal = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../variables.styl"

  .listar-user
    .main-card
      background transparent
    .flex
      display flex
    .footer
      text-align right
    aside
      flex 5 auto
    nav
      flex 1 auto
      text-align right
    h4
      margin 30px 0 0 10px
    .card
      background white
      margin 10px 0
      h3
        font-size 1.4em
        margin-bottom 5px
      aside
        padding 10px
    .vinhos
      li
        display inline-block
        padding 10px
      strong
        font-weight 700
</style>
