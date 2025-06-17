import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getQuery } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const limit = Number(query.limit) || undefined
  const sort = query.sort as string || 'createdAt:desc'

  try {
    const posts = await prisma.blogPost.findMany({
      take: limit,
      orderBy: {
        createdAt: sort.includes('desc') ? 'desc' : 'asc'
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        content: true,
        image: true,
        category: true,
        published: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return posts
  } catch (error) {
    console.error('Failed to fetch blog posts:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch blog posts'
    })
  }
}) 