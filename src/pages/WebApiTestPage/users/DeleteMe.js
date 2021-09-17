import React, { useState, useEffect, useContext } from 'react'
import { deleteMe } from '../../../webapi/userApi'
import { topUserTokenContext } from '../WebApiTestPage'

const DeleteMe = () => {
  const [userToken, setUserToken] = useState('')
  const topUserToken = useContext(topUserTokenContext)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await deleteMe(userToken)
    } catch (error) {
      console.log(error)
      alert('刪除 user 失敗')
      return
    }
    console.log('刪除 user 成功')
    alert('刪除 user 成功')
  }

  useEffect(() => {
    setUserToken(topUserToken)
  }, [topUserToken])

  return (
    <form onSubmit={onFormSubmit}>
      <h4>刪除使用者</h4>
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

export default DeleteMe
