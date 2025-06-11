<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-white">Tinklaraščio įrašai</h1>
      <NuxtLink
        to="/admin/blog/new"
        class="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-200"
      >
        Naujas įrašas
      </NuxtLink>
    </div>

    <!-- blog posts list -->
    <div class="grid gap-4">
      <div v-for="post in posts" :key="post.id" class="glass-card rounded-lg p-4">
        <div class="flex items-center gap-4">
          <img :src="post.image" :alt="post.title" class="w-16 h-16 object-cover rounded-lg" />
          <div class="flex-grow">
            <h3 class="text-lg font-semibold text-white">{{ post.title }}</h3>
            <p class="text-sm text-gray-400">{{ post.category }}</p>
          </div>
          <div class="flex items-center gap-2">
            <span :class="[
              'px-2 py-1 rounded-full text-xs',
              post.published ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
            ]">
              {{ post.published ? 'Paskelbta' : 'Juodraštis' }}
            </span>
            <NuxtLink
              :to="'/admin/blog/' + post.slug"
              class="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition-all duration-200"
            >
              <PencilIcon class="w-5 h-5" />
            </NuxtLink>
            <button
              @click="deletePost(post.id)"
              class="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all duration-200"
            >
              <TrashIcon class="w-5 h-5" />
            </button>
          </div>
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

const posts = ref<BlogPost[]>([])

// fetch posts
const fetchPosts = async () => {
  try {
    posts.value = await $fetch('/api/blog')
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
 