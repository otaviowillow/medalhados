<template>
  <header class="vinho-detalhes has-background" :style="{ backgroundImage: 'url(' + vinho.foto_garrafa_url + ')' }">
    <figure :style="{ backgroundImage: 'url(' + vinho.foto_garrafa_url + ')' }" ></figure>
    <div class="vinho-descricao">
      <h2>{{vinho.nome}}</h2>
      <h3>{{vinho.tipo}}</h3>
      <p>Amostra: {{vinho.amostra}}</p>
      <p>Álcool: {{vinho.alcool}}</p>
      <p>Cepa: {{vinho.cepa}}</p>
      <p>Safra: {{vinho.safra}}</p>
    </div>

    <usuario-input></usuario-input>
  </header>
</template>

<script>
  import UsuarioInput from '../components/UsuarioInput.vue'

  export default{
    props: {
      vinho: {}
    },

    components: {
      UsuarioInput
    }
  }
</script>

<style lang="stylus">
  .vinho-detalhes
    display flex
    /*background url('http://www.lacadievineyards.ca/images/img-head-sparkling-wine.jpg')*/
    background-size cover
    background-position center
    color white
    width 100%
    .vinho-descricao, .usuario-input
      flex 1 auto
    .vinho-descricao
      display flex
      flex-direction column
      align-self center
    figure
      background-size cover
      background-position center top
      width 150px
      height 150px
      border-radius 50%
</style>