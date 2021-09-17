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

export const deleteComment = async (guestToken, issueId, commentId) => {
  const response = await instance.delete(
    `/issues/${issueId}/comments/${commentId}`,
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
  console.log(data)
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
