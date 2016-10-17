import Vue from 'vue'
import Keen from 'keen-ui'
import VueCharts from 'vue-charts'
import Router from 'vue-router'
import Resource from 'vue-resource'
import { domain, fromNow, toString, toInt } from './filters'
import App from './components/App.vue'
import DegustadorView from './views/DegustadorView.vue'
import FichasView from './views/FichasView.vue'
import FichaView from './views/FichaView.vue'
import RevistaView from './views/RevistaView.vue'
import VideoView from './views/VideoView.vue'
import VinhosView from './views/VinhosView.vue'
import LoginView from './views/LoginView.vue'
import HomeView from './views/HomeView.vue'
import AdicionarVinhosView from './views/AdicionarVinhosView.vue'
import * as firebase from 'firebase'
import VueFire from "vuefire";

Vue.use(Resource)
Vue.use(VueCharts)
Vue.use(VueFire)
Vue.use(Keen)
Vue.use(Router)

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)
Vue.filter('toString', toString)
Vue.filter('toInt', toInt)

// routing
var router = new Router()

router.map({
  '/': {
    component: FichasView,
    auth: true
  },
  '/degustador': {
    name: 'degustador',
    component: DegustadorView,
    auth: true
  },

  '/fichas': {
    name: 'fichas',
    component: FichasView,
    showFichas: true,
    auth: true
  },
  '/revista': {
    name: 'revista',
    component: RevistaView,
    auth: true
  },
  '/video/:id': {
    name: 'video',
    component: VideoView,
    auth: true
  },
  '/vinhos': {
    name: 'vinhos',
    component: VinhosView,
    auth: true
  },
  '/adicionar-vinho': {
    name: 'adicionar-vinho',
    component: AdicionarVinhosView,
    auth: true
  },
  '/login': {
    name: 'login',
    component: LoginView,
    auth: false
  },
  '/home': {
    name: 'home',
    component: HomeView,
    auth: false
  },
})

router.beforeEach(function (transition) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (transition.to.auth && !user) {
      window.scrollTo(0, 0)
      transition.redirect('/login')
    } else if (transition.to.name == 'home' && user || transition.to.name == 'login' && user) {
      window.scrollTo(0, 0)
      transition.redirect('/')
    } else {
      window.scrollTo(0, 0)
      transition.next()
    }
  })
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
