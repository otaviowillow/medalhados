<template>
  <div class="adicionar-vinhos">
    <form class="main-card">
      <div class="wrapper">
        <h2>Detalhes do Vinho</h2>
        <div class="content">
          <div class="upload-image">
            <input class="upload-file" type="file" @change="uploadFile($event)">
            <div class="background-upload" :style="{ backgroundImage: 'url(' + vinho.foto_garrafa_url + ')' }">
              <span v-show="!vinho.foto_garrafa_url">Adicionar foto de vinho</span>
            </div>
          </div>

          <div class="fields">
            <fieldset class="first">
              <h2>{{ vinho.amostra }}</h2>
            </fieldset>

            <fieldset>
              <ui-select name="tipo" :value.sync="vinho.tipo" :options="tipos" label="Tipo *" :default="vinho.tipo"></ui-select>
              <ui-select name="familia" :value.sync="vinho.familia" :options="familias" label="Família *" default="Vinho Tranquilo"></ui-select>
              <ui-select name="procedencia" :value.sync="vinho.procedencia.nome" :options="paises" label="Procedência *" show-search></ui-select>
            </fieldset>

            <fieldset>
              <ui-textbox name="regiao" :value.sync="vinho.regiao" label="Região *" validation-rules="required" @blurred="formState"></ui-textbox>
              <ui-textbox name="produtor" :value.sync="vinho.produtor" label="Produtor *" validation-rules="required" @blurred="formState"></ui-textbox>
              <ui-textbox name="importador" :value.sync="vinho.importador" label="Importador" @blurred="formState"></ui-textbox>
            </fieldset>

            <fieldset>
              <ui-textbox name="rotulo" :value.sync="vinho.rotulo" label="Rótulo *" validation-rules="required" @blurred="formState"></ui-textbox>
              <ui-textbox name="safra" :value.sync="vinho.safra" label="Safra *" validation-rules="required" @blurred="formState"></ui-textbox>
              <ui-textbox name="castas" :value.sync="vinho.castas" label="Castas *" validation-rules="required" @blurred="formState"></ui-textbox>
            </fieldset>

            <fieldset>
              <ui-textbox name="alcool" :value.sync="vinho.alcool" label="Graduação Alcoólica *" validation-rules="required" @blurred="formState"></ui-textbox>
              <ui-textbox name="caracteristicasProducao" :value.sync="vinho.caracteristicasproducao" label="Características de Produção" @blurred="formState"></ui-textbox>
              <ui-textbox name="envelhecimento" :value.sync="vinho.envelhecimento" label="Envelhecimento" @blurred="formState"></ui-textbox>
            </fieldset>

            <fieldset>
              <ui-textbox name="concurso" :value.sync="vinho.concurso" label="Concurso" @blurred="formState"></ui-textbox>
              <ui-textbox name="notaOficial" :value.sync="vinho.notaOficial" label="Nota Oficial *" validation-rules="required" @blurred="formState"></ui-textbox>
              <ui-textbox name="medalha" :value.sync="vinho.medalha" label="Medalha" @blurred="formState"></ui-textbox>
            </fieldset>

            <fieldset>
              <ui-textbox name="referencia" :value.sync="vinho.referencia" label="Referências" @blurred="formState"></ui-textbox>
              <ui-textbox name="curador" :value.sync="vinho.curador" label="Curador *" validation-rules="required" @blurred="formState"></ui-textbox>
              <ui-textbox name="harmonizacao" :value.sync="vinho.harmonizacao" label="Sugestão de Harmonização" @blurred="formState"></ui-textbox>
            </fieldset>

            <fieldset>
              <ui-textbox name="preco" :value.sync="vinho.preco" label="Preço de Mercado *" validation-rules="required" @blurred="formState"></ui-textbox>
              <ui-textbox name="ofertaAssociados" :value.sync="vinho.ofertaAssociados" label="Oferta para Associados" @blurred="formState"></ui-textbox>
              <ui-textbox name="ecommerce" :value.sync="vinho.ecommerce" label="Link para e-commerce" @blurred="formState"></ui-textbox>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="introducao">
        <h2>Impressões do Curador</h2>
        <ui-textbox name="intro" :value.sync="vinho.intro" :multi-line="true"></ui-textbox>
      </div>

      <div class="video">
        <h2>Associar Vídeo</h2>
        <p>ID do vídeo do youtube: <em>https://www.youtube.com/watch?v=<strong>veMmZtybxu0</strong></em></p>
        <ui-textbox name="video" :value.sync="vinho.video"></ui-textbox>
      </div>

      <footer>
        <!--<ui-button @click.prevent="enviarVinho" :disabled="form.disabled" :color="form.disabled ? 'default' : 'success'">Enviar</ui-button>-->
        <ui-button @click.prevent="enviarVinho" color="success">Enviar</ui-button>
      </footer>
    </form>

    <div class="alert alert-success">
      <ui-alert type="success" :show="show.success.state" @dismissed="show.success.state = false">
        Vinho alterado com sucesso! <a v-link="{ name: 'listar-vinhos' }">Clique aqui</a> para voltar à lista de vinhos
      </ui-alert>
    </div>
  </div>
