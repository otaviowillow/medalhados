<template>
  <div class="nota-header">
    <aside></aside>
    <ul>
      <li v-for="carinha in carinhas">
        <img :src="carinha">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
//        carinhas: ['😀','🙂','😐','😒','😩']
        carinhas: [
          '../static/img/face-1.png',
          '../static/img/face-2.png',
          '../static/img/face-3.png',
          '../static/img/face-4.png',
          '../static/img/face-5.png'
        ]
      }
    }
  }
</script>

<style lang="stylus">
  .nota-header
    display table
    width 95%
    padding 10px 2.5%
    aside
      display table-cell
      white-space nowrap
      vertical-align middle
      width 20%
    li
      display inline-block
      font-size 2.5em
      width 20%
      img
        height 35px
</style>