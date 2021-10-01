import React from 'react'
import styled from '@emotion/styled'

import Wrapper from '../../components/Wrapper'
import BackgroundCircle from './BackgroundCircle'
import BackgroundCircleDashed from './BackgroundCircleDashed'
import BackgroundRectangle from './BackgroundRectangle'
import CircleNumber from './CircleNumber'
import Curve from './Curve'

import IssuePattern from './components/IssuePattern'
import TestPattern from './components/TestPattern'
import LotteryPattern from './components/LotteryPattern'

const BiggerPattern = styled.div`
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
      <BiggerPattern>
        <IssuePattern />
      </BiggerPattern>
      <TestPattern />
      <BiggerPattern>
        <TestPattern />
      </BiggerPattern>
      <LotteryPattern />
      <BiggerPattern>
        <LotteryPattern />
      </BiggerPattern>
    </Wrapper>
  )
}

export default HomePage
