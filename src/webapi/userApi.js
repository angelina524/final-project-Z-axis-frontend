import instance from './instance'

export const register = async (nickname, email, password) =>
  await instance.post('/users/register', { nickname, email, password })

export const login = async (email, password) =>
  await instance.post('/users/login', { email, password })

export const getMe = async () => await instance.get('/users/me')

export const updateMe = async (nickname, email) =>
  await instance.patch('/users/me', { nickname, email })

export const updatePassword = async (oldPassword, newPassword, againPassword) =>
  await instance.patch('/users/me/updatePassword', {
    oldPassword,
    newPassword,
    againPassword
  })

export const deleteMe = async () => await instance.delete('/users/me')
