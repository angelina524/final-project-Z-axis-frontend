import React from 'react'
import styled from '@emotion/styled'

import MainSection from './MainSection'
import TextSection from './TextSection'
import IssueSection from './IssueSection'
import TestSection from './TestSection'
import LotterySection from './LotterySection'
import SurveySection from './SurveySection'
import RegisterPage from '../RegisterPage'
import Wrapper from '../../components/Wrapper'
import cardList from '../../constants/cardList'

const HomePageWrapper = styled(Wrapper)`
  min-height: 300vh;
`

const HomePage = () => {
  return (
    <HomePageWrapper>
      <MainSection />
      <TextSection />
      <IssueSection cardItem={cardList[0]} />
      <TestSection cardItem={cardList[1]} />
      <LotterySection cardItem={cardList[2]} />
      <SurveySection cardItem={cardList[3]} />
      <RegisterPage isNow={true} />
    </HomePageWrapper>
  )
}

export default HomePage
