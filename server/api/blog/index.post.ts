import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    if (!body.title || !body.content) {
      throw createError({
        statusCode: 400,
        message: 'Pavadinimas ir turinys yra privalomi'
      })
    }

    const post = await prisma.blogPost.create({
      data: {
        title: body.title,
        content: body.content,
        slug: body.slug,
        image: body.image,
        excerpt: body.excerpt,
        category: body.category,
        published: body.published
      }
    })

    return {
      success: true,
      message: 'Įrašas sėkmingai sukurtas',
      data: post
    }
  } catch (error: any) {
    console.error('Error creating blog post:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Nepavyko sukurti įrašo'
    })
  }
}) 
 