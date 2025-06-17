<template>
  <div class="px-4 md:px-0">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8">
      <h1 class="ml-12 lg:ml-0 text-2xl md:text-3xl font-bold text-white text-center sm:text-left">Tinklaraščio įrašai</h1>
      <NuxtLink
        to="/admin/blog/new"
        class="px-3 md:px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-200 w-full sm:w-auto flex items-center justify-center"
      >
        Naujas įrašas
      </NuxtLink>
    </div>

    <!-- blog posts list -->
    <div class="grid gap-4 md:gap-6">
      <div v-for="post in posts" :key="post.id" class="glass-card rounded-xl p-4 md:p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 md:gap-4 mb-4">
          <div class="flex items-center w-full sm:w-auto">
            <img :src="post.image" :alt="post.title" class="w-16 h-16 object-cover rounded-lg mr-3 md:mr-4 flex-shrink-0" />
            <div class="flex-grow">
              <h3 class="text-lg md:text-xl font-semibold text-white break-words flex-grow">{{ post.title }}</h3>
              <p class="text-sm md:text-base text-gray-400 break-words">{{ post.category }}</p>
            </div>
          </div>
          <div class="flex flex-col items-end gap-2 text-nowrap mt-2 sm:mt-0">
            <span :class="[
              'px-2 py-1 rounded-full text-xs font-medium',
              post.published ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
            ]">
              {{ post.published ? 'Paskelbta' : 'Juodraštis' }}
            </span>
          </div>
        </div>
        <div class="ml-0 sm:ml-[calc(theme('spacing.16') + theme('spacing.4'))] mt-4 flex flex-col sm:flex-row flex-wrap gap-2 md:gap-3">
          <NuxtLink
            :to="'/admin/blog/' + post.slug"
            class="px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors duration-200 flex items-center justify-center text-sm md:text-base w-full sm:w-auto"
          >
            <PencilIcon class="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" />
            Redaguoti
          </NuxtLink>
          <button
            @click="deletePost(post.id)"
            class="px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-red-500/10 text-red-300 hover:bg-red-500/20 transition-colors duration-200 flex items-center justify-center text-sm md:text-base w-full sm:w-auto"
          >
            <TrashIcon class="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" />
            Ištrinti
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'admin',
  middleware: ['auth']
})

// types
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

interface BlogPostsResponse {
  data: BlogPost[]
  success: boolean
  message: string
}

const posts = ref<BlogPost[]>([])

// fetch posts
const fetchPosts = async () => {
  try {
    posts.value = await $fetch<BlogPost[]>('/api/blog')
  } catch (error) {
    console.error('Failed to fetch posts:', error)
  }
}

// delete post
const deletePost = async (id: number) => {
  if (!confirm('Ar tikrai norite ištrinti šį įrašą?')) return

  try {
    await $fetch(`/api/blog/${id}`, {
      method: 'DELETE'
    })
    await fetchPosts()
  } catch (error) {
    console.error('Failed to delete post:', error)
  }
}

onMounted(() => {
  fetchPosts()
})
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style> 
 