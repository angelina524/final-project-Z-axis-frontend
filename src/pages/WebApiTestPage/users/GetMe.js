import React, { useState, useEffect, useContext } from 'react'
import { getMe } from '../../../webapi/userApi'
import { topUserTokenContext } from '../WebApiTestPage'

const GetMe = () => {
  const [userToken, setUserToken] = useState('')
  const topUserToken = useContext(topUserTokenContext)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    let user = null
    try {
      user = await getMe(userToken)
    } catch (error) {
      console.log(error)
      alert('個人資料讀取失敗')
      return
    }
    console.log({ user })
    alert('個人資料讀取成功，到 console 看你的資料')
  }

  useEffect(() => {
    setUserToken(topUserToken)
  }, [topUserToken])

  return (
    <form onSubmit={onFormSubmit}>
      <h4>取得個人資料</h4>
      <input
        type="text"
        value={userToken}
        onChange={(e) => setUserToken(e.target.value)}
        placeholder="userToken"
      />
      <button>送出</button>
    </form>
  )
}

export default GetMe
