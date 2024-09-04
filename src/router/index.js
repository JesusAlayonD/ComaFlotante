import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import dc from '../views/dc.vue'
import cd from '../views/cd.vue'
import infodc from '../views/infodc.vue'
import infocd from '../views/infocd.vue'
import desarrollo from '../views/desarrollo.vue'

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
    },
    {
      path: '/infodc',
      name: 'infodc',
      component: infodc
    },
    {
      path: '/infocd',
      name: 'infocd',
      component: infocd
    },
    {
      path: '/desarrollo',
      name: 'desarrollo',
      component: desarrollo
    }
  ]
})

export default router
