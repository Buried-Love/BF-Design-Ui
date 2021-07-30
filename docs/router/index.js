import Vue from 'vue'
import VueRouter from 'vue-router'
import docRouter from './docs-router'
import projectRouter from './project-router'
// 链接两个路由数组
const routerList = projectRouter.concat(docRouter)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/zh-CN/index',
    },
    {
      path: '/zh-CN/index',
      component: () => import('../views/home/index.vue'),
    },
    ...routerList,
  ],
})

export default router
