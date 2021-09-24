import React from 'react'
import styled from '@emotion/styled'

import BackgroundCircle from './components/BackgroundCircle'
import BackgroundCircleDashed from './components/BackgroundCircleDashed'
import Curve from './components/Curve'
import flexJustifyAlign from '../../styles/flexJustifyAlign'

const FirstBackgroundCircleDashed = styled(BackgroundCircleDashed)`
  transform: scale(1.6);
  right: -100px;
  top: 83vh;
`

const Session = styled.div`
  min-height: 80vh;
  position: relative;
  padding-top: 2rem;
`

const MainSessionWrapper = styled(Session)`
  min-height: 100vh;
`

const MainTitleWrapper = styled.div`
  height: 100vh;
  ${flexJustifyAlign()}
  flex-direction: column;
  letter-spacing: 2px;
  h1 {
    font-size: 2.6rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
`

const MainSession = () => {
  return (
    <MainSessionWrapper>
      <Curve />
      <BackgroundCircle />
      <FirstBackgroundCircleDashed />
      <MainTitleWrapper>
        <h1>Z-axis</h1>
        <p>為您的演說帶來無限的可能</p>
      </MainTitleWrapper>
    </MainSessionWrapper>
  )
}

export default MainSession
