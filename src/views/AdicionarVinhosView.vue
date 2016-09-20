<template>
  <div class="adicionar-vinhos">
    <form class="main-card">
      <ui-select name="tipo" :value.sync="vinho.tipo" :options="tipos" label="Tipo" default="Tinto" required></ui-select>

      <ui-textbox name="foto_garrafa_url" :value.sync="vinho.foto_garrafa_url" label="Foto da Garrafa" validation-rules="required" @blurred="formState"></ui-textbox>
      <ui-textbox name="nome" :value.sync="vinho.nome" label="Nome" label="Nome" validation-rules="required" @blurred="formState"></ui-textbox>

      <fieldset>
        <ui-textbox name="alcool" :value.sync="vinho.alcool" label="Álcool" validation-rules="required" @blurred="formState"></ui-textbox>
        <ui-textbox name="cepa" :value.sync="vinho.cepa" label="Cepa" validation-rules="required" @blurred="formState"></ui-textbox>
        <ui-textbox name="castas" :value.sync="vinho.castas" label="Castas" validation-rules="required" @blurred="formState"></ui-textbox>
      </fieldset>

      <fieldset>
        <ui-textbox name="regiao" :value.sync="vinho.regiao" label="Região" validation-rules="required" @blurred="formState"></ui-textbox>
        <ui-textbox name="safra" :value.sync="vinho.safra" label="Safra" validation-rules="required" @blurred="formState"></ui-textbox>
      </fieldset>

      <fieldset>
        <ui-textbox name="produtor" :value.sync="vinho.produtor" label="Produtor" validation-rules="required" @blurred="formState"></ui-textbox>
        <ui-textbox name="importador" :value.sync="vinho.importador" label="Importador" validation-rules="required" @blurred="formState"></ui-textbox>
        <ui-textbox name="origem" :value.sync="vinho.origem" label="Origem" validation-rules="required" @blurred="formState"></ui-textbox>
      </fieldset>

      <ui-textbox name="preco" :value.sync="vinho.preco" type="number" label="Preço" validation-rules="required" @blurred="formState"></ui-textbox>

      <ui-button @click.prevent="enviarVinho" :disabled="formDisabled" :color="formDisabled ? 'default' : 'success'">Enviar</ui-button>
    </form>
  </div>
</template>

<script>
  import * as firebase from 'firebase'
  import notas from '../notas'

  export default {
    data() {
      return {
        tipos: ['Espumante', 'Tinto', 'Sobremesa'],
        formDisabled: true,
        vinho: {
          tipo: '',
          nome: '',
          foto_garrafa_url: '',
          alcool: '',
          cepa: '',
          castas: '',
          produtor: '',
          importador: '',
          origem: '',
          regiao: '',
          safra: '',
          avaliado: false,
          preco: ''
        }
      }
    },
    methods: {
      formState() {
        var textboxes = document.getElementsByClassName('ui-textbox')

        for(var i = 0; i < textboxes.length; i++)
          if(textboxes[i].classList.contains('invalid') || !textboxes[i].classList.contains('dirty'))
            this.formDisabled = true
          else
            this.formDisabled = false
      },
      enviarVinho() {
        firebase.database().ref().child('vinhos').push(this.vinho)

        //this.$router.go('/vinhos')
      }
    }
  }
</script>

<style lang="stylus">
  .adicionar-vinhos
    border 1px solid blue
    fieldset
      display flex
      border 2px solid green
      .ui-textbox
        display flex
        flex 1 auto
        border 1px solid red
</style>