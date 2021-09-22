import React from 'react'
import styled from '@emotion/styled'

const Wrap = styled.div`
  width: 200px;
  height: 200px;
`

const CommentWrap = styled.div`
  width: 200px;
  height: 60px;
  position: relative;
`

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondary_300};
`

const Comment = styled.div`
  width: 150px;
  height: 40px;
  background-color: ${({ theme }) => theme.secondary_300};
  border-radius: 12px;
  position: absolute;
  right: 0;
  top: 15px;
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
    background-color: ${({ theme }) => theme.secondary_900};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: -12px;
    left: -8px;
    z-index: -1;
  }
`

const issuePattern = () => {
  return (
    <Wrap>
      <CommentWrap>
        <Avatar />
        <Comment />
      </CommentWrap>
      <CommentWrap>
        <Avatar />
        <Comment />
      </CommentWrap>
      <CommentWrap>
        <Avatar />
        <Comment />
      </CommentWrap>
    </Wrap>
  )
}

export default issuePattern
