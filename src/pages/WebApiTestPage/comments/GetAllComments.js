import React, { useState } from 'react'
import { getAllComments } from '../../../webapi/commentApi'

const GetAllComments = () => {
  const [issueId, setIssueId] = useState('')

  const onFormSubmit = async (e) => {
    e.preventDefault()
    let comments = null
    try {
      comments = await getAllComments(issueId)
    } catch (err) {
      console.log(err)
      alert('讀取 comments 失敗')
      return
    }
    console.log({ comments })
    alert('讀取 comments 成功，請到 console 查看')
    setIssueId('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>讀取 Comments</h4>
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

export default GetAllComments
