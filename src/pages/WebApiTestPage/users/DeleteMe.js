import React, { useState } from 'react'
import { deleteMe } from '../../../webapi/userApi'

const DeleteMe = () => {
  const [token, setToken] = useState('')

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const ok = await deleteMe(token)
    if (!ok) return alert('刪除失敗，再試一次')
    alert('刪除成功')
    setToken('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>刪除使用者</h4>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="token"
      />
      <button>送出</button>
    </form>
  )
}

export default DeleteMe
