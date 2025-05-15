import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const method = event.req.method

  // GET: paima visus job aplicationus
  if (method === 'GET') {
    try {
      const jobApplications = await prisma.jobApplication.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      })
      return jobApplications
    } catch (error) {
      console.error('Error fetching job applications:', error)
      return createError({
        statusCode: 500,
        statusMessage: 'Nepavyko įkelti darbo paraiškų'
      })
    }
  }

  // POST: sukurti nauja darbo aplikacija
  if (method === 'POST') {
    try {
      const body = await readBody(event)
      
      // paprasta validacija
      if (!body.name || !body.email || !body.phone || !body.position || !body.experience || !body.coverLetter) {
        return createError({
          statusCode: 400,
          statusMessage: 'Prašome užpildyti visus privalomus laukus'
        })
      }
      
      // sanitizuoja ivedimus kad isvengti problemu
      const sanitizedData = {
        name: String(body.name).trim().substring(0, 255),
        email: String(body.email).trim().substring(0, 255),
        phone: String(body.phone).trim().substring(0, 50),
        position: String(body.position).trim().substring(0, 255),
        experience: String(body.experience).trim().substring(0, 255),
        coverLetter: String(body.coverLetter).trim().substring(0, 5000),
        cvUrl: body.cvUrl ? String(body.cvUrl).trim().substring(0, 1000) : null
      }
      
      const jobApplication = await prisma.jobApplication.create({
        data: sanitizedData
      })
      
      return {
        success: true,
        message: 'Darbo paraiška sėkmingai išsiųsta',
        data: jobApplication
      }
    } catch (error) {
      console.error('Error creating job application:', error)
      
      // klaidos message
      const errorMessage = error.message || 'Įvyko klaida bandant išsiųsti darbo paraišką'
      
      return createError({
        statusCode: 500,
        statusMessage: 'Įvyko klaida bandant išsiųsti darbo paraišką',
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    } finally {
      await prisma.$disconnect()
    }
  }

  // nelesitino metodo zinute
  return createError({
    statusCode: 405,
    statusMessage: 'Metodas neleistinas'
  })
}) 