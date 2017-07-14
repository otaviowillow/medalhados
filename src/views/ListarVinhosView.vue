<template>
  <div class="listar-vinhos">
    <ul class="main-card admin-vinhos">
      <li class="card" v-for="vinho in vinhos" @click="selectVinho(vinho.amostra)">
        <h3>{{ vinho.amostra }}</h3>
      </li>
      <ui-button color="success" v-link="{ name: 'adicionar-vinho' }">Adicionar novo vinho</ui-button>
    </ul>

    <adicionar-vinhos v-if="vinho.amostra" :vinho="vinho"></adicionar-vinhos>
  </div>
</template>

<script>
  import AdicionarVinhos from '../views/AdicionarVinhosView.vue'

  export default {
    data() {
      return {
        vinhos: [],
        vinho: {}
      }
    },

    components: {
      AdicionarVinhos
    },

    route: {
      data ({ to }) {
        console.log(to)
        Promise.all([
          this.fetchVinhos()
        ])
      }
    },

    methods: {
      fetchVinhos() {
        var vinhosRef = firebase.database().ref('/vinhos')

        return vinhosRef.once('value', (snapshot) => {
          this.vinhos = snapshot.val()
        })
      },
      selectVinho(event) {
        var vinhosRef = firebase.database().ref('/vinhos').child(event)

        return vinhosRef.once('value', (snapshot) => {
          this.vinho = snapshot.val()
        })
      },
      removeVinho(event) {
        var vinhosRef = firebase.database().ref('/vinhos').child(event)

        vinhosRef.remove()
      }
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  .listar-vinhos
    .admin-vinhos
      background none
      margin-bottom 100px
      .ui-button-normal
        float right
        margin 10px 0
    .card
        background white
        display flex
        margin 0 0 10px 0
        &:first-child
         display none
        h3
          flex 1 auto
          display flex
          align-items center
          padding 20px 2.5%
          cursor pointer
        .ui-icon-button
          margin 20px 10px
</style>
