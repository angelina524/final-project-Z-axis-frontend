import React from 'react'
import styled from '@emotion/styled'

import TestPattern from './components/TestPattern'

import BackgroundRectangle from './components/BackgroundRectangle'
import CircleNumber from './components/CircleNumber'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import Session from './components/Session'

const AllBackgroundRectangle = styled(BackgroundRectangle)`
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -1;
`

const LocatePatternLeft = styled.div`
  position: absolute;
  top: 210px;
  left: 40px;
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

const TitleWrapperRight = styled(TitleWrapper)`
  ${flexJustifyAlign('center', 'flex-end')}
  flex-direction: column;
`

const TestSession = () => {
  return (
    <Session>
      <LocateCircleNumber top="-32px" left="10vw">
        <CircleNumber>.02</CircleNumber>
      </LocateCircleNumber>
      <AllBackgroundRectangle />
      <LocatePatternLeft>
        <TestPattern />
      </LocatePatternLeft>
      <TitleWrapperRight>
        <h3>即時測驗</h3>
        <p>您可以創建測驗問答，</p>
        <p>讓與參問答的觀眾進行限時測驗。</p>
      </TitleWrapperRight>
    </Session>
  )
}

export default TestSession
