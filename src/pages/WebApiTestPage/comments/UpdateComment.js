import React, { useContext, useEffect, useRef, useState } from 'react'
import { getAllComments, updateComment } from '../../../webapi/commentApi'
import { Button } from '../Button'
import { topGuestTokenContext } from '../WebApiTestPage'

const UpdateComment = () => {
  const [guestToken, setGuestToken] = useState('')
  const [commentId, setCommentId] = useState('')
  const [issueId, setIssueId] = useState('')
  const [nickname, setNickname] = useState('')
  const [content, setContent] = useState('')
  const topGuestToken = useContext(topGuestTokenContext)
  const commentsRef = useRef([])

  const onClick = async () => {
    if (!issueId) return
    commentsRef.current = await getAllComments(issueId)
    console.log(commentsRef.current)
  }

  const onFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateComment(guestToken, issueId, commentId, nickname, content)
    } catch (err) {
      console.log(err)
      alert('編輯 comment 失敗')
      return
    }
    commentsRef.current = await getAllComments(issueId)
    const comment = commentsRef.current.find(
      (comment) => comment.id === Number(commentId)
    )
    console.log(comment)
    alert('編輯 comment 成功，請到 console 查看')
  }

  useEffect(() => {
    if (!issueId) return
    const setComments = async () => {
      commentsRef.current = await getAllComments(issueId)
    }
    setComments()
  }, [issueId])

  useEffect(() => {
    if (!commentId) return
    const comment = commentsRef.current.find(
      (comment) => comment.id === Number(commentId)
    )
    if (!comment) return
    setNickname(comment.nickname)
    setContent(comment.content)
  }, [commentId])

  useEffect(() => {
    setGuestToken(topGuestToken)
  }, [topGuestToken])

  return (
    <form onSubmit={onFormSubmit}>
      <h4>編輯 Comment</h4>
      <input
        type="text"
        value={guestToken}
        onChange={(e) => setGuestToken(e.target.value)}
        placeholder="guestToken"
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
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="nickname"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="content"
      />
      <button>送出</button>
    </form>
  )
}

export default UpdateComment
