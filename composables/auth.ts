import { ref } from 'vue'

export const useAuth = () => {
  const isAuthenticated = ref(false)

  // check auth status
  const checkAuth = () => {
    if (process.client) {
      const token = localStorage.getItem('adminToken')
      isAuthenticated.value = token === 'admin-authenticated'
    }
    return isAuthenticated.value
  }

  // initialize auth state
  if (process.client) {
    checkAuth()
  }

  return {
    isAuthenticated,
    checkAuth
  }
} 