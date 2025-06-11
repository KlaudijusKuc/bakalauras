import { v2 as cloudinary } from 'cloudinary'
import formidable from 'formidable'
import { readFile } from 'fs/promises'

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export default defineEventHandler(async (event) => {
  const form = formidable({
    maxFiles: 1,
    maxFileSize: 5 * 1024 * 1024, // 5MB
    allowEmptyFiles: false,
    filter: (part) => {
      return part.mimetype?.startsWith('image/') || false
    }
  })

  try {
    const [fields, files] = await form.parse(event.node.req)
    const file = files.image?.[0]

    if (!file) {
      throw createError({
        statusCode: 400,
        message: 'No image file provided'
      })
    }

    if (!file.originalFilename) {
      throw createError({
        statusCode: 400,
        message: 'Invalid file name'
      })
    }

    // Read the file
    const fileBuffer = await readFile(file.filepath)

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: 'blog',
          resource_type: 'auto'
        },
        (error, result) => {
          if (error) reject(error)
          else resolve(result)
        }
      ).end(fileBuffer)
    })

    return {
      url: (result as any).secure_url
    }
  } catch (error: any) {
    console.error('Upload error:', error)
    
    // Handle formidable errors
    if (error.code === 'LIMIT_FILE_SIZE') {
      throw createError({
        statusCode: 400,
        message: 'File size exceeds 5MB limit'
      })
    }

    if (error.code === 'LIMIT_FILE_COUNT') {
      throw createError({
        statusCode: 400,
        message: 'Only one file can be uploaded at a time'
      })
    }

    if (error.message?.includes('mimetype')) {
      throw createError({
        statusCode: 400,
        message: 'Only image files are allowed'
      })
    }

    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to upload file'
    })
  }
}) 
 