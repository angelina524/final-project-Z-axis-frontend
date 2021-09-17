import React, { useState, useEffect, useContext } from 'react'
import { updateMe, getMe } from '../../../webapi/userApi'
import { topUserTokenContext } from '../WebApiTestPage'

const UpdateMe = () => {
  const [userToken, setUserToken] = useState('')
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const topUserToken = useContext(topUserTokenContext)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const newUserToken = await updateMe(userToken, nickname, email)
    let user = null
    try {
      user = await getMe(newUserToken)
    } catch (error) {
      console.log(error)
      alert('個人資訊修改失敗')
      return
    }
    console.log({ user })
    alert('個人資訊修改成功，請到 console 看你的新個人資訊')
  }

  useEffect(() => {
    setUserToken(topUserToken)
    if (!topUserToken) return
    const setField = async () => {
      let user = null
      try {
        user = await getMe(topUserToken)
      } catch (error) {
        console.log(error)
        setNickname('')
        setEmail('')
        return
      }
      setNickname(user.nickname)
      setEmail(user.email)
    }
    setField()
  }, [topUserToken])

  return (
    <form onSubmit={onFormSubmit}>
      <h4>修改個人資料</h4>
      <input
        type="text"
        value={userToken}
        onChange={(e) => setUserToken(e.target.value)}
        placeholder="userToken"
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
