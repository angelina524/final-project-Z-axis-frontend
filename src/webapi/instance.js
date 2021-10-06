import axios from 'axios'
import storage from '../localStorageApi'

const instance = axios.create({
  baseURL: 'http://localhost:5001'
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${storage.getUserToken()}`
  config.headers['guest-token'] = storage.getGuestToken()
  return config
})

export default instance
