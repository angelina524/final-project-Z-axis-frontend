import React from 'react'
import styled from '@emotion/styled'

import MainSession from './MainSession'
import TextSession from './TextSession'
import IssueSession from './IssueSession'
import TestSession from './TestSession'
import LotterySession from './LotterySession'
import RegisterSession from './RegisterSession'

import { Wrapper } from '../utils'

const HomePageWrapper = styled(Wrapper)`
  min-height: 300vh;
`

const HomePage = () => {
  return (
    <HomePageWrapper>
      <MainSession />
      <TextSession />
      <IssueSession />
      <TestSession />
      <LotterySession />
      <RegisterSession />
    </HomePageWrapper>
  )
}

export default HomePage
