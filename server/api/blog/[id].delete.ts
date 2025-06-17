import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params?.id)
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Privalomas skaitinis ID'
      })
    }

    await prisma.blogPost.delete({
      where: { id }
    })

    return {
      success: true,
      message: 'Įrašas sėkmingai ištrintas'
    }
  } catch (error: any) {
    console.error('Error deleting blog post:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Nepavyko ištrinti įrašo'
    })
  }
}) 
 