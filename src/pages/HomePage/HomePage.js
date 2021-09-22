import React from 'react'
import { Wrapper } from '../utils'
import BackgroundCircle from './BackgroundCircle'
import BackgroundCircleDashed from './BackgroundCircleDashed'
import BackgroundRectangle from './BackgroundRectangle'
import CircleNumber from './CircleNumber'
import Curve from './Curve'

import IssuePattern from './components/IssuePattern'
import TestPattern from './components/TestPattern'
import LotteryPattern from './components/LotteryPattern'

import styled from '@emotion/styled'
const Big = styled.div`
  display: inline-block;
  transform: scale(1.6) translate(100%, -50%);
`

const HomePage = () => {
  return (
    <Wrapper>
      <Curve />
      <h1>homepage</h1>
      <p>z-axis</p>
      <BackgroundCircle />
      <BackgroundCircleDashed />
      <CircleNumber>.01</CircleNumber>
      <CircleNumber>.02</CircleNumber>
      <CircleNumber>.03</CircleNumber>
      <CircleNumber>.04</CircleNumber>
      <BackgroundRectangle />

      <IssuePattern />
      <Big>
        <IssuePattern />
      </Big>
      <TestPattern />
      <Big>
        <TestPattern />
      </Big>
      <LotteryPattern />
      <Big>
        <LotteryPattern />
      </Big>
    </Wrapper>
  )
}

export default HomePage
