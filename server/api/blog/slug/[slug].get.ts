import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const slug = event.context.params?.slug
    
    if (!slug) {
      throw createError({
        statusCode: 400,
        message: 'Slug is required'
      })
    }

    const post = await prisma.blogPost.findUnique({
      where: { slug }
    })

    if (!post) {
      throw createError({
        statusCode: 404,
        message: 'Blog post not found'
      })
    }

    return post
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to fetch blog post'
    })
  }
}) 