<template>
  <div class="vinhos-view">
    <div v-if="!$loadingRouteData">
      <ul>
        <li v-for="vinho in vinhos" :class="vinho.avaliado ? 'avaliado' : ''">
          <vinho :vinho="vinho"></vinho>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import Vinho from '../components/Vinho.vue'

  var config = {
    apiKey: "AIzaSyC8Blps39GwdxP57vPaok1135Pbr9ROMbA",
    authDomain: "medalhados.firebaseapp.com",
    databaseURL: "https://medalhados.firebaseio.com",
    storageBucket: "medalhados.appspot.com",
  };

  firebase.initializeApp(config);

  var itemsRef = firebase.database().ref('vinhos');

  export default {
    name: 'VinhosView',

    firebase: {
      vinhos: itemsRef.limitToLast(25)
    },

    components: {
      Vinho
    },
  }
</script>

<style lang="stylus">
  .vinhos-view
    .nav-buttons
      width 100%
      text-align right
    .ui-toolbar
      position absolute
      top 0
      left 0
      width 100%
      *
        text-shadow none
    ul
      display flex
      flex-wrap wrap
      justify-content space-around
      li
        display flex
        flex-flow column
        justify-content flex-end
        background-color white
        flex 0 0 300px
        height 350px
</style>