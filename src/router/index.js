import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index'
import EditDetail from '@/components/editDetail/editDetail'
import Detail from '@/components/detail/detail'
import SelectAudit from '@/components/SelectAudit/SelectedAudit'
import BatchAudit from '@/components/BatchAudit/BatchAudit'

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
    },
    {
      path: '/SelectAudit',
      name: 'SelectAudit',
      component: SelectAudit
    },
    {
      path: '/BatchAudit',
      name: 'BatchAudit',
      component: BatchAudit
    }  
  ]
})
