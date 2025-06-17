<template>
  <div class="px-4 md:px-0">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8">
      <h1 class="ml-12 lg:ml-0 text-2xl md:text-3xl font-bold text-white">Darbo paraiškos</h1>
      <button 
        @click="loadApplications" 
        class="px-3 md:px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:from-purple-400 hover:to-blue-500 transition-all duration-200 transform hover:scale-105 flex items-center justify-center sm:justify-start"
      >
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
      
      <div v-if="applications.length === 0" class="glass-card rounded-xl p-8 md:p-16 text-center">
        <BriefcaseIcon class="w-12 h-12 md:w-16 md:h-16 text-gray-600 mx-auto mb-3 md:mb-4" />
        <p class="text-base md:text-lg text-gray-400">Darbo paraiškų nėra.</p>
      </div>
      
      <div v-else class="space-y-4 md:space-y-6">
        <div
          v-for="application in applications"
          :key="application.id"
          class="glass-card rounded-xl p-4 md:p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
        >
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 md:gap-4 mb-4">
            <div class="flex items-center">
              <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mr-3 md:mr-4">
                <span class="text-white font-bold text-sm md:text-base">{{ application.name.charAt(0).toUpperCase() }}</span>
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-semibold text-white">{{ application.name }}</h3>
                <p class="text-sm md:text-base text-purple-300">{{ application.position }}</p>
              </div>
            </div>
            <div class="flex flex-col items-end gap-2">
              <span class="text-xs md:text-sm text-gray-400 bg-white/5 px-2 md:px-3 py-1 rounded-full">
                {{ new Date(application.createdAt).toLocaleString() }}
              </span>
              <span :class="[
                'text-xs md:text-sm px-2 md:px-3 py-1 rounded-full',
                application.status === 'accepted' ? 'bg-green-500/20 text-green-400' :
                application.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                'bg-yellow-500/20 text-yellow-400'
              ]">
                {{ getStatusText(application.status) }}
              </span>
            </div>
          </div>
          
          <div class="ml-0 sm:ml-14 space-y-3 md:space-y-4">
            <div class="flex flex-wrap gap-3 md:gap-4">
              <p class="text-sm md:text-base text-purple-300">
                <EnvelopeIcon class="w-3.5 h-3.5 md:w-4 md:h-4 inline-block mr-1" />
                {{ application.email }}
              </p>
              <p class="text-sm md:text-base text-purple-300">
                <PhoneIcon class="w-3.5 h-3.5 md:w-4 md:h-4 inline-block mr-1" />
                {{ application.phone }}
              </p>
              <p class="text-sm md:text-base text-purple-300">
                <AcademicCapIcon class="w-3.5 h-3.5 md:w-4 md:h-4 inline-block mr-1" />
                {{ application.experience }}
              </p>
            </div>
            
            <div>
              <h4 class="text-sm md:text-base text-white font-semibold mb-2">Motyvacinis laiškas:</h4>
              <div class="glass-card rounded-lg p-3 md:p-4 text-sm md:text-base text-gray-300">
                {{ application.coverLetter }}
              </div>
            </div>
            
            <div v-if="application.cvUrl" class="flex items-center">
              <DocumentTextIcon class="w-4 h-4 md:w-5 md:h-5 text-purple-400 mr-2" />
              <a 
                :href="application.cvUrl" 
                target="_blank" 
                class="text-sm md:text-base text-purple-400 hover:text-purple-300 underline"
              >
                Peržiūrėti CV
              </a>
            </div>
            
            <div class="flex flex-wrap gap-2 md:gap-3">
              <button 
                v-if="application.status === 'pending'"
                @click="openAcceptModal(application)"
                class="px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-green-500/10 text-green-300 hover:bg-green-500/20 transition-colors duration-200 flex items-center text-sm md:text-base"
              >
                <CheckIcon class="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" />
                Priimti
              </button>
              <button 
                @click="openReplyModal(application)"
                class="px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors duration-200 flex items-center text-sm md:text-base"
              >
                <EnvelopeIcon class="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" />
                {{ application.reply ? 'Redaguoti atsakymą' : 'Susisiekti' }}
              </button>
              <button 
                v-if="application.status === 'pending'"
                @click="openRejectModal(application)"
                class="px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-red-500/10 text-red-300 hover:bg-red-500/20 transition-colors duration-200 flex items-center text-sm md:text-base"
              >
                <XMarkIcon class="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" />
                Atmesti
              </button>
              <button 
                @click="deleteApplication(application.id)"
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
        <h3 class="text-xl font-bold text-white mb-4">Susisiekti su kandidatu</h3>
        <div class="mb-4">
          <p class="text-sm text-gray-400 mb-2">Kandidatas:</p>
          <div class="glass-card rounded-lg p-3 text-sm text-gray-300">
            {{ selectedApplication?.name }} - {{ selectedApplication?.position }}
          </div>
        </div>
        <div class="mb-4">
          <label for="reply" class="block text-sm text-gray-400 mb-2">Jūsų žinutė:</label>
          <textarea
            id="reply"
            v-model="replyText"
            rows="4"
            class="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Įveskite savo žinutę..."
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
            Siųsti žinutę
          </button>
        </div>
      </div>
    </div>

    <!-- accept modal -->
    <div v-if="showAcceptModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="glass-card rounded-xl p-6 max-w-2xl w-full mx-4">
        <h3 class="text-xl font-bold text-white mb-4">Priimti kandidatą</h3>
        <div class="mb-4">
          <p class="text-sm text-gray-400 mb-2">Kandidatas:</p>
          <div class="glass-card rounded-lg p-3 text-sm text-gray-300">
            {{ selectedApplication?.name }} - {{ selectedApplication?.position }}
          </div>
        </div>
        <div class="mb-4">
          <label for="acceptMessage" class="block text-sm text-gray-400 mb-2">Žinutė kandidatui:</label>
          <textarea
            id="acceptMessage"
            v-model="acceptMessage"
            rows="4"
            class="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Įveskite žinutę kandidatui..."
          ></textarea>
        </div>
        <div class="flex justify-end gap-3">
          <button
            @click="closeAcceptModal"
            class="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-colors duration-200"
          >
            Atšaukti
          </button>
          <button
            @click="acceptApplication"
            class="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-400 hover:to-green-500 transition-all duration-200"
            :disabled="!acceptMessage.trim()"
          >
            Patvirtinti priėmimą
          </button>
        </div>
      </div>
    </div>

    <!-- reject modal -->
    <div v-if="showRejectModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="glass-card rounded-xl p-6 max-w-2xl w-full mx-4">
        <h3 class="text-xl font-bold text-white mb-4">Atmesti kandidatą</h3>
        <div class="mb-4">
          <p class="text-sm text-gray-400 mb-2">Kandidatas:</p>
          <div class="glass-card rounded-lg p-3 text-sm text-gray-300">
            {{ selectedApplication?.name }} - {{ selectedApplication?.position }}
          </div>
        </div>
        <div class="mb-4">
          <label for="rejectMessage" class="block text-sm text-gray-400 mb-2">Žinutė kandidatui:</label>
          <textarea
            id="rejectMessage"
            v-model="rejectMessage"
            rows="4"
            class="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Įveskite žinutę kandidatui..."
          ></textarea>
        </div>
        <div class="flex justify-end gap-3">
          <button
            @click="closeRejectModal"
            class="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-colors duration-200"
          >
            Atšaukti
          </button>
          <button
            @click="rejectApplication"
            class="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium hover:from-red-400 hover:to-red-500 transition-all duration-200"
            :disabled="!rejectMessage.trim()"
          >
            Patvirtinti atmetimą
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
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ArrowPathIcon, 
  BriefcaseIcon,
  ExclamationCircleIcon,
  CheckIcon,
  XMarkIcon,
  TrashIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline';
import SuccessMessage from '~/components/SuccessMessage.vue';

definePageMeta({
  layout: 'admin',
  middleware: ['auth']
});

const applications = ref([]);
const loading = ref(true);
const error = ref(null);
const success = ref(null);

// modal states
const showReplyModal = ref(false);
const showAcceptModal = ref(false);
const showRejectModal = ref(false);
const selectedApplication = ref(null);
const replyText = ref('');
const acceptMessage = ref('');
const rejectMessage = ref('');

useSeoMeta({
  title: 'Darbo skelbimai - E-Shop99'
})

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

function getStatusText(status) {
  switch (status) {
    case 'accepted':
      return 'Priimta';
    case 'rejected':
      return 'Atmesta';
    default:
      return 'Laukiama';
  }
}

// reply modal functions
function openReplyModal(application) {
  selectedApplication.value = application;
  replyText.value = application.reply || '';
  showReplyModal.value = true;
}

function closeReplyModal() {
  showReplyModal.value = false;
  selectedApplication.value = null;
  replyText.value = '';
}

async function sendReply() {
  if (!selectedApplication.value || !replyText.value.trim()) return;

  try {
    const response = await fetch(`/api/job-application/${selectedApplication.value.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reply: replyText.value.trim() })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Nepavyko išsiųsti žinutės');
    }

    const updatedApplication = await response.json();
    const index = applications.value.findIndex(a => a.id === updatedApplication.id);
    if (index !== -1) {
      applications.value[index] = updatedApplication;
    }

    closeReplyModal();
    success.value = 'Žinutė sėkmingai išsiųsta';
    setTimeout(() => {
      success.value = null;
    }, 3000);
  } catch (err) {
    console.error('Error sending reply:', err);
    if (err.message.includes('email')) {
      error.value = 'Žinutė išsaugota, bet nepavyko išsiųsti el. laiško. Bandykite dar kartą vėliau.';
    } else {
      error.value = err.message || 'Įvyko klaida bandant išsiųsti žinutę';
    }
  }
}

// Accept modal functions
function openAcceptModal(application) {
  selectedApplication.value = application;
  acceptMessage.value = '';
  showAcceptModal.value = true;
}

function closeAcceptModal() {
  showAcceptModal.value = false;
  selectedApplication.value = null;
  acceptMessage.value = '';
}

async function acceptApplication() {
  if (!selectedApplication.value || !acceptMessage.value.trim()) return;

  try {
    const response = await fetch(`/api/job-application/${selectedApplication.value.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'accepted',
        reply: acceptMessage.value.trim()
      })
    });

    if (!response.ok) {
      throw new Error('Nepavyko priimti kandidato');
    }

    const updatedApplication = await response.json();
    const index = applications.value.findIndex(a => a.id === updatedApplication.id);
    if (index !== -1) {
      applications.value[index] = updatedApplication;
    }

    closeAcceptModal();
  } catch (err) {
    error.value = err.message || 'Įvyko klaida bandant priimti kandidatą';
  }
}

