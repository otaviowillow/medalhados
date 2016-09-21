<template>
  <div class="main" v-if="avaliado">
    <object class="medal" data="/static/img/gold_medal.svg"></object>
    <h3>{{ nota }}</h3>
    <h2>{{ usuario.photoUrl }}</h2>
  </div>
  <div class="main" v-else>
    <a v-link="{ name: 'ficha', params: { id: vinho.key } }">Avaliar</a>
  </div>
</template>

<script>
  export default {
    props: {
      vinho: {},
      usuario: {}
    },

    data() {
      return {
        usuarioVinhos: [],
        avaliado: false
      }
    },
    ready: function () {
      this.usuarioVinhos = firebase.database().ref('usuarios/' + this.usuario.uid + '/vinhos')

      this.checarAvaliados()
    },
    methods: {
      checarAvaliados() {
        var self = this

        this.usuarioVinhos.orderByChild("avaliado").equalTo(true).on("child_added", function(snapshot) {
          var vinho = snapshot.val()
          if(self.vinho.key == vinho.vinho_id) {
            self.avaliado = true
            self.nota = vinho.nota
          }
        });
      }
    }
  }
</script>

<style lang="stylus">

</style>