<template>
  <div class="degustar-view">
    <div class="wrapper">
      <aside>
        <div class="card main card-shadow">
          <div class="card-body">
            <h2>Estou pronto para degustar!</h2>
            <p>Digite no campo marcado o código da amostra que você recebeu e deseja degustar, para acessar a ficha oficial de avaliação.</p>
            <input type="text" v-model="vinho.id" maxlength="6" max="6" class="ui-textbox-input" @keypress.enter="procurarVinho" placeholder="_ _ _ - _ _">
            <!--<ui-textbox name="vinhoId" :value.sync="vinho.id" :autofocus="true" placeholder="_ _ _ - _ _" @keydown="adicionarHifen" @keydown-enter="procurarVinho"></ui-textbox>-->
          </div>
          <footer>
            <ui-button @click="procurarVinho">Degustar</ui-button>
          </footer>
        </div>

        <div class="vinho-magazine card">
          <div class="card-header card-shadow">
            <h2>Quero me atualizar!</h2>
          </div>
          <div class="card-body">
            <!--<p>Banca digital com a Vinho Magazine online</p>-->
            <p>Para acessar as mais recentes edições da Vinho Magazine na versão online, acesse a nossa banca digital e selecione o exemplar.</p>
          </div>
          <footer>
            <ui-button @click="goTo('http://www.epifanica.com.br/vinhomagazine')">Banca</ui-button>
          </footer>
        </div>
      </aside>

      <aside>
        <div class="video-aula card">
          <div class="card-header card-shadow">
            <h2>Quero aprender mais!</h2>
          </div>
          <div class="card-body">
            <!--<p>Vídeo-aula sobre técnicas de avaliação de vinhos.</p>-->
            <p>Se esta é sua primeira degustação - ou mesmo se quiser recordar - assista a vídeo-aula preparada especialmente para orientar você sobre as técnicas de avaliação de vinhos.</p>
          </div>
          <footer>
            <ui-button v-link="{ name: 'video', params: { id: 'qYN1M9oc8' } }">Assistir</ui-button>
          </footer>
        </div>

        <div class="carta-presidente card">
          <div class="card-header card-shadow">
            <h2>Quero mais instruções!</h2>
          </div>
          <div class="card-body">
            <!--<p>Mensagem de boas vindas do nosso curador.</p>-->
            <p>Para instruções completas sobre o funcionamento do Medalhados Experts Club, leia aqui a mensagem de boas vindas do nosso curador.</p>
          </div>
          <footer>
            <ui-button v-link="{ name: 'carta-do-presidente' }">Ler</ui-button>
          </footer>
        </div>
      </aside>
    </div>

    <div class="alert alert-success">
      <ui-alert type="success" :show="show.success.state" @dismissed="show.success.state = false">
        Esse vinho já foi avaliado! <a v-link="{ name: 'vinho', params: { id: show.success.link } }">Confira aqui</a> o vinho
      </ui-alert>
    </div>

    <div class="alert alert-error">
      <ui-alert type="error" :show="show.error.state" @dismissed="show.error.state = false">{{ show.error.message }}</ui-alert>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        vinho: {
          id: '',
        },
        show: {
          success: {
            link: '',
            state: false,
            message: 'Esse vinho já foi avaliado!'
          },
          error: {
            state: false,
            message: 'Esse vinho não existe, confira o código digitado e tente novamente.'
          }
        }
      }
    },

    route: {
      data ({ to }) {
        this.$dispatch('is-authenticated')
        this.$dispatch('is-admin', this.usuario)
      }
    },

    filters: {
      'stringhing': {
        read: function(val) {

          console.log(val.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"))
//          return val.match(new RegExp('.{1,4}$|.{1,3}', 'g')).join("-");
//          return '$'+val.toFixed(2)
        },
        write: function(val, oldVal) {
          console.log(val.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"))



//          var number = +val.replace(/[^\d.]/g, '')
//          return isNaN(number) ? 0 : parseFloat(number.toFixed(2))
        }
      },
    },

    computed: {
      usuario() {
        return firebase.auth().currentUser
      }
    },

    methods: {
      procurarVinho() {
        var vinhoId = this.vinho.id
        var vinhoIdOnlyNumbers = vinhoId.replace(/[^0-9\.]+/g, '') // Apenas numeros
        var vinhoIdFinal = vinhoIdOnlyNumbers.match(/\d{3}(?=\d{2,3})|\d+/g).join("-")  // Adicione hifem no terceiro

        console.log(vinhoIdFinal)
        var vinhoRef = firebase.database().ref('vinhos/' + vinhoIdFinal)
        var usuarioVinhoRef = firebase.database().ref('usuarios').child(firebase.auth().currentUser.uid).child('vinhos/' + vinhoIdFinal)

        vinhoRef.once('value', (snapshot) => {
          if(!snapshot.val()) {
            return this.show.error.state = true
          } else {
            usuarioVinhoRef.once('value', (snapshot) => {
              if(snapshot.val()) {
                this.show.success.link = snapshot.val().key
                return this.show.success.state = true
              } else {
                return this.$router.go('/ficha/' + vinhoIdFinal)
              }
            })
          }
        })
      },
      format(input, format, sep) {
        var output = "";
        var idx = 0;
        for (var i = 0; i < format.length && idx < input.length; i++) {
          output += input.substr(idx, format[i]);
          if (idx + format[i] < input.length) output += sep;
          idx += format[i];
        }

        output += input.substr(idx);

        return output;
      },
      hifenadd(val) {
        var foo = val.value.replace(/-/g, ""); // remove hyphens
        // You may want to remove all non-digits here
        // var foo = $(this).val().replace(/\D/g, "");

        if (foo.length > 0) {
          foo = this.format(foo, [3, 2, 4, 3, 3], "-");
        }
      },
      goTo(url) {
        location.href = url
      }
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  .degustar-view
    margin-bottom 50px
    .alert-success
      width 450px
    .wrapper
      text-align center
    .card
      display inline-block
      position relative
      width 90%
      color white
      text-align left
      z-index 2
      margin 0 auto
      @media screen and (min-width: $tablet)
        width 390px
        margin auto
      .card-body
        background white
        color $textColor
        p
          margin 0
      .ui-textbox-input
        text-align left
        color white
        font-size 4em
        height 100px
      h2
        font-size 2rem
        @media screen and (min-width: $tablet)
          font-size 3rem
      p
        font-size .9em
        line-height 1.5em
        margin 20px 0
    .main, aside
      display inline-block
      vertical-align top
    .main
      background url("/static/img/cellar.jpg")
      background-size cover
      padding 70px 0 0 0
      margin 0 0 10px 0
      @media screen and (min-width: $tablet)
        margin 0
      .card-body
        background transparent
        padding-bottom 13px
        flex-direction column
        h2, p
          color white
        h2
          font-size 2em
          margin-bottom 20px
        p
          margin 0
    .video-aula
      .card-header
        background url("/static/img/wine_camera.jpg") center
        background-size 100% auto
        /*background-size cover*/
        /*padding 70px 30px 30px 30px*/
        padding 91px 15px 30px 20px
    .carta-presidente
      margin 10px 0 0 0
      .card-header
        background url("/static/img/writing-a-letter.jpg") center
        background-size cover
        padding 91px 15px 30px 20px
        h2
          font-size 1.5em
    .vinho-magazine
      width 500px
      margin-top 10px
      .card-header
        background url("/static/img/vinhomagazine.jpg") bottom center
        background-size cover
        padding 43px 30px 10px 30px
    aside
      width 90%
      margin 0 auto
      @media screen and (min-width: $tablet)
        width auto
        margin-left 5px
      .card
        float left
        clear both
        width 100%
        @media screen and (min-width: $tablet)
          width 350px
        h2
          font-size 1.5rem
</style>