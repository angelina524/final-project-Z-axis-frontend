import React, { useState } from 'react'
import { login } from '../../../webapi/userApi'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const token = await login(email, password)
    alert('翻迎肥來，請到 console 複製你的 token')
    console.log({ token })
    setEmail('')
    setPassword('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>登入</h4>
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

export default Login
