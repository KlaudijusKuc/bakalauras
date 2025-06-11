<template>
  <div class="min-h-screen bg-[#1A1D2D]">
    <div class="flex h-screen">
      <!-- mobile menu button (only when sidebar is closed) -->
      <button 
        v-if="!isSidebarOpen"
        @click="isSidebarOpen = true"
        class="fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#20243A] text-white lg:hidden hover:bg-white/5 transition-colors duration-200"
      >
        <Bars3Icon class="w-6 h-6" />
      </button>

      <!-- sidebar overlay -->
      <div 
        v-if="isSidebarOpen" 
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        @click="isSidebarOpen = false"
      ></div>

      <!-- sidebaras -->
      <div 
        :class="[
          'fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#20243A] shadow-lg border-r border-white/10 transform transition-transform duration-300 ease-in-out',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        ]"
      >
        <!-- close button inside sidebar header on mobile -->
        <div class="flex items-center justify-between p-6 pb-0 lg:hidden">
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span class="text-white font-bold text-xl">e99</span>
            </div>
            <span class="text-xl font-display font-bold text-white group-hover:text-purple-400 transition-colors duration-300">Valdymas</span>
          </NuxtLink>
          <button @click="isSidebarOpen = false" class="p-2 ml-2 rounded-lg text-white hover:bg-white/5 transition-colors duration-200">
            <XMarkIcon class="w-6 h-6" />
          </button>
        </div>
        <!-- normal header for desktop -->
        <div class="p-6 hidden lg:block">
          <NuxtLink to="/" class="flex items-center space-x-3 group mb-6">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span class="text-white font-bold text-xl">e99</span>
            </div>
            <span class="text-xl font-display font-bold text-white group-hover:text-purple-400 transition-colors duration-300">Valdymas</span>
          </NuxtLink>
          <div class="h-px bg-gradient-to-r from-purple-500/20 to-blue-500/20 my-4"></div>
        </div>
        <nav class="mt-2 px-2">
          <NuxtLink 
            to="/admin" 
            class="flex items-center px-4 py-3 mb-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            :class="{ 'bg-white/5 text-white': $route.path === '/admin' }"
          >
            <RectangleGroupIcon class="w-5 h-5 mr-3 text-purple-500" />
            Valdymo panelė
          </NuxtLink>
          <NuxtLink 
            to="/admin/jobs" 
            class="flex items-center px-4 py-3 mb-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            :class="{ 'bg-white/5 text-white': $route.path === '/admin/jobs' }"
          >
            <BriefcaseIcon class="w-5 h-5 mr-3 text-purple-500" />
            Darbo paraiškos
          </NuxtLink>
          <NuxtLink 
            to="/admin/messages" 
            class="flex items-center px-4 py-3 mb-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            :class="{ 'bg-white/5 text-white': $route.path === '/admin/messages' }"
          >
            <EnvelopeIcon class="w-5 h-5 mr-3 text-purple-500" />
            Kontaktinės žinutės
          </NuxtLink>
          <NuxtLink 
            to="/admin/blog"
            class="flex items-center px-4 py-3 mb-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            :class="{ 'bg-white/5 text-white': $route.path.startsWith('/admin/blog') }"
          >
            <DocumentTextIcon class="w-5 h-5 mr-3 text-purple-500" />
            Tinklaraštis
          </NuxtLink>
          
          <button 
            @click="handleLogout" 
            class="w-full flex items-center px-4 py-3 mb-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
          >
            <ArrowLeftOnRectangleIcon class="w-5 h-5 mr-3 text-purple-500" />
            Atsijungti
          </button>
        </nav>
      </div>
      
      <!-- pagrindinis turinys -->
      <div class="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
        <div class="max-w-6xl mx-auto">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { 
  RectangleGroupIcon, 
  BriefcaseIcon, 
  EnvelopeIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/outline'

const router = useRouter()
const isSidebarOpen = ref(false)

// close sidebar on route change
watch(() => router.currentRoute.value.path, () => {
  isSidebarOpen.value = false
})

function handleLogout() {
  localStorage.removeItem('adminToken')
  router.push('/admin/login')
}
</script>

<style scoped>
.font-display {
  font-family: 'Poppins', sans-serif;
}
</style> 