</template>

<script>
  import * as firebase from 'firebase'
  import countryList from 'world-countries'

  export default {
    props: {
      vinho: {
        concurso: '',
        editor: '',
        ecommerce: '',
        referencia: '',
        amostra: '',
        intro: '',
        criadoEm: '',
        tipo: '',
        rotulo: '',
        foto_garrafa_url: null,
        alcool: '',
        castas: '',
        produtor: '',
        harmonizacao: '',
        caracteristicasProducao: '',
        ofertaAssociados: '',
        envelhecimento: '',
        importador: '',
        origem: '',
        notaOficial: '',
        regiao: {
          nome: '',
          codigo: ''
        },
        fermentacao: '',
        safra: '',
        avaliado: false,
        preco: ''
      }
    },

    data() {
      return {
        tipos: ['Espumante', 'Tinto', 'Branco', 'Sobremesa', 'Rose'],
        familias: ['Vinho Tranquilo', 'Vinho Espumante'],
        form: {
          disabled: true
        },
        paises: [],
        show: {
          success: {
            state: false
          }
        }
      }
    },
    route: {
      data ({ to }) {
        this.$dispatch('is-authenticated')
        Promise.all([
          this.fetchAmostra()
        ])
      }
    },
    ready: function() {
      this.setPaises(this.paises)
    },
    methods: {
      fetchAmostra() {
        var vinhosRef = firebase.database().ref('/vinhos')

        return vinhosRef.once('value', (snapshot) => {
          var obj = snapshot.val()
          var arr = Object.keys(obj).map(function (key) { return obj[key]; })
          var num = arr.length

          var zero = 3 - num.toString().length + 1;
          var filteredList = Array(+(zero > 0 && zero)).join("0") + num + '-17';

          this.vinho.amostra = filteredList
        })
      },
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
          if(textboxes[i].classList.contains('invalid') || !textboxes[i].classList.contains('dirty')) {
            this.form.disabled = true
          }
          else
            this.form.disabled = false
      },
      enviarVinho() {
        var utc = new Date()
        this.vinho.criadoEm = utc.toString()

        firebase.database().ref('vinhos/' + this.vinho.amostra).set(this.vinho);

        this.show.success.state = true
      },
      setPaises(countries) {
        this.$http.get('../static/countries.json').then((response) => {
          var countriesData = response.data

          for(var i = 0; i < countriesData.length; i++) {
            var country = countriesData[i]

            countries.push(country.translations.por.common)
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  .adicionar-vinhos
    width 100%
    fieldset
      margin 0 0 10px 0
    .introducao, .video, .wrapper
      width 95%
      padding 2.5%
      h2
        margin-bottom 10px
    footer
      text-align right
      width 95%
      padding 2.5%
      padding-top 0
    .introducao
      textarea
        height 120px
    .video
      p
        font-size .9em
        em
          font-size .9em
          font-style italic
        strong
          font-weight 700
    .wrapper
      h2
        display block
        width 100%
    .content
      display table
      width 100%
      @media screen and (min-width: $tablet)
        width auto
    .upload-image
      display block
      width 100%
      height 300px
      @media screen and (min-width: $tablet)
        display table-cell
        width 300px
        height auto
    .fields
      display block
      width 100%
      @media screen and (min-width: $tablet)
        display table-cell
        width auto
      fieldset
        display table
        width 100%
        h2
          padding 10px
      .ui-select, .ui-textbox
        display block
        min-width 90%
        padding 0 5%
        @media screen and (min-width: $tablet)
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
