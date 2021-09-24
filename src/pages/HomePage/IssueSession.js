import React from 'react'
import styled from '@emotion/styled'

import IssuePattern from './components/IssuePattern'

import BackgroundRectangle from './components/BackgroundRectangle'
import CircleNumber from './components/CircleNumber'
import Session from './components/Session'

const LeftBackgroundRectangle = styled(BackgroundRectangle)`
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -1;
`

const LocatePatternRight = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  right: 60px;
  transform: scale(1.2);
`

const LocateCircleNumber = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`

const TitleWrapper = styled.div`
  margin: 0 2rem;
  letter-spacing: 2px;
  h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
  }
  p {
    line-height: 2;
    letter-spacing: 1px;
  }
`

const IssueSession = () => {
  return (
    <Session>
      <LocateCircleNumber top="-32px" left="74vw">
        <CircleNumber>.01</CircleNumber>
      </LocateCircleNumber>
      <LeftBackgroundRectangle />
      <LocatePatternRight top="200px">
        <IssuePattern />
      </LocatePatternRight>
      <TitleWrapper>
        <h3>留言箱</h3>
        <p>您可以創建專屬話題，提供觀</p>
        <p>署名或匿名即時留言，與您輕</p>
        <p>地進</p>
      </TitleWrapper>
    </Session>
  )
}

export default IssueSession
