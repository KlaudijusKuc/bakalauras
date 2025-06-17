import { getRouterParam } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    // gauti id is url parametro
    const idParam = getRouterParam(event, 'id')
    console.log('Received request for ID:', idParam)

    if (!idParam || !/^\d+$/.test(idParam)) {
      throw createError({
        statusCode: 400,
        message: 'Privalomas skaitinis ID'
      })
    }

    const id = parseInt(idParam)
    console.log('Attempting to find post with ID:', id)

    const post = await prisma.blogPost.findUnique({
      where: { id }
    })
    
    if (!post) {
      console.log('No post found for ID:', id)
      throw createError({
        statusCode: 404,
        message: 'Įrašas nerastas'
      })
    }

    if (!post.published) {
      console.log('Post found but not published:', id)
      throw createError({
        statusCode: 404,
        message: 'Įrašas nerastas'
      })
    }

    console.log('Successfully found post:', {
      id: post.id,
      title: post.title,
      published: post.published
    })

    return post
  } catch (error: any) {
    // ff already a handled error pass it through
    if (error.statusCode) {
      throw error
    }
    
    // unexpected errors
    console.error('Error fetching blog post:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Nepavyko gauti tinklaraščio įrašo'
    })
  }
}) 