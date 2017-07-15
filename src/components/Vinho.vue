<template>
  <div class="vinho-template" @click="expandirVinho" :class="expandido ? 'ativo' : '' ">
    <article class="card" :style="{ backgroundImage: 'url(' + vinho.foto_garrafa_url + ')' }">
      <div class="content" @click.stop>
        <ui-toolbar type="clear" :hide-nav-icon="true">
          <div class="nota">
            <medalha :nota="nota"></medalha>
          </div>
          <div slot="actions">
            <ui-icon-button @click="goToStore" type="clear" icon="shopping_cart"></ui-icon-button>
          </div>
        </ui-toolbar>
        <footer>
          <h3>{{ vinho.rotulo }}</h3>
          <h4 v-if="expandido">{{ vinho.tipo }}</h4>
        </footer>
        <div class="detalhes" v-if="expandido">
          <p>Castas: {{vinho.castas}}</p>
          <p>Produtor: {{vinho.produtor}}</p>
          <p>Importador: {{vinho.importador}}</p>
          <p>Região: {{ vinho.regiao }}</p>
          <p>Procedência: {{ vinho.procedencia.nome }}</p>
          <p>Álcool: {{vinho.alcool}}</p>
          <p>Cepa: {{vinho.cepa}}</p>
          <p>Safra: {{vinho.safra}}</p>
        </div>
      </div>
    </article>
    <div class="hero-background" v-show="expandido"></div>
  </div>
</template>

<script>
  import VinhoPontuacao from './VinhoPontuacao.vue'
  import Medalha from './Medalha.vue'

  export default{
    props: {
      vinho: {},
      usuario: {},
      nota: 0,
      medalha: ''
    },

    data() {
      return {
        expandido: false,
        avaliados: []
      }
    },

    components: {
      VinhoPontuacao,
      Medalha
    },

    ready: function() {
      return Promise.all([
        this.fetchAvaliados(),
      ]).then(() => {
        this.setAvaliado()
      });
    },

    methods: {
      goToStore() {
        window.open(this.vinho.ecommerce)
      },
      expandirVinho() {
        this.$router.go('/vinho/' + this.vinho.key)
      },
      fetchAvaliados() {
        var avaliadosPeloUsuario = firebase.database().ref('usuarios/' + this.usuario.uid + '/vinhos')

        function valuesToArray(obj) {
          return Object.keys(obj).map(function (key) { return obj[key]; });
        }

        return avaliadosPeloUsuario.once('value', (snapshot) => {
          this.avaliados = valuesToArray(snapshot.val())
        })
      },
      setAvaliado() {
        var avaliado = this.avaliados.find(x => x.key === this.vinho.key)

        this.medalha = avaliado.medalha
        this.nota = avaliado.nota
      }
    }
  }
</script>

<style lang="stylus">
  .vinho-template
    position relative
    height 100%
    cursor pointer
    .ui-button-flat
      transition all .3s
      &:hover
        color #ccc
    .content
      .nota
        position absolute
        top 15px
        left 30px
      footer
        background transparent
        display inline-block
        position absolute
        bottom 0
        left 0
        h3, h4
          width 100%
    article
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background-color white
      background-size auto 70%
      background-position center
      background-repeat no-repeat
      transition background-size .3s ease
      &:hover
        background-size auto 80%
      .detalhes
        position relative
        height 60%
        width 90%
        padding 20% 5%
        z-index 2
        h3
          font-size 3em
        h4
          font-size 1.5em
          padding 0 0 20px 0
        p
          padding 0 0 5px 0
</style>
