// localStorage setting
const USER_TOKEN_KEY = 'userToken'
const GUEST_TOKEN_KEY = 'guestToken'

// user token apis
const getUserToken = () => {
  return localStorage.getItem(USER_TOKEN_KEY) || ''
}

const setUserToken = (userToken) => {
  localStorage.setItem(USER_TOKEN_KEY, userToken)
}

const clearUserToken = () => {
  localStorage.setItem(USER_TOKEN_KEY, '')
}

// guest token apis
const getGuestToken = () => {
  return localStorage.getItem(GUEST_TOKEN_KEY) || ''
}

const setGuestToken = (guestToken) => {
  localStorage.setItem(GUEST_TOKEN_KEY, guestToken)
}

const storage = {
  getUserToken,
  setUserToken,
  clearUserToken,
  getGuestToken,
  setGuestToken
}

export default storage
