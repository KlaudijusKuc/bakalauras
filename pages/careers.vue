<template>
  <main class="min-h-screen bg-[#1A1D2D]">
    <!-- hero sekcija -->
    <section class="relative min-h-[50vh] flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      
      <div class="container mx-auto px-4 relative z-1">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-display font-bold mb-6 text-white">
            Karjera su Mumis
          </h1>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Prisijunkite prie mūsų komandos ir kurkite ateities skaitmeninę realybę kartu
          </p>
        </div>
      </div>
    </section>

    <!-- kodel verta prisijungti sekcija -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>

      <div class="container mx-auto px-4 relative z-1">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold mb-4 text-white">Kodėl Verta Prisijungti</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Mes siūlome daugiau nei tik darbą – mūsų komandoje laukia galimybės augti ir tobulėti
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <!-- priezastis 1 -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full items-center text-center">
              <div class="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <AcademicCapIcon class="w-8 h-8 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Profesinis augimas</h3>
              <p class="text-gray-300">
                Nuolatinis mokymasis ir kvalifikacijos kėlimas, tarptautiniai sertifikatai ir mentorystė.
              </p>
            </div>
          </div>

          <!-- priezastis 2 -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full items-center text-center">
              <div class="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <RocketLaunchIcon class="w-8 h-8 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Inovatyvūs projektai</h3>
              <p class="text-gray-300">
                Darbas su naujausiomis technologijomis ir įrankiais, kurie keičia skaitmeninę ateitį.
              </p>
            </div>
          </div>

          <!-- priezastis 3 -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full items-center text-center">
              <div class="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <UsersIcon class="w-8 h-8 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Puiki komanda</h3>
              <p class="text-gray-300">
                Draugiška ir profesionali aplinka, komandiniai renginiai ir bendras tikslas.
              </p>
            </div>
          </div>

          <!-- priezastis 4 -->
          <div class="glass-card rounded-xl p-8 hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col h-full items-center text-center">
              <div class="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <HeartIcon class="w-8 h-8 text-purple-500" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4">Papildomos naudos</h3>
              <p class="text-gray-300">
                Lankstus darbo grafikas, nuotolinio darbo galimybės, sveikatos draudimas ir kitos naudos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- atviros pozicijos sekcija -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>

      <div class="container mx-auto px-4 relative z-1">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold mb-4 text-white">Atviros Pozicijos</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Šiuo metu ieškome talentingų specialistų šioms pozicijoms
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <!-- pozicija 1 -->
          <div class="glass-card rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
            <h3 class="text-2xl font-bold text-white mb-4">Full Stack Programuotojas</h3>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Pilnas etatas</span>
              <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Galimas nuotolinis</span>
              <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Mid-Senior</span>
            </div>
            <p class="text-gray-300 mb-6">
              Ieškome patyrusio Full Stack programuotojo, kuris prisijungtų prie mūsų komandos kuriant modernias web aplikacijas. Reikalinga patirtis su JavaScript/TypeScript, Vue.js, Node.js, ir reliacinėmis duomenų bazėmis.
            </p>
            <button @click="activeJob = 'Full Stack Programuotojas'; scrollToForm()" class="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
              Pateikti paraišką
            </button>
          </div>

          <!-- pozicija 2 -->
          <div class="glass-card rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
            <h3 class="text-2xl font-bold text-white mb-4">UI/UX Dizaineris</h3>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Pilnas etatas</span>
              <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Galimas nuotolinis</span>
              <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Junior-Mid</span>
            </div>
            <p class="text-gray-300 mb-6">
              Ieškome kūrybingo UI/UX dizainerio, kuris sukurtų išskirtines vartotojo sąsajas ir patirtis mūsų klientų projektams. Reikalinga patirtis su Figma, Adobe Creative Suite ir supratimas apie vartotojo elgseną.
            </p>
            <button @click="activeJob = 'UI/UX Dizaineris'; scrollToForm()" class="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
              Pateikti paraišką
            </button>
          </div>

          <!-- pozicija 3 -->
          <div class="glass-card rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
            <h3 class="text-2xl font-bold text-white mb-4">Mobiliųjų Programėlių Kūrėjas</h3>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Pilnas etatas</span>
              <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Galimas nuotolinis</span>
              <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Mid-Senior</span>
            </div>
            <p class="text-gray-300 mb-6">
              Ieškome Mobile App programuotojo, kuris sukurtų aukštos kokybės mobilias aplikacijas iOS ir Android platformoms. Reikalinga patirtis su Flutter, React Native, arba native iOS/Android development.
            </p>
            <button @click="activeJob = 'Mobiliųjų Programėlių Kūrėjas'; scrollToForm()" class="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
              Pateikti paraišką
            </button>
          </div>

          <!-- pozicija 4 -->
          <div class="glass-card rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
            <h3 class="text-2xl font-bold text-white mb-4">Skaitmeninio Marketingo Specialistas</h3>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Pilnas etatas</span>
              <span class="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Biuras</span>
              <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Junior-Mid</span>
            </div>
            <p class="text-gray-300 mb-6">
              Ieškome Digital Marketing specialisto, kuris padėtų mūsų klientams augti skaitmeninėje erdvėje. Reikalinga patirtis su SEO, SEM, socialinių tinklų marketingu ir analitikos įrankiais.
            </p>
            <button @click="activeJob = 'Skaitmeninio Marketingo Specialistas'; scrollToForm()" class="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
              Pateikti paraišką
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- forma -->
    <section id="applicationForm" class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-5"></div>

      <div class="container mx-auto px-4 relative z-1">
        <div class="max-w-3xl mx-auto">
          <div class="glass-card rounded-xl p-8">
            <h2 class="text-3xl font-display font-bold mb-6 text-white">Pateikti darbo paraišką</h2>
            <p v-if="activeJob" class="text-xl text-purple-300 mb-8">
              Pozicija: {{ activeJob }}
            </p>
            
            <form @submit.prevent="submitApplication" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block mb-2 text-gray-300">Vardas Pavardė</label>
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
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="phone" class="block mb-2 text-gray-300">Telefono numeris</label>
                  <input 
                    id="phone" 
                    v-model="form.phone" 
                    type="tel" 
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    required
                  />
                </div>
                
                <div class="relative">
                  <label for="position" class="block mb-2 text-gray-300">Pozicija</label>
                  <div class="custom-select-wrapper">
                    <button 
                      type="button"
                      @click="toggleDropdown('position')"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-left focus:outline-none focus:ring-2 focus:ring-purple-500/50 flex justify-between items-center"
                    >
                      <span v-if="form.position">{{ form.position }}</span>
                      <span v-else class="text-gray-400">Pasirinkite poziciją</span>
                      <ChevronDownIcon :class="[
                        'w-5 h-5 transition-transform duration-300', 
                        activeDropdown === 'position' ? 'rotate-180 text-purple-400' : 'text-gray-400'
                      ]" />
                    </button>
                    <div v-if="activeDropdown === 'position'" class="absolute z-10 mt-1 w-full bg-[#252A3F] border border-purple-500/30 rounded-lg shadow-lg shadow-purple-500/20 py-1 max-h-48 overflow-y-auto custom-scrollbar">
                      <div 
                        v-for="option in positionOptions" 
                        :key="option.value"
                        @click="selectOption('position', option.value)"
                        class="px-4 py-2 hover:bg-purple-500/20 cursor-pointer transition-colors duration-200 text-gray-300 hover:text-white"
                      >
                        {{ option.label }}
                      </div>
                    </div>
                    <select 
                      id="position" 
                      v-model="form.position" 
                      class="hidden"
                      required
                    >
                      <option value="" disabled>Pasirinkite poziciją</option>
                      <option value="Full Stack Programuotojas">Full Stack Programuotojas</option>
                      <option value="UI/UX Dizaineris">UI/UX Dizaineris</option>
                      <option value="Mobiliųjų Programėlių Kūrėjas">Mobiliųjų Programėlių Kūrėjas</option>
                      <option value="Skaitmeninio Marketingo Specialistas">Skaitmeninio Marketingo Specialistas</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div class="relative">
                <label for="experience" class="block mb-2 text-gray-300">Patirtis</label>
                <div class="custom-select-wrapper">
                  <button 
                    type="button"
                    @click="toggleDropdown('experience')"
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-left focus:outline-none focus:ring-2 focus:ring-purple-500/50 flex justify-between items-center"
                  >
                    <span v-if="form.experience">{{ experienceLabels[form.experience] || form.experience }}</span>
                    <span v-else class="text-gray-400">Pasirinkite patirties lygį</span>
                    <ChevronDownIcon :class="[
                      'w-5 h-5 transition-transform duration-300', 
                      activeDropdown === 'experience' ? 'rotate-180 text-purple-400' : 'text-gray-400'
                    ]" />
                  </button>
                  <div v-if="activeDropdown === 'experience'" class="absolute z-10 mt-1 w-full bg-[#252A3F] border border-purple-500/30 rounded-lg shadow-lg shadow-purple-500/20 py-1 max-h-48 overflow-y-auto custom-scrollbar">
                    <div 
                      v-for="option in experienceOptions" 
                      :key="option.value"
                      @click="selectOption('experience', option.value)"
                      class="px-4 py-2 hover:bg-purple-500/20 cursor-pointer transition-colors duration-200 text-gray-300 hover:text-white"
                    >
                      {{ option.label }}
                    </div>
                  </div>
                  <select 
                    id="experience" 
                    v-model="form.experience" 
                    class="hidden"
                    required
                  >
                    <option value="" disabled>Pasirinkite patirties lygį</option>
                    <option value="Student/Intern">Studentas/Praktikantas</option>
                    <option value="Junior (0-2 years)">Junior (0-2 metai)</option>
                    <option value="Mid-level (2-5 years)">Mid-level (2-5 metai)</option>
                    <option value="Senior (5+ years)">Senior (5+ metai)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label for="coverLetter" class="block mb-2 text-gray-300">Motyvacinis laiškas</label>
                <textarea 
                  id="coverLetter" 
                  v-model="form.coverLetter" 
                  rows="5" 
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  required
                ></textarea>
              </div>
              
              <div>
                <label for="cvUrl" class="block mb-2 text-gray-300">CV nuoroda (LinkedIn, Google Drive ir t.t.)</label>
                <input 
                  id="cvUrl" 
                  v-model="form.cvUrl" 
                  type="url" 
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  placeholder="https://"
                />
              </div>
              
              <div>
                <button 
                  type="submit" 
                  class="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:from-purple-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-[#1A1D2D] transition-all duration-200 transform hover:scale-105"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Siunčiama...' : 'Pateikti paraišką' }}
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
  </main>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { 
  AcademicCapIcon,
  RocketLaunchIcon,
  UsersIcon,
  HeartIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'default'
});

