<template>
  <footer class="relative bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-lg border-t border-white/10">
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- kompanijos info -->
        <div>
          <div class="flex items-center mb-6 group">
            <div class="w-40 h-40 relative">
              <img src="/images/logo.png" alt="e-shop99 logo" class="w-full h-full object-contain rounded-lg mr-3 group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          <p class="text-gray-300 mb-6">
            Kuriame inovatyvius skaitmeninius sprendimus, kurie padeda Jūsų verslui augti ir klestėti.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- nuorodos -->
        <div>
          <h3 class="text-white font-bold text-lg mb-6">Greitos nuorodos</h3>
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

        <!-- paslaugos -->
        <div>
          <NuxtLink to="/services" class="text-white font-bold text-lg mb-6 block hover:text-purple-400 transition-colors duration-300">
            <h3>Paslaugos</h3>
          </NuxtLink>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.name">
              <NuxtLink 
                :to="service.path"
                class="text-gray-300 hover:text-white transition-colors duration-300 block"
              >
                {{ service.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- kontaktai -->
        <div>
          <NuxtLink to="/contacts" class="text-white font-bold text-lg mb-6 block hover:text-purple-400 transition-colors duration-300">
            <h3>Kontaktai</h3>
          </NuxtLink>
          <ul class="space-y-3">
            <li class="flex items-center text-gray-300 group">
              <MapPinIcon class="w-5 h-5 mr-3 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
              <NuxtLink to="/contacts" class="group-hover:text-white transition-colors duration-300">
                <span>Kaunas, Lietuva</span>
              </NuxtLink>
            </li>
            <li class="flex items-center text-gray-300 group">
              <EnvelopeIcon class="w-5 h-5 mr-3 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
              <a href="mailto:info@e-shop99.lt" class="group-hover:text-white transition-colors duration-300">
                info@e-shop99.lt
              </a>
            </li>
            <li class="flex items-center text-gray-300 group">
              <PhoneIcon class="w-5 h-5 mr-3 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
              <a href="tel:+37068111194" class="group-hover:text-white transition-colors duration-300">
                +370 681 11194
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- apatinis bar -->
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
              class="text-gray-400 text-sm hover:text-white transition-colors duration-300"
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
  { name: 'Web development', path: '/services#web-development' },
  { name: 'Mobilios programėlės', path: '/services#mobile-apps' },
  { name: 'Skaitmeninis marketingas', path: '/services#digital-marketing' },
  { name: 'Kibernetinis saugumas', path: '/services#cybersecurity' },
  { name: 'Debesies sprendimai', path: '/services#cloud-solutions' },
  { name: 'Konsultacijos', path: '/services#consulting' }
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
  { name: 'Privatumo politika', path: '/privacy-policy' },
  { name: 'Sąlygos ir taisyklės', path: '/terms-and-conditions' },
  { name: 'Slapukų politika', path: '/cookie-policy' }
]
</script> 