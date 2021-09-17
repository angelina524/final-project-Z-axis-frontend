import React, { useState } from 'react'
import { updateReply } from '../../../webapi/commentApi'

const UpdateReply = () => {
  const [userToken, setUserToken] = useState('')
  const [issueId, setIssueId] = useState('')
  const [commentId, setCommentId] = useState('')
  const [reply, setReply] = useState('')

  const onFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateReply(userToken, issueId, commentId, reply)
    } catch (err) {
      alert('編輯 reply 失敗')
      console.log(err)
      return
    }
    alert('編輯 reply 成功')
    setUserToken('')
    setIssueId('')
    setCommentId('')
    setReply('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>編輯 Reply</h4>
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
        value={commentId}
        onChange={(e) => setCommentId(e.target.value)}
        placeholder="commentId"
      />
      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="reply"
      />
      <button>送出</button>
    </form>
  )
}

export default UpdateReply
