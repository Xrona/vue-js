import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

export const routerProvider = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/user/:id',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/UserPage.vue'),
      beforeEnter: (to, from, next) => {
        if (Number.isInteger(Number(to.params.id))) {
          return next()
        }
        next('/404')
      }
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/pages/NotFound.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})
