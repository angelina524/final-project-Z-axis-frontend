import instance from './instance'

export const createGuest = async () => {
  const response = await instance.post('/guest')
  const { data } = response
  const { ok, guest, message } = data
  if (!ok) throw new Error(message)
  return guest
}
