<template>
  <div class="upload-imagem-usuario">
    <!--<figure v-if="usuario.photoURL" class="profile-pic" :style="{ backgroundImage: 'url(' + usuario.photoURL + ')' }"></figure>-->

    <div class="upload-image">
      <input class="upload-file" type="file" @change="uploadFile($event)">
      <div class="background-upload" :style="{ backgroundImage: 'url(' + photoUrl + ')' }"></div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      usuario: {}
    },

    data() {
      return {
        photoUrl: ''
      }
    },

    ready: function() {
      this.photoUrl = this.usuario.photoURL
    },
//    computed: {
//      photoUrl() {
//        return this.usuario.photoURL
//      }
//    },

    methods: {
      uploadFile(event) {
        var self = this
        var file = event.currentTarget

        var storageRef = firebase.storage().ref();

        if (file.files.length > 0) {
          for (var i = 0; i < file.files.length; i++) {
            var vinhoRef = storageRef.child(file.files[i].name);

            vinhoRef.put(file.files[i]).then(function(snapshot) {
              self.usuario.updateProfile({
                photoURL: snapshot.downloadURL
              })

              self.$set('photoUrl', snapshot.downloadURL)
            });
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
  .upload-imagem-usuario
    display inline-block
    vertical-align middle
    width 80px
    height 80px
    .upload-image
      background url("/static/img/no-avatar.jpg")
      background-size cover
      background-position center top
      position relative
      width 100%
      height 100%
      border-radius 50%
      z-index 3
      overflow hidden
      cursor pointer
    .upload-file, .background-upload
      background-size cover
      background-position center top
      position absolute
      width 100%
      height 100%
      left 0
      top 0
      opacity 0
      z-index 2
      cursor pointer
    .background-upload
      opacity 1
      z-index 1
</style>