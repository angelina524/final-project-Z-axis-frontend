import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import LotteryPattern from './components/LotteryPattern'

import BackgroundRectangle from './components/BackgroundRectangle'
import CircleNumber from './components/CircleNumber'
import Section from './components/Section'
import TitleWrapper from './components/TitleWrapper'
import WidthWrapper from '../../components/WidthWrapper'
import PatternWrapper from './components/PatternWrapper'

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

const LotterySection = ({ cardItem: { cardTitle, cardText } }) => {
  return (
    <Section>
      <WidthWrapper>
        <LocateCircleNumber top="-32px" left="74vw">
          <CircleNumber>.03</CircleNumber>
        </LocateCircleNumber>
        <LeftBackgroundRectangle />
        <PatternWrapper>
          <LocatePatternRight top="180px">
            <LotteryPattern />
          </LocatePatternRight>
        </PatternWrapper>
        <TitleWrapper>
          <h3>{cardTitle}</h3>
          {cardText.match(/.{1,12}/g).map((text) => (
            <p key={text}>{text}</p>
          ))}
        </TitleWrapper>
      </WidthWrapper>
    </Section>
  )
}
LotterySection.propTypes = {
  cardItem: PropTypes.object
}

export default LotterySection
