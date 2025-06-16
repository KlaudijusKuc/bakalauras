import { prisma } from '~/server/utils/prisma'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params?.id)
    const body = await readBody(event)

    if (!body.reply) {
      throw createError({
        statusCode: 400,
        message: 'Reply message is required'
      })
    }

    // update the reply in the database and get the contact
    const contact = await prisma.contact.update({
      where: { id },
      data: { reply: body.reply }
    })

    // send email to the original sender
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: contact.email,
      subject: 'Atsakymas į jūsų žinutę',
      text: body.reply,
      html: `<p>${body.reply.replace(/\n/g, '<br>')}</p>`
    })

    return contact
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to update contact message and send email'
    })
  }
}) 