<template>
  <section class="py-16 bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Naujausi Įrašai
        </h2>
        <NuxtLink to="/blog" class="px-6 py-2 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/50 hover:bg-cyan-400/20 transition-all duration-300">
          Visi Įrašai
        </NuxtLink>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <article v-for="post in latestPosts" :key="post.id" 
                 class="group rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300 overflow-hidden">
          <div class="relative h-48 overflow-hidden">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <span class="text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">{{ post.category }}</span>
              <span class="text-gray-400 text-sm ml-4">{{ post.date }}</span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{{ post.title }}</h3>
            <p class="text-gray-300 line-clamp-2">{{ post.excerpt }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const latestPosts = [
  {
    id: 1,
    title: 'Dirbtinio intelekto ateitis įmonių sprendimuose',
    excerpt: 'Sužinokite, kaip dirbtinis intelektas keičia verslo operacijas ir sprendimų priėmimo procesus šiuolaikinėse įmonėse.',
    category: 'DI ir ML',
    date: 'Kov 15, 2024',
    image: '/blog/ai-enterprise.jpg'
  },
  {
    id: 2,
    title: 'Kibernetinio saugumo geriausia praktika 2024 metams',
    excerpt: 'Būkite žingsniu priekyje su mūsų išsamiu vadovu apie kibernetinio saugumo geriausias praktikas ir tendencijas.',
    category: 'Saugumas',
    date: 'Kov 12, 2024',
    image: '/blog/cybersecurity.jpg'
  },
  {
    id: 3,
    title: 'Sėkmingos migracijos į debesį istorijos',
    excerpt: 'Mokykitės iš realių pavyzdžių apie sėkmingas debesų migracijos strategijas ir jų poveikį verslui.',
    category: 'Debesis',
    date: 'Kov 10, 2024',
    image: '/blog/cloud-migration.jpg'
  }
]
</script> 