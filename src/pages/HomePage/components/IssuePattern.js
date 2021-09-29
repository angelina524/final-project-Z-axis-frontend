import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
`

const CommentWrapper = styled.div`
  width: 200px;
  height: 64px;
  position: relative;
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondary_300};
`

const Comment = styled.div`
  width: 146px;
  height: 46px;
  background-color: ${({ theme }) => theme.secondary_300};
  border-radius: 13px;
  position: absolute;
  right: 0;
  top: 18px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.secondary_300};
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
    background-color: ${({ theme }) => theme.secondary_850};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: -12px;
    left: -8px;
    z-index: -1;
  }
`

const LastComment = styled(Comment)`
  &:after {
    background-color: ${({ theme }) => theme.secondary_900};
  }
`

const issuePattern = () => {
  return (
    <Wrapper>
      <CommentWrapper>
        <Avatar />
        <Comment />
      </CommentWrapper>
      <CommentWrapper>
        <Avatar />
        <Comment />
      </CommentWrapper>
      <CommentWrapper>
        <Avatar />
        <LastComment />
      </CommentWrapper>
    </Wrapper>
  )
}

export default issuePattern