const activeJob = ref(null);
const form = ref({
  name: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  coverLetter: '',
  cvUrl: ''
});

const isSubmitting = ref(false);
const submitStatus = ref(null);
const activeDropdown = ref(null);

const positionOptions = [
  { value: 'Full Stack Programuotojas', label: 'Full Stack Programuotojas' },
  { value: 'UI/UX Dizaineris', label: 'UI/UX Dizaineris' },
  { value: 'Mobiliųjų Programėlių Kūrėjas', label: 'Mobiliųjų Programėlių Kūrėjas' },
  { value: 'Skaitmeninio Marketingo Specialistas', label: 'Skaitmeninio Marketingo Specialistas' }
];

const experienceOptions = [
  { value: 'Student/Intern', label: 'Studentas/Praktikantas' },
  { value: 'Junior (0-2 years)', label: 'Junior (0-2 metai)' },
  { value: 'Mid-level (2-5 years)', label: 'Mid-level (2-5 metai)' },
  { value: 'Senior (5+ years)', label: 'Senior (5+ metai)' }
];

const experienceLabels = {
  'Student/Intern': 'Studentas/Praktikantas',
  'Junior (0-2 years)': 'Junior (0-2 metai)',
  'Mid-level (2-5 years)': 'Mid-level (2-5 metai)',
  'Senior (5+ years)': 'Senior (5+ metai)'
};

