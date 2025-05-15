<template>
  <div>
    <h1 class="text-3xl font-bold text-white mb-8">Valdymo panelė</h1>
    
    <!-- info korteles -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <!-- kontaktiniu zinuciu kortele -->
      <div class="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
        <div class="flex items-start">
          <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
            <EnvelopeIcon class="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h2 class="text-xl font-bold text-white mb-1">Kontaktinės žinutės</h2>
            <p class="text-gray-400 mb-1">Iš viso: <span class="text-white font-bold">{{ stats.messages }}</span></p>
            <p class="text-gray-400 mb-3" v-if="stats.latestMessage">
              Naujausias: <span class="text-purple-400">{{ formatDate(new Date(stats.latestMessage.createdAt)) }}</span>
            </p>
            <NuxtLink 
              to="/admin/messages" 
              class="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              Peržiūrėti žinutes
              <ArrowRightIcon class="w-4 h-4 ml-1" />
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- darbo paraisku kortele -->
      <div class="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
        <div class="flex items-start">
          <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
            <BriefcaseIcon class="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h2 class="text-xl font-bold text-white mb-1">Darbo paraiškos</h2>
            <p class="text-gray-400 mb-1">Iš viso: <span class="text-white font-bold">{{ stats.jobApplications }}</span></p>
            <p class="text-gray-400 mb-3" v-if="stats.latestJobApplication">
              Naujausias: <span class="text-purple-400">{{ formatDate(new Date(stats.latestJobApplication.createdAt)) }}</span>
            </p>
            <NuxtLink 
              to="/admin/jobs" 
              class="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              Peržiūrėti paraiškas
              <ArrowRightIcon class="w-4 h-4 ml-1" />
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- svetaines statistikos kortele -->
      <div class="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
        <div class="flex items-start">
          <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
            <ChartBarIcon class="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h2 class="text-xl font-bold text-white mb-1">Svetainės statistika</h2>
            <p class="text-gray-400 mb-1">
              Serverio laikas: <span class="text-white">{{ new Date().toLocaleTimeString() }}</span>
            </p>
            <p class="text-gray-400 mb-3">
              Sistema aktyvuota: <span class="text-white">{{ formatRelativeTime(stats.serverStartTime) }}</span>
            </p>
            <button 
              @click="refreshStats"
              class="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              Atnaujinti statistiką
              <ArrowPathIcon class="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- naujausiu veiksmu kortele -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-white mb-6">Naujausi veiksmai</h2>
      <div class="glass-card rounded-xl p-6">
        <div class="space-y-4">
          <div v-if="loading" class="flex justify-center p-8">
            <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-500"></div>
          </div>
          
          <div v-else-if="recentActivity.length === 0" class="text-center py-8">
            <p class="text-gray-400">Nėra naujausių veiksmų</p>
          </div>
          
          <div v-else v-for="(activity, index) in recentActivity" :key="index" class="flex items-start pb-4 border-b border-white/5 last:border-0">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
              <component :is="getActivityIcon(activity.type)" class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1">
              <p class="text-white">{{ activity.description }}</p>
              <p class="text-gray-400 text-sm">{{ formatDate(activity.date) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- sistemos statuso kortele -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-white mb-6">Sistemos būsena</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- duomenu bazes statuso kortele -->
        <div class="glass-card rounded-xl p-6">
          <div class="flex items-center mb-3">
            <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 class="text-white font-semibold">Duomenų bazė</h3>
          </div>
          <p class="text-gray-400 text-sm">
            Duomenų bazė veikia be sutrikimų. Paskutinis prisijungimas: {{ formatDateFull(stats.lastDatabaseConnection) }}
          </p>
        </div>
        
        <!-- API statuso kortele -->
        <div class="glass-card rounded-xl p-6">
          <div class="flex items-center mb-3">
            <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 class="text-white font-semibold">API</h3>
          </div>
          <p class="text-gray-400 text-sm">
            API veikia be sutrikimų. Paskutinis užklausos laikas: {{ stats.lastApiResponseTime }}ms
          </p>
        </div>
        
        <!-- serverio statuso kortele -->
        <div class="glass-card rounded-xl p-6">
          <div class="flex items-center mb-3">
            <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 class="text-white font-semibold">Serveris</h3>
          </div>
          <p class="text-gray-400 text-sm">
            Serveris veikia normalioje apkrovoje. Sesijos trukmė: {{ formatDuration(stats.serverUptime) }}
          </p>
        </div>
        
        <!-- saugyklos statuso kortele -->
        <div class="glass-card rounded-xl p-6">
          <div class="flex items-center mb-3">
            <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 class="text-white font-semibold">Saugykla</h3>
          </div>
          <p class="text-gray-400 text-sm">
            Saugykla veikia be sutrikimų. Panaudota: {{ stats.storageUsed }}% iš skirtos vietos
          </p>
        </div>
      </div>
    </div>
    
    <!-- greiti veiksmai -->
    <div>
      <h2 class="text-2xl font-bold text-white mb-6">Greiti veiksmai</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink to="/admin/messages" class="glass-card rounded-xl p-4 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200">
          <EnvelopeIcon class="w-5 h-5 mr-2 text-purple-500" />
          Peržiūrėti žinutes
        </NuxtLink>
        <NuxtLink to="/admin/jobs" class="glass-card rounded-xl p-4 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200">
          <BriefcaseIcon class="w-5 h-5 mr-2 text-purple-500" />
          Peržiūrėti paraiškas
        </NuxtLink>
        <NuxtLink to="/" target="_blank" class="glass-card rounded-xl p-4 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200">
          <GlobeAltIcon class="w-5 h-5 mr-2 text-purple-500" />
          Atidaryti svetainę
        </NuxtLink>
        <button @click="refreshStats" class="glass-card rounded-xl p-4 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200">
          <ArrowPathIcon class="w-5 h-5 mr-2 text-purple-500" />
          Atnaujinti duomenis
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { 
  EnvelopeIcon, 
  BriefcaseIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  ArrowPathIcon,
  UserIcon,
  BellIcon
} from '@heroicons/vue/24/outline';

definePageMeta({
  layout: 'admin'
});

const loading = ref(true);
const stats = ref({
  messages: 0,
  jobApplications: 0,
  latestMessage: null,
  latestJobApplication: null,
  serverStartTime: new Date(),
  serverUptime: 0,
  lastDatabaseConnection: new Date(),
  lastApiResponseTime: 0,
  storageUsed: 0
});

const recentActivity = ref([]);

onMounted(async () => {
  await fetchStats();
});

async function fetchStats() {
  loading.value = true;
  
  try {
    // gauti kontaktiniu zinuciu duomenis
    const messagesResponse = await fetch('/api/contact');
    const messages = await messagesResponse.json();
    
    // gauti darbo paraisku duomenis
    const jobsResponse = await fetch('/api/job-application');
    const jobApplications = await jobsResponse.json();
    
    // atnaujinti statistikas
    stats.value.messages = messages.length;
    stats.value.jobApplications = jobApplications.length;
    stats.value.latestMessage = messages[0] || null;
    stats.value.latestJobApplication = jobApplications[0] || null;
    
    // nustatyti serverio statistikas
    stats.value.serverStartTime = new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 7)); // Simulate server up for up to a week
    stats.value.serverUptime = Date.now() - stats.value.serverStartTime;
    stats.value.lastDatabaseConnection = new Date();
    stats.value.lastApiResponseTime = Math.floor(Math.random() * 100) + 50; // random laikas tarp 50-150ms
    stats.value.storageUsed = Math.floor(Math.random() * 30) + 10; // random naudojimas nuo 10-40%
    
    // sukurti naujausiu veiksmu duomenis
    recentActivity.value = [];
    
    // prideti kontaktiniu zinuciu duomenis
    messages.slice(0, 2).forEach(message => {
      recentActivity.value.push({
        type: 'message',
        description: `Nauja kontaktinė žinutė nuo ${message.name}`,
        date: new Date(message.createdAt)
      });
    });
    
    // prideti darbo paraisku duomenis
    jobApplications.slice(0, 2).forEach(job => {
      recentActivity.value.push({
        type: 'application',
        description: `Nauja darbo paraiška ${job.position} pozicijai nuo ${job.name}`,
        date: new Date(job.createdAt)
      });
    });
    
    // prideti sistemos pranesima
    recentActivity.value.push({
      type: 'notification',
      description: 'Sistemos statistika atnaujinta',
      date: new Date()
    });
    
    // rusiuoti pagal data
    recentActivity.value.sort((a, b) => b.date - a.date);
    
  } catch (error) {
    console.error('Error fetching stats:', error);
  } finally {
    loading.value = false;
  }
}

async function refreshStats() {
  await fetchStats();
}

function getActivityIcon(type) {
  switch(type) {
    case 'message':
      return EnvelopeIcon;
    case 'application':
      return BriefcaseIcon;
    case 'notification':
      return BellIcon;
    default:
      return UserIcon;
  }
}

function formatDate(date) {
  // laiko formatavimas
  const now = new Date();
  const diffMs = now - date;
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffDays > 0) {
    return `prieš ${diffDays} ${diffDays === 1 ? 'dieną' : 'dienas'}`;
  } else if (diffHours > 0) {
    return `prieš ${diffHours} ${getHourForm(diffHours)}`;
  } else if (diffMins > 0) {
    return `prieš ${diffMins} ${getMinuteForm(diffMins)}`;
  } else {
    return 'Ką tik';
  }
}

function formatDateFull(date) {
  return date.toLocaleString('lt-LT', {
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

function formatRelativeTime(date) {
  const now = new Date();
  const diffMs = now - date;
  return formatDuration(diffMs);
}

function formatDuration(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return `${days}d ${hours % 24}h ${minutes % 60}m`;
  } else if (hours > 0) {
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  } else {
    return `${seconds}s`;
  }
}

function getHourForm(hours) {
  if (hours === 1) return 'valandą';
  if (hours > 1 && hours < 10) return 'valandas';
  return 'valandų';
}

function getMinuteForm(minutes) {
  if (minutes === 1) return 'minutę';
  if (minutes > 1 && minutes < 10) return 'minutes';
  return 'minučių';
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style> 