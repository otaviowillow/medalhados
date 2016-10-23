<template>
  <div class="vinho-template" @click="expandirVinho" :class="expandido ? 'ativo' : '' ">
    <article class="card" :style="{ backgroundImage: 'url(' + vinho.foto_garrafa_url + ')' }">
      <div class="content" @click.stop>
        <ui-toolbar type="clear" :hide-nav-icon="true">
          <div class="nota">
            <object class="medalha" :data="medalha"></object>
            <h4>{{ nota }}</h4>
          </div>
          <div slot="actions">
            <ui-icon-button type="clear" icon="shopping_cart"></ui-icon-button>
          </div>
        </ui-toolbar>
        <div class="detalhes" v-if="expandido">
          <header>
            <h3>{{ vinho.nome }}</h3>
            <h4>{{ vinho.tipo }}</h4>
          </header>
          <p>Castas: {{vinho.castas}}</p>
          <p>Produtor: {{vinho.produtor}}</p>
          <p>Importador: {{vinho.importador}}</p>
          <p>Origem: {{ vinho.origem }}</p>
          <p>Região: {{ vinho.regiao.nome }}</p>
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
      VinhoPontuacao
    },
    ready: function() {
      return Promise.all([
        this.fetchAvaliados(),
      ]).then(() => {
        this.setAvaliado()
      });
    },
    methods: {
      expandirVinho() {
        console.log(this.vinho.key)

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
  .nota
    margin-left 15px
    h4, .medalha
      display inline-block
      vertical-align middle
    h4
      font-size 1.3em
    .medalha
      width 20px
  .vinho-template
    position relative
    height 100%
    cursor pointer
    .ui-button-flat
      transition all .3s
      &:hover
        color #ccc
    .main
      white-space nowrap
      padding 10px 20px
      h3, aside, .medal
        display inline-block
        vertical-align middle
        white-space nowrap
      .medal
        width 25px
      aside
        margin-left 10px
        h2, h3
          text-shadow 1px 1px 1px white
    .ui-toolbar
      z-index 3
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
    &.ativo
      position static
      z-index 5
      cursor inherit
      article
        top 50%
        left 50%
        width 400px
        height 400px
        margin -200px 0 0 -200px
        &:hover
          background-size auto 70%
        &:after
          content ''
          position absolute
          top 0
          left 0
          width 100%
          height 100%
          background rgba(250,250,250,.9)
          z-index 1
        .content
          height 100%
      .hero-background
        content ''
        width 100%
        height 100%
        top 0
        left 0
        z-index -1
        position fixed
</style>