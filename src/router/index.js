import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GroupCell from '@/components/GroupCell'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/GroupCell',
      name: 'GroupCell',
      component: GroupCell
    }
  ]
})
