// localStorage setting
const UserTokenKey = 'userToken'
const GuestTokenKey = 'guestToken'

// user token apis
export const getUserToken = () => {
  return localStorage.getItem(UserTokenKey) || ''
}

export const setUserToken = (userToken) => {
  localStorage.setItem(UserTokenKey, userToken)
}

// guest token apis
export const getGuestToken = () => {
  return localStorage.getItem(GuestTokenKey) || ''
}

export const setGuestToken = (guestToken) => {
  localStorage.setItem(GuestTokenKey, guestToken)
}
