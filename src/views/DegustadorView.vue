<template>
  <div>
    <!--<div v-if="$loadingRouteData"><ui-progress-circular type="indeterminate"></ui-progress-circular></div>-->

    <div class="main-card degustador">
      <header>
        <figure class="profile-pic" :style="{ backgroundImage: 'url(' + usuario.photoURL + ')' }"></figure>
        <aside>
          <h2>{{ usuario.displayName }}</h2>
          <h3>{{ totalAvaliados }} Vinhos avaliados</h3>
        </aside>
      </header>

      <article class="main">
        <ul class="todos-vinhos">
          <li class="card has-background" v-for="vinho in vinhos" :style="{ backgroundImage: 'url(' + backgroundType(vinho[0].tipo) + ')' }">
            <!--<div :style="{ backgroundImage: 'url(' + backgroundType('Tinto') + ')' }"></div>-->
            <!--<h2>{{ vinho.length }}</h2>-->
            <h2>{{ vinho | average }}</h2>
            <p>{{ vinho[0].tipo }}</p>
            <span>Nota Média</span>
          </li>
        </ul>

        <grafico-notas></grafico-notas>
      </article>

      <!--<ui-alert>Atenção! você foi selecionado!</ui-alert>-->
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import GraficoNotas from '../components/GraficoNotas.vue'

  export default{
    data() {
      return {
        usuario: {},
        vinhos: [],
        totalAvaliados: 0
      }
    },

    route: {
      data ({ to }) {
        document.title = 'Medalhados - Desgustador'

        Promise.all([
          this.fetchDetalhesUsuario()
        ]).then(() => {
          this.organizeData()
        })
      }
    },

    computed: {
      usuario() {
        return firebase.auth().currentUser
      }
    },

    filters: {
      average(array) {
        return _.meanBy(array, 'nota');
      }
    },

    components: {
      GraficoNotas
    },

    ready: function () {
      console.log(this.backgroundType('Tinto'))
    },

    methods: {
      backgroundType(vinhoTipo) {
        switch (vinhoTipo) {
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
            return 'https://firebasestorage.googleapis.com/v0/b/medalhados.appspot.com/o/rose-pour.jpg?alt=media&token=d7b56c4d-232f-4856-9ce1-a12457a03ac8'
            break
        }
      },
      fetchDetalhesUsuario() {
        var self = this
        var usuarioRef = firebase.database().ref('usuarios').child(this.usuario.uid).child('vinhos')

        return usuarioRef.once("value", (snapshot) => {
          self.vinhos = snapshot.val()

//          snapshot.forEach(function(childSnapshot) {
//            var childData = childSnapshot.val();
//
//            console.log(childData)
//          });
        })
      },
      organizeData() {
        function valuesToArray(obj) {
          return Object.keys(obj).map(function (key) { return obj[key]; });
        }

        this.vinhos = valuesToArray(this.vinhos)
        this.totalAvaliados = this.vinhos.length

        this.vinhos = _.groupBy(this.vinhos, 'tipo')

        console.log(this.vinhos)
      }
    }
  }
</script>

<style lang="stylus">
  .degustador
    header
      background #800020
      .profile-pic, aside
        display inline-block
        vertical-align middle
      .profile-pic
        background-size cover
        background-position center top
        width 80px
        height 80px
        border-radius 50%
      aside
        color white
        padding-left 10px
    .todos-vinhos
      display flex
      flex-wrap wrap
      li
        background-size cover
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