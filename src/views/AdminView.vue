<template>
  <div class="admin">
    <ul>
      <li class="card main card-shadow usuarios">
        <div class="card-body">
          <h2>Usuários</h2>
        </div>
        <footer>
          <ui-button v-link="{ name: 'listar-usuarios' }">Editar</ui-button>
        </footer>
      </li>

      <li class="card main card-shadow vinhos">
        <div class="card-body">
          <h2>Vinhos</h2>
        </div>
        <footer>
          <ui-button v-link="{ name: 'listar-vinhos' }">Editar</ui-button>
        </footer>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus">
  .admin
    ul
      text-align center
      margin 50px 0
    .card
      display inline-block
      width 300px
      margin 0 10px
    .usuarios
      background #673AB7
    .vinhos
      background #4CAF50
    h2
      color white
      padding 150px 0 10px 0
</style>
