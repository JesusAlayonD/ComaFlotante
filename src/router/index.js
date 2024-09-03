import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/home.vue'
import dc from '../views/dc/dc.vue'
import cd from '../views/cd/cd.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dc',
      name: 'dc',
      component: dc
    },
    {
      path: '/cd',
      name: 'cd',
      component: cd
    }
  ]
})

export default router
