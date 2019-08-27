import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/login',
  //   name: 'login',
  //   hidden: true
  // },
  {
    path: '/login',
    component: () => import('@/views/login'),
    name: '登录NxAdmin',
    hidden: true
  }
]
export default new Router({
  routes: constantRouterMap
})
