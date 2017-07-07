import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index'
import EditDetail from '@/components/editDetail/editDetail'
import Detail from '@/components/detail/detail'
import SelectAudit from '@/components/SelectAudit/SelectedAudit'
import BatchAudit from '@/components/BatchAudit/BatchAudit'
import Home from '@/components/home'
import SecondChonse from '@/components/secondChonse'
import TwoRemarks from '@/components/TwoRemarks/twoRemarks'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/secondChonse',
      name: 'SecondChonse',
      component: SecondChonse
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
      path: '/twoRemarks',
      name: 'TwoRemarks',
      component: TwoRemarks
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
