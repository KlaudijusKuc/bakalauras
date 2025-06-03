<template>
  <section class="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div class="space-y-2">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Naujausi Įrašai
          </h2>
          <p class="text-gray-400 max-w-2xl">
            Atraskite naujausius technologijų pasaulio įžvalgas ir tendencijas
          </p>
        </div>
        <NuxtLink 
          to="/blog" 
          class="group px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-pink-500/10 backdrop-blur-sm
                 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
        >
          <span class="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent font-medium">
            Visi Įrašai
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </NuxtLink>
      </div>

      <!-- Blog Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="post in latestPosts" 
          :key="post.id"
          class="group relative flex flex-col rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 
                 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden"
        >
          <!-- Image Container -->
          <div class="relative h-56 overflow-hidden">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80"></div>
            
            <!-- Category Badge -->
            <span 
              class="absolute top-4 left-4 text-xs font-medium text-cyan-400 bg-cyan-400/10 
                     border border-cyan-400/20 px-3 py-1 rounded-full"
            >
              {{ post.category }}
            </span>
          </div>

          <!-- Content -->
          <div class="flex flex-col flex-grow p-6 space-y-4">
            <div class="flex-grow space-y-3">
              <h3 class="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {{ post.title }}
              </h3>
              <p class="text-gray-300 text-sm line-clamp-2">
                {{ post.excerpt }}
              </p>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-700/50">
              <time class="text-sm text-gray-400" :datetime="post.isoDate">{{ post.date }}</time>
              <span class="text-cyan-400 text-sm font-medium group-hover:underline">Skaityti daugiau</span>
            </div>
          </div>

          <!-- Hover Effect Overlay -->
          <div class="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 
                      rounded-xl transition-all duration-500 pointer-events-none"></div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  image: string;
}

const latestPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Dirbtinio intelekto ateitis įmonių sprendimuose',
    excerpt: 'Sužinokite, kaip dirbtinis intelektas keičia verslo operacijas ir sprendimų priėmimo procesus šiuolaikinėse įmonėse. Analizuojame naujausias tendencijas ir pritaikymo galimybes.',
    category: 'DI ir ML',
    date: 'Kov 15, 2024',
    isoDate: '2024-03-15',
    image: 'images/blog-1.jpg'
  },
  {
    id: 2,
    title: 'Kibernetinio saugumo geriausia praktika 2024 metams',
    excerpt: 'Būkite žingsniu priekyje su mūsų išsamiu vadovu apie kibernetinio saugumo geriausias praktikas ir tendencijas. Praktiniai patarimai jūsų verslo saugumui.',
    category: 'Saugumas',
    date: 'Kov 12, 2024',
    isoDate: '2024-03-12',
    image: 'images/blog-2.jpg'
  },
  {
    id: 3,
    title: 'Sėkmingos migracijos į debesį istorijos',
    excerpt: 'Mokykitės iš realių pavyzdžių apie sėkmingas debesų migracijos strategijas ir jų poveikį verslui. Analizuojame didžiausias sėkmes ir išmoktas pamokas.',
    category: 'Debesis',
    date: 'Kov 10, 2024',
    isoDate: '2024-03-10',
    image: 'images/blog-3.jpg'
  }
]
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 