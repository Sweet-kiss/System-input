import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import '@/assets/common/reset.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
