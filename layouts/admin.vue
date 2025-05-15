<template>
  <div class="min-h-screen bg-[#1A1D2D]">
    <div class="flex h-screen">
      <!-- sidebaras -->
      <div class="w-64 bg-[#20243A] shadow-lg border-r border-white/10">
        <div class="p-6">
          <NuxtLink to="/" class="flex items-center space-x-3 group mb-6">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span class="text-white font-bold text-xl">e99</span>
            </div>
            <span class="text-xl font-display font-bold text-white group-hover:text-purple-400 transition-colors duration-300">Valdymas</span>
          </NuxtLink>
          <div class="h-px bg-gradient-to-r from-purple-500/20 to-blue-500/20 my-4"></div>
        </div>
        <nav class="mt-2 px-2">
          <NuxtLink to="/admin" class="flex items-center px-4 py-3 mb-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
            <RectangleGroupIcon class="w-5 h-5 mr-3 text-purple-500" />
            Valdymo panelė
          </NuxtLink>
          <NuxtLink to="/admin/jobs" class="flex items-center px-4 py-3 mb-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
            <BriefcaseIcon class="w-5 h-5 mr-3 text-purple-500" />
            Darbo paraiškos
          </NuxtLink>
          <NuxtLink to="/admin/messages" class="flex items-center px-4 py-3 mb-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
            <EnvelopeIcon class="w-5 h-5 mr-3 text-purple-500" />
            Kontaktinės žinutės
          </NuxtLink>
        </nav>
      </div>
      
      <!-- pagrindinis turinys -->
      <div class="flex-1 p-8 overflow-y-auto">
        <div class="max-w-6xl mx-auto">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  RectangleGroupIcon, 
  BriefcaseIcon, 
  EnvelopeIcon 
} from '@heroicons/vue/24/outline';
</script>

<style scoped>
.font-display {
  font-family: 'Poppins', sans-serif;
}
</style> 