import React from 'react'
import styled from '@emotion/styled'

import TestPattern from './components/TestPattern'

import BackgroundRectangle from './components/BackgroundRectangle'
import CircleNumber from './components/CircleNumber'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import Section from './components/Section'
import TitleWrapper from './components/TitleWrapper'

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

const TitleWrapperRight = styled(TitleWrapper)`
  ${flexJustifyAlign('center', 'flex-end')}
  flex-direction: column;
`

const TestSection = () => {
  return (
    <Section>
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
    </Section>
  )
}

export default TestSection
