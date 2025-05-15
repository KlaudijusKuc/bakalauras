<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-white">Kontaktinės žinutės</h1>
      <button class="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:from-purple-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 flex items-center">
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
    
    <div v-else-if="messages.length === 0" class="glass-card rounded-xl p-16 text-center">
      <InboxIcon class="w-16 h-16 text-gray-600 mx-auto mb-4" />
      <p class="text-gray-400 text-lg">Žinučių nėra.</p>
    </div>
    
    <div v-else class="space-y-6">
      <div
        v-for="message in messages"
        :key="message.id"
        class="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
      >
        <div class="flex justify-between items-start mb-4">
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mr-4">
              <span class="text-white font-bold">{{ message.name.charAt(0).toUpperCase() }}</span>
            </div>
            <h3 class="text-xl font-semibold text-white">{{ message.name }}</h3>
          </div>
          <span class="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">{{ new Date(message.createdAt).toLocaleString() }}</span>
        </div>
        <div class="ml-14">
          <p class="text-purple-300 mb-3">
            <EnvelopeIcon class="w-4 h-4 inline-block mr-1" />
            {{ message.email }}
          </p>
          <div class="glass-card rounded-lg p-4 text-gray-300">
            {{ message.message }}
          </div>
          <div class="mt-4 flex space-x-3">
            <button class="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors duration-200 flex items-center">
              <EnvelopeIcon class="w-4 h-4 mr-1" />
              Atsakyti
            </button>
            <button class="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-300 hover:bg-red-500/20 transition-colors duration-200 flex items-center">
              <TrashIcon class="w-4 h-4 mr-1" />
              Ištrinti
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
  ArrowPathIcon, 
  InboxIcon,
  ExclamationCircleIcon,
  TrashIcon
} from '@heroicons/vue/24/outline';

definePageMeta({
  layout: 'admin'
});

const messages = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  await loadMessages();
});

async function loadMessages() {
  loading.value = true;
  error.value = null;
  
  try {
    const response = await fetch('/api/contact');
    
    if (!response.ok) {
      throw new Error('Nepavyko įkelti žinučių');
    }
    
    messages.value = await response.json();
  } catch (err) {
    error.value = err.message || 'Įvyko klaida bandant įkelti žinutes';
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