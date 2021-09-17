import React, { useState } from 'react'
import { register } from '../../../webapi/userApi'

const Register = () => {
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const token = await register(nickname, email, password)
    alert('註冊成功，請到 console 複製你的 token')
    console.log({ token })
    setNickname('')
    setEmail('')
    setPassword('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>註冊</h4>
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
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button>送出</button>
    </form>
  )
}

export default Register
