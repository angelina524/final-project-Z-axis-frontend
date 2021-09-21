import React, { useState, useContext, useEffect } from 'react'
import { deleteIssue } from '../../../webapi/issueApi'
import { topUserTokenContext } from '../WebApiTestPage'

const DeleteIssue = () => {
  const [userToken, setUserToken] = useState('')
  const [issueId, setIssueId] = useState('')
  const topUserToken = useContext(topUserTokenContext)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await deleteIssue(userToken, issueId)
    } catch (err) {
      console.log(err)
      alert('刪除 issue 失敗')
      return
    }
    alert('刪除 issue 成功')
    setIssueId('')
  }

  useEffect(() => {
    setUserToken(topUserToken)
  }, [topUserToken])

  return (
    <form onSubmit={onFormSubmit}>
      <h4>刪除 Issue</h4>
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
      <button>送出</button>
    </form>
  )
}

export default DeleteIssue
