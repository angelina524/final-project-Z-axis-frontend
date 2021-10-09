export const BACKEND_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://ben6515.tw/api'
    : 'http://localhost:5001'

export const FRONTEND_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://zaxis.netlify.app/#'
    : 'http://localhost:3000/#'
