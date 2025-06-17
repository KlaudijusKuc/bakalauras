<template>
  <main class="min-h-screen bg-[#1A1D2D]">
    <!-- hero sekcija -->
    <section class="relative min-h-[50vh] flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      
      <div class="container mx-auto px-4 relative z-1">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            Susisiekite su mumis
          </h1>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Turite klausimų ar idėjų? Mūsų komanda pasiruošusi padėti Jums įgyvendinti Jūsų skaitmeninę viziją.
          </p>
        </div>
      </div>
    </section>

    <!-- kontaktu forma sekcija -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>

      <div class="container mx-auto px-4 relative z-1">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <!-- kontaktu informacija -->
          <div>
            <h2 class="text-4xl font-display font-bold mb-6 text-white">Kaip susisiekti</h2>
            <p class="text-xl text-gray-200 mb-12">
              Esame čia, kad padėtume Jums bet kuriuo metu
            </p>

            <div class="space-y-8">
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
                  <EnvelopeIcon class="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">El. Paštas</h3>
                  <p class="text-gray-300">
                    <a href="mailto:info@e-shop99.com" class="hover:text-white transition-colors">info@e-shop99.com</a>
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
                  <PhoneIcon class="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Telefonas</h3>
                  <p class="text-gray-300">
                    <a href="tel:+37068111194" class="hover:text-white transition-colors">+370 681 11194</a>
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
                  <MapPinIcon class="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Adresas</h3>
                  <p class="text-gray-300">
                    Kaunas, Jonavos g. 254a
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
                  <ClockIcon class="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">Darbo laikas</h3>
                  <p class="text-gray-300">
                    Pirmadienis - Penktadienis: 9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- forma -->
          <div class="glass-card rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Parašykite mums</h3>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block mb-2 text-gray-300">Vardas</label>
                <input 
                  id="name" 
                  v-model="form.name" 
                  type="text" 
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  required
                />
              </div>
              
              <div>
                <label for="email" class="block mb-2 text-gray-300">El. Paštas</label>
                <input 
                  id="email" 
                  v-model="form.email" 
                  type="email" 
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  required
                />
              </div>
              
              <div>
                <label for="message" class="block mb-2 text-gray-300">Žinutė</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  class="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:from-purple-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-[#1A1D2D] transition-all duration-200 transform hover:scale-105"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Siunčiama...' : 'Siųsti Žinutę' }}
                </button>
              </div>
              
              <div v-if="submitStatus" :class="[
                'p-4 rounded-lg',
                submitStatus.success ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'
              ]">
                {{ submitStatus.message }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- zemelapis -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      
      <div class="container mx-auto px-4 relative z-1">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold mb-4 text-white">Mūsų vieta</h2>
          <p class="text-xl text-gray-200">
            Aplankykite mus šiuo adresu
          </p>
        </div>
        
        <div class="glass-card rounded-xl p-4 overflow-hidden h-[750px]">
          <!-- map placeholderis -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.862446738914!2d23.90562917711466!3d54.91263025807963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e72251a3a31c5b%3A0x1d54f5b3a3c200e!2sJonavos%20g.%20254a%2C%20Kaunas%2044132!5e0!3m2!1slt!2slt!4v1700000000000!5m2!1slt!2slt"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon 
} from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'default'
});

const form = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref(null);

async function submitForm() {
  isSubmitting.value = true;
  submitStatus.value = null;
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    });
    
    const result = await response.json();
    
    if (response.ok) {
      submitStatus.value = {
        success: true,
        message: 'Jūsų žinutė sėkmingai išsiųsta! Susisieksime su jumis netrukus.'
      };
      form.value = { name: '', email: '', message: '' };
    } else {
      throw new Error(result.message || 'Nepavyko išsiųsti žinutės');
    }
  } catch (error) {
    submitStatus.value = {
      success: false,
      message: error.message || 'Įvyko klaida. Prašome bandyti dar kartą.'
    };
  } finally {
    isSubmitting.value = false;
  }
}
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