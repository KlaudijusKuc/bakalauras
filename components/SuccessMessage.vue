<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-2 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-2 opacity-0"
  >
    <div v-if="show" class="fixed bottom-4 right-4 z-50">
      <div class="glass-card rounded-lg p-4 bg-green-500/10 border border-green-500/30 text-green-300 flex items-center gap-2 shadow-lg">
        <CheckCircleIcon class="w-5 h-5 text-green-400" />
        <span>{{ message }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline';

defineProps({
  show: {
    type: Boolean,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style> 