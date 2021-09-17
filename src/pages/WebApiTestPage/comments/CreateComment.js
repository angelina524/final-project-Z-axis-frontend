import React, { useState } from 'react'
import { createComment } from '../../../webapi/commentApi'

const CreateComment = () => {
  const [guestToken, setGuestToken] = useState('')
  const [issueId, setIssueId] = useState('')
  const [nickname, setNickname] = useState('')
  const [content, setContent] = useState('')

  const onFormSubmit = async (e) => {
    e.preventDefault()
    let comment = null
    try {
      comment = await createComment(guestToken, issueId, nickname, content)
    } catch (err) {
      console.log(err)
      alert('新增 comment 失敗')
      return
    }
    console.log({ comment })
    alert('新增 comment 成功，請到 console 查看')
    setIssueId('')
    setNickname('')
    setContent('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>新增 Comment</h4>
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

export default CreateComment
