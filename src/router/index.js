import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '@/layout/main.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Page',
    redirect: '/main',
    component: Page
  },
  {
    path: '/main',
    name: 'main',
    component: Page
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login/index'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  }
]


const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
