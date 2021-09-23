import instance from './instance'

export const createComment = async (guestToken, issueId, nickname, content) => {
  const response = await instance.post(
    `/issues/${issueId}/comments`,
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
  const { ok, comment, message } = data
  if (!ok) throw Error(message)
  return comment
}

export const deleteComment = async (
  guestToken,
  userToken,
  issueId,
  commentId
) => {
  const response = await instance.delete(
    `/issues/${issueId}/comments/${commentId}`,
    {
      headers: {
        'guest-token': guestToken,
        Authorization: userToken
      }
    }
  )
  const { data } = response
  const { ok, message } = data
  if (!ok) throw Error(message)
}

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
  const { ok, message } = data
  if (!ok) throw Error(message)
}

export const updateReply = async (userToken, issueId, commentId, reply) => {
  const response = await instance.patch(
    `/issues/${issueId}/comments/${commentId}/replies`,
    {
      reply
    },
    {
      headers: {
        Authorization: userToken
      }
    }
  )
  const { data } = response
  const { ok, message } = data
  if (!ok) throw Error(message)
}

export const getAllComments = async (issueId) => {
  const response = await instance.get(`/issues/${issueId}/comments`)
  const { data } = response
  const { ok, comments, message } = data
  if (!ok) throw Error(message)
  return comments
}
