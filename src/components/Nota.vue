<template>
  <div class="nota-individual">
    <aside>
      <h4>{{ subcategoria }}</h4> <i class="material-icons">help_outline</i>
    </aside>
    <ui-radio-group
            :options="notas | toString"
            :value.sync="selecionada | toString"
            :name="radioGroupName"></ui-radio-group>
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
      },
    }
  }
</script>

<style lang="stylus">
  .nota-individual
    display table
    width 95%
    padding 0 2.5%
    aside, .ui-radio-group
      display table-cell
    aside
      white-space nowrap
      vertical-align middle
      width 20%
      h4, i
        display inline
        vertical-align middle
      i
        padding 0 10px
    .ui-radio-group-options-wrapper
      display block
      .ui-radio
        display inline-block
        width 19.5%
        height 100%
        margin-left 0
        padding 8px 0
        &:last-child
          float right
      .ui-radio-input-wrapper, .ui-radio-label-text
        display inline-block
        vertical-align text-bottom
      .ui-radio-input-wrapper
        margin-top 3px
      .ui-radio-border
        width 16px
        height 16px
</style>