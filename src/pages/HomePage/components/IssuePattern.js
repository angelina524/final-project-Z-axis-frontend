import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
`

const CommentWrapper = styled.div`
  width: 200px;
  height: 60px;
  position: relative;
`

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #c4c4c4;
`

const Comment = styled.div`
  width: 150px;
  height: 40px;
  background-color: #c4c4c4;
  border-radius: 12px;
  position: absolute;
  right: 0;
  top: 15px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    background-color: #c4c4c4;
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
    background-color: #fff;
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
