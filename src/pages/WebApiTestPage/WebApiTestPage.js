import React, { createContext, useState, useEffect } from 'react'
import { Global, css } from '@emotion/react'
import CreateComment from './comments/CreateComment'
import DeleteComment from './comments/DeleteComment'
import GetAllComments from './comments/GetAllComments'
import UpdateComment from './comments/UpdateComment'
import UpdateReply from './comments/UpdateReply'
import CreateGuest from './guest/CreateGuest'
import CreateIssue from './issues/CreateIssue'
import DeleteIssue from './issues/DeleteIssue'
import GetAllIssues from './issues/GetAllIssues'
import GetIssue from './issues/GetIssue'
import UpdateIssue from './issues/UpdateIssue'
import DeleteMe from './users/DeleteMe'
import GetMe from './users/GetMe'
import Login from './users/Login'
import Register from './users/Register'
import UpdateMe from './users/UpdateMe'
import UpdatePassword from './users/UpdatePassword'
import WebApiTestPageStyle from './WebApiTestPageStyle'
import storage from '../../localStorageApi'

export const topUserTokenContext = createContext('')
export const setTopUserTokenContext = createContext('')
export const topGuestTokenContext = createContext('')
export const setTopGuestTokenContext = createContext('')
const WebApiTestPage = () => {
  const [topUserToken, setTopUserToken] = useState('')
  const [topGuestToken, setTopGuestToken] = useState('')

  useEffect(() => {
    const userToken = storage.getUserToken()
    const guestToken = storage.getGuestToken()
    if (userToken) setTopUserToken(userToken)
    if (guestToken) setTopGuestToken(guestToken)
  }, [])

  return (
    <>
      <Global
        styles={css`
          ${WebApiTestPageStyle}
        `}
      />
      <topUserTokenContext.Provider value={topUserToken}>
        <setTopUserTokenContext.Provider value={setTopUserToken}>
          <topGuestTokenContext.Provider value={topGuestToken}>
            <setTopGuestTokenContext.Provider value={setTopGuestToken}>
              <div style={{ margin: '2rem 5rem' }}>
                <CreateGuest />
                <br />
                <h2>使用者</h2>
                <br />
                <Register />
                <Login />
                <GetMe />
                <UpdateMe />
                <UpdatePassword />
                <DeleteMe />
                <br />
                <hr />
                <br />
                <h2>Q&A</h2>
                <br />
                <CreateIssue />
                <DeleteIssue />
                <UpdateIssue />
                <GetAllIssues />
                <GetIssue />
                <br />
                <hr />
                <br />
                <h2>留言箱</h2>
                <br />
                <CreateComment />
                <DeleteComment />
                <UpdateComment />
                <UpdateReply />
                <GetAllComments />
                <br />
                <br />
                <br />
              </div>
            </setTopGuestTokenContext.Provider>
          </topGuestTokenContext.Provider>
        </setTopUserTokenContext.Provider>
      </topUserTokenContext.Provider>
    </>
  )
}

export default WebApiTestPage
