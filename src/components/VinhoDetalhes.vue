<template>
  <header class="vinho-detalhes has-background" :style="{ backgroundImage: 'url(' + backgroundType + ')' }">
    <!--<figure :style="{ backgroundImage: 'url(' + vinho.foto_garrafa_url + ')' }" ></figure>-->
    <div class="vinho-descricao">
      <!--<h2>{{vinho.nome}}</h2>-->
      <h2>Agosto, 2016</h2>
      <h3>{{vinho.tipo}}</h3>
      <!--<p>Amostra: {{vinho.amostra}}</p>-->
      <footer>
        <p>Álcool: {{vinho.alcool}}</p>
        <p>Cepa: {{vinho.cepa}}</p>
        <p>Safra: {{vinho.safra}}</p>
      </footer>
    </div>

    <!--<usuario-input></usuario-input>-->
  </header>
</template>

<script>
  import UsuarioInput from '../components/UsuarioInput.vue'

  export default{
    props: {
      vinho: {}
    },

    computed: {
      backgroundType() {
        console.log(this.vinho)

        switch (this.vinho.tipo) {
          case 'Tinto':
            return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/red-wine-background.jpg?alt=media&token=da64ce08-8d9d-4674-a74f-b17f7d24c035'
            break
          case 'Sobremesa':
            return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/dessert-wine-2.jpg?alt=media&token=6fde8138-2229-4f35-a826-581539ad7d7d'
            break
          case 'Branco':
            return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/white-wine-1024-768.jpg?alt=media&token=b420b32a-6119-4d26-9251-7b9d54a33a05'
            break
          case 'Espumante':
            return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/sparkling-wine.jpg?alt=media&token=c3409906-5569-4379-a4aa-2027356349c6'
            break
          case 'Rose':
            return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/rose-spring.jpg?alt=media&token=ea6fee1a-2631-4b95-9f31-689d80d3deb9'
            break
        }
      }
    },

    components: {
      UsuarioInput
    }
  }
</script>

<style lang="stylus">
  .vinho-detalhes
    display flex
    background-size 100% auto
    background-position center
    color white
    width 100%
    height 200px
    .vinho-descricao, .usuario-input, .amostra
      flex 1 auto
    .vinho-descricao
      display flex
      flex-direction column
      align-self center
      padding 0 2%
      h2
        font-size 3em
    footer
      width 80%
      p
        font-size .8em
        padding 5px 0 0 0
    figure
      background-color white
      background-size auto 90%
      background-position center
      background-repeat no-repeat
      width 150px
      height 150px
      border-radius 50%
</style>