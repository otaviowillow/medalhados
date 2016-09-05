<template>
  <div class="vinho-template" @click="expandirVinho" :class="expandido ? 'ativo' : '' ">
    <article class="card" :style="{ backgroundImage: 'url(' + vinho.foto_garrafa_url + ')' }">
      <ui-toolbar type="clear" :hide-nav-icon="true" @click.stop>
        <nav class="nav-buttons">
          <ui-icon-button type="flat" icon="shopping_cart"></ui-icon-button>
        </nav>
      </ui-toolbar>
      <div class="content" @click.stop>
        <div class="main">
          <h2>{{ vinho.nota }}</h2>
          <h3>{{ vinho.nome }}</h3>
        </div>
        <div class="detalhes" v-if="expandido">
          <p>Amostra: {{vinho.amostra}}</p>
          <p>Álcool: {{vinho.alcool}}</p>
          <p>Cepa: {{vinho.cepa}}</p>
          <p>Safra: {{vinho.safra}}</p>
        </div>
      </div>
    </article>
    <div class="hero-background" v-show="expandido"></div>
  </div>
  <!--<article @click="expandirVinho" class="vinho-template card has-background" :class="expandido ? 'ativo' : '' " :style="{ backgroundImage: 'url(' + vinho.foto_garrafa_url + ')' }">-->
    <!--<ui-toolbar type="clear" :hide-nav-icon="true" @click.stop>-->
      <!--<nav class="nav-buttons">-->
        <!--<ui-icon-button type="flat" icon="shopping_cart"></ui-icon-button>-->
      <!--</nav>-->
    <!--</ui-toolbar>-->
    <!--<div class="main" @click.stop>-->
      <!--<h2>{{ vinho.nota }}</h2>-->
      <!--<h3>{{ vinho.nome }}</h3>-->
    <!--</div>-->
    <!--<div class="detalhes" v-if="expandido" @click.stop>-->
      <!--<p>Amostra: {{vinho.amostra}}</p>-->
      <!--<p>Álcool: {{vinho.alcool}}</p>-->
      <!--<p>Cepa: {{vinho.cepa}}</p>-->
      <!--<p>Safra: {{vinho.safra}}</p>-->
    <!--</div>-->
  <!--</article>-->
</template>

<script>
  export default{
    props: {
      vinho: {}
    },
    data() {
      return {
        expandido: false
      }
    },
    methods: {
      expandirVinho() {
        this.expandido = !this.expandido
      }
    }
  }
</script>

<style lang="stylus">
  .vinho-template
    position relative
    height 100%
    border 1px solid blue
    article
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background-size auto 100%
      background-position center
      background-repeat no-repeat
      display flex
      align-items flex-end
      .content
        border 1px solid red
    &.ativo
      position static
      z-index 5
      article
        top 50%
        left 50%
        width 400px
        height 400px
        margin -200px 0 0 -200px
        .content
          height 100%
      .hero-background
        content ''
        width 100%
        height 100%
        top 0
        left 0
        border 1px solid red
        z-index -1
        position fixed
</style>

<!--<style lang="stylus">-->
  <!--.vinho-template-->
    <!--display flex-->
    <!--flex-flow column-->
    <!--height 100%-->
    <!--justify-content flex-end-->
    <!--background-size auto 100%-->
    <!--background-position center-->
    <!--background-repeat no-repeat-->
    <!--transition all .5s-->
    <!--footer-->
      <!--flex 1 auto-->
    <!--&.ativo-->
      <!--position fixed-->
      <!--top 50%-->
      <!--left 50%-->
      <!--width 400px-->
      <!--height 400px-->
      <!--margin -200px 0 0 -200px-->
      <!--z-index 5-->
      <!--border 1px solid blue-->
      <!--&:after-->
        <!--content ''-->
        <!--position fixed-->
        <!--top 0-->
        <!--left 0-->
        <!--width 100%-->
        <!--height 100%-->
        <!--z-index -1-->
<!--</style>-->