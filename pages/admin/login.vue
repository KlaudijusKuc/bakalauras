<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { LockClosedIcon } from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'login',
  middleware: ['auth']
})

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

// patikrinti ar prisijungta
onMounted(() => {
  const token = localStorage.getItem('adminToken')
  if (token === 'admin-authenticated') {
    navigateTo('/admin')
  }
})

const handleLogin = async () => {
  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value
      }
    })

    if (response.success) {
      localStorage.setItem('adminToken', 'admin-authenticated')
      await navigateTo('/admin')
    }
  } catch (e: any) {
    error.value = e.data?.message || 'Neteisingi prisijungimo duomenys'
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-4">
    <div class="w-full max-w-md">
      <!-- logo ir pavadinimas -->
      <div class="text-center mb-6 md:mb-8">
        <div class="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-3 md:mb-4">
          <LockClosedIcon class="w-7 h-7 md:w-8 md:h-8 text-white" />
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white">Prisijungimas</h2>
        <p class="mt-2 text-sm md:text-base text-gray-400">Prisijunkite prie valdymo skydelio</p>
      </div>

      <!-- prisijungimo forma -->
      <div class="glass-card rounded-xl p-4 md:p-8">
        <form @submit.prevent="handleLogin" class="space-y-4 md:space-y-6">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-300 mb-1.5 md:mb-2">Vartotojo vardas</label>
            <input
              id="username"
              type="text"
              required
              v-model="username"
              class="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-[#20243A] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"

            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-300 mb-1.5 md:mb-2">Slaptažodis</label>
            <input
              id="password"
              type="password"
              required
              v-model="password"
              class="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-[#20243A] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"

            />
          </div>

          <div v-if="error" class="p-3 md:p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <p class="text-red-400 text-xs md:text-sm text-center">{{ error }}</p>
          </div>

          <button
            type="submit"
            class="w-full py-2.5 md:py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#1A1D2D] transition-all duration-200 text-sm md:text-base"
          >
            Prisijungti
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style> 