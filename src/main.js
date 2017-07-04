import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import '@/assets/common/reset.css'

Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
