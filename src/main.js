import Vue from 'vue'
import Keen from 'keen-ui'
import VueCharts from 'vue-charts'
import Router from 'vue-router'
import VueFire from "vuefire";
import { domain, fromNow, toString, toInt } from './filters'
import App from './components/App.vue'
import DegustadorView from './views/DegustadorView.vue'
import FichasView from './views/FichasView.vue'
import RevistaView from './views/RevistaView.vue'
import VideoView from './views/VideoView.vue'
import VinhosView from './views/VinhosView.vue'
import LoginView from './views/LoginView.vue'
import * as firebase from 'firebase'

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
    component: DegustadorView,
    auth: true
  },
  '/fichas': {
    component: FichasView,
    auth: true
  },
  '/revista': {
    component: RevistaView,
    auth: true
  },
  '/video': {
    component: VideoView,
    auth: true
  },
  '/vinhos': {
    component: VinhosView,
    auth: true
  },
  '/login': {
    component: LoginView,
    auth: false
  },
})

var config = {
  apiKey: "AIzaSyC8Blps39GwdxP57vPaok1135Pbr9ROMbA",
  authDomain: "medalhados.firebaseapp.com",
  databaseURL: "https://medalhados.firebaseio.com",
  storageBucket: "medalhados.appspot.com",
};

firebase.initializeApp(config);

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
