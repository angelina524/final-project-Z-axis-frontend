import styled from '@emotion/styled'

const Wrap = styled.div`
  width: 200px;
  height: 200px;
`

const CommentWrap = styled.div`
  width: 200px;
  height: 60px;
  position: relative;
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #c4c4c4;
  }
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
    content: "";
    display: block;
    position: absolute;
    background-color: #c4c4c4;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: -3px;
    left: -8px;
    transform: rotate(30deg);
    z-index: -1;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    background-color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: -12px;
    left: -8px;
    transform: rotate(30deg);
    z-index: -1;
  }
`

const BackgroundIssue = () => {
  return (
    <Wrap>
      <CommentWrap><div className="avatar" /><Comment /></CommentWrap>
      <CommentWrap><div className="avatar" /><Comment /></CommentWrap>
      <CommentWrap><div className="avatar" /><Comment /></CommentWrap>
    </Wrap>
  )
}

export default BackgroundIssue