<template>
  <div class="main-card degustador">
    <header>
      <figure class="profile-pic" :style="{ backgroundImage: 'url(' + usuario.avatar + ')' }"></figure>
      <aside>
        <h2>{{ nomeCompleto }}</h2>
        <h3>{{ usuario.vinhos_avaliados }} Vinhos avaliados</h3>
      </aside>
    </header>

    <article class="main">
      <ul class="todos-vinhos">
        <li class="card has-background" v-for="vinho in usuario.vinhos" :style="{ backgroundImage: 'url(' + vinho.foto_url + ')' }">
          <h2>{{ vinho.media }}</h2>
          <p>{{ vinho.categoria }}</p>
          <span>Nota Média</span>
        </li>
      </ul>

      <grafico-notas></grafico-notas>
    </article>

    <!--<ui-alert>Atenção! você foi selecionado!</ui-alert>-->
  </div>
</template>

<script>
  import store from '../store'
  import GraficoNotas from '../components/GraficoNotas.vue'

  export default{
    data() {
      return {
        usuario: {}
      }
    },

    route: {
      data ({ to }) {
        document.title = 'Medalhados - Desgustador'
        this.usuario = store.fetchUsuario()
      }
    },

    computed: {
      nomeCompleto() {
        return this.usuario.nome + " " + this.usuario.sobrenome
      }
    },

    components: {
      GraficoNotas
    }
  }
</script>

<style lang="stylus">
  .degustador
    header
      background crimson
    .profile-pic, aside
      display inline-block
      vertical-align middle
    .profile-pic
      background-size cover
      background-position center top
      width 120px
      height 120px
      border-radius 50%
    .todos-vinhos
      display flex
      flex-wrap wrap
      li
        background-size auto 100%
        background-position center
        flex 1 auto
        width 130px
        margin 10px
        padding 80px 10px 20px 10px
        text-align center
        justify-content space-around
        h2
          padding-bottom 5px
        span
          font-size .7em

</style>