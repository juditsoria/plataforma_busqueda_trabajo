import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:8000/'
    : 'https://reclutalent.vercel.app/api',
  withCredentials: true
})

const getCSRFToken = () => {
  const cookie = document.cookie.split('; ').find(row => row.startsWith('csrftoken='))
  return cookie ? cookie.split('=')[1] : ''
}

// Interceptor para agregar el token CSRF y el token de autorización
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  const csrfToken = getCSRFToken()
  if (csrfToken) {
    config.headers['X-CSRFToken'] = csrfToken
  }

  return config
}, error => {
  return Promise.reject(error)
})

export default api
