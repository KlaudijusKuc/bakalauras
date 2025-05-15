<template>
  <div class="min-h-screen flex flex-col bg-[#1A1D2D]">
    <TheHeader />
    <main class="flex-grow pt-20">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>

<style>
:root {
  --color-navy-900: #0a192f;
  --color-navy-800: #112240;
  --color-navy-700: #1d3461;
  --color-navy-600: #2a4365;
}

.bg-navy-900 {
  background-color: var(--color-navy-900);
}

.bg-navy-800 {
  background-color: var(--color-navy-800);
}

.bg-navy-700 {
  background-color: var(--color-navy-700);
}

.bg-navy-600 {
  background-color: var(--color-navy-600);
}
</style> 