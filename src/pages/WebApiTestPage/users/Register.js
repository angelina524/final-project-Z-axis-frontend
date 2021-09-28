import React, { useState, useContext } from 'react'
import { register } from '../../../webapi/userApi'
import { setTopUserTokenContext } from '../WebApiTestPage'
import storage from '../../../localStorageApi'

const Register = () => {
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const setTopUserToken = useContext(setTopUserTokenContext)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    let userToken = null
    try {
      userToken = await register(nickname, email, password)
    } catch (error) {
      console.log(error)
      alert('註冊失敗')
      return
    }
    console.log({ userToken })
    alert('註冊成功，請到 console 複製你的 token')
    storage.setUserToken(userToken)
    setTopUserToken(userToken)

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
