import React, { useState, useEffect, useContext } from 'react'
import { updatePassword, getMe } from '../../../webapi/userApi'
import { topUserTokenContext } from '../WebApiTestPage'

const UpdatePassword = () => {
  const [userToken, setUserToken] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [againPassword, setAgainPassword] = useState('')
  const topUserToken = useContext(topUserTokenContext)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await updatePassword(
        userToken,
        oldPassword,
        newPassword,
        againPassword
      )
    } catch (error) {
      console.log(error)
      alert('個人密碼修改失敗')
      return
    }
    const user = await getMe(userToken)
    console.log({ user })
    alert('個人密碼修改成功，請到 console 看你的新個人資訊（但 hash 你也看不懂）')
    setOldPassword('')
    setNewPassword('')
    setAgainPassword('')
  }

  useEffect(() => {
    setUserToken(topUserToken)
  }, [topUserToken])

  return (
    <form onSubmit={onFormSubmit}>
      <h4>修改個人密碼</h4>
      <input
        type="text"
        value={userToken}
        onChange={(e) => setUserToken(e.target.value)}
        placeholder="userToken"
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
