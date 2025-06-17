<template>
  <main class="min-h-screen bg-[#1A1D2D]">
    <!-- backgroundas -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
    </div>

    <!-- content -->
    <div class="relative z-1">
      <!-- loading -->
      <div v-if="loading" class="flex justify-center items-center min-h-[400px]">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>

      <!-- error -->
      <div v-else-if="error" class="max-w-2xl mx-auto px-4 py-20">
        <div class="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-center">
          <h1 class="text-2xl font-bold mb-4">{{ error }}</h1>
          <NuxtLink to="/blog" class="text-purple-400 hover:underline">
            Grįžti į tinklaraščio sąrašą
          </NuxtLink>
        </div>
      </div>

      <!-- post contentas -->
      <article v-else-if="post" class="py-12 relative">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <!-- foto -->
            <div class="relative h-[400px] rounded-xl overflow-hidden mb-8 group">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80"></div>
              
              <span class="absolute top-4 left-4 text-sm font-medium text-white bg-gray-900/90 
                         border border-gray-700 px-4 py-1.5 rounded-full backdrop-blur-sm">
                {{ post.category }}
              </span>
            </div>

            <header class="mb-8">
              <h1 class="text-3xl md:text-4xl font-display font-bold text-white mb-4">{{ post.title }}</h1>
              <div class="flex items-center text-gray-400">
                <time :datetime="formatDate(post.createdAt)" class="text-sm">
                  {{ formatDateLocale(post.createdAt) }}
                </time>
              </div>
            </header>

            <div class="prose prose-lg max-w-none prose-invert">
              <p class="text-xl text-gray-300 mb-8">{{ post.excerpt }}</p>
              <div v-html="post.content" class="text-gray-300"></div>
            </div>

            <div class="mt-12 text-center">
              <NuxtLink 
                to="/blog"
                class="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
                Grįžti į tinklaraščio sąrašą
              </NuxtLink>
            </div>
          </div>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
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

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Blogas - E-Shop99'
})

const route = useRoute()
const post = ref<BlogPost | null>(null)
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

// fetch posto data
const fetchPost = async () => {
  try {
    loading.value = true
    error.value = null
    
    const slug = route.params.slug as string
    if (!slug) {
      throw new Error('Invalid blog post slug')
    }

    const response = await $fetch<BlogPost>(`/api/blog/slug/${slug}`)
    
    if (!response || !response.published) {
      throw new Error('Įrašas nerastas')
    }
    
    post.value = response
  } catch (e: any) {
    console.error('Error fetching post:', e)
    error.value = e.data?.message || 'Įrašas nerastas'
    post.value = null
  } finally {
    loading.value = false
  }
}

// fetch on mount and route changes
onMounted(() => {
  if (route.params.slug) {
    fetchPost()
  }
})

watch(() => route.params.slug, (newSlug) => {
  if (newSlug) {
    fetchPost()
  }
})
</script>

<style>
.prose {
  max-width: none;
}

.prose img {
  border-radius: 0.75rem;
  margin: 2rem 0;
}

.prose a {
  color: #a855f7;
  text-decoration: none;
}

.prose a:hover {
  text-decoration: underline;
}

.prose h2 {
  color: white;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  color: white;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.75;
}

.prose ul,
.prose ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose blockquote {
  border-left-color: #a855f7;
  color: #9ca3af;
  font-style: italic;
  padding-left: 1rem;
  margin: 1.5rem 0;
}

.prose code {
  color: #a855f7;
  background-color: rgba(168, 85, 247, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
}

.prose pre {
  background-color: #1f2937;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1.5rem 0;
}

.prose pre code {
  color: #e5e7eb;
  background-color: transparent;
  padding: 0;
}

.prose ol li::marker {
  color: #a855f7;
}

.font-display {
  font-family: 'Poppins', sans-serif;
}
</style> 