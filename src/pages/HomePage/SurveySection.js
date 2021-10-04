import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import SurveyPattern from './components/SurveyPattern'

import BackgroundRectangle from './components/BackgroundRectangle'
import CircleNumber from './components/CircleNumber'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import Section from './components/Section'
import TitleWrapper from './components/TitleWrapper'
import WidthWrapper from '../../components/WidthWrapper'
import PatternWrapper from './components/PatternWrapper'

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

const SurveySection = ({ cardItem: { cardTitle, cardText } }) => {
  return (
    <Section>
      <WidthWrapper>
        <LocateCircleNumber top="-32px" left="10vw">
          <CircleNumber>.04</CircleNumber>
        </LocateCircleNumber>
        <AllBackgroundRectangle />
        <PatternWrapper>
          <LocatePatternLeft>
            <SurveyPattern />
          </LocatePatternLeft>
        </PatternWrapper>
        <TitleWrapperRight>
          <h3>{cardTitle}</h3>
          {cardText.match(/.{1,12}/g).map((text) => (
            <p key={text}>{text}</p>
          ))}
        </TitleWrapperRight>
      </WidthWrapper>
    </Section>
  )
}
SurveySection.propTypes = {
  cardItem: PropTypes.object
}

export default SurveySection
