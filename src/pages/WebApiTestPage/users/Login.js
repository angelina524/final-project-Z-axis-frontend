import React, { useState, useContext } from 'react'
import { login } from '../../../webapi/userApi'
import { setTopUserTokenContext } from '../WebApiTestPage'
import storage from '../../../localStorageApi'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const setTopUserToken = useContext(setTopUserTokenContext)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    let userToken = null
    try {
      userToken = await login(email, password)
    } catch (error) {
      console.log(error)
      alert('登入失敗')
      setPassword('')
      return
    }
    console.log({ userToken })
    alert('翻迎肥來，請到 console 複製你的 token')
    storage.setUserToken(userToken)
    setTopUserToken(userToken)

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
