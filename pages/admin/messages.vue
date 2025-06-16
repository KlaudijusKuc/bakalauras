<template>
  <div class="px-4 md:px-0">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8">
      <h1 class="ml-12 lg:ml-0 text-2xl md:text-3xl font-bold text-white">Kontaktinės žinutės</h1>
      <button @click="loadMessages" class="px-3 md:px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:from-purple-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 flex items-center justify-center sm:justify-start">
        <ArrowPathIcon class="w-4 h-4 md:w-5 md:h-5 mr-2" />
        Atnaujinti
      </button>
    </div>
    
    <div v-if="loading" class="glass-card rounded-xl p-8 md:p-16 flex justify-center">
      <div class="animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-b-2 border-purple-500"></div>
    </div>
    
    <template v-else>
      <div v-if="error" class="glass-card rounded-xl p-4 md:p-6 mb-6 bg-red-500/10 border border-red-500/30 text-red-300">
        <ExclamationCircleIcon class="w-5 h-5 md:w-6 md:h-6 text-red-400 inline-block mr-2" /> 
        {{ error }}
      </div>

      <SuccessMessage 
        :show="!!success" 
        :message="success"
      />
      
      <div v-if="messages.length === 0" class="glass-card rounded-xl p-8 md:p-16 text-center">
        <InboxIcon class="w-12 h-12 md:w-16 md:h-16 text-gray-600 mx-auto mb-3 md:mb-4" />
        <p class="text-base md:text-lg text-gray-400">Žinučių nėra.</p>
      </div>
      
      <div v-else class="space-y-4 md:space-y-6">
        <div
          v-for="message in messages"
          :key="message.id"
          class="glass-card rounded-xl p-4 md:p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
        >
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 md:gap-4 mb-4">
            <div class="flex items-center">
              <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mr-3 md:mr-4">
                <span class="text-white font-bold text-sm md:text-base">{{ message.name.charAt(0).toUpperCase() }}</span>
              </div>
              <h3 class="text-lg md:text-xl font-semibold text-white">{{ message.name }}</h3>
            </div>
            <span class="text-xs md:text-sm text-gray-400 bg-white/5 px-2 md:px-3 py-1 rounded-full">{{ new Date(message.createdAt).toLocaleString() }}</span>
          </div>
          <div class="ml-0 sm:ml-14">
            <p class="text-sm md:text-base text-purple-300 mb-2 md:mb-3">
              <EnvelopeIcon class="w-3.5 h-3.5 md:w-4 md:h-4 inline-block mr-1" />
              {{ message.email }}
            </p>
            <div class="glass-card rounded-lg p-3 md:p-4 text-sm md:text-base text-gray-300">
              {{ message.message }}
            </div>
            <div class="mt-3 md:mt-4 flex flex-wrap gap-2 md:gap-3">
              <button 
                @click="openReplyModal(message)"
                class="px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors duration-200 flex items-center text-sm md:text-base"
              >
                <EnvelopeIcon class="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" />
                {{ message.reply ? 'Redaguoti atsakymą' : 'Atsakyti' }}
              </button>
              <button 
                @click="deleteMessage(message.id)"
                class="px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-red-500/10 text-red-300 hover:bg-red-500/20 transition-colors duration-200 flex items-center text-sm md:text-base"
              >
                <TrashIcon class="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" />
                Ištrinti
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- reply modal -->
    <div v-if="showReplyModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="glass-card rounded-xl p-6 max-w-2xl w-full mx-4">
        <h3 class="text-xl font-bold text-white mb-4">Atsakyti į žinutę</h3>
        <div class="mb-4">
          <p class="text-sm text-gray-400 mb-2">Originali žinutė:</p>
          <div class="glass-card rounded-lg p-3 text-sm text-gray-300">
            {{ selectedMessage?.message }}
          </div>
        </div>
        <div class="mb-4">
          <label for="reply" class="block text-sm text-gray-400 mb-2">Jūsų atsakymas:</label>
          <textarea
            id="reply"
            v-model="replyText"
            rows="4"
            class="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Įveskite savo atsakymą..."
          ></textarea>
        </div>
        <div class="flex justify-end gap-3">
          <button
            @click="closeReplyModal"
            class="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-colors duration-200"
          >
            Atšaukti
          </button>
          <button
            @click="sendReply"
            class="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:from-purple-400 hover:to-blue-500 transition-all duration-200"
            :disabled="!replyText.trim()"
          >
            Siųsti atsakymą
          </button>
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
  TrashIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline';
import SuccessMessage from '~/components/SuccessMessage.vue';

definePageMeta({
  layout: 'admin',
  middleware: ['auth']
});

const messages = ref([]);
const loading = ref(true);
const error = ref(null);
const success = ref(null);
const showReplyModal = ref(false);
const selectedMessage = ref(null);
const replyText = ref('');

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

function openReplyModal(message) {
  selectedMessage.value = message;
  replyText.value = message.reply || '';
  showReplyModal.value = true;
}

function closeReplyModal() {
  showReplyModal.value = false;
  selectedMessage.value = null;
  replyText.value = '';
}

async function sendReply() {
  if (!selectedMessage.value || !replyText.value.trim()) return;

  try {
    const response = await fetch(`/api/contact/${selectedMessage.value.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reply: replyText.value.trim() })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Nepavyko išsiųsti atsakymo');
    }

    // update the message in the local state
    const updatedMessage = await response.json();
    const index = messages.value.findIndex(m => m.id === updatedMessage.id);
    if (index !== -1) {
      messages.value[index] = updatedMessage;
    }

    closeReplyModal();
    success.value = 'Atsakymas sėkmingai išsiųstas';
    setTimeout(() => {
      success.value = null;
    }, 3000);
  } catch (err) {
    console.error('Error sending reply:', err);
    if (err.message.includes('email')) {
      error.value = 'Žinutė išsaugota, bet nepavyko išsiųsti el. laiško. Bandykite dar kartą vėliau.';
    } else {
      error.value = err.message || 'Įvyko klaida bandant išsiųsti atsakymą';
    }
  }
}

async function deleteMessage(id) {
  if (!confirm('Ar tikrai norite ištrinti šią žinutę?')) return;

  try {
    const response = await fetch(`/api/contact/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Nepavyko ištrinti žinutės');
    }

    messages.value = messages.value.filter(m => m.id !== id);
  } catch (err) {
    error.value = err.message || 'Įvyko klaida bandant ištrinti žinutę';
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