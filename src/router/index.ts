import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign-up',
      name: 'Register',
      component: Register
    },
    {
      path: '/sign-in',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

export default router
