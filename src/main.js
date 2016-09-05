import Vue from 'vue'
import Keen from 'keen-ui'
import VueCharts from 'vue-charts'
import Router from 'vue-router'
import { domain, fromNow, toString, toInt } from './filters'
import App from './components/App.vue'
import DegustadorView from './views/DegustadorView.vue'
import FichasView from './views/FichasView.vue'
import RevistaView from './views/RevistaView.vue'
import VideoView from './views/VideoView.vue'
import VinhosView from './views/VinhosView.vue'

Vue.use(VueCharts)
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
    component: DegustadorView
  },
  '/fichas': {
    component: FichasView
  },
  '/revista': {
    component: RevistaView
  },
  '/video': {
    component: VideoView
  },
  '/vinhos': {
    component: VinhosView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/fichas'
})

router.start(App, '#app')
