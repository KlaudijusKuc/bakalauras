<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-white">
        {{ isEditing ? 'Redaguoti Įrašą' : 'Naujas Įrašas' }}
      </h1>
      <div class="flex gap-2">
        <button
          @click="saveDraft"
          class="px-4 py-2 rounded-lg border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-all duration-200"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Saugoma...' : 'Išsaugoti Juodraštį' }}
        </button>
        <button
          @click="publishPost"
          class="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-200"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Skelbiama...' : 'Paskelbti' }}
        </button>
      </div>
    </div>

    <div v-if="error" class="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
      {{ error }}
    </div>

    <div class="glass-card rounded-lg p-6">
      <form class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Pavadinimas</label>
          <input
            v-model="post.title"
            type="text"
            required
            class="w-full px-4 py-2 rounded-lg bg-[#20243A] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Kategorija</label>
          <input
            v-model="post.category"
            type="text"
            required
            class="w-full px-4 py-2 rounded-lg bg-[#20243A] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Nuotrauka</label>
          <div class="flex items-center gap-4">
            <img
              v-if="post.image"
              :src="post.image"
              alt="Post image"
              class="w-24 h-24 object-cover rounded-lg"
            />
            <label class="flex-grow">
              <div class="px-4 py-8 rounded-lg border-2 border-dashed border-white/10 hover:border-purple-500/50 transition-all duration-200 cursor-pointer">
                <div class="text-center">
                  <PhotoIcon class="w-8 h-8 mx-auto text-gray-400" />
                  <p class="mt-2 text-sm text-gray-400">Pasirinkite nuotrauką arba įtempkite ją čia</p>
                </div>
              </div>
              <input
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleImageUpload"
              />
            </label>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Ištrauka</label>
          <textarea
            v-model="post.excerpt"
            rows="2"
            required
            class="w-full px-4 py-2 rounded-lg bg-[#20243A] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Turinys</label>
          <textarea
            v-model="post.content"
            rows="10"
            required
            class="w-full px-4 py-2 rounded-lg bg-[#20243A] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhotoIcon } from '@heroicons/vue/24/outline'

definePageMeta({
  layout: 'admin',
  middleware: ['auth']
})

const route = useRoute()
const router = useRouter()
const isEditing = computed(() => route.params.slug !== 'new')
const error = ref('')
const isSubmitting = ref(false)

interface BlogPost {
  id?: number
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  published: boolean
}

const post = ref<BlogPost>({
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  image: '',
  category: '',
  published: false
})

// fetch post if editing
onMounted(async () => {
  if (isEditing.value && route.params.slug !== 'new') {
    try {
      const data = await $fetch(`/api/blog/slug/${route.params.slug}`)
      post.value = data
    } catch (error: any) {
      console.error('Failed to fetch post:', error)
      error.value = error.data?.message || 'Nepavyko užkrauti įrašo'
    }
  }
})

// generate slug from title
watch(() => post.value.title, (newTitle) => {
  post.value.slug = newTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
})

// image upload
const handleImageUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  const formData = new FormData()
  formData.append('image', file)

  try {
    const response = await $fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    post.value.image = response.url
  } catch (error) {
    console.error('Failed to upload image:', error)
  }
}

// juodrastis
const saveDraft = async () => {
  await savePost(false)
}

// publish
const publishPost = async () => {
  await savePost(true)
}

// save post
const savePost = async (published: boolean) => {
  if (!post.value.title || !post.value.category || !post.value.excerpt || !post.value.content) {
    error.value = 'Prašome užpildyti visus privalomus laukus'
    return
  }

  isSubmitting.value = true
  error.value = ''
  post.value.published = published

  try {
    if (isEditing.value && post.value.id) {
      await $fetch(`/api/blog/${post.value.id}`, {
        method: 'PUT',
        body: post.value
      })
    } else {
      const response = await $fetch('/api/blog', {
        method: 'POST',
        body: post.value
      })
      post.value.id = response.id
    }
    router.push('/admin/blog')
  } catch (e: any) {
    console.error('Failed to save post:', e)
    error.value = e.data?.message || 'Nepavyko išsaugoti įrašo. Bandykite dar kartą.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style> 
 