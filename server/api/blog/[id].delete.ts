import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params?.id)
    
    await prisma.blogPost.delete({
      where: { id }
    })
    
    return { success: true }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to delete blog post'
    })
  }
}) 
 