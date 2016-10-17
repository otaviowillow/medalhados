<template>
  <div class="main">
    <object class="medal" :data="medalha"></object> <h3>{{ nota }}</h3>
    <h2>{{ usuario.photoUrl }}</h2>
  </div>
  <!--<div class="main" v-else>-->
    <!--<ui-button type="flat" icon="check" v-link="{ name: 'ficha', params: { id: vinho.key } }">Avaliar</ui-button>-->
    <!--&lt;!&ndash;<a v-link="{ name: 'ficha', params: { id: vinho.key } }">Avaliar</a>&ndash;&gt;-->
  <!--</div>-->
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

          console.log(vinho)

          if(self.vinho.key == vinho.vinho_id) {
            console.log(vinho)
            self.avaliado = true
            self.medalha = vinho.medalha
            self.nota = vinho.nota
          }
        });
      }
    }
  }
</script>

<style lang="stylus">

</style>