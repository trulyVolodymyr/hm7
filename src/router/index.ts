import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routes'

export * from './route-names'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
