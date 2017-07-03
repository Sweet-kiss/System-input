import Vue from 'vue'
import router from 'vue-router'
import Index from '@/components/index'
import EditDetail from '@/components/editDetail/editDetail'
// import Second from '@/components/second/second'

Vue.use(router)

export default new router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index ,
    },
    {
      path: '/edit',
      name: 'editDetail',
      component: EditDetail
    }
  ]
})

