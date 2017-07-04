import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index'
import EditDetail from '@/components/editDetail/editDetail'
import Detail from '@/components/detail/detail'

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
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