// stebi kai activeJob keiciasi ir atnaujina formos pozicija
watch(activeJob, (newVal) => {
  if (newVal) {
    form.value.position = newVal;
  }
});

function toggleDropdown(type) {
  activeDropdown.value = activeDropdown.value === type ? null : type;
}

function selectOption(type, value) {
  form.value[type] = value;
  activeDropdown.value = null;
}

function closeDropdowns(e) {
  const isSelect = e.target.closest('.custom-select-wrapper');
  if (!isSelect) {
    activeDropdown.value = null;
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdowns);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdowns);
});

function scrollToForm() {
  document.getElementById('applicationForm').scrollIntoView({ 
    behavior: 'smooth'
  });
}

async function submitApplication() {
  isSubmitting.value = true;
  submitStatus.value = null;
  
  try {
    const response = await fetch('/api/job-application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    });
    
    let result;
    try {
      result = await response.json();
    } catch (e) {
      // Handle JSON parsing error
      throw new Error('Serverio atsakymo apdorojimo klaida');
    }
    
    if (response.ok) {
      submitStatus.value = {
        success: true,
        message: 'Jūsų paraiška sėkmingai išsiųsta! Peržiūrėsime jūsų kandidatūrą ir susisieksime su jumis artimiausiu metu.'
      };
      form.value = { 
        name: '', 
        email: '', 
        phone: '', 
        position: activeJob.value || '', 
        experience: '', 
        coverLetter: '',
        cvUrl: ''
      };
    } else {
      throw new Error(result.statusMessage || result.message || 'Nepavyko išsiųsti paraiškos');
    }
  } catch (error) {
    console.error('Form submission error:', error);
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

.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(139, 92, 246, 0.5) rgba(30, 30, 30, 0.3);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(30, 30, 30, 0.3);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.5);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.7);
}

.custom-select-wrapper {
  position: relative;
}

@keyframes dropdownFadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.custom-select-wrapper > div {
  animation: dropdownFadeIn 0.2s ease-out;
}
</style> 