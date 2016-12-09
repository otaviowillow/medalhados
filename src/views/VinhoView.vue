<template>
  <div class="vinho-view">
    <div class="main-card card">
      <header class="has-background" :style="{ backgroundImage: 'url(' + backgroundType + ')' }">
        <ui-toolbar title="Sobre o vinho que você acabou de degustar"
                    type="clear"
                    text-color="white"
                    hide-nav-icon>
          <div slot="actions">
            <ui-button color="success" icon="shopping_cart">
              <span :class="vinho.ofertaAssociados ? 'promocao' : '' ">{{ vinho.preco }}</span>
              <span class="preco-associado">{{ vinho.ofertaAssociados }}</span>
            </ui-button>
            <!--<ui-icon-button @click="goToStore" type="clear" color="white" icon="shopping_cart"></ui-icon-button>-->
            <!--<ui-icon-button  type="clear" color="white" icon="arrow_forward" @click="goToVinhos"></ui-icon-button>-->
          </div>
        </ui-toolbar>

        <figure :style="{ backgroundImage: 'url(' + vinho.foto_garrafa_url + ')' }"></figure>
        <blockquote>
          <p>{{ vinho.intro }}</p>
          <span>Sugestão de Harmonização:</span>
          <em>{{ vinho.harmonizacao }}</em>
        </blockquote>
      </header>
      <div class="card-body">
        <div class="detalhes-vinho">
          <h2>{{ vinho.rotulo }}</h2>
          <p>{{ vinho.tipo }}</p>

          <h5 class="concurso" v-if="vinho.concurso"><i class="fa fa-trophy" aria-hidden="true"></i> {{ vinho.concurso }}</h5>

          <div class="medalhas">
            <dl>
              <dt>Nota Oficial</dt>
              <dd><medalha :nota="vinho.notaOficial" :tipo="vinho.medalha"></medalha></dd>
            </dl>
            <dl>
              <dt>Sua nota</dt>
              <dd><medalha :nota="notaUsuario"></medalha></dd>
            </dl>
          </div>
        </div>

        <ul>
          <li>Região: {{ vinho.regiao }}</li>
          <li>Procedência: {{ vinho.procedencia.nome }}</li>
          <li>Castas: {{ vinho.castas }}</li>
          <li>Produtor: {{ vinho.produtor }}</li>
          <li>Safra: {{ vinho.safra }}</li>
          <li>Álcool: {{ vinho.alcool }}</li>
          <li v-if="vinho.caracteristicasproducao">Características de Produção: {{ vinho.caracteristicasproducao }}</li>
          <li v-if="vinho.envelhecimento">Envelhecimento: {{ vinho.envelhecimento }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Medalha from '../components/Medalha.vue'

  export default {
    data() {
      return {
        vinho: {},
        vinhoUsuario: {},
        vinhoKey: ''
      }
    },

    route: {
      data ({ to }) {
        this.$dispatch('is-authenticated')
        this.$dispatch('is-admin', this.usuario)
        this.vinhoKey = to.params.id
        this.$bindAsObject('vinho', firebase.database().ref('vinhos/' + this.vinhoKey))
        this.$bindAsObject('vinhoUsuario', firebase.database().ref('usuarios/' + firebase.auth().currentUser.uid + '/vinhos').child(this.vinhoKey))
      }
    },

    computed: {
      notaUsuario() {
        return this.vinhoUsuario.nota
      },
      usuario() {
        return firebase.auth().currentUser
      },
      backgroundType() {
        switch (this.vinho.tipo) {
          case 'Tinto':
            return 'static/img/tranquilos/conjunto.jpg'
            break
          case 'Sobremesa':
            return 'static/img/tranquilos/conjunto.jpg'
            break
          case 'Branco':
            return 'static/img/tranquilos/conjunto.jpg'
            break
          case 'Espumante':
            return 'static/img/espumantes/conjunto.jpg'
            break
          case 'Rose':
            return 'static/img/tranquilos/conjunto.jpg'
            break
        }
      }
    },

    components: {
      Medalha
    },

    methods: {
      goToVinhos() {
        this.$router.go('/vinhos')
      },
      goToStore() {
        window.open(this.vinho.ecommerce)
      }
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  .vinho-view
    margin-bottom 20px
    header
      position relative
      display block
      background-size cover
      padding-top 8%
      text-align center
      @media screen and (min-width: $tablet)
        display flex
        text-align left
      .ui-toolbar-title
        display none
        @media screen and (min-width: $tablet)
          display inline-block
      .promocao
        font-size .9em
        text-shadow none
        text-decoration line-through
      .preco-associado
        font-size 1.4em
        text-shadow none
      .ui-toolbar
        position absolute
        top 0
        left 0
        width 95%
        padding 1% 2.5%
      figure, aside
        display inline-block
        vertical-align top
      figure
        background-color white
        background-size auto 80%
        background-position center
        background-repeat no-repeat
        flex 0 0 300px
        height 150px
        width 150px
        border-radius 50%
        margin-top 60px
        @media screen and (min-width: $tablet)
          margin-top 0
          height 300px
          width auto
      blockquote
        display flex
        flex-flow column
        justify-content center
        padding 50px 0
        @media screen and (min-width: $tablet)
          padding 0
        p, span, em
          float left
          width 90%
          padding 0 5%
        p
          font-size 1.5em
          padding 0 5% 15px 5%
        span
          font-style italic
        em
          font-size 1.3em
      /*blockquote*/
        /*color white*/
        /*width 95%*/
        /*padding 0 2.5%*/
        /*white-space pre-wrap*/
        /*display flex*/
        /*align-items center*/
        /*p*/
          /*padding 30px 0*/
          /*flex 1 auto*/
          /*font-size 1em*/
          /*@media screen and (min-width: $tablet)*/
            /*padding 0*/
            /*font-size 1.5em*/
    .card-body
      display block
      float left
      width 95%
      padding 2.5%
      padding-bottom 5% !important
      @media screen and (min-width: $tablet)
        display flex
        float inherit
      .concurso
        padding-top 20px
        text-align center
        @media screen and (min-width: $tablet)
          text-align left
      .medalhas
        display flex
        float left
        clear both
        width 100%
        margin 10px 0 0 0
        text-align center
        @media screen and (min-width: $tablet)
          display inline-block
          width auto
          text-align left
        dl
          display inline-block
          flex 1 auto
          float none
          text-align center
          margin 0
          @media screen and (min-width: $tablet)
            float left
            margin 0 60px 0 0
        dt
          font-size .8em
          text-align center
          padding 15px 0 10px 0
        dd
          display inline-block
          clear both
      .detalhes-vinho
        flex 2 auto
        h2
          margin 30px 0 15px 0
          text-align center
          font-size 2em
          @media screen and (min-width: $tablet)
            text-align left
            font-size 3em
            margin 0
        p
          text-align center
          @media screen and (min-width: $tablet)
            text-align left
        span
          float left
          font-style italic
          margin 10px 0 0 0
      ul
        float left
        flex 1 auto
        margin 30px 0 0 0
        width 100%
        @media screen and (min-width: $tablet)
          float none
          margin 0
          width auto
        li
          font-size .8em
          width 95%
          padding 2.5%
          &:nth-child(odd)
            background #ccc
</style>