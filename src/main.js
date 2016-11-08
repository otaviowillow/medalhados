import Vue from 'vue'
import Keen from 'keen-ui'
import VueCharts from 'vue-charts'
import Router from 'vue-router'
import Resource from 'vue-resource'
import { domain, fromNow, toString, toInt } from './filters'
import App from './components/App.vue'
import DegustadorView from './views/DegustadorView.vue'
import FichaView from './views/FichaView.vue'
import RevistaView from './views/RevistaView.vue'
import VideoView from './views/VideoView.vue'
import VinhosView from './views/VinhosView.vue'
import VinhoView from './views/VinhoView.vue'
import LoginView from './views/LoginView.vue'
import SignUpView from './views/SignUpView.vue'
import HomeView from './views/HomeView.vue'
import FichasView from './views/FichasView.vue'
import CartaView from './views/CartaView.vue'
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
export var router = new Router({
  // hashbang: false,
  // history: true,
  // saveScrollPosition: true
})

router.map({
  '/': {
    component: HomeView,
    auth: false
  },
  '/degustador': {
    name: 'degustador',
    component: DegustadorView,
    auth: true
  },

  // '/fichas': {
  //   name: 'fichas',
  //   component: FichasView,
  //   showFichas: true,
  //   auth: true
  // },
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
  '/vinho/:id': {
    name: 'vinho',
    component: VinhoView,
    auth: true
  },
  '/vinhos': {
    name: 'vinhos',
    component: VinhosView,
    auth: true
  },
  '/fichas': {
    name: 'fichas',
    component: FichasView,
    auth: true
  },
  '/ficha/:id': {
    name: 'ficha',
    component: FichaView,
    auth: true
  },
  '/adicionar-vinho': {
    name: 'adicionar-vinho',
    component: AdicionarVinhosView,
    auth: true
  },
  '/carta-do-presidente': {
    name: 'carta-do-presidente',
    component: CartaView,
    auth: true
  },
  '/login': {
    name: 'login',
    component: LoginView,
    auth: false
  },
  '/registrar': {
    name: 'registrar',
    component: SignUpView,
    auth: false
  },
  '/home': {
    name: 'home',
    component: HomeView,
    auth: false
  },
  '/logout': {
    component: function (resolve) {
      var self = this

      firebase.auth().signOut().then(() => {
        window.location.reload()
      })
    }
  },
})

router.beforeEach(function (transition) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (transition.to.auth && !user) {
      window.scrollTo(0, 0)
      transition.redirect('/login')
    } else if (transition.to.path == '/' && user || transition.to.name == 'login' && user) {
      window.scrollTo(0, 0)
      transition.redirect('/fichas')
    } else if (transition.to.path == '/logout' && !user) {
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
