<template>
  <main class="min-h-screen bg-[#1A1D2D]">
    <!-- hero sekcija -->
    <section class="relative min-h-[50vh] flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      
      <div class="container mx-auto px-4 relative z-1">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            Mūsų paslaugos
          </h1>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Profesionalūs skaitmeniniai sprendimai, pritaikyti jūsų verslo poreikiams
          </p>
        </div>
      </div>
    </section>

    <!-- pagrindines paslaugos -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>

      <div class="container mx-auto px-4 relative z-1">
        <div class="space-y-24">
          <!-- web development -->
          <div id="web-development" class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1">
              <h2 class="text-4xl font-display font-bold mb-6 text-white">Web kūrimas</h2>
              <p class="text-xl text-gray-300 mb-6">
                Mūsų profesionalių programuotojų komanda sukurs modernias, greitai veikiančias ir patrauklias svetaines, kurios padės jūsų verslui išsiskirti internetinėje erdvėje.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <CheckCircleIcon class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-gray-300">Individualiai pritaikytos svetainės ir elektroninės parduotuvės</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-gray-300">Modernūs web aplikacijų sprendimai panaudojant naujausias technologijas</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-gray-300">Svetainių optimizavimas mobiliesiems įrenginiams</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-gray-300">SEO optimizavimas ir integracija su socialiniais tinklais</span>
                </li>
              </ul>
            </div>
            <div class="order-1 lg:order-2">
              <div class="flex justify-center">
                <div class="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                  <CodeBracketIcon class="w-16 h-16 text-purple-500" />
                </div>
              </div>
            </div>
          </div>

          <!-- mobile apps -->
          <div id="mobile-apps" class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div class="flex justify-center">
                <div class="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                  <DevicePhoneMobileIcon class="w-16 h-16 text-purple-500" />
                </div>
              </div>
            </div>
            <div>
              <h2 class="text-4xl font-display font-bold mb-6 text-white">Mobilios programėlės</h2>
              <p class="text-xl text-gray-300 mb-6">
                Kuriame natyvias ir kryžminės platformos mobilias programėles iOS ir Android sistemoms, kurios padeda pasiekti jūsų klientus bet kur ir bet kada.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <CheckCircleIcon class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-gray-300">iOS ir Android programėlių kūrimas</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-gray-300">Kryžminės platformos sprendimai su React Native ir Flutter</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-gray-300">Integravimas su API ir kitomis sistemomis</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-gray-300">Programėlių publikavimas App Store ir Google Play</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- skaitmeninis marketingas -->
          <div id="digital-marketing" class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1">
              <h2 class="text-4xl font-display font-bold mb-6 text-white">Skaitmeninis marketingas</h2>
              <p class="text-xl text-gray-300 mb-6">
                Padedame jūsų verslui augti internetinėje erdvėje per strategiškai parengtus marketingo sprendimus, kurie pasiekia tikslinę auditoriją ir didina konversijas.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <CheckCircleIcon class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-gray-300">SEO optimizavimas ir paieškos sistemų marketingas</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-gray-300">Socialinių tinklų valdymas ir reklamos kampanijos</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-gray-300">El. pašto marketingo strategijos</span>
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <span class="text-gray-300">Turinio marketingas ir analitika</span>
                </li>
              </ul>
            </div>
            <div class="order-1 lg:order-2">
              <div class="flex justify-center">
                <div class="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                  <ChartBarIcon class="w-16 h-16 text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- papildomos paslaugos sekcija -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>

      <div class="container mx-auto px-4 relative z-1">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold mb-4 text-white">Papildomos paslaugos</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Siūlome platų paslaugų spektrą, kad galėtume patenkinti visus jūsų skaitmeninio verslo poreikius
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- kibernetinis saugumas -->
          <div id="cybersecurity" class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <ShieldCheckIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Kibernetinis saugumas</h3>
              <p class="text-gray-300 flex-grow">
                Visapusiški saugumo sprendimai jūsų skaitmeniniam turtui apsaugoti, įskaitant saugumo auditus, apsaugą nuo įsilaužimų ir duomenų šifravimą.
              </p>
            </div>
          </div>

          <!-- debesies sprendimai -->
          <div id="cloud-solutions" class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <CloudIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Debesies sprendimai</h3>
              <p class="text-gray-300 flex-grow">
                Masteliuojama debesies infrastruktūra ir debesijos paslaugos. Padedame migruoti į debesį ir optimizuoti jūsų infrastruktūros išlaidas.
              </p>
            </div>
          </div>

          <!-- UI/UX dizainas -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <PaintBrushIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">UI/UX Dizainas</h3>
              <p class="text-gray-300 flex-grow">
                Kuriame patrauklias ir funkcionalias vartotojo sąsajas, kurios užtikrina puikią naudojimo patirtį ir didina konversijas.
              </p>
            </div>
          </div>

          <!-- E-commerce sprendimai -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <ShoppingCartIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">E-komercijos sprendimai</h3>
              <p class="text-gray-300 flex-grow">
                Elektroninių parduotuvių kūrimas ir integravimas su mokėjimo sistemomis, inventoriaus valdymu ir logistikos paslaugomis.
              </p>
            </div>
          </div>

          <!-- IT konsultacijos -->
          <div id="consulting" class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <UserGroupIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">IT Konsultacijos</h3>
              <p class="text-gray-300 flex-grow">
                Teikiame ekspertines konsultacijas technologijų klausimais, pagalbą renkantis tinkamas platformas ir sprendimus jūsų verslui.
              </p>
            </div>
          </div>

          <!-- prieziura ir palaikymas -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full">
              <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <WrenchScrewdriverIcon class="w-6 h-6 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Priežiūra ir palaikymas</h3>
              <p class="text-gray-300 flex-grow">
                Nuolatinė svetainių ir programėlių priežiūra, atnaujinimai, saugumo patikros ir techninė pagalba 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- darbo procesas sekcija -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>

      <div class="container mx-auto px-4 relative z-1">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold mb-4 text-white">Mūsų darbo procesas</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Aiškus ir efektyvus darbo procesas užtikrina sklandų projektų vykdymą ir puikius rezultatus
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- zingsnis 1 -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full items-center text-center">
              <div class="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-6 text-2xl font-bold text-white">
                1
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Planavimas</h3>
              <p class="text-gray-300 flex-grow">
                Išsiaiškiname jūsų poreikius, tikslus ir lūkesčius. Sukuriame detalų projekto planą ir specifikacijas.
              </p>
            </div>
          </div>

          <!-- zingsnis 2 -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full items-center text-center">
              <div class="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Dizainas</h3>
              <p class="text-gray-300 flex-grow">
                Kuriame vizualinį produkto vaizdą, vartotojo sąsajas ir užtikriname puikią naudojimo patirtį.
              </p>
            </div>
          </div>

          <!-- zingsnis 3 -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full items-center text-center">
              <div class="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Vystymas</h3>
              <p class="text-gray-300 flex-grow">
                Techninis sprendimo įgyvendinimas, programavimas ir integravimas su reikiamomis sistemomis.
              </p>
            </div>
          </div>

          <!-- zingsnis 4 -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full items-center text-center">
              <div class="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-6 text-2xl font-bold text-white">
                4
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Paleidimas</h3>
              <p class="text-gray-300 flex-grow">
                Testavimas, tobulinimas, produkto paleidimas ir tolimesnė priežiūra bei palaikymas.
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
            Pasiruošę pradėti projektą?
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Susisiekite su mumis šiandien ir aptarkime, kaip galime padėti jūsų verslui augti
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
  CheckCircleIcon,
  ShieldCheckIcon,
  CloudIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Paslaugos - E-Shop99'
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