<template>
  <main class="min-h-screen bg-[#1A1D2D]">
    <!-- backgroundas -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
    </div>

    <!-- content -->
    <div class="relative z-1">
      <section class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Mūsų tinklaraštis
            </h1>
            <p class="text-xl text-gray-300">
              Naujausi straipsniai apie technologijas, verslą ir inovacijas
            </p>
          </div>
        </div>
      </section>

      <!-- gridas -->
      <section class="py-12 relative">
        <div class="container mx-auto px-4">
          <div v-if="loading" class="flex justify-center items-center py-20">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>

          <div v-else-if="error" class="max-w-2xl mx-auto">
            <div class="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-center">
              {{ error }}
            </div>
          </div>

          <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NuxtLink 
              v-for="post in posts" 
              :key="post.id"
              :to="`/blog/${post.slug}`"
              class="group relative flex flex-col rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 
                     hover:border-purple-400/50 transition-all duration-500 overflow-hidden"
            >
              <!-- foto -->
              <div class="relative h-56 overflow-hidden">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80"></div>

                <span 
                  class="absolute top-4 left-4 text-xs font-medium text-white bg-gray-900/90 
                         border border-gray-700 px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  {{ post.category }}
                </span>
              </div>

              <div class="flex flex-col flex-grow p-6 space-y-4">
                <div class="flex-grow space-y-3">
                  <h2 class="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {{ post.title }}
                  </h2>
                  <p class="text-gray-300 text-sm line-clamp-2">
                    {{ post.excerpt }}
                  </p>
                </div>

                <div class="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <time class="text-sm text-gray-400" :datetime="formatDate(post.createdAt)">
                    {{ formatDateLocale(post.createdAt) }}
                  </time>
                  <span class="text-purple-400 text-sm font-medium group-hover:underline">
                    Skaityti daugiau
                  </span>
                </div>
              </div>

              <!-- hover efektas -->
              <div class="absolute inset-0 border-2 border-purple-400/0 group-hover:border-purple-400/50 
                          rounded-xl transition-all duration-500 pointer-events-none"></div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Blogas - E-Shop99'
})

definePageMeta({
  layout: 'default'
})

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  published: boolean
  createdAt: string
  updatedAt: string
}

const posts = ref<BlogPost[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

// datos formatavimas
const formatDate = (date: string) => {
  return new Date(date).toISOString().split('T')[0]
}

// formatavimas display
const formatDateLocale = (date: string) => {
  return new Date(date).toLocaleDateString('lt-LT', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// fetch posts
const fetchPosts = async () => {
  try {
    loading.value = true
    error.value = null
    const response = await $fetch<BlogPost[]>('/api/blog?published=true')
    posts.value = response
  } catch (e: any) {
    console.error('Error fetching posts:', e)
    error.value = 'Nepavyko gauti tinklaraščio įrašų'
    posts.value = []
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.font-display {
  font-family: 'Poppins', sans-serif;
}
</style> 
 