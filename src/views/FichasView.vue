<template>
  <div class="degustar-view">
    <div class="wrapper">
      <div class="card main card-shadow">
        <div class="card-body">
          <h2>Sua Ficha</h2>
          <p>digite no campo marcado o código da amostra que irá degustar e acesse a ficha oficial de avaliação.</p>
          <ui-textbox name="vinhoId" :value.sync="vinho.id" :autofocus="true" placeholder="_ _ _ - _ _" @keydown-enter="procurarVinho"></ui-textbox>
        </div>
      </div>

      <aside>
        <div class="video-aula card">
          <div class="card-header card-shadow">
            <h2>Vídeo aula</h2>
          </div>
          <div class="card-body">
            <p>Se esta é sua primeira degustação - ou mesmo se quiser recordar - assista a video-aula preparada especialmente para orientá-lo sobre as técnicas de avaliação de vinhos</p>
          </div>
          <footer>
            <ui-button v-link="{ name: 'video', params: { id: 'qYN1M9oc8' } }">Assistir</ui-button>
          </footer>
        </div>

        <div class="carta-presidente card">
          <div class="card-header card-shadow">
            <h2>Carta do Presidente</h2>
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

    filters: {
      'stringThing': {
        read: function(val) {
//          return val.match(new RegExp('.{1,4}$|.{1,3}', 'g')).join("-");
//          return '$'+val.toFixed(2)
        },
        write: function(val, oldVal) {
//          var number = +val.replace(/[^\d.]/g, '')
//          return isNaN(number) ? 0 : parseFloat(number.toFixed(2))
        }
      }
    },

    methods: {
      procurarVinho() {
        var vinhoRef = firebase.database().ref('vinhos/' + this.vinho.id)
        var usuarioVinhoRef = firebase.database().ref('usuarios').child(firebase.auth().currentUser.uid).child('vinhos/' + this.vinho.id)

        vinhoRef.once('value', (snapshot) => {
          if(!snapshot.val()) {
            return this.show.error.state = true
          } else {
            usuarioVinhoRef.once('value', (snapshot) => {
              if(snapshot.val()) {
                this.show.success.link = snapshot.val().key
                return this.show.success.state = true
              } else {
                return this.$router.go('/ficha/' + this.vinho.id)
              }
            })
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  .degustar-view
    .alert-success
      width 450px
    .wrapper
      text-align center
    .card
      display inline-block
      position relative
      width 390px
      color white
      text-align left
      z-index 2
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
        font-size 3.5rem
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
      padding 150px 30px 60px 30px
      .card-body
        background transparent
        h2, p
          color white
        p
          margin 15px 0 30px 0
    .video-aula
      .card-header
        background url("/static/img/wine_camera.jpg") center
        background-size 100% auto
        /*background-size cover*/
        padding 70px 30px 30px 30px
    .carta-presidente
      background url("/static/img/writing-a-letter.jpg") center
      background-size cover
      margin 10px 0 0 0
      .card-header
        padding 43px 30px 10px 30px
        h2
          font-size 2em
    aside
      margin-left 5px
      .card
        float left
        clear both
        width 350px
        h2
          font-size 2.5rem
</style>