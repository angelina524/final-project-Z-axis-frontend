import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import io from 'socket.io-client'

import BACKEND_BASE_URL from '../../constants/baseURL'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import { ForestageIssueNavbar } from '../../components/Navbar/ForestageNavbar'
import Menu from '../../components/Menu/Menu'
import ForestageMenuContent from '../../components/Menu/ForestageMenuContent'
import Comment from '../../components/Comment'
import AddCommentForm from '../../components/AddCommentForm'
import { getAllComments } from '../../webapi/commentApi'
import { getIssue } from '../../webapi/issueApi'
import { getMe } from '../../webapi/userApi'
import {
  GuestTokenContext,
  UserTokenContext
} from '../../contexts/tokenContexts'

const Wrapper = styled.div`
  height: calc(100vh-4rem);
  top: 4rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 1rem;
  ${flexJustifyAlign('space-between')}
  flex-direction: column;
`

const CommentsWrapper = styled.div`
  width: 95%;
  position: relative;
  padding: 2rem 0 7rem;
  ${flexJustifyAlign()}
  flex-direction: column;
  gap: 1rem;
  svg {
    margin: 0 0.5rem;
  }
`
// dev server port
const socket = io.connect(BACKEND_BASE_URL)

const IssuePage = () => {
  const guestToken = useContext(GuestTokenContext)
  const { userToken } = useContext(UserTokenContext)
  const { url } = useParams()
  const [issue, setIssue] = useState({})
  const [comments, setComments] = useState([])
  const [userId, setUserId] = useState(null)
  const [topCommentId, setTopCommentId] = useState(0)
  const [filter, setFilter] = useState(false)
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    const doAsyncEffects = async () => {
      try {
        const response = await getAllComments(issue.id)
        const { data } = response
        if (!data.ok) throw new Error(data.message)
        setComments(data.comments)
      } catch (error) {
        console.log(error.message)
      }
    }
    doAsyncEffects()
  }, [trigger, filter])

  // socket listening events
  useEffect(() => {
    socket.on('addComment', (comment) => {
      setComments((prev) => [...prev, comment])
    })
    socket.on('updateComment', (updateComment) => {
      console.log(updateComment)
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === updateComment.id ? updateComment : comment
        )
      )
    })
    socket.on('deleteComment', (id) => {
      setComments((prev) => prev.filter((comment) => comment.id !== id))
    })
    window.scrollTo(0, document.body.scrollHeight)
  }, [socket])

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [comments])

  useEffect(() => {
    const doAsyncEffects = async () => {
      let issueData = {}
      try {
        const response = await getIssue(url)
        const { data } = response
        if (!data.ok) throw new Error(data.message)
        issueData = data.issue
      } catch (error) {
        console.log(error.message)
        return
      }
      setIssue(issueData)
      setTopCommentId(issueData.topCommentId)
      socket.emit('joinIssue', issueData.id)

      let commentsData = []
      try {
        const response = await getAllComments(issueData.id)
        const { data } = response
        if (!data.ok) throw new Error(data.message)
        commentsData = data.comments
      } catch (error) {
        console.log(error.message)
        return
      }
      setComments(commentsData)

      if (!userToken) return
      let userData = {}
      try {
        const response = await getMe()
        const { data } = response
        if (!data.ok) throw new Error(data.message)
        userData = data.user
      } catch (error) {
        console.log(error.message)
        return
      }
      setUserId(userData.id)
    }

    doAsyncEffects()
  }, [])

  const menuContent = () => {
    return <ForestageMenuContent issue={issue} />
  }

  return (
    <Wrapper>
      <Menu MenuContent={menuContent} />
      <ForestageIssueNavbar
        totalComments={comments.length}
        filter={filter}
        setFilter={setFilter}
        setTrigger={setTrigger}
      />
      <CommentsWrapper>
        {/* 優化 */}
        {comments
          .filter((comment) => comment.id === topCommentId)
          .map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              userId={userId}
              issueUserId={issue.UserId}
              guestToken={guestToken}
              socket={socket}
              setComments={setComments}
              topCommentId={topCommentId}
              setTopCommentId={setTopCommentId}
              setTrigger={setTrigger}
            />
          ))}
        {comments
          .filter((comment) => comment.id !== topCommentId)
          .sort((a, b) => (filter ? b.likesNum - a.likesNum : 0))
          .map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              userId={userId}
              issueUserId={issue.UserId}
              guestToken={guestToken}
              socket={socket}
              setComments={setComments}
              topCommentId={topCommentId}
              setTopCommentId={setTopCommentId}
              setTrigger={setTrigger}
            />
          ))}
      </CommentsWrapper>
      <AddCommentForm
        IssueId={issue.id}
        guestToken={guestToken}
        socket={socket}
        setComments={setComments}
      />
    </Wrapper>
  )
}

export default IssuePage
