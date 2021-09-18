import React, { useContext, useEffect, useState } from 'react'
import { deleteComment } from '../../../webapi/commentApi'
import { topGuestTokenContext, topUserTokenContext } from '../WebApiTestPage'

const DeleteComment = () => {
  const [guestToken, setGuestToken] = useState('')
  const [userToken, setUserToken] = useState('')
  const [issueId, setIssueId] = useState('')
  const [commentId, setCommentId] = useState('')
  const topUserToken = useContext(topUserTokenContext)
  const topGuestToken = useContext(topGuestTokenContext)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await deleteComment(guestToken, userToken, issueId, commentId)
    } catch (err) {
      console.log(err)
      alert('刪除 comment 失敗')
      return
    }
    console.log('刪除 comment 成功')
    alert('刪除 comment 成功')
    setCommentId('')
  }

  useEffect(() => {
    setUserToken(topUserToken)
  }, [topUserToken])

  useEffect(() => {
    setGuestToken(topGuestToken)
  }, [topGuestToken])

  return (
    <form onSubmit={onFormSubmit}>
      <h4>刪除 Comment</h4>
      <input
        type="text"
        value={guestToken}
        onChange={(e) => setGuestToken(e.target.value)}
        placeholder="guestToken"
      />
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
      <button>送出</button>
    </form>
  )
}

export default DeleteComment
