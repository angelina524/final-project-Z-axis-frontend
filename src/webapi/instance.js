import axios from 'axios'
import storage from '../localStorageApi'
import { BACKEND_BASE_URL } from '../constants/baseURL'

const instance = axios.create({
  baseURL: BACKEND_BASE_URL
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${storage.getUserToken()}`
  config.headers['guest-token'] = storage.getGuestToken()
  return config
})

export default instance
