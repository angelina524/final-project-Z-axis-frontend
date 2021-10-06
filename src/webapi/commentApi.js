import instance from './instance'

export const createComment = async (issueId, nickname, content) =>
  await instance.post(`/issues/${issueId}/comments`, {
    nickname,
    content
  })

export const deleteComment = async (issueId, commentId) =>
  await instance.delete(`/issues/${issueId}/comments/${commentId}`)

<<<<<<< HEAD
export const updateComment = async (issueId, commentId, nickname, content) =>
  await instance.patch(`/issues/${issueId}/comments/${commentId}`, {
    nickname,
    content
  })
=======
export const updateComment = async (
  guestToken,
  issueId,
  commentId,
  nickname,
  content
) => {
  const response = await instance.patch(
    `/issues/${issueId}/comments/${commentId}`,
    {
      nickname,
      content
    },
    {
      headers: {
        'guest-token': guestToken
      }
    }
  )
  const { data } = response
  const { ok, message, comment } = data
  if (!ok) throw Error(message)
  return comment
}
>>>>>>> 55959ac (add socket events)

export const updateReply = async (issueId, commentId, reply) =>
  await instance.patch(`/issues/${issueId}/comments/${commentId}/replies`, {
    reply
  })

export const getAllComments = async (issueId) =>
  await instance.get(`/issues/${issueId}/comments`)

export const likesComment = async (issueId, commentId) =>
  await instance.patch(`/issues/${issueId}/comments/${commentId}/likes`)
