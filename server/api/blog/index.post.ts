import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    const post = await prisma.blogPost.create({
      data: {
        title: body.title,
        slug: body.slug,
        excerpt: body.excerpt,
        content: body.content,
        image: body.image,
        category: body.category,
        published: body.published
      }
    })
    
    return post
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to create blog post'
    })
  }
}) 
 