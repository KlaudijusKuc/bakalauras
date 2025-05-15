import { prisma } from '../utils/prisma';

export default defineEventHandler(async (event) => {
  try {
    // gauti visus kontaktus, rusiuojama pagal createdAt mazejant (naujausi pirmiau)
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return contacts;
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    return createError({
      statusCode: 500,
      statusMessage: 'Failed to retrieve contact messages'
    });
  }
}); 