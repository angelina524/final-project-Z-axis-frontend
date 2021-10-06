import instance from './instance'

export const createGuest = async () => await instance.post('/guest')
