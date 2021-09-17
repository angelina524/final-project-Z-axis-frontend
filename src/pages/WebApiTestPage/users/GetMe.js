import React, { useState } from 'react'
import { getMe } from '../../../webapi/userApi'

const GetMe = () => {
  const [token, setToken] = useState('')

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const user = await getMe(token)
    alert('到 console 看你的資料')
    console.log({ user })
    setToken('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>取得個人資料</h4>
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

export default GetMe
