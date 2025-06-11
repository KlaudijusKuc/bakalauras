<template>
  <section class="py-20 relative overflow-hidden">
    <!-- background animacijos -->
    <div class="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
    <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-8 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4 text-white">Ką sako mūsų klientai</h2>
        <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
          Sužinokite, ką mūsų klientai sako apie mūsų paslaugas ir bendradarbiavimą
        </p>
      </div>

      <div class="relative max-w-4xl mx-auto">
        <!-- slideris -->
        <div class="relative overflow-hidden px-4 md:px-8">
          <!-- slides -->
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="testimonial in testimonials" 
              :key="testimonial.id"
              class="w-full flex-shrink-0 px-2 md:px-4"
            >
              <div class="glass-card rounded-xl p-4 md:p-8 h-[400px] md:h-[350px] flex flex-col">
                <div class="flex flex-col items-center text-center flex-grow">
                  <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-3 md:mb-4 ring-4 ring-purple-500/20">
                    <span class="text-white text-xl md:text-2xl font-semibold">{{ testimonial.name.charAt(0) }}</span>
                  </div>
                  <div class="flex mb-2 md:mb-3">
                    <StarIcon v-for="i in 5" :key="i" class="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                  </div>
                  <blockquote class="text-base md:text-xl text-gray-200 mb-3 md:mb-4 italic max-w-2xl flex-grow">
                    "{{ testimonial.quote }}"
                  </blockquote>
                  <div class="flex items-center justify-center mt-auto">
                    <ChatBubbleLeftIcon class="w-5 h-5 md:w-6 md:h-6 text-purple-300 mr-2" />
                    <div>
                      <p class="text-white font-medium text-sm md:text-base">{{ testimonial.name }}</p>
                      <p class="text-purple-300 text-xs md:text-sm">{{ testimonial.position }}, {{ testimonial.company }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- navigacijos mygtukai -->
          <button 
            @click="prevSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-600/50 hover:bg-purple-600/70 text-white p-3 md:p-2 rounded-full transition-colors duration-200 z-10"
            :disabled="isTransitioning"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-600/50 hover:bg-purple-600/70 text-white p-3 md:p-2 rounded-full transition-colors duration-200 z-10"
            :disabled="isTransitioning"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- taskai -->
          <div class="flex justify-center mt-4 md:mt-6 space-x-2">
            <button 
              v-for="(_, index) in testimonials" 
              :key="index"
              @click="goToSlide(index)"
              class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors duration-200"
              :class="[
                currentSlide === index 
                  ? 'bg-purple-500' 
                  : 'bg-purple-500/30 hover:bg-purple-500/50'
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChatBubbleLeftIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/24/solid'

const currentSlide = ref(0)
const isTransitioning = ref(false)

const testimonials = [
  {
    id: 1,
    name: 'Laura Kazlauskaitė',
    position: 'Verslo Direktorė',
    company: 'TechStart LT',
    avatar: '/images/testimonials/avatar-1.svg',
    quote: 'e-shop99 komanda padėjo mums transformuoti mūsų verslą į skaitmeninę erą. Jų inovatyvūs sprendimai ir profesionalus požiūris viršijo mūsų lūkesčius.'
  },
  {
    id: 2,
    name: 'Marius Jankauskas',
    position: 'CTO',
    company: 'Inovacijos Group',
    avatar: '/images/testimonials/avatar-2.svg',
    quote: 'Bendradarbiavimas su e-shop99 buvo išskirtinė patirtis. Jų techninė ekspertizė ir nuolatinis dėmesys kokybei padėjo mums sukurti produktą, kuris dominuoja rinkoje.'
  },
  {
    id: 3,
    name: 'Eglė Petrauskienė',
    position: 'Marketingo Vadovė',
    company: 'Digital Solutions',
    avatar: '/images/testimonials/avatar-3.svg',
    quote: 'e-shop99 skaitmeninio marketingo strategijos padėjo mums pasiekti neįtikėtinų rezultatų. Jų komanda visada atsako į mūsų poreikius ir siūlo inovatyvius sprendimus.'
  }
]

const nextSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
}

const prevSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
}

const goToSlide = (index: number) => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = index
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style> 