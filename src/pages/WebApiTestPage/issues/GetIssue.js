import React, { useState } from 'react'
import { getIssue } from '../../../webapi/issueApi'

const GetIssue = () => {
  const [issueId, setIssueId] = useState('')

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const issue = await getIssue(issueId)
    if (!issue.ok) return console.log(issue)
    console.log(issue)
    alert('獲取成功，請到 console 查看')
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
