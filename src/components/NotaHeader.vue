<template>
  <div class="nota-header">
    <aside></aside>
    <ul>
      <li v-for="carinha in carinhas">
        {{ carinha }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        carinhas: ['😀','🙂','😐','😒','😩']
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
</style>