import React from 'react'
import styled from '@emotion/styled'

import MainSection from './MainSection'
import TextSection from './TextSection'
import IssueSection from './IssueSection'
import TestSection from './TestSection'
import LotterySection from './LotterySection'
import RegisterSection from './RegisterSection'
import Wrapper from '../components/Wrapper'

const HomePageWrapper = styled(Wrapper)`
  min-height: 300vh;
`

const HomePage = () => {
  return (
    <HomePageWrapper>
      <MainSection />
      <TextSection />
      <IssueSection />
      <TestSection />
      <LotterySection />
      <RegisterSection />
    </HomePageWrapper>
  )
}

export default HomePage
