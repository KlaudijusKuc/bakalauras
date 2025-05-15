<template>
  <footer class="relative bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-lg border-t border-white/10">
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Company Info -->
        <div>
          <div class="flex items-center mb-6 group">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mr-3 group-hover:scale-105 transition-transform duration-300">
              <span class="text-white font-bold text-xl">e99</span>
            </div>
            <span class="text-2xl font-display font-bold text-white group-hover:text-purple-400 transition-colors duration-300">e-shop99</span>
          </div>
          <p class="text-gray-300 mb-6">
            Kuriame inovatyvius skaitmeninius sprendimus, kurie padeda Jūsų verslui augti ir klestėti.
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6">Greitos Nuorodos</h3>
          <ul class="space-y-3">
            <li v-for="item in navigationItems" :key="item.path">
              <NuxtLink 
                :to="item.path" 
                class="text-gray-300 hover:text-white transition-colors duration-300 block"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6">Paslaugos</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service">
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300 block">
                {{ service }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6">Kontaktai</h3>
          <ul class="space-y-3">
            <li class="flex items-center text-gray-300 group">
              <MapPinIcon class="w-5 h-5 mr-3 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
              <span class="group-hover:text-white transition-colors duration-300">Vilnius, Lietuva</span>
            </li>
            <li class="flex items-center text-gray-300 group">
              <EnvelopeIcon class="w-5 h-5 mr-3 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
              <a href="mailto:info@e-shop99.lt" class="group-hover:text-white transition-colors duration-300">
                info@e-shop99.lt
              </a>
            </li>
            <li class="flex items-center text-gray-300 group">
              <PhoneIcon class="w-5 h-5 mr-3 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
              <a href="tel:+37061234567" class="group-hover:text-white transition-colors duration-300">
                +370 612 34 567
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © {{ new Date().getFullYear() }} e-shop99. Visos teisės saugomos.
          </p>
          <div class="flex space-x-6">
            <NuxtLink 
              v-for="link in legalLinks" 
              :key="link.path"
              :to="link.path"
              class="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/vue/24/outline'

const navigationItems = [
  { name: 'Pradžia', path: '/' },
  { name: 'Apie mus', path: '/about' },
  { name: 'Paslaugos', path: '/services' },
  { name: 'Karjera', path: '/careers' }
]

const services = [
  'Web Development',
  'Mobilios Programėlės',
  'Skaitmeninis Marketingas',
  'Kibernetinis Saugumas',
  'Debesies Sprendimai',
  'Konsultacijos'
]

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'i-mdi-facebook'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'i-mdi-linkedin'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'i-mdi-instagram'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'i-mdi-twitter'
  }
]

const legalLinks = [
  { name: 'Privatumo politika', path: '/privacy' },
  { name: 'Sąlygos ir taisyklės', path: '/terms' },
  { name: 'Slapukų politika', path: '/cookies' }
]
</script> 