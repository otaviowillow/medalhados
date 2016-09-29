import Vue from 'vue'
import Keen from 'keen-ui'
import VueCharts from 'vue-charts'
import Router from 'vue-router'
import Resource from 'vue-resource'
import { domain, fromNow, toString, toInt } from './filters'
import App from './components/App.vue'
import DegustadorView from './views/DegustadorView.vue'
import FichasView from './views/FichasView.vue'
import RevistaView from './views/RevistaView.vue'
import VideoView from './views/VideoView.vue'
import VinhosView from './views/VinhosView.vue'
import LoginView from './views/LoginView.vue'
import AdicionarVinhosView from './views/AdicionarVinhosView.vue'
import CartaDoPresidenteView from './views/CartaDoPresidenteView.vue'
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
  '/degustador': {
    name: 'degustador',
    component: DegustadorView,
    auth: true
  },
  '/fichas': {
    name: 'fichas',
    component: FichasView,
    auth: true
  },
  '/ficha/:id': {
    name: 'ficha',
    component: FichasView,
    auth: true
  },
  '/revista': {
    name: 'revista',
    component: RevistaView,
    auth: true
  },
  '/video': {
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
  '/carta-do-presidente': {
    name: 'carta-do-presidente',
    component: CartaDoPresidenteView,
    auth: true
  },
  '/login': {
    name: 'login',
    component: LoginView,
    auth: false
  },
})

// var config = {
//   apiKey: "AIzaSyC8Blps39GwdxP57vPaok1135Pbr9ROMbA",
//   authDomain: "medalhados.firebaseapp.com",
//   databaseURL: "https://medalhados.firebaseio.com",
//   storageBucket: "medalhados.appspot.com",
// };
//
// firebase.initializeApp(config);

router.beforeEach(function (transition) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (transition.to.auth && !user) {
      window.scrollTo(0, 0)
      transition.redirect('/login')
    } else {
      window.scrollTo(0, 0)
      transition.next()
    }
  });
})

router.redirect({
  '*': '/fichas'
})

router.start(App, '#app')
