<template>
  <div class="main-wrapper">

    <main-header :admin="admin" :authenticated="authenticated"></main-header>

    <router-view
            class="view"
            keep-alive
            transition="fade"
            transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
  import UserBar from '../components/UserBar.vue'
  import MainHeader from '../components/MainHeader.vue'

  export default {
    data() {
      return {
        admin: false,
        selected: '',
        authenticated: false,
      }
    },
    events: {
      'is-authenticated' : function (user) {
        this.authenticated = true

        if(user) {
          var usr = user.uid
          var userRef = firebase.database().ref('usuarios').child(usr)

          userRef.on('value', (snapshot) => {
            console.log(snapshot.val())
            this.usuario = snapshot.val()
          })
        }
      },
      'is-admin' : function (user) {
        console.log(user)
        if(user) {
          var usr = user.uid
          var userRef = firebase.database().ref('usuarios').child(usr)

          userRef.on('value', (snapshot) => {
            console.log(snapshot.val())
            this.admin = snapshot.val().isAdmin
          })
        }
      }
    },
    components: {
      UserBar,
      MainHeader
    }
  }
</script>

<style lang="stylus">
  @import "../variables.styl"

  html, body
    overflow-x scroll

  body
    padding 0
    margin 0
    font-family 'Roboto', sans-serif
    font-weight 300
  .ui-tabs-body
    display none
  h2
    font-size 2em
  h3
    font-size 1.4em
  .ui-button-flat
    &:hover
      background transparent !important


  .alert
    background white
    position fixed
    bottom 0
    left 50%
    margin-bottom 12px
    z-index 10
    .ui-alert-toggle-transition
      margin-bottom 0
  .alert-error
    width 90%
    margin-left 3%
    @media screen and (min-width: $tablet)
      width 650px
      margin-left -325px
  .alert-success
    width 90%
    margin-left 3%
    @media screen and (min-width: $tablet)
      width 350px
      margin-left -150px
  .main-card
    background white
    width 90%
    margin 0 auto
    box-shadow 1px 1px 3px rgba(0,0,0,.3)
    header
      width 90%
      padding 5% 5% 2.5% 5%
  .card
    box-shadow 1px 1px 3px rgba(0,0,0,.3)
    .card-body
      width 90%
      padding 5%
      padding-bottom 0
    footer
      background white
      display flex
      justify-content flex-end
      align-items center
      width 90%
      padding 5%
  .card-shadow
    position relative
    *
      position relative
      z-index 2
    &:before
      content ''
      background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.6));
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index 1
  .has-background
    position relative
    *
      position relative
      z-index 2
      color white
      text-shadow 1px 1px 1px rgba(0,0,0,.7)
    &:before
      content ''
      background linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.4));
      position absolute
      bottom 0
      left 0
      width 100%
      height 50%
      z-index 1

  //Animations
  .fade-transition
    transition opacity .3s ease
  .fade-enter, .fade-leave
    opacity 0

  .main-wrapper
    &:before
      content ''
      background $mainColor
      position absolute
      top 0
      left 0
      height 250px
      width 100%
      z-index -1
</style>