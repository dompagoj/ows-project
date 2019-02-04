import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'
import { router } from './router'
import store from './store'

// tslint:disable-next-line:no-submodule-imports
import 'nes.css/css/nes.min.css'
import './global.scss'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    small: 1007,
    full: Infinity,
  }
})

Vue.directive('hide', {
  inserted(el, binding) {
    if (binding.value) {
      el.style.visibility = 'hidden'
    }
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
