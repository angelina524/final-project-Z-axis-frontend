import instance from './instance'

export const getRelation = async (commentId) =>
  await instance.get(`/relation?commentId=${commentId}`)
