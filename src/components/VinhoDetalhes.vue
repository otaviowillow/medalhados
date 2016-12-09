<template>
  <header class="vinho-detalhes has-background" :style="{ backgroundImage: 'url(' + backgroundType + ')' }">
    <ui-toolbar :title="vinho.familia"
                brand="Ficha de Degustação"
                type="clear"
                text-color="white"
                show-brand
                hide-nav-icon>
      <div slot="actions">
        <ui-icon-button type="clear" color="white" icon="delete"></ui-icon-button>
      </div>
    </ui-toolbar>

    <div class="vinho-descricao">
      <h2>{{vinho.amostra}}</h2>
      <h3>{{vinho.tipo}}</h3>
      <footer>
        <p>Casta: {{vinho.casta}}</p>
        <p>Safra: {{vinho.safra}}</p>
      </footer>
    </div>

    <aside class="nota-total">
      <h5>Pontuação</h5>
      <p>{{ pontuacao }}</p>
    </aside>
  </header>
</template>

<script>
  import UsuarioInput from '../components/UsuarioInput.vue'
  import moment from 'moment'

  export default{
    props: {
      vinho: {},
      pontuacao: 0
    },

    computed: {
      backgroundType() {
        switch (this.vinho.tipo) {
          case 'Tinto':
//            return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/red-wine-background.jpg?alt=media&token=da64ce08-8d9d-4674-a74f-b17f7d24c035'
            return 'static/img/tranquilos/conjunto.jpg'
            break
          case 'Sobremesa':
//            return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/dessert-wine-2.jpg?alt=media&token=6fde8138-2229-4f35-a826-581539ad7d7d'
            return 'static/img/tranquilos/conjunto.jpg'
            break
          case 'Branco':
//            return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/white-wine-1024-768.jpg?alt=media&token=b420b32a-6119-4d26-9251-7b9d54a33a05'
            return 'static/img/tranquilos/conjunto.jpg'
            break
          case 'Espumante':
//            return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/sparkling-wine.jpg?alt=media&token=c3409906-5569-4379-a4aa-2027356349c6'
            return 'static/img/espumantes/conjunto.jpg'
            break
          case 'Rose':
//            return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/rose-pour.jpg?alt=media&token=d7b56c4d-232f-4856-9ce1-a12457a03ac8'
            return 'static/img/tranquilos/conjunto.jpg'
            break
        }
      }
    },

    filters: {
      dateFilter(value) {
        return moment(value).lang("pt").format('MMMM YYYY');
      }
    },

    components: {
      UsuarioInput
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  .vinho-detalhes
    position relative
    display block
    background-size cover
    background-position center
    color white
    width 100%
    @media screen and (min-width: $tablet)
      display flex
      height 200px
      background-size 100% auto
    .ui-toolbar
      display none
      position absolute
      top 0
      left 0
      width 95%
      padding 0 2.5%
      @media screen and (min-width: $tablet)
        display flex
    .vinho-descricao, .usuario-input, .amostra
      flex 1 auto
    .vinho-descricao
      display block
      flex-direction row
      align-self center
      padding 0 2%
      @media screen and (min-width: $tablet)
        display flex
        flex-direction column
      h2
        font-size 3em
      h3
        margin 10px 0
    aside
      text-align center
      h5
        font-size 1.15em
        text-transform uppercase
        margin 40px 0 0 0
      p
        font-size 6em
    footer
      width 80%
      p
        display inline-block
        font-size .8em
        padding 5px 10px 0 0
    figure
      background-color white
      background-size auto 90%
      background-position center
      background-repeat no-repeat
      width 150px
      height 150px
      border-radius 50%
</style>