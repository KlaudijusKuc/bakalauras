import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to) => {
  const path = to.path.toLowerCase()
  
  // tik login page
  if (path !== '/admin/login') {
    return
  }

  // serveryje leisti prieiga prie login page
  if (process.server) {
    return
  }

  // patikrinti, ar klientas jau autentifikuotas
  const token = localStorage.getItem('adminToken')
  if (token === 'admin-authenticated') {
    return navigateTo('/admin')
  }
}) 