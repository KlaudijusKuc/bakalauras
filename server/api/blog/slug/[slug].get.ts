import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const slug = event.context.params?.slug
    
    if (!slug) {
      throw createError({
        statusCode: 400,
        message: 'URL yra privalomas'
      })
    }

    const post = await prisma.blogPost.findUnique({
      where: { slug }
    })

    if (!post) {
      throw createError({
        statusCode: 404,
        message: 'Įrašas nerastas'
      })
    }

    return post
  } catch (error: any) {
    console.error('Error fetching blog post:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Nepavyko gauti tinklaraščio įrašo'
    })
  }
}) 