import instance from './instance'

export const register = async (nickname, email, password) => {
  const response = await instance.post('/users/register', {
    nickname,
    email,
    password
  })
  const { data } = response
  const { ok, token, message } = data
  if (!ok) return console.log(message)
  return token
}

export const login = async (email, password) => {
  const response = await instance.post('/users/login', {
    email,
    password
  })
  const { data } = response
  const { ok, token, message } = data
  if (!ok) return console.log(message)
  return token
}

export const getMe = async (userToken) => {
  const response = await instance.get('/users/me', {
    headers: {
      Authorization: userToken
    }
  })
  const { data } = response
  const { ok, user, message } = data
  if (!ok) return console.log(message)
  return user
}

export const updateMe = async (userToken, nickname, email) => {
  const response = await instance.patch('/users/me', {
    nickname,
    email
  }, {
    headers: {
      Authorization: userToken
    }
  })
  const { data } = response
  const { ok, token, message } = data
  if (!ok) return console.log(message)
  return token
}

export const updatePassword = async (userToken, oldPassword, newPassword, againPassword) => {
  const response = await instance.patch('/users/me/updatePassword', {
    oldPassword,
    newPassword,
    againPassword
  }, {
    headers: {
      Authorization: userToken
    }
  })
  const { data } = response
  const { ok, message } = data
  if (!ok) return console.log(message)
  return ok
}

export const deleteMe = async (userToken) => {
  const response = await instance.delete('/users/me', {
    headers: {
      Authorization: userToken
    }
  })
  const { data } = response
  const { ok, message } = data
  if (!ok) return console.log(message)
  return ok
}