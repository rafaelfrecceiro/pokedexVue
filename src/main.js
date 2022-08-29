import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {log, error} from './helpers/logger'

Vue.config.productionTip = false

const plugin = {
  install () {
    Vue.helpers = log
    Vue.prototype.$log = log

    Vue.error = error
    Vue.prototype.$error = error
  }
}

Vue.use(plugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
