import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index'
import EditDetail from '@/components/editDetail/editDetail'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/edit',
      name: 'editDetail',
      component: EditDetail
    }
  ]
})
