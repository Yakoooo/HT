import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import loadcaChe from '@/utilt/loadcaChe'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: 'main' },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/home.vue'),
    children: []
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/notFound/notFound.vue')
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
