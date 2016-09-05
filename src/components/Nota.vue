<template>
  <div class="nota-individual">
    <aside>
      <h4>{{ subcategoria }}</h4> <i class="material-icons">help_outline</i>
    </aside>
    <ui-radio-group :options="notas | toString" :value.sync="selecionada | toString" :name="radioGroupName"></ui-radio-group>
  </div>
</template>

<script>
  export default{
    props: {
      categoria: '',
      subcategoria: '',
      notas: [],
      selecionada: '',
    },

    computed: {
      radioGroupName() {
        return this.categoria + this.subcategoria
      }
    }
  }
</script>

<style lang="stylus">
  .nota-individual
    display table
    width 100%
    aside, .ui-radio-group
      display table-cell
    aside
      white-space nowrap
      width 30%
      h4, i
        display inline
      i
        padding 0 10px
    .ui-radio-group
      width 80%
      .ui-radio-border
        width 16px
        height 16px
</style>