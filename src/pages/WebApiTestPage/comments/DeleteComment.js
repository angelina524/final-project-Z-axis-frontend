import React, { useState } from 'react'
import { deleteComment } from '../../../webapi/commentApi'

const DeleteComment = () => {
  const [guestToken, setGuestToken] = useState('')
  const [commentId, setCommentId] = useState('')

  const issueId = '123' // issueId 不用輸入，但 api route 設計需要有東西，所以先隨便填

  const onFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await deleteComment(guestToken, issueId, commentId)
    } catch (err) {
      console.log(err)
      alert('刪除 comment 失敗')
      return
    }
    console.log('刪除 comment 成功')
    alert('刪除 comment 成功')
    setCommentId('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>刪除 Comment</h4>
      <input
        type="text"
        value={guestToken}
        onChange={(e) => setGuestToken(e.target.value)}
        placeholder="guestToken"
      />
      <input type="text" placeholder="issueId 不用填" disabled />
      <input
        type="text"
        value={commentId}
        onChange={(e) => setCommentId(e.target.value)}
        placeholder="commentId"
      />
      <button>送出</button>
    </form>
  )
}

export default DeleteComment
