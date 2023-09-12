import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import DocumentView from '../views/DocumentView.vue'
import SelectSigningMethod from '../views/SelectSigningMethod.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/document',
      name: 'document',
      component: DocumentView

    },
    {
      path: '/signing-method',
      name: 'SelectSigningMethod',
      component: SelectSigningMethod

    }
  ]
})

export default router
