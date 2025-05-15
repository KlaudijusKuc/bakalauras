<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-white">Darbo paraiškos</h1>
      <button 
        @click="loadApplications" 
        class="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:from-purple-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 flex items-center"
      >
        <ArrowPathIcon class="w-5 h-5 mr-2" />
        Atnaujinti
      </button>
    </div>
    
    <div v-if="loading" class="glass-card rounded-xl p-16 flex justify-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
    </div>
    
    <div v-else-if="error" class="glass-card rounded-xl p-6 mb-6 bg-red-500/10 border border-red-500/30 text-red-300">
      <ExclamationCircleIcon class="w-6 h-6 text-red-400 inline-block mr-2" /> 
      {{ error }}
    </div>
    
    <div v-else-if="applications.length === 0" class="glass-card rounded-xl p-16 text-center">
      <BriefcaseIcon class="w-16 h-16 text-gray-600 mx-auto mb-4" />
      <p class="text-gray-400 text-lg">Darbo paraiškų nėra.</p>
    </div>
    
    <div v-else class="space-y-6">
      <div
        v-for="application in applications"
        :key="application.id"
        class="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
      >
        <div class="flex justify-between items-start mb-4">
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mr-4">
              <span class="text-white font-bold">{{ application.name.charAt(0).toUpperCase() }}</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white">{{ application.name }}</h3>
              <p class="text-sm text-blue-300">{{ application.position }}</p>
            </div>
          </div>
          <span class="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">{{ new Date(application.createdAt).toLocaleString() }}</span>
        </div>
        
        <div class="ml-14 space-y-4">
          <div class="flex flex-wrap gap-4">
            <p class="text-purple-300">
              <EnvelopeIcon class="w-4 h-4 inline-block mr-1" />
              {{ application.email }}
            </p>
            <p class="text-purple-300">
              <PhoneIcon class="w-4 h-4 inline-block mr-1" />
              {{ application.phone }}
            </p>
            <p class="text-purple-300">
              <AcademicCapIcon class="w-4 h-4 inline-block mr-1" />
              {{ application.experience }}
            </p>
          </div>
          
          <div>
            <h4 class="text-white font-semibold mb-2">Motyvacinis laiškas:</h4>
            <div class="glass-card rounded-lg p-4 text-gray-300">
              {{ application.coverLetter }}
            </div>
          </div>
          
          <div v-if="application.cvUrl" class="flex items-center">
            <DocumentTextIcon class="w-5 h-5 text-purple-400 mr-2" />
            <a 
              :href="application.cvUrl" 
              target="_blank" 
              class="text-purple-400 hover:text-purple-300 underline"
            >
              Peržiūrėti CV
            </a>
          </div>
          
          <div class="flex space-x-3">
            <button class="px-3 py-1.5 rounded-lg bg-green-500/10 text-green-300 hover:bg-green-500/20 transition-colors duration-200 flex items-center">
              <CheckIcon class="w-4 h-4 mr-1" />
              Priimti
            </button>
            <button class="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors duration-200 flex items-center">
              <EnvelopeIcon class="w-4 h-4 mr-1" />
              Susisiekti
            </button>
            <button class="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-300 hover:bg-red-500/20 transition-colors duration-200 flex items-center">
              <XMarkIcon class="w-4 h-4 mr-1" />
              Atmesti
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { 
  EnvelopeIcon, 
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ArrowPathIcon, 
  BriefcaseIcon,
  ExclamationCircleIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline';

definePageMeta({
  layout: 'admin'
});

const applications = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  await loadApplications();
});

async function loadApplications() {
  loading.value = true;
  error.value = null;
  
  try {
    const response = await fetch('/api/job-application');
    
    if (!response.ok) {
      throw new Error('Nepavyko įkelti darbo paraiškų');
    }
    
    applications.value = await response.json();
  } catch (err) {
    error.value = err.message || 'Įvyko klaida bandant įkelti darbo paraiškas';
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style> 