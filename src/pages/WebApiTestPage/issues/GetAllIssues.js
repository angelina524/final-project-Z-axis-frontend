import React, { useState, useContext, useEffect } from 'react'
import { getAllIssues } from '../../../webapi/issueApi'
import { topUserTokenContext } from '../WebApiTestPage'

const GetAllIssues = () => {
  const [userToken, setUserToken] = useState('')
  const topUserToken = useContext(topUserTokenContext)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    let issues = null
    try {
      issues = await getAllIssues(userToken)
    } catch (err) {
      console.log(err)
      alert('獲取 issues 失敗')
      return
    }
    console.log({ issues })
    alert('獲取 issues 成功，請到 console 查看')
  }

  useEffect(() => {
    setUserToken(topUserToken)
  }, [topUserToken])

  return (
    <form onSubmit={onFormSubmit}>
      <h4>查看 user 所有 Issues</h4>
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

export default GetAllIssues
