<template>
  <main class="min-h-screen bg-[#1A1D2D]">
    <!-- hero sekcija -->
    <section class="relative min-h-[50vh] flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      
      <div class="container mx-auto px-4 relative z-1">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            Apie Mus
          </h1>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sužinokite daugiau apie mūsų kompaniją, mūsų misiją ir technologijas, kurias mes naudojame
          </p>
        </div>
      </div>
    </section>

    <!-- musu istorija sekcija -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>

      <div class="container mx-auto px-4 relative z-1">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-display font-bold mb-6 text-white">Mūsų Istorija</h2>
            <p class="text-xl text-gray-300 mb-6">
              e-shop99 buvo įkurta 2020 metais su tikslu padėti įmonėms sėkmingai plėtoti savo verslą skaitmeninėje erdvėje.
            </p>
            <p class="text-xl text-gray-300 mb-6">
              Per šiuos metus mes išaugome nuo mažos startuolio komandos iki patikimos IT sprendimų įmonės, dirbančios su klientais visoje Lietuvoje ir užsienyje.
            </p>
            <p class="text-xl text-gray-300">
              Mūsų tikslas - naudojant naujausias technologijas kurti sprendimus, kurie ne tik atitinka, bet ir viršija mūsų klientų lūkesčius.
            </p>
          </div>

          <!-- illiustracija -->
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
            <div class="relative glass-card rounded-xl p-6 overflow-hidden">
              <div class="relative z-10">
                <svg viewBox="0 0 400 280" class="w-full h-auto">
                  <!-- background elementai -->
                  <defs>
                    <linearGradient id="purpleBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="rgba(139, 92, 246, 0.2)" />
                      <stop offset="100%" stop-color="rgba(59, 130, 246, 0.2)" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  <!-- aniumuotas rutulys -->
                  <circle cx="200" cy="140" r="120" fill="url(#purpleBlueGradient)">
                    <animate attributeName="r" values="120;125;120" dur="8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="140" r="80" fill="rgba(59, 130, 246, 0.1)">
                    <animate attributeName="r" values="80;85;80" dur="6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="140" r="50" fill="rgba(139, 92, 246, 0.15)">
                    <animate attributeName="r" values="50;55;50" dur="4s" repeatCount="indefinite" />
                  </circle>
                  
                  <!-- grid linijos -->
                  <g opacity="0.15">
                    <line x1="30" y1="40" x2="370" y2="40" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
                    <line x1="30" y1="80" x2="370" y2="80" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
                    <line x1="30" y1="120" x2="370" y2="120" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
                    <line x1="30" y1="160" x2="370" y2="160" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
                    <line x1="30" y1="200" x2="370" y2="200" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
                    <line x1="30" y1="240" x2="370" y2="240" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
                    
                    <line x1="80" y1="20" x2="80" y2="260" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
                    <line x1="160" y1="20" x2="160" y2="260" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
                    <line x1="240" y1="20" x2="240" y2="260" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
                    <line x1="320" y1="20" x2="320" y2="260" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
                  </g>
                  
                  <!-- server/cloud -->
                  <g>
                    <rect x="50" y="60" width="80" height="60" rx="6" fill="rgba(139, 92, 246, 0.3)" stroke="rgba(139, 92, 246, 0.8)" stroke-width="2">
                      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <rect x="60" y="70" width="60" height="8" rx="2" fill="rgba(255, 255, 255, 0.3)" />
                    <rect x="60" y="85" width="60" height="8" rx="2" fill="rgba(255, 255, 255, 0.3)" />
                    <rect x="60" y="100" width="60" height="8" rx="2" fill="rgba(255, 255, 255, 0.3)" />
                    <!-- server icon -->
                    <path d="M45 80 L 55 75 L 55 90 L 45 85 Z" fill="rgba(139, 92, 246, 0.8)" />
                  </g>
                  
                  <!-- web application glowing effect -->
                  <g>
                    <rect x="270" y="50" width="90" height="70" rx="6" fill="rgba(59, 130, 246, 0.3)" stroke="rgba(59, 130, 246, 0.8)" stroke-width="2">
                      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" begin="1s" repeatCount="indefinite" />
                    </rect>
                    <rect x="280" y="60" width="70" height="40" rx="2" fill="rgba(255, 255, 255, 0.1)" />
                    <rect x="285" y="65" width="60" height="5" rx="1" fill="rgba(255, 255, 255, 0.3)" />
                    <rect x="285" y="75" width="60" height="20" rx="1" fill="rgba(255, 255, 255, 0.2)" />
                    <rect x="290" y="100" width="20" height="7" rx="3" fill="rgba(139, 92, 246, 0.5)" />
                    <rect x="315" y="100" width="20" height="7" rx="3" fill="rgba(59, 130, 246, 0.5)" />
                  </g>
                  
                  <!-- mobile element with interactive elements -->
                  <g>
                    <rect x="70" y="170" width="45" height="80" rx="10" fill="rgba(139, 92, 246, 0.3)" stroke="rgba(139, 92, 246, 0.8)" stroke-width="2">
                      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" begin="0.5s" repeatCount="indefinite" />
                    </rect>
                    <rect x="75" y="180" width="35" height="50" rx="2" fill="rgba(255, 255, 255, 0.2)" />
                    <circle cx="92.5" cy="240" r="6" fill="rgba(255, 255, 255, 0.3)" />
                    <!-- mobile app icons -->
                    <rect x="80" y="185" width="8" height="8" rx="2" fill="rgba(139, 92, 246, 0.5)" />
                    <rect x="93" y="185" width="8" height="8" rx="2" fill="rgba(59, 130, 246, 0.5)" />
                    <rect x="106" y="185" width="8" height="8" rx="2" fill="rgba(139, 92, 246, 0.5)" />
                  </g>
                  
                  <!-- laptop element with screen details -->
                  <g>
                    <path d="M280 170 L 340 170 L 350 230 L 270 230 Z" fill="rgba(59, 130, 246, 0.3)" stroke="rgba(59, 130, 246, 0.8)" stroke-width="2">
                      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" begin="1.5s" repeatCount="indefinite" />
                    </path>
                    <rect x="285" y="175" width="50" height="35" rx="2" fill="rgba(255, 255, 255, 0.2)" />
                    <rect x="290" y="180" width="40" height="5" rx="1" fill="rgba(255, 255, 255, 0.3)" />
                    <rect x="290" y="190" width="40" height="15" rx="1" fill="rgba(255, 255, 255, 0.15)" />
                    <circle cx="310" cy="222" r="3" fill="rgba(255, 255, 255, 0.3)" />
                  </g>
                  
                  <!-- animated connection paths -->
                  <g filter="url(#glow)" opacity="0.8">
                    <path d="M130 90 C 170 90, 170 140, 200 140" stroke="rgba(139, 92, 246, 0.8)" stroke-width="2" fill="none">
                      <animate attributeName="stroke-dasharray" from="0,500" to="500,0" dur="4s" repeatCount="indefinite" />
                    </path>
                    
                    <path d="M200 140 C 230 140, 240 85, 270 85" stroke="rgba(59, 130, 246, 0.8)" stroke-width="2" fill="none">
                      <animate attributeName="stroke-dasharray" from="0,500" to="500,0" dur="4s" begin="0.5s" repeatCount="indefinite" />
                    </path>
                    
                    <path d="M200 140 C 150 180, 120 180, 100 170" stroke="rgba(139, 92, 246, 0.8)" stroke-width="2" fill="none">
                      <animate attributeName="stroke-dasharray" from="0,500" to="500,0" dur="4s" begin="1s" repeatCount="indefinite" />
                    </path>
                    
                    <path d="M200 140 C 250 180, 280 190, 310 180" stroke="rgba(59, 130, 246, 0.8)" stroke-width="2" fill="none">
                      <animate attributeName="stroke-dasharray" from="0,500" to="500,0" dur="4s" begin="1.5s" repeatCount="indefinite" />
                    </path>
                  </g>
                  
                  <!-- data flow animation dots -->
                  <g>
                    <circle cx="130" cy="90" r="4" fill="white" filter="url(#glow)">
                      <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="r" values="2;4;2" dur="4s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle cx="200" cy="140" r="4" fill="white" filter="url(#glow)">
                      <animate attributeName="opacity" values="0;1;0" dur="4s" begin="0.5s" repeatCount="indefinite" />
                      <animate attributeName="r" values="2;4;2" dur="4s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle cx="270" cy="85" r="4" fill="white" filter="url(#glow)">
                      <animate attributeName="opacity" values="0;1;0" dur="4s" begin="1s" repeatCount="indefinite" />
                      <animate attributeName="r" values="2;4;2" dur="4s" begin="1s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle cx="100" cy="170" r="4" fill="white" filter="url(#glow)">
                      <animate attributeName="opacity" values="0;1;0" dur="4s" begin="1.5s" repeatCount="indefinite" />
                      <animate attributeName="r" values="2;4;2" dur="4s" begin="1.5s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle cx="310" cy="180" r="4" fill="white" filter="url(#glow)">
                      <animate attributeName="opacity" values="0;1;0" dur="4s" begin="2s" repeatCount="indefinite" />
                      <animate attributeName="r" values="2;4;2" dur="4s" begin="2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  
                  <!-- additional decorative elements -->
                  <g opacity="0.7">
                    <circle cx="50" cy="220" r="15" fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.5)" stroke-width="1" />
                    <circle cx="350" cy="220" r="15" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" stroke-width="1" />
                    <circle cx="350" cy="60" r="15" fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.5)" stroke-width="1" />
                    <circle cx="50" cy="60" r="15" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" stroke-width="1" />
                  </g>
                </svg>
              </div>
              <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>    

    <!-- musu verybes sekcija -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>

      <div class="container mx-auto px-4 relative z-1">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold mb-4 text-white">Mūsų Vertybės</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Šios vertybės yra mūsų darbo pagrindas ir apibrėžia, kaip mes bendraujame su klientais, kolegomis ir visuomene
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- inovacijos -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <LightBulbIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Inovacijos</h3>
              <p class="text-gray-300 flex-grow">
                Nuolat ieškome naujų idėjų ir technologijų, kurios padėtų mums kurti efektyvesnius ir pažangesnius sprendimus.
              </p>
            </div>
          </div>

          <!-- kokybe -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <CheckBadgeIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Kokybė</h3>
              <p class="text-gray-300 flex-grow">
                Aukščiausia kokybė mūsų darbuose yra neginčijamas standartas. Mes niekada nenusileidžiame, kai kalbama apie kokybę.
              </p>
            </div>
          </div>

          <!-- saziningumas -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <ShieldCheckIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Sąžiningumas</h3>
              <p class="text-gray-300 flex-grow">
                Mes visada elgiamės sąžiningai ir skaidriai su mūsų klientais, darbuotojais ir verslo partneriais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA sekcija -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      
      <div class="container mx-auto px-4 relative z-1">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-display font-bold mb-6 text-white">
            Ar pasiruošę pradėti savo projektą?
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Susisiekite su mumis ir aptarkime, kaip galime padėti jūsų verslui augti
          </p>
          <NuxtLink 
            to="/contacts" 
            class="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:from-purple-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105"
          >
            Susisiekite
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import {
  LightBulbIcon,
  CheckBadgeIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.font-display {
  font-family: 'Poppins', sans-serif;
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style> 