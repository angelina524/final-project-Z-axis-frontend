import React, { useEffect, useState } from 'react'
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
  deleteComment,
  likesComment
} from './../webapi/commentApi'
import Avatar from './../components/Avatar'
import { getRelation } from '../webapi/relationApi'
import { pinCommentOnTop, unpinCommentOnTop } from '../webapi/issueApi'

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
  font-size: 0.75rem;
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
  gap: 0.9rem;
`

const Option = styled.div`
  cursor: pointer;
  ${flexJustifyAlign()}
  flex-direction: column;

  & > div {
    margin-top: 0.2rem;
    text-align: center;
    color: ${({ theme }) => theme.secondary_300};
    font-size: 0.75rem;
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
  font-size: 0.75rem;
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

const Pin = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(25%, -50%);
`

const Comment = ({
  isBackstage,
  comment,
  userId,
  issueUserId,
  guestToken,
  socket,
  setComments,
  topCommentId,
  setTopCommentId,
  setTrigger
}) => {
  const theme = useTheme()
  const [nickname, setNickname] = useState(comment.nickname || '')
  const [content, setContent] = useState(comment.content || '')
  const [reply, setReply] = useState(comment.reply || '')
  const [isReplyOpen, setIsReplyOpen] = useState(false)
  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false)
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [isCommentFormOpen, setIsCommentFormOpen] = useState(false)
  const [likesNum, setLikesNum] = useState(comment.likesNum || 0)
  const [isLiked, setIsLiked] = useState(false)

  const { IssueId, id: commentId } = comment

  useEffect(() => {
    const doAsyncEffects = async () => {
      const response = await getRelation(commentId)
      const { data } = response
      setIsLiked(!!data.ok)
    }
    doAsyncEffects()
  }, [])

  useEffect(() => {
    setReply(comment.reply)
  }, [comment])

  const handlePinCommentOnTopClick = async () => {
    try {
      const response =
        commentId === topCommentId
          ? await unpinCommentOnTop(IssueId, commentId)
          : await pinCommentOnTop(IssueId, commentId)
      const { data } = response
      if (!data.ok) throw new Error(data.message)
      setTopCommentId(commentId === topCommentId ? 0 : commentId)
    } catch (error) {
      console.log(error.message)
    }
    // todo: socket.io
  }

  const handleReplyFormSubmit = async (e) => {
    e.preventDefault()
    if (!reply.trim()) return
    try {
      const response = await updateReply(IssueId, commentId, reply.trim())
      const { data } = response
      if (!data.ok) throw new Error(data.message)
      setComments((prev) =>
        prev.map((prevComment) => {
          if (prevComment.id !== commentId) return prevComment
          return {
            ...prevComment,
            reply: reply.trim(),
            replyCreateAt: new Date()
          }
        })
      )
    } catch (error) {
      console.log(error.message)
      return
    }

    setReply('')
    setIsReplyFormOpen(false)
    setIsOptionsOpen(false)
  }

  const handleDeleteReplyClick = async () => {
    try {
      const response = await updateReply(IssueId, commentId, '')
      const { data } = response
      if (!data.ok) throw new Error(data.message)
      setComments((prev) =>
        prev.map((prevComment) => {
          if (prevComment.id !== commentId) return prevComment
          return {
            ...prevComment,
            reply: '',
            replyCreateAt: new Date()
          }
        })
      )
    } catch (error) {
      console.log(error.message)
      return
    }

    setIsOptionsOpen(false)
  }

  const handleUpdateCommentFormSubmit = async (e) => {
    e.preventDefault()
    if (!content.trim()) return
    try {
      const response = await updateComment(
        IssueId,
        commentId,
        nickname.trim(),
        content.trim()
      )
      const { data } = response
      if (!data.ok) throw new Error(data.message)

      const { comment } = data
      await socket.emit('updateComment', comment)
      setComments((prev) =>
        prev.map((prevComment) =>
          prevComment.id === comment.id ? comment : prevComment
        )
      )
    } catch (error) {
      console.log(error.message)
      return
    }

    setNickname('')
    setContent('')
    setIsCommentFormOpen(false)
    setIsOptionsOpen(false)
  }

  const handleDeleteCommentClick = async () => {
    try {
      const response = await deleteComment(IssueId, commentId)
      const { data } = response
      if (!data.ok) throw new Error(data.message)

      await socket.emit('deleteComment', { IssueId, commentId })
      setComments((prev) => prev.filter((comment) => comment.id !== commentId))
    } catch (error) {
      console.log(error.message)
      return
    }

    setIsOptionsOpen(false)
  }

  const handleLikesComment = async () => {
    try {
      const response = await likesComment(IssueId, commentId)
      const { data } = response
      if (!data.ok) throw new Error(data.message)
      // 先湊合著用，之後要改成 socket.io？
      setLikesNum((prev) => {
        if (data.message === '按讚成功') return prev + 1
        if (data.message === '收回按讚') return prev - 1
        return prev
      })
      setComments((prev) =>
        prev.map((comment) => {
          if (comment.id !== commentId) return comment
          return {
            ...comment,
            likensNum:
              data.message === '按讚成功'
                ? comment.likesNum + 1
                : comment.likesNum - 1
          }
        })
      )
      setIsLiked((prev) => !prev)
      setTrigger((prev) => !prev)
    } catch (error) {
      console.log(error.message)
    }
  }

  const renderCommentContent = () => (
    <>
      <Text>{comment.content}</Text>
      <LikesBtn onClick={handleLikesComment}>
        {thumbsUpIcon('1x', isLiked ? theme.primary : theme.secondary_300)}
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
      <div>{topCommentId === commentId ? '取消置頂' : '置頂'}</div>
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

  const renderEditCommentOption = () => (
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
  )

  const renderDeleteCommentOption = () => (
    <Option onClick={handleDeleteCommentClick}>
      {deleteIcon('1x', theme.secondary_300)}
      <div>刪除留言</div>
    </Option>
  )

  return (
    <CommentWrapper>
      <CommentAvatarWrapper>
        <Avatar size={'35px'} />
      </CommentAvatarWrapper>
      <Nickname>{comment.nickname}</Nickname>
      <CommentContainer>
        {commentId === topCommentId && (
          <Pin>{pushpinIcon('lg', theme.secondary_300)}</Pin>
        )}
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
            {comment.guestToken === guestToken && renderEditCommentOption()}
            {!isBackstage &&
              comment.guestToken === guestToken &&
              renderDeleteCommentOption()}
            {isBackstage && renderDeleteCommentOption()}
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
  isBackstage: PropTypes.bool,
  comment: PropTypes.object,
  userId: PropTypes.number,
  issueUserId: PropTypes.number,
  guestToken: PropTypes.string,
  socket: PropTypes.object,
  setComments: PropTypes.func,
  topCommentId: PropTypes.number,
  setTopCommentId: PropTypes.func,
  setTrigger: PropTypes.func
}

export default Comment
