import { defineNuxtRouteMiddleware, navigateTo, useNuxtApp } from '#app'

export default defineNuxtRouteMiddleware((to) => {
  const path = to.path.toLowerCase()
  
  // praleisti middleware login puslapiui
  if (path === '/admin/login') {
    return
  }

  // admin route'ams, patikrinti autentikacija
  if (path.startsWith('/admin')) {
    if (process.server) {
      return navigateTo('/admin/login')
    }

    const token = localStorage.getItem('adminToken')
    if (token !== 'admin-authenticated') {
      return navigateTo('/admin/login')
    }
  }
}) 