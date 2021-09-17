import instance from './instance'

export const createIssue = async (
  userToken,
  title,
  description,
  beginTime,
  finishTime
) => {
  const response = await instance.post(
    '/issues',
    {
      title,
      description,
      beginTime,
      finishTime
    },
    {
      headers: {
        Authorization: userToken
      }
    }
  )
  const { data } = response
  const { ok, issue, message } = data
  if (!ok) throw Error(message)
  return issue
}

export const deleteIssue = async (userToken, issueId) => {
  const response = await instance.delete(`/issues/${issueId}`, {
    headers: {
      Authorization: userToken
    }
  })
  const { data } = response
  const { ok, message } = data
  if (!ok) throw Error(message)
}

export const updateIssue = async (
  userToken,
  issueId,
  title,
  description,
  beginTime,
  finishTime
) => {
  const response = await instance.patch(
    `/issues/${issueId}`,
    {
      title,
      description,
      beginTime,
      finishTime
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

export const getAllIssues = async (userToken) => {
  const response = await instance.get('/issues', {
    headers: {
      Authorization: userToken
    }
  })
  const { data } = response
  const { ok, issues, message } = data
  if (!ok) throw Error(message)
  return issues
}

export const getIssue = async (issueId) => {
  let response = null
  try {
    response = await instance.get(`/issues/${issueId}`)
  } catch (err) {
    console.log(err)
    return err
  }
  const { data } = response
  const { ok, issue, message } = data
  if (!ok) {
    console.log(message)
  }
  return issue
}
