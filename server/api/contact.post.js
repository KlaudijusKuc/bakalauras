import { prisma } from '../utils/prisma';

export default defineEventHandler(async (event) => {
  try {
    // Parse the request body
    const body = await readBody(event);
    
    // paprasta validacija
    if (!body.name || !body.email || !body.message) {
      return createError({
        statusCode: 400,
        statusMessage: 'Name, email, and message are required'
      });
    }
    
    // entry sukuriama naujas kontaktu ivedimas
    const contact = await prisma.contact.create({
      data: {
        name: body.name,
        email: body.email,
        message: body.message
      }
    });
    
    return { 
      success: true, 
      message: 'Contact message saved successfully',
      contact
    };
  } catch (error) {
    console.error('Error saving contact:', error);
    return createError({
      statusCode: 500,
      statusMessage: 'Failed to save contact message'
    });
  }
}); 