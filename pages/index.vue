<template>
  <main class="min-h-screen bg-[#1A1D2D]">
    <!-- hero sekcija -->
    <section class="relative min-h-[100vh] overflow-hidden flex items-center justify-center" id="hero">
      <!-- animuoti elementai -->
      <div class="absolute inset-0 z-0">
        <!-- gradientas -->
        <div class="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        
        <!-- gridas -->
        <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
        
        <!-- animuoti particles -->
        <div class="absolute inset-0">
          <div v-for="n in 20" :key="n" 
               class="particle absolute rounded-full bg-purple-500/30"
               :style="{
                 width: `${Math.random() * 6 + 2}px`, 
                 height: `${Math.random() * 6 + 2}px`,
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
                 animationDuration: `${Math.random() * 20 + 15}s`,
                 animationDelay: `${Math.random() * 5}s`
               }">
          </div>
          <div v-for="n in 15" :key="`blue-${n}`" 
               class="particle absolute rounded-full bg-blue-500/30"
               :style="{
                 width: `${Math.random() * 8 + 3}px`, 
                 height: `${Math.random() * 8 + 3}px`,
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
                 animationDuration: `${Math.random() * 25 + 10}s`,
                 animationDelay: `${Math.random() * 5}s`
               }">
          </div>
        </div>
        
        <!-- animuotos formos -->
        <div class="absolute top-1/4 left-10 w-16 h-16 border-2 border-purple-500/20 rotate-45 animate-float"></div>
        <div class="absolute bottom-1/4 right-20 w-24 h-24 border-2 border-blue-500/20 rounded-full animate-float-slow"></div>
        <div class="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-purple-500/20 rounded-lg rotate-12 animate-float-delay"></div>
        <div class="absolute bottom-1/2 left-1/4 w-12 h-12 border-2 border-blue-500/20 rounded-full animate-float-slow-delay"></div>
      </div>
      
      <!-- 3d kubas -->
      <div class="absolute right-10 top-1/3 hidden lg:block">
        <div class="cube-wrapper">
          <div class="cube">
            <div class="cube-face cube-face-front bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm"></div>
            <div class="cube-face cube-face-back bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm"></div>
            <div class="cube-face cube-face-right bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm"></div>
            <div class="cube-face cube-face-left bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm"></div>
            <div class="cube-face cube-face-top bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm"></div>
            <div class="cube-face cube-face-bottom bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
      
      <!-- anikmuoti rutuliai -->
      <div class="absolute left-10 bottom-1/3 hidden lg:block">
        <div class="circles-wrapper">
          <div class="circle circle-1 border-2 border-purple-500/20"></div>
          <div class="circle circle-2 border-2 border-blue-500/20"></div>
          <div class="circle circle-3 border-2 border-indigo-500/20"></div>
        </div>
      </div>
      
      <!-- main content su animacijom -->
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center transition-all duration-1000 hero-content">
          
          <h1 class="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            <span class="block hero-title-1">Paverčiame Jūsų Idėjas į</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 hero-title-2">Skaitmeninę Realybę</span>
          </h1>
          
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto hero-desc">
            Mes kuriame inovatyvius skaitmeninius sprendimus, kurie padeda Jūsų verslui augti ir klestėti šiuolaikiniame pasaulyje.
          </p>
          
          <div class="flex flex-wrap justify-center gap-4 hero-buttons">
            <button class="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:from-purple-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-[#1A1D2D] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20 animate-button">
              Susisiekite
            </button>
            <button class="px-8 py-3 rounded-lg border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-[#1A1D2D] transition-all duration-300 backdrop-blur-sm animate-button-delay">
              Mūsų Paslaugos
            </button>
          </div>
        </div>
      </div>
      
      <!-- rodykle zemyn -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer">
        <span class="text-gray-400 text-sm">Slinkite žemyn</span>
        <ChevronDownIcon class="w-6 h-6 text-gray-400 animate-bounce" />
      </div>
    </section>

    <!-- paslaugu sectionas -->
    <section class="py-20 relative overflow-hidden" id="services">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>

      <div class="container mx-auto px-4 relative z-1">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold mb-4 text-white">Mūsų Paslaugos</h2>
          <p class="text-xl text-gray-200">
            Visapusiški sprendimai, pritaikyti jūsų verslo poreikiams
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- web development -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <CodeBracketIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Tinklalapių Kūrimas</h3>
              <p class="text-gray-300 flex-grow">
                Individualūs web aplikacijų sprendimai, sukurti naudojant moderniausias technologijas ir geriausias praktikas.
              </p>
            </div>
          </div>

          <!-- mobilios programeles -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <DevicePhoneMobileIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Mobilios Programėlės</h3>
              <p class="text-gray-300 flex-grow">
                Natūralios ir kryžminės platformos mobilios programėlės iOS ir Android sistemoms.
              </p>
            </div>
          </div>

          <!-- skaitmeninis marketingas -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <ChartBarIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Skaitmeninis Marketingas</h3>
              <p class="text-gray-300 flex-grow">
                Strateginiai marketingo sprendimai jūsų internetinės svetainės verslo augimui.
              </p>
            </div>
          </div>

          <!-- kibernetinis saugumas -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <ShieldCheckIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Kibernetinis Saugumas</h3>
              <p class="text-gray-300 flex-grow">
                Visapusiški saugumo sprendimai jūsų skaitmeniniam turtui apsaugoti.
              </p>
            </div>
          </div>

          <!-- debesies sprendimai -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <CloudIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Debesies Sprendimai</h3>
              <p class="text-gray-300 flex-grow">
                Masteliuojama debesies infrastruktūra ir debesijos paslaugos.
              </p>
            </div>
          </div>

          <!-- konsultacijos -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <UserGroupIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Konsultacijos</h3>
              <p class="text-gray-300 flex-grow">
                Ekspertinės vadovavimas jūsų skaitmeninės transformacijos kelionei.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- features sekcija -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>

      <div class="container mx-auto px-4 relative z-1">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-display font-bold mb-6 text-white">Kodėl Rinktis Mus</h2>
            <p class="text-xl text-gray-200 mb-12">
              Mes apjungiame inovacijas su patirtimi, kad pateiktume išskirtinius rezultatus
            </p>

            <div class="space-y-8">
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
                  <UserCircleIcon class="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Ekspertų Komanda</h3>
                  <p class="text-gray-300">
                    Mūsų komandą sudaro patyrę profesionalai su įvairiapatiršu.
                  </p>
                </div>
              </div>

              <!-- individual solutions -->
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
                  <AdjustmentsHorizontalIcon class="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Individualūs Sprendimai</h3>
                  <p class="text-gray-300">
                    Pritaikyti sprendimai, sukurti atitikti jūsų specifikus verslo poreikius.
                  </p>
                </div>
              </div>

              <!-- kokybes uztikrinimas -->
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
                  <CheckBadgeIcon class="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Kokybės Užtikrinimas</h3>
                  <p class="text-gray-300">
                    Stiprus testavimo ir kokybės kontrolės procesai patikimiems rezultatams.
                  </p>
                </div>
              </div>

              <!-- 24/7 palaikymas -->
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
                  <PhoneIcon class="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">24/7 Palaikymas</h3>
                  <p class="text-gray-300">
                    Visą parą techninė pagalba ir priežiūros paslaugos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- paveikslelis su animacija -->
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
            <div class="relative aspect-square">
              <!-- pakeist i nuotrauka -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    

    <!-- atsiliepimai -->
    <Testimonials />

    <!-- blogas -->
    <BlogPreview />

    <!-- CTA sekcija -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      
      <div class="container mx-auto px-4 relative z-1">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-display font-bold mb-6 text-white">
            Pradėkite Savo Skaitmeninę Kelionę Šiandien
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Susisiekite su mumis ir sužinokite, kaip galime padėti Jūsų verslui augti
          </p>
          <button class="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:from-purple-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-[#1A1D2D] transition-all duration-200 transform hover:scale-105">
            Susisiekti
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CloudIcon,
  UserGroupIcon,
  UserCircleIcon,
  AdjustmentsHorizontalIcon,
  CheckBadgeIcon,
  PhoneIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'
import Testimonials from '~/components/Testimonials.vue'
import BlogPreview from '~/components/BlogPreview.vue'
import { onMounted, onUnmounted, ref } from 'vue'

definePageMeta({
  layout: 'default'
})

// Scroll animation logic for glass cards only
let observer: IntersectionObserver | null = null;

onMounted(() => {
  // Initialize hero animation on page load immediately
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.classList.add('opacity-100', 'translate-y-0');
  }

  // Set up intersection observer for services cards animations only
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    },
    { 
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px' 
    }
  );

  // Observe elements that should animate on scroll (only glass cards)
  document.querySelectorAll('.glass-card').forEach(el => {
    if (observer) observer.observe(el);
  });

  // scroll indicator handler
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

onUnmounted(() => {
  // clean up observer
  if (observer) {
    observer.disconnect();
  }
});

const services = [
  {
    title: 'Tinklalapių Kūrimas',
    description: 'Kuriame modernius, greitai veikiančius ir patrauklius tinklalapius, pritaikytus Jūsų verslo poreikiams.',
    icon: CodeBracketIcon
  },
  {
    title: 'Mobilios Programėlės',
    description: 'Kuriame iOS ir Android programėles, kurios padeda pasiekti Jūsų klientus bet kur ir bet kada.',
    icon: DevicePhoneMobileIcon
  },
  {
    title: 'Kibernetinis Saugumas',
    description: 'Užtikriname Jūsų skaitmeninių sistemų ir duomenų saugumą su pažangiausiais saugumo sprendimais.',
    icon: ShieldCheckIcon
  }
]

const features = [
  {
    title: 'Patirtis',
    description: 'Daugiau nei 10 metų patirtis kuriant skaitmeninius sprendimus.',
    icon: ChartBarIcon
  },
  {
    title: 'Debesų Technologijos',
    description: 'Naudojame moderniausias debesų technologijas Jūsų projektams.',
    icon: CloudIcon
  },
  {
    title: 'Inovacijos',
    description: 'Nuolat diegiame naujausias technologijas ir sprendimus.',
    icon: CodeBracketIcon
  },
  {
    title: 'Greitis',
    description: 'Greitai ir efektyviai įgyvendiname projektus.',
    icon: ChartBarIcon
  },
  {
    title: 'Komanda',
    description: 'Profesionali komanda, pasirengusi padėti 24/7.',
    icon: UserGroupIcon
  },
  {
    title: 'Sprendimai',
    description: 'Individualūs sprendimai kiekvienam klientui.',
    icon: CodeBracketIcon
  }
]
</script>

<style scoped>
.font-display {
  font-family: 'Poppins', sans-serif;
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.glass-card.animated {
  opacity: 1;
  transform: translateY(0);
}

/* stagger animacijos cardams */
.glass-card:nth-child(2) {
  transition-delay: 0.1s;
}
.glass-card:nth-child(3) {
  transition-delay: 0.2s;
}
.glass-card:nth-child(4) {
  transition-delay: 0.3s;
}
.glass-card:nth-child(5) {
  transition-delay: 0.4s;
}
.glass-card:nth-child(6) {
  transition-delay: 0.5s;
}

/* animuoti particles */
@keyframes float-particle {
  0%, 100% { 
    transform: translateY(0) translateX(0); 
  }
  25% { 
    transform: translateY(-30px) translateX(15px); 
  }
  50% { 
    transform: translateY(-15px) translateX(-15px); 
  }
  75% { 
    transform: translateY(30px) translateX(5px); 
  }
}

.particle {
  animation-name: float-particle;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

/* float animacijos formu */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(45deg); }
  50% { transform: translateY(-20px) rotate(45deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}

.animate-float-delay {
  animation: float 9s ease-in-out 1s infinite;
}

.animate-float-slow-delay {
  animation: float-slow 10s ease-in-out 2s infinite;
}

/* hero title animacija */
.hero-content {
  opacity: 1;
  transform: translateY(0);
}

.hero-title-1, .hero-title-2, .hero-desc, .hero-buttons {
  opacity: 1;
  transform: translateY(0);
}

/* logo animacija */
.hero-logo {
  animation: pulse-shadow 3s ease-in-out infinite;
}

@keyframes pulse-shadow {
  0%, 100% {
    filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.5));
  }
}

/* mygtuko animacija */
@keyframes button-pulse {
  0% { 
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);
  }
  70% { 
    box-shadow: 0 0 0 15px rgba(139, 92, 246, 0);
  }
  100% { 
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
  }
}

.animate-button {
  animation: button-pulse 2s infinite;
}

.animate-button-delay {
  animation: button-pulse 2s 1s infinite;
}

/* 3D kubo animacija */
.cube-wrapper {
  perspective: 800px;
  width: 150px;
  height: 150px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: cube-rotate 20s linear infinite;
}

@keyframes cube-rotate {
  0% { transform: rotateX(0) rotateY(0); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

.cube-face {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.cube-face-front {
  transform: translateZ(75px);
}

.cube-face-back {
  transform: rotateY(180deg) translateZ(75px);
}

.cube-face-right {
  transform: rotateY(90deg) translateZ(75px);
}

.cube-face-left {
  transform: rotateY(-90deg) translateZ(75px);
}

.cube-face-top {
  transform: rotateX(90deg) translateZ(75px);
}

.cube-face-bottom {
  transform: rotateX(-90deg) translateZ(75px);
}

/* Circles animation */
.circles-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
}

.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.7;
}

.circle-1 {
  width: 120px;
  height: 120px;
  animation: circle-rotate 15s linear infinite;
}

.circle-2 {
  width: 80px;
  height: 80px;
  top: 20px;
  left: 20px;
  animation: circle-rotate 10s linear infinite reverse;
}

.circle-3 {
  width: 40px;
  height: 40px;
  top: 40px;
  left: 40px;
  animation: circle-rotate 5s linear infinite;
}

@keyframes circle-rotate {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}
</style> 