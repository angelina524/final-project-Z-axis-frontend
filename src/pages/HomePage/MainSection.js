import React from 'react'
import styled from '@emotion/styled'

import BackgroundCircle from './components/BackgroundCircle'
import BackgroundCircleDashed from './components/BackgroundCircleDashed'
import Curve from './components/Curve'
import Section from './components/Section'
import flexJustifyAlign from '../../styles/flexJustifyAlign'

const FirstBackgroundCircleDashed = styled(BackgroundCircleDashed)`
  transform: scale(1.6);
  right: -100px;
  top: 83vh;
`

const MainSectionWrapper = styled(Section)`
  min-height: 100vh;
`

const MainTitleWrapper = styled.div`
  height: 100vh;
  ${flexJustifyAlign()}
  flex-direction: column;
  letter-spacing: 2px;
  h1 {
    color: ${({ theme }) => theme.secondary_100};
    font-size: 2.6rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
`

const MainSection = () => {
  return (
    <MainSectionWrapper>
      <Curve />
      <BackgroundCircle />
      <FirstBackgroundCircleDashed />
      <MainTitleWrapper>
        <h1>Z-axis</h1>
        <p>為您的演說帶來無限的可能</p>
      </MainTitleWrapper>
    </MainSectionWrapper>
  )
}

export default MainSection
