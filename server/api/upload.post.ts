import { writeFile, mkdir, readFile, unlink } from 'fs/promises'
import { join, extname } from 'path'
import formidable from 'formidable'
import type { Part } from 'formidable'

export default defineEventHandler(async (event) => {
  const form = formidable({
    maxFiles: 1,
    maxFileSize: 5 * 1024 * 1024, // 5MB
    allowEmptyFiles: false,
    filter: (part: Part) => {
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

    // unique failo name
    const ext = extname(file.originalFilename)
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2)}${ext}`
    const relativePath = `/uploads/${filename}`
    const uploadDir = join(process.cwd(), 'public/uploads')

    // patikrinti upload direktorija
    await mkdir(uploadDir, { recursive: true })

    // perziureti faila ir rasyti i nauja lokacija
    const content = await readFile(file.filepath)
    await writeFile(join(uploadDir, filename), content)

    // cleanup temporary file
    try {
      await unlink(file.filepath)
    } catch (cleanupError) {
      console.error('Failed to cleanup temporary file:', cleanupError)
    }

    return {
      url: relativePath
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
 