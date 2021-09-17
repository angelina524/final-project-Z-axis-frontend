import React, { useState } from 'react'
import { getIssue } from '../../../webapi/issueApi'

const GetIssue = () => {
  const [issueId, setIssueId] = useState('')

  const onFormSubmit = async (e) => {
    e.preventDefault()
    let issue = null
    try {
      issue = await getIssue(issueId)
    } catch (error) {
      console.log(error)
      alert('issue 讀取失敗')
      return
    }
    console.log(issue)
    alert('issue 讀取成功，請到 console 查看')
    setIssueId('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>查看單一 Issue</h4>
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

export default GetIssue
