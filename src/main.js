import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Index from '@/components/index'
import EditDetail from '@/components/editDetail/editDetail'
import '@/assets/common/reset.css'

Vue.use(VRouter)

let router = new VRouter({
  routes: [
    {
    path: '/',
    component: Index,
    redirect: '/index',
    },
    {
      path: '/edit',
      name: 'editDetail',
      component: EditDetail
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
