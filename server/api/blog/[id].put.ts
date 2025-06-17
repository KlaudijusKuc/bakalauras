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

    const body = await readBody(event)
    if (!body.title || !body.content) {
      throw createError({
        statusCode: 400,
        message: 'Pavadinimas ir turinys yra privalomi'
      })
    }

    const existingPost = await prisma.blogPost.findUnique({
      where: { id }
    })

    if (!existingPost) {
      throw createError({
        statusCode: 404,
        message: 'Įrašas nerastas'
      })
    }

    if (body.slug) {
      const slugExists = await prisma.blogPost.findFirst({
        where: {
          slug: body.slug,
          id: { not: id }
        }
      })

      if (slugExists) {
        throw createError({
          statusCode: 400,
          message: 'Įrašas su tokiu URL jau egzistuoja'
        })
      }
    }

    const post = await prisma.blogPost.update({
      where: { id },
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
      message: 'Įrašas sėkmingai atnaujintas',
      data: post
    }
  } catch (error: any) {
    console.error('Error updating blog post:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Nepavyko atnaujinti įrašo'
    })
  }
}) 
 