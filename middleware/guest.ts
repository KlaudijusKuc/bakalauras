import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to) => {
  const path = to.path.toLowerCase()
  
  // Only handle login page
  if (path !== '/admin/login') {
    return
  }

  // On server, allow access to login page
  if (process.server) {
    return
  }

  // On client, check if already authenticated
  const token = localStorage.getItem('adminToken')
  if (token === 'admin-authenticated') {
    return navigateTo('/admin')
  }
}) 