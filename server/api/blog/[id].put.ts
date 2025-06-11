import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params?.id)
    const body = await readBody(event)

    // Validate required fields
    const requiredFields = ['title', 'slug', 'excerpt', 'content', 'category']
    for (const field of requiredFields) {
      if (!body[field]) {
        throw createError({
          statusCode: 400,
          message: `${field} is required`
        })
      }
    }

    // Check if post exists
    const existingPost = await prisma.blogPost.findUnique({
      where: { id }
    })

    if (!existingPost) {
      throw createError({
        statusCode: 404,
        message: 'Blog post not found'
      })
    }

    // Check if slug is unique (excluding current post)
    if (body.slug !== existingPost.slug) {
      const slugExists = await prisma.blogPost.findFirst({
        where: {
          slug: body.slug,
          id: { not: id }
        }
      })

      if (slugExists) {
        throw createError({
          statusCode: 400,
          message: 'A post with this slug already exists'
        })
      }
    }
    
    const post = await prisma.blogPost.update({
      where: { id },
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
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to update blog post'
    })
  }
}) 
 