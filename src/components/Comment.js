import React, { useState } from 'react'
import moment from 'moment'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import PropTypes from 'prop-types'
import {
  thumbsUpIcon,
  pushpinIcon,
  plusIcon,
  replyIcon,
  editIcon,
  deleteIcon,
  sendIcon
} from './icons'
import flexJustifyAlign from './../styles/flexJustifyAlign'
import {
  updateReply,
  updateComment,
  deleteComment
} from './../webapi/commentApi'
import Avatar from './../components/Avatar'

const CommentWrapper = styled.div`
  width: 100%;
  position: relative;
  ${flexJustifyAlign('center', 'flex-end')}
  flex-direction: column;
`

const CommentAvatarWrapper = styled.div`
  position: absolute;
  left: 0;
  top: -20px;
`

const Nickname = styled.div`
  position: absolute;
  width: 75%;
  top: -20px;
  left: 50px;
  font-size: 0.8rem;
  z-index: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.secondary_300};
`

const CommentContainer = styled.div`
  position: relative;
  right: 0;
  width: calc(100% - 45px);
  ${flexJustifyAlign('center', 'flex-start')}
  flex-direction: column;
  border: ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.secondary_900};
  border-radius: 12px;
  gap: 0.5rem;
  &:before {
    content: '';
    display: block;
    position: absolute;
    border: ${({ theme }) => theme.border};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: -3px;
    left: -8px;
    z-index: -1;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    background: ${({ theme }) => theme.secondary_900};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: -12px;
    left: -8px;
    z-index: -1;
  }
`

const CommentTop = styled.div`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  ${flexJustifyAlign('space-between')};
`

const Text = styled.div`
  margin-right: 0.5rem;
  word-break: break-all;
`

const LikesBtn = styled.div`
  width: 100%;
  max-width: 70px;
  padding: 0.2rem 0.5rem;
  background: ${({ theme }) => theme.secondary_850};
  border-radius: 1rem;
  cursor: pointer;
`

const Reply = styled.div`
  width: 100%;
  padding: 0 0.5rem 0.5rem 0.5rem;
  word-break: break-all;
  & > span {
    color: ${({ theme }) => theme.secondary_300};
  }
`

const CommentBottom = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  ${flexJustifyAlign('flex-start')}
  border-top: ${({ theme }) => theme.border};
  gap: 1.5rem;
`

const Option = styled.div`
  cursor: pointer;
  ${flexJustifyAlign()}
  flex-direction: column;

  & > div {
    margin-top: 0.2rem;
    text-align: center;
    color: ${({ theme }) => theme.secondary_300};
    font-size: 0.8rem;
  }
`

const CommentInfo = styled.div`
  padding: 0 0 0.4rem;
  ${flexJustifyAlign()}

  svg {
    cursor: pointer;
  }
`

const CreatedTime = styled.div`
  color: ${({ theme }) => theme.secondary_300};
  font-size: 0.8rem;
`

const ReplyForm = styled.form`
  ${flexJustifyAlign('flex-start', 'flex-end')}
  gap: 0.5rem;
`

const ReplyInput = styled.textarea`
  border: none;
  padding: 0.5rem;
  width: 100%;
  resize: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.secondary_850};
  &::placeholder {
    color: ${({ theme }) => theme.secondary_300};
  }
  &:focus {
    outline: none;
  }
`

const SubmitReplyBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

const CommentForm = styled(ReplyForm)``

const CommentInput = styled(ReplyInput)``

const SubmitCommentBtn = styled(SubmitReplyBtn)``

const Comment = ({ comment, userId, issueUserId, userToken, guestToken }) => {
  const theme = useTheme()
  const [nickname, setNickname] = useState(comment.nickname || '')
  const [content, setContent] = useState(comment.content || '')
  const [reply, setReply] = useState(comment.reply || '')
  const [isReplyOpen, setIsReplyOpen] = useState(false)
  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false)
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [isCommentFormOpen, setIsCommentFormOpen] = useState(false)

  const { IssueId, id } = comment

  // 按讚：等待 API
  const [likesNum, setLikesNum] = useState(0)

  // 置頂：等待 API
  const handlePinCommentOnTopClick = () => {}

  const handleReplyFormSubmit = async (e) => {
    e.preventDefault()
    if (!reply.trim()) return
    await updateReply(userToken, IssueId, id, reply.trim())

    setReply('')
    setIsReplyFormOpen(false)
    setIsOptionsOpen(false)
  }

  const handleDeleteReplyClick = async () => {
    await updateReply(userToken, IssueId, id, '')

    setIsOptionsOpen(false)
  }

  const handleUpdateCommentFormSubmit = async (e) => {
    e.preventDefault()
    if (!content.trim()) return
    await updateComment(
      guestToken,
      IssueId,
      id,
      nickname.trim(),
      content.trim()
    )

    setNickname('')
    setContent('')
    setIsCommentFormOpen(false)
    setIsOptionsOpen(false)
  }

  const handleDeleteCommentClick = async () => {
    await deleteComment(guestToken, userToken, IssueId, id)

    setIsOptionsOpen(false)
  }

  const renderCommentContent = () => (
    <>
      <Text>{comment.content}</Text>
      <LikesBtn onClick={() => setLikesNum((prev) => prev + 1)}>
        {thumbsUpIcon('1x', theme.secondary_300)}
        {likesNum}
      </LikesBtn>
    </>
  )

  const renderCommentForm = () => (
    <CommentForm onSubmit={handleUpdateCommentFormSubmit}>
      <div>
        <CommentInput
          rows="1"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="輸入暱稱"
        />
        <CommentInput
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="輸入留言"
        />
      </div>
      <SubmitCommentBtn>{sendIcon('2x', theme.primary)}</SubmitCommentBtn>
    </CommentForm>
  )

  const renderReplyContent = () => (
    <Reply>
      {replyIcon('1x', theme.secondary_300)}
      <span>{comment.reply}</span>
    </Reply>
  )

  const renderReplyForm = () => (
    <Reply>
      <ReplyForm onSubmit={handleReplyFormSubmit}>
        <ReplyInput
          rows="3"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="輸入回覆"
        />
        <SubmitReplyBtn>{sendIcon('2x', theme.primary)}</SubmitReplyBtn>
      </ReplyForm>
    </Reply>
  )

  const renderPinCommentOnTopOption = () => (
    <Option onClick={handlePinCommentOnTopClick}>
      {pushpinIcon('1x', theme.secondary_300)}
      <div>置頂</div>
    </Option>
  )

  const renderAddReplyOption = () => (
    <Option onClick={() => setIsReplyFormOpen((prev) => !prev)}>
      {replyIcon('1x', theme.secondary_300)}
      <div>回覆</div>
    </Option>
  )

  const renderEditAndDeleteReplyOptions = () => (
    <>
      <Option
        onClick={() => {
          setIsReplyOpen(false)
          setIsReplyFormOpen((prev) => !prev)
          setIsCommentFormOpen(false)
        }}
      >
        {editIcon('1x', theme.secondary_300)}
        <div>編輯回覆</div>
      </Option>
      <Option onClick={handleDeleteReplyClick}>
        {deleteIcon('1x', theme.secondary_300)}
        <div>刪除回覆</div>
      </Option>
    </>
  )

  const renderEditAndDeleteCommentOptions = () => (
    <>
      <Option
        onClick={() => {
          setIsCommentFormOpen((prev) => !prev)
          setIsReplyOpen(false)
          setIsReplyFormOpen(false)
        }}
      >
        {editIcon('1x', theme.secondary_300)}
        <div>編輯留言</div>
      </Option>
      <Option onClick={handleDeleteCommentClick}>
        {deleteIcon('1x', theme.secondary_300)}
        <div>刪除留言</div>
      </Option>
    </>
  )

  return (
    <CommentWrapper>
      <CommentAvatarWrapper>
        <Avatar size={'35px'} />
      </CommentAvatarWrapper>
      <Nickname>{comment.nickname}</Nickname>
      <CommentContainer>
        <CommentTop>
          {!isCommentFormOpen && renderCommentContent()}
          {isCommentFormOpen && renderCommentForm()}
        </CommentTop>
        {isReplyOpen && comment.reply && renderReplyContent()}
        {isReplyFormOpen && renderReplyForm()}
        {isOptionsOpen && (
          <CommentBottom>
            {userId === issueUserId && renderPinCommentOnTopOption()}
            {userId === issueUserId && !comment.reply && renderAddReplyOption()}
            {userId === issueUserId &&
              comment.reply &&
              renderEditAndDeleteReplyOptions()}
            {comment.guestToken === guestToken &&
              renderEditAndDeleteCommentOptions()}
          </CommentBottom>
        )}
      </CommentContainer>
      <CommentInfo>
        {comment.reply && (
          <div onClick={() => setIsReplyOpen((prev) => !prev)}>
            {replyIcon('1x', theme.secondary_300)}
          </div>
        )}
        <CreatedTime>{moment(comment.createdAt).fromNow()}</CreatedTime>
        <div
          onClick={() => {
            setIsOptionsOpen((prev) => !prev)
            setIsReplyFormOpen(false)
            setIsCommentFormOpen(false)
          }}
        >
          {(userId === issueUserId || comment.guestToken === guestToken) &&
            plusIcon('1x', theme.secondary_300)}
        </div>
      </CommentInfo>
    </CommentWrapper>
  )
}

Comment.propTypes = {
  comment: PropTypes.object,
  userId: PropTypes.number,
  issueUserId: PropTypes.number,
  userToken: PropTypes.object,
  guestToken: PropTypes.string
}

export default Comment
