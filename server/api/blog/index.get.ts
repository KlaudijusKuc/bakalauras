import { prisma } from '~/server/utils/prisma'
import { getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const publishedOnly = query.published === 'true'

    const posts = await prisma.blogPost.findMany({
      where: publishedOnly ? { published: true } : undefined,
      orderBy: {
        createdAt: 'desc'
      }
    })

    return posts
  } catch (error) {
    console.error('Failed to fetch blog posts:', error)
    throw createError({
      statusCode: 500,
      message: 'Nepavyko gauti tinklaraščio įrašų'
    })
  }
}) 
 