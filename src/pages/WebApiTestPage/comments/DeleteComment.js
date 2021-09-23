import React, { useContext, useEffect, useState } from 'react'
import { deleteComment, getAllComments } from '../../../webapi/commentApi'
import { Button } from '../Button'
import { topGuestTokenContext, topUserTokenContext } from '../WebApiTestPage'

const DeleteComment = () => {
  const [guestToken, setGuestToken] = useState('')
  const [userToken, setUserToken] = useState('')
  const [issueId, setIssueId] = useState('')
  const [commentId, setCommentId] = useState('')
  const topUserToken = useContext(topUserTokenContext)
  const topGuestToken = useContext(topGuestTokenContext)

  const onClick = async () => {
    if (!issueId) return
    const comments = await getAllComments(issueId)
    console.log(comments)
  }

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
      <h5>（輸入 issueId 後會在 console 印出 comments）</h5>
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
      <Button onClick={onClick}>查詢 comments</Button>
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
