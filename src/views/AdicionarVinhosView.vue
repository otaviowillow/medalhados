<template>
  <div class="adicionar-vinhos">
    <form class="main-card">
      <h2>Introdução</h2>
      <div class="introducao">
        <ui-textbox name="intro" :value.sync="vinho.intro" :multi-line="true"></ui-textbox>
      </div>

      <h2>Detalhes do Vinho</h2>
      <div class="wrapper">
        <div class="upload-image">
          <input class="upload-file" type="file" @change="uploadFile($event)">
          <div class="background-upload" :style="{ backgroundImage: 'url(' + vinho.foto_garrafa_url + ')' }">
            <span v-show="!vinho.foto_garrafa_url">Adicionar foto de vinho</span>
          </div>
        </div>

        <div class="fields">

          <fieldset class="first">
            <ui-textbox name="nome" :value.sync="vinho.nome" label="Nome" label="Nome" validation-rules="required" @blurred="formState"></ui-textbox>
            <ui-select name="tipo" :value.sync="vinho.tipo" :options="tipos" label="Tipo" default="Tinto" required></ui-select>
            <ui-select name="regiao" :value.sync="vinho.regiao.nome" :options="paises" label="Região" show-search required></ui-select>
            <!--<ui-textbox name="foto_garrafa_url" :value.sync="vinho.foto_garrafa_url" label="Foto da Garrafa" validation-rules="required" @blurred="formState"></ui-textbox>-->
          </fieldset>

          <fieldset>
            <ui-textbox name="alcool" :value.sync="vinho.alcool" label="Álcool" validation-rules="required" @blurred="formState"></ui-textbox>
            <ui-textbox name="cepa" :value.sync="vinho.cepa" label="Cepa" validation-rules="required" @blurred="formState"></ui-textbox>
            <ui-textbox name="castas" :value.sync="vinho.castas" label="Castas" validation-rules="required" @blurred="formState"></ui-textbox>
          </fieldset>

          <fieldset>
            <!--<ui-textbox name="regiao" :value.sync="vinho.regiao" label="Região" validation-rules="required" @blurred="formState"></ui-textbox>-->
            <ui-textbox name="preco" :value.sync="vinho.preco" type="number" label="Preço" validation-rules="required" @blurred="formState"></ui-textbox>
            <ui-textbox name="safra" :value.sync="vinho.safra" label="Safra" validation-rules="required" @blurred="formState"></ui-textbox>
          </fieldset>

          <fieldset>
            <ui-textbox name="produtor" :value.sync="vinho.produtor" label="Produtor" validation-rules="required" @blurred="formState"></ui-textbox>
            <ui-textbox name="importador" :value.sync="vinho.importador" label="Importador" validation-rules="required" @blurred="formState"></ui-textbox>
            <ui-textbox name="origem" :value.sync="vinho.origem" label="Origem" validation-rules="required" @blurred="formState"></ui-textbox>
          </fieldset>

        </div>
      </div>

      <footer>
        <ui-button @click.prevent="enviarVinho" :disabled="formDisabled" :color="formDisabled ? 'default' : 'success'">Enviar</ui-button>
      </footer>
    </form>
  </div>
</template>

<script>
  import * as firebase from 'firebase'
  import countryList from 'world-countries'
  import notas from '../notas'

  export default {
    data() {
      return {
        tipos: ['Espumante', 'Tinto', 'Branco', 'Sobremesa', 'Rose'],
        formDisabled: true,
        paises: [],
        vinho: {
          intro: '',
          criadoEm: '',
          tipo: '',
          nome: '',
          foto_garrafa_url: null,
          alcool: '',
          cepa: '',
          castas: '',
          produtor: '',
          importador: '',
          origem: '',
          regiao: {
            nome: '',
            codigo: ''
          },
          safra: '',
          avaliado: false,
          preco: ''
        }
      }
    },
    ready: function() {
      this.setPaises(this.paises)
    },
    methods: {
      uploadFile(event) {
        var self = this
        var file = event.currentTarget

        var storageRef = firebase.storage().ref();

        if (file.files.length > 0) {
          for (var i = 0; i < file.files.length; i++) {
            var vinhoRef = storageRef.child(file.files[i].name);

            vinhoRef.put(file.files[i]).then(function(snapshot) {
              self.vinho.foto_garrafa_url = snapshot.downloadURL
            });
          }
        }
      },
      formState() {
        var textboxes = document.getElementsByClassName('ui-textbox')

        for(var i = 0; i < textboxes.length; i++)
          if(textboxes[i].classList.contains('invalid') || !textboxes[i].classList.contains('dirty'))
            this.formDisabled = true
          else
            this.formDisabled = false
      },
      enviarVinho() {
        var utc = new Date().toJSON().slice(0,10);
        this.vinho.criadoEm = utc

        firebase.database().ref().child('vinhos').push(this.vinho)

        firebase.database().ref().child('lastest').set(this.vinho)

        this.$router.go('/')
      },
      setPaises(countries) {
        this.$http.get('../node_modules/world-countries/dist/countries.json').then((response) => {
          var countriesData = response.data

          for(var i = 0; i < countriesData.length; i++) {
            var country = countriesData[i]

//            countries.push({nome: country.translations.por.common, code: country.cioc})
            countries.push(country.translations.por.common)
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  .adicionar-vinhos
    width 100%
    .introducao
      width 95%
      padding 0 2.5%
    footer
      text-align right
      width 95%
      padding 2.5%
      padding-top 0
    .wrapper
      width 95%
      padding 2.5%
    .wrapper
      display table
    .upload-image
      display table-cell
      width 300px
    .fields
      display table-cell
      fieldset
        display table
        width 100%
      .ui-select, .ui-textbox
        display table-cell
        min-width 200px
        padding 0 10px
    .upload-image
      position relative
      .background-upload, .upload-file
        position absolute
        left 0
        top 0
        width 100%
        height 100%
      .background-upload
        background-color #f7f7f7
        background-size cover
        background-position center
        background-repeat no-repeat
        span
          position absolute
          top 50%
          left 0
          width 100%
          height 30px
          color #333
          text-align center
          margin -15px 0 0 0

      .upload-file
        border 1px solid blue
        cursor pointer
        opacity 0
        z-index 2
</style>