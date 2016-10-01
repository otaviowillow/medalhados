<template>
  <div class="vinho-template" @click="expandirVinho" :class="expandido ? 'ativo' : '' ">
    <article class="card" :style="{ backgroundImage: 'url(' + fotoGarrafaUrl + ')' }">
      <div class="content" @click.stop>
        <a v-if="!vinho.avaliado" v-link="{ name: 'ficha', params: { id: vinho.key } }">Avaliar</a>
        <div class="detalhes" v-if="expandido">
          <header>
            <h3>{{ vinho.nome }}</h3>
            <h4>{{ vinho.tipo }}</h4>
          </header>
          <p>Castas: {{vinho.castas}}</p>
          <p>Produtor: {{vinho.produtor}}</p>
          <p>Importador: {{vinho.importador}}</p>
          <p>Origem: {{ vinho.origem }}</p>
          <p>Região: {{ vinho.regiao }}</p>
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
      usuario: {}
    },
    data() {
      return {
        expandido: false
      }
    },
    components: {
      VinhoPontuacao
    },
    computed: {
      fotoGarrafaUrl() {
        if(this.avaliado)
          return this.vinho.foto_garrafa_url

        return ''
      }
    },
    ready: function() {
      console.log(this.vinho)
      this.fetchAvaliados()
    },
    methods: {
      expandirVinho() {
        console.log(this.vinho.avaliado)
        if(this.vinho.avaliado)
          this.expandido = !this.expandido
        else
          this.$router.go('/ficha/' + this.vinho.key)
      },
      fetchAvaliados() {
        var self = this
        var avaliadosPeloUsuario = firebase.database().ref('usuarios/' + this.usuario.uid + '/vinhos')

        avaliadosPeloUsuario.orderByChild("avaliado").equalTo(true).on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();

//            console.log(self.vinho.key)
//            console.log(childData.vinho_id)

            if(self.vinho.key == childData.vinho_id)
              self.avaliado = true
          });
        });
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