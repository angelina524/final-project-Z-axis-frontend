import instance from './instance'

export const createIssue = async (title, description, beginDate, finishDate) =>
  await instance.post('/issues', {
    title,
    description,
    beginDate,
    finishDate
  })

export const deleteIssue = async (issueId) =>
  await instance.delete(`/issues/${issueId}`)

export const updateIssue = async (
  issueId,
  title,
  description,
  beginDate,
  finishDate
) =>
  await instance.patch(`/issues/${issueId}`, {
    title,
    description,
    beginDate,
    finishDate
  })

export const getAllIssues = async (limit = 999) =>
  await instance.get(`/issues?limit=${limit}`)

export const getIssue = async (issueURL) =>
  await instance.get(`/issues/${issueURL}`)

export const getIssueData = async (issueURL) =>
  await instance.get(`/issues/data/${issueURL}`)

export const pinCommentOnTop = async (issueId, commentId) =>
  await instance.patch(`/issues/${issueId}/pinCommentOnTop`, { commentId })

export const unpinCommentOnTop = async (issueId, commentId) =>
  await instance.patch(`/issues/${issueId}/unpinCommentOnTop`, { commentId })
