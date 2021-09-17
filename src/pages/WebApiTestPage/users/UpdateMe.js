import React, { useState } from 'react'
import { updateMe, getMe } from '../../../webapi/userApi'

const UpdateMe = () => {
  const [token, setToken] = useState('')
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const newToken = await updateMe(token, nickname, email)
    const user = await getMe(newToken)
    alert('個人資訊修改成功，請到 console 看你的新個人資訊')
    console.log({ user })
    setToken('')
    setNickname('')
    setEmail('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>修改個人資料</h4>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="token"
      />
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="nickname"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <button>送出</button>
    </form>
  )
}

export default UpdateMe