// reject modal functions
function openRejectModal(application) {
  selectedApplication.value = application;
  rejectMessage.value = '';
  showRejectModal.value = true;
}

function closeRejectModal() {
  showRejectModal.value = false;
  selectedApplication.value = null;
  rejectMessage.value = '';
}

async function rejectApplication() {
  if (!selectedApplication.value || !rejectMessage.value.trim()) return;

  try {
    const response = await fetch(`/api/job-application/${selectedApplication.value.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'rejected',
        reply: rejectMessage.value.trim()
      })
    });

    if (!response.ok) {
      throw new Error('Nepavyko atmesti kandidato');
    }

    const updatedApplication = await response.json();
    const index = applications.value.findIndex(a => a.id === updatedApplication.id);
    if (index !== -1) {
      applications.value[index] = updatedApplication;
    }

    closeRejectModal();
  } catch (err) {
    error.value = err.message || 'Įvyko klaida bandant atmesti kandidatą';
  }
}

async function deleteApplication(id) {
  if (!confirm('Ar tikrai norite ištrinti šią paraišką?')) return;

  try {
    const response = await fetch(`/api/job-application/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Nepavyko ištrinti paraiškos');
    }

    applications.value = applications.value.filter(a => a.id !== id);
  } catch (err) {
    error.value = err.message || 'Įvyko klaida bandant ištrinti paraišką';
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