<template>
  <section class="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
    <div class="container mx-auto px-4">
      <!-- section headeris -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div class="space-y-2">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Naujausi įrašai
          </h2>
          <p class="text-gray-400 max-w-2xl">
            Atraskite naujausius technologijų pasaulio įžvalgas ir tendencijas
          </p>
        </div>
        <NuxtLink 
          to="/blog" 
          class="group px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm
                 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300"
        >
          <span class="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-medium">
            Visi įrašai
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </NuxtLink>
      </div>

      <!-- blog gridas -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="post in latestPosts" 
          :key="post.id"
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
            
            <!-- kategorija -->
            <span 
              class="absolute top-4 left-4 text-xs font-medium text-white bg-purple-500/80 
                     border border-purple-400/30 px-3 py-1 rounded-full backdrop-blur-sm"
            >
              {{ post.category }}
            </span>
          </div>

          <!-- content -->
          <div class="flex flex-col flex-grow p-6 space-y-4">
            <div class="flex-grow space-y-3">
              <h3 class="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                {{ post.title }}
              </h3>
              <p class="text-gray-300 text-sm line-clamp-2">
                {{ post.excerpt }}
              </p>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-700/50">
              <time class="text-sm text-gray-400" :datetime="post.createdAt">
                {{ new Date(post.createdAt).toLocaleDateString('lt-LT', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </time>
              <NuxtLink :to="'/blog/' + post.slug" class="text-purple-400 text-sm font-medium group-hover:underline">
                Skaityti daugiau
              </NuxtLink>
            </div>
          </div>

          <!-- hover -->
          <div class="absolute inset-0 border-2 border-purple-400/0 group-hover:border-purple-400/50 
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
  createdAt: string;
  image: string;
  slug: string;
}

const latestPosts = ref<BlogPost[]>([])

// fetch latest posts
const fetchLatestPosts = async () => {
  try {
    const posts = await $fetch<BlogPost[]>('/api/blog', {
      params: {
        limit: 3,
        sort: 'createdAt:desc'
      }
    })
    latestPosts.value = posts
  } catch (error) {
    console.error('Failed to fetch latest posts:', error)
  }
}

// Load posts immediately on server-side
onServerPrefetch(async () => {
  await fetchLatestPosts()
})

// Fallback for client-side if needed
onMounted(() => {
  if (latestPosts.value.length === 0) {
    fetchLatestPosts()
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 