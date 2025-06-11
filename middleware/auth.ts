import { defineNuxtRouteMiddleware, navigateTo } from '#app'
import { useAuth } from '../composables/auth'

export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth()
  const path = to.path.toLowerCase()

  // Handle login page access
  if (path === '/admin/login') {
    // If already authenticated, redirect to admin
    if (isAuthenticated.value) {
      return navigateTo('/admin')
    }
    return
  }

  // Handle admin routes
  if (path.startsWith('/admin')) {
    if (!isAuthenticated.value) {
      return navigateTo('/admin/login')
    }
  }
})