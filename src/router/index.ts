import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import loadcaChe from '@/utilt/loadcaChe'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: 'home' },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue')
  }
]

const roter = createRouter({
  routes,
  history: createWebHashHistory()
})

roter.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = loadcaChe.getCaChe('token')
    if (!token) {
      return '/login'
    }
  }
})

export default roter
