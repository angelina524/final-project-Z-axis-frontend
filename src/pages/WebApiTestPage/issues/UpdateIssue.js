import React, { useState, useContext, useEffect } from 'react'
import { getIssue, updateIssue } from '../../../webapi/issueApi'
import { topUserTokenContext } from '../WebApiTestPage'

const padStartWithZero = (num) => {
  const str = num.toString(10)
  return str.length < 2 ? `0${str}` : str
}

const dateToString = (fullDate) => {
  const year = new Date(fullDate).getFullYear()
  const month = new Date(fullDate).getMonth() + 1
  const date = new Date(fullDate).getDate()
  return `${year}-${padStartWithZero(month)}-${padStartWithZero(date)}`
}

const UpdateIssue = () => {
  const [userToken, setUserToken] = useState('')
  const [issueId, setIssueId] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [beginTime, setBeginTime] = useState('')
  const [finishTime, setFinishTime] = useState('')
  const topUserToken = useContext(topUserTokenContext)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    let issue = null
    try {
      await updateIssue(
        userToken,
        issueId,
        title,
        description,
        beginTime,
        finishTime
      )
      issue = await getIssue(issueId)
    } catch (err) {
      console.log(err)
      alert('編輯 issue 失敗')
      return
    }
    console.log({ issue })
    alert('編輯 issue 成功，請到 console 查看')
  }

  useEffect(() => {
    setUserToken(topUserToken)
  }, [topUserToken])

  useEffect(() => {
    if (!issueId) {
      setTitle('')
      setDescription('')
      return
    }

    const setField = async () => {
      const issue = await getIssue(issueId)
      setTitle(issue.title)
      setDescription(issue.description)
      setBeginTime(dateToString(issue.beginTime))
      setFinishTime(dateToString(issue.finishTime))
    }

    setField()
  }, [issueId])

  return (
    <form onSubmit={onFormSubmit}>
      <h4>編輯 Issue</h4>
      <input
        type="text"
        value={userToken}
        onChange={(e) => setUserToken(e.target.value)}
        placeholder="userToken"
      />
      <input
        type="text"
        value={issueId}
        onChange={(e) => setIssueId(e.target.value)}
        placeholder="issueId"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <input
        type="date"
        value={beginTime}
        onChange={(e) => setBeginTime(e.target.value)}
      />
      <input
        type="date"
        value={finishTime}
        onChange={(e) => setFinishTime(e.target.value)}
      />
      <button>送出</button>
    </form>
  )
}

export default UpdateIssue
