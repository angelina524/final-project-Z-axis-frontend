import React, { useState } from 'react'
import { updatePassword, getMe } from '../../../webapi/userApi'

const UpdatePassword = () => {
  const [token, setToken] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [againPassword, setAgainPassword] = useState('')

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const ok = await updatePassword(
      token,
      oldPassword,
      newPassword,
      againPassword
    )
    if (!ok) alert('修改失敗，再試一次')
    const user = await getMe(token)
    alert('個人密碼修改成功，請到 console 看你的新個人資訊')
    console.log({ user })
    setToken('')
    setOldPassword('')
    setNewPassword('')
    setAgainPassword('')
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
        type="password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        placeholder="oldPassword"
      />
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="newPassword"
      />
      <input
        type="password"
        value={againPassword}
        onChange={(e) => setAgainPassword(e.target.value)}
        placeholder="againPassword"
      />
      <button>送出</button>
    </form>
  )
}

export default UpdatePassword
