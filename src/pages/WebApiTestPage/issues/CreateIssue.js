import React, { useState, useEffect, useContext } from 'react'
import { createIssue } from '../../../webapi/issueApi'
import { topUserTokenContext } from '../WebApiTestPage'

const CreateIssue = () => {
  const [userToken, setUserToken] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [beginTime, setBeginTime] = useState('')
  const [finishTime, setFinishTime] = useState('')
  const topUserToken = useContext(topUserTokenContext)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    let issue = null
    try {
      issue = await createIssue(
        userToken,
        title,
        description,
        beginTime,
        finishTime
      )
    } catch (err) {
      console.log(err)
      alert('新增 issue 失敗')
      return
    }
    console.log({ issue })
    alert('新增 issue 成功，請到 console 查看')
    setTitle('')
    setDescription('')
    setBeginTime('')
    setFinishTime('')
  }

  useEffect(() => {
    setUserToken(topUserToken)
  }, [topUserToken])

  return (
    <form onSubmit={onFormSubmit}>
      <h4>新增 Issue</h4>
      <input
        type="text"
        value={userToken}
        onChange={(e) => setUserToken(e.target.value)}
        placeholder="userToken"
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

export default CreateIssue
