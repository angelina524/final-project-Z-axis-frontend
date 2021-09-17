import React from 'react'
import CreateComment from './comments/CreateComment'
import DeleteComment from './comments/DeleteComment'
import UpdateComment from './comments/UpdateComment'
import UpdateReply from './comments/UpdateReply'
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
import './WebApiTestPage.css'

const WebApiTestPage = () => {
  return (
    <div style={{ margin: '2rem 5rem' }}>
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
      <br />
      <br />
      <br />
    </div>
  )
}

export default WebApiTestPage
