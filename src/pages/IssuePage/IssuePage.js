import React, { useState, useEffect, useContext } from 'react'
import styled from '@emotion/styled'

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

const IssuePage = () => {
  const guestToken = useContext(GuestTokenContext)
  const userToken = useContext(UserTokenContext)
  const [issue, setIssue] = useState({})
  const [comments, setComments] = useState([])
  const [userId, setUserId] = useState(null)
  const [userNickname, setUserNickname] = useState(null)

  // issueURL 暫時寫死
  // filter 待完成
  // websocket 待完成
  useEffect(() => {
    const doAsyncEffects = async () => {
      const issueData = await getIssue('0e36ddb504d5ca0cf414fe0fd16fb9bf')
      setIssue(issueData)

      const commentsData = await getAllComments(issueData.id)
      setComments(commentsData)

      if (!userToken) return
      const userData = await getMe(userToken)
      setUserId(userData.id)
      setUserNickname(userData.nickname)
    }

    doAsyncEffects()
  }, [])

  const menuContent = () => {
    // todo:用統一時間 function
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
