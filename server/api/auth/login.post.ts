export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, password } = body

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: 'Username and password are required'
    })
  }

  const adminUsername = process.env.ADMIN_USERNAME || 'admin'
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    throw createError({
      statusCode: 500,
      message: 'Admin password not configured'
    })
  }

  if (username === adminUsername && password === adminPassword) {
    return { success: true }
  }

  throw createError({
    statusCode: 401,
    message: 'Invalid credentials'
  })
}) 