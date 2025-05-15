<template>
  <header class="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-lg border-b border-white/10">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span class="text-white font-bold text-xl">e99</span>
          </div>
          <span class="text-2xl font-display font-bold text-white group-hover:text-purple-400 transition-colors duration-300">e-shop99</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-6 items-center">
          <NuxtLink to="/" class="text-white hover:text-purple-400 transition-colors">Pagrindinis</NuxtLink>
          <NuxtLink to="/about" class="text-white hover:text-purple-400 transition-colors">Apie Mus</NuxtLink>
          <NuxtLink to="/services" class="text-white hover:text-purple-400 transition-colors">Paslaugos</NuxtLink>
          <NuxtLink to="/careers" class="text-white hover:text-purple-400 transition-colors">Karjera</NuxtLink>
          <NuxtLink to="/contacts" class="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">Kontaktai</NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
        >
          <Bars3Icon v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden py-4 border-t border-white/10"
      >
        <div class="flex flex-col space-y-3 p-2">
          <NuxtLink @click="isMobileMenuOpen = false" to="/" class="text-white hover:text-purple-400 transition-colors py-2">Pagrindinis</NuxtLink>
          <NuxtLink @click="isMobileMenuOpen = false" to="/about" class="text-white hover:text-purple-400 transition-colors py-2">Apie Mus</NuxtLink>
          <NuxtLink @click="isMobileMenuOpen = false" to="/services" class="text-white hover:text-purple-400 transition-colors py-2">Paslaugos</NuxtLink>
          <NuxtLink @click="isMobileMenuOpen = false" to="/careers" class="text-white hover:text-purple-400 transition-colors py-2">Karjera</NuxtLink>
          <NuxtLink @click="isMobileMenuOpen = false" to="/contacts" class="mt-2 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 inline-block">Kontaktai</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isMobileMenuOpen = ref(false)
</script> 