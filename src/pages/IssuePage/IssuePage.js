import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import { ForestageIssueNavbar } from '../../components/ForestageNavbar'
import { Menu } from '../../components/Menu'
import ForestageMenuContent from '../../components/ForestageMenuContent'
import Comment from '../../components/Comment'
import AddCommentForm from '../../components/AddCommentForm'
import { getAllComments } from '../../webapi/commentApi'
import { getIssue } from '../../webapi/issueApi'
import { createGuest } from '../../webapi/guestApi'
import { getMe } from '../../webapi/userApi'

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

const IssuePage = () => {
  const [issue, setIssue] = useState({})
  const [comments, setComments] = useState([])
  const [userId, setUserId] = useState(null)
  const [userNickname, setUserNickname] = useState(null)
  const [guestToken, setGuestToken] = useState(null)
  const userToken = window.localStorage.getItem('userToken')

  // issueURL 暫時寫死
  // guestToken 待優化
  // filter 待完成
  // websocket 待完成
  useEffect(() => {
    const getGuestToken = async () => {
      if (localStorage.getItem('guestToken')) {
        setGuestToken(localStorage.getItem('guestToken'))
      } else {
        const guest = await createGuest()
        setGuestToken(guest.guestToken)
        localStorage.setItem('guestToken', guestToken)
      }
    }

    getGuestToken()

    const doAsyncEffects = async () => {
      const issueData = await getIssue('0e36ddb504d5ca0cf414fe0fd16fb9bf')
      setIssue(issueData)

      const commentsData = await getAllComments(issueData.id)
      setComments(commentsData)

      if (userToken) {
        const userData = await getMe(localStorage.getItem('userToken'))
        setUserId(userData.id)
        setUserNickname(userData.nickname)
      }
    }

    doAsyncEffects()
  }, [])

  const menuContent = () => {
    const beginTime = new Date(issue.beginTime).toLocaleDateString()
    const finishTime = new Date(issue.finishTime).toLocaleDateString()

    return (
      <ForestageMenuContent
        userId={userId}
        issueUserId={issue.UserId}
        title={issue.title}
        description={issue.description}
        beginDate={beginTime}
        finishDate={finishTime}
      />
    )
  }

  return (
    <Wrapper>
      <Menu userId={userId} nickname={userNickname} MenuContent={menuContent} />
      <ForestageIssueNavbar totalComments={comments.length} />
      <CommentsWrapper>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            userId={userId}
            issueUserId={issue.UserId}
            userToken={userToken}
            guestToken={guestToken}
          />
        ))}
      </CommentsWrapper>
      <AddCommentForm IssueId={issue.id} guestToken={guestToken} />
    </Wrapper>
  )
}

export default IssuePage
