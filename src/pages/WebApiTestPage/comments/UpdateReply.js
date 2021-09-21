import React, { useContext, useEffect, useRef, useState } from 'react'
import { getAllComments, updateReply } from '../../../webapi/commentApi'
import { Button } from '../Button'
import { topUserTokenContext } from '../WebApiTestPage'

const UpdateReply = () => {
  const [userToken, setUserToken] = useState('')
  const [issueId, setIssueId] = useState('')
  const [commentId, setCommentId] = useState('')
  const [reply, setReply] = useState('')
  const topUserToken = useContext(topUserTokenContext)
  const commentsRef = useRef([])

  const onClick = async () => {
    if (!issueId) return
    commentsRef.current = await getAllComments(issueId)
    console.log(commentsRef.current)
  }

  const onFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateReply(userToken, issueId, commentId, reply)
    } catch (err) {
      alert('編輯 reply 失敗')
      console.log(err)
      return
    }
    commentsRef.current = await getAllComments(issueId)
    const comment = commentsRef.current.find(
      (comment) => comment.id === Number(commentId)
    )
    console.log(comment)
    alert('編輯 reply 成功，請到 console 查看')
  }

  useEffect(() => {
    if (!issueId) return
    const setComments = async () => {
      commentsRef.current = await getAllComments(issueId)
    }
    setComments()
  }, [issueId])

  useEffect(() => {
    setReply('')
    if (!commentId) return
    const comment = commentsRef.current.find(
      (comment) => comment.id === Number(commentId)
    )
    if (!comment) return
    setReply(comment.reply || '')
  }, [commentId])

  useEffect(() => {
    setUserToken(topUserToken)
  }, [topUserToken])

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
      <Button onClick={onClick}>查詢 comments</Button>
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
