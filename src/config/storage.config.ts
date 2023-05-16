const {
  CLOUDINARY_CLOUD_NAME = '',
  CLOUDINARY_API_KEY = '',
  CLOUDINARY_API_SECRET = ''
} = process.env

if (
  [CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET].some(
    data => data === ''
  )
) {
  throw new Error('ENV: Cloudinary environment variables are not set')
}

const config = {
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
}

export default config
