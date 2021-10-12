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
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -12px;
    left: -8px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 0px 10px 0 0 ${({ theme }) => theme.secondary_300};
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
        <Comment />
      </CommentWrapper>
    </Wrapper>
  )
}

export default issuePattern
