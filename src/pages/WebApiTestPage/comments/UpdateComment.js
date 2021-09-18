import React, { useContext, useEffect, useState } from 'react'
import { updateComment } from '../../../webapi/commentApi'
import { topGuestTokenContext } from '../WebApiTestPage'

const UpdateComment = () => {
  const [guestToken, setGuestToken] = useState('')
  const [commentId, setCommentId] = useState('')
  const [nickname, setNickname] = useState('')
  const [content, setContent] = useState('')
  const topGuestToken = useContext(topGuestTokenContext)

  const issueId = '123' // issueId 不用輸入，但 api route 設計需要有東西，所以先隨便填

  const onFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateComment(guestToken, issueId, commentId, nickname, content)
    } catch (err) {
      console.log(err)
      alert('編輯 comment 失敗')
      return
    }
    alert('編輯 comment 成功，請到自己到資料庫查看')
  }

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
      <input type="text" placeholder="issueId 不用填" disabled />
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
