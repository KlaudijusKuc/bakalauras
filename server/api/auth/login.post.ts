export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, password } = body

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: 'Vartotojo vardas ir slaptažodis yra privalomi'
    })
  }

  const adminUsername = process.env.ADMIN_USERNAME || 'admin'
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    throw createError({
      statusCode: 500,
      message: 'Administratoriaus slaptažodis nesukonfigūruotas'
    })
  }

  if (username === adminUsername && password === adminPassword) {
    return { success: true }
  }

  throw createError({
    statusCode: 401,
    message: 'Neteisingi prisijungimo duomenys'
  })
}) 