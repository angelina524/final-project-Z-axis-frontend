import React from 'react'
import styled from '@emotion/styled'

import SurveyPattern from './components/SurveyPattern'

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
        <CircleNumber>.04</CircleNumber>
      </LocateCircleNumber>
      <AllBackgroundRectangle />
      <LocatePatternLeft>
        <SurveyPattern />
      </LocatePatternLeft>
      <TitleWrapperRight>
        <h3>問卷調查</h3>
        <p>按您的喜好設計並創建表單，</p>
        <p>可快速搜集與整理觀眾的資料。</p>
      </TitleWrapperRight>
    </Section>
  )
}

export default TestSection
