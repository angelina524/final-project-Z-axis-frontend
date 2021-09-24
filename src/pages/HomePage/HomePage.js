import React from 'react'
import styled from '@emotion/styled'

import IssuePattern from './components/IssuePattern'
import TestPattern from './components/TestPattern'
import LotteryPattern from './components/LotteryPattern'

import BackgroundCircle from './BackgroundCircle'
import BackgroundCircleDashed from './BackgroundCircleDashed'
import BackgroundRectangle from './BackgroundRectangle'
import CircleNumber from './CircleNumber'
import Curve from './Curve'
import { Wrapper } from '../utils'
import flexJustifyAlign from '../../styles/flexJustifyAlign'

const FirstBackgroundCircleDashed = styled(BackgroundCircleDashed)`
  transform: scale(1.6);
  right: -100px;
  top: 83vh;
`

const SecondBackgroundCircleDashed = styled(BackgroundCircleDashed)`
  transform: scale(1.6);
  left: -100px;
  top: 13vh;
`

const LeftBackgroundRectangle = styled(BackgroundRectangle)`
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -1;
`

const AllBackgroundRectangle = styled(BackgroundRectangle)`
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -1;
`

const LocatePatternLeft = styled.div`
  position: absolute;
  top: 240px;
  left: 40px;
  transform: scale(1.2);
`

const LocatePatternRight = styled.div`
  position: absolute;
  top: 240px;
  right: 40px;
  transform: scale(1.2);
`

const LocateCircleNumber = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`

const HomePageWrapper = styled(Wrapper)`
  min-height: 400vh;
`

const Session = styled.div`
  min-height: 100vh;
  position: relative;
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

const TitleWrapper = styled.div`
  margin: 0 2rem;
  letter-spacing: 2px;
  h3 {
    color: ${({ theme }) => theme.primary};
  }
  p {
    line-height: 2;
    letter-spacing: 2px;
  }
`

const TitleWrapperRight = styled(TitleWrapper)`
  ${flexJustifyAlign('center', 'flex-end')}
  flex-direction: column;
`

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Session>
        <Curve />
        <BackgroundCircle />
        <FirstBackgroundCircleDashed />
        <MainTitleWrapper>
          <h1>Z-axis</h1>
          <p>為您的演說帶來無限的可能</p>
        </MainTitleWrapper>
      </Session>

      <Session>
        <SecondBackgroundCircleDashed />
        <TitleWrapper>
          <p>提供 3 項即時多人互動功能，</p>
          <p>打造與觀眾更加自由的線上互動空間。</p>
        </TitleWrapper>
      </Session>

      <Session>
        <LocateCircleNumber top="-32px" left="70vw">
          <CircleNumber>.01</CircleNumber>
        </LocateCircleNumber>
        <LeftBackgroundRectangle />
        <LocatePatternRight>
          <IssuePattern />
        </LocatePatternRight>
        <TitleWrapper>
          <h3>留言箱</h3>
          <p>您可以創建專屬話題，提供觀眾署名或</p>
          <p>匿名即時留言，與您輕鬆地進行話題討論。</p>
        </TitleWrapper>
      </Session>

      <Session>
        <LocateCircleNumber top="-32px" left="20vw">
          <CircleNumber>.02</CircleNumber>
        </LocateCircleNumber>
        <AllBackgroundRectangle />
        <LocatePatternLeft>
          <TestPattern />
        </LocatePatternLeft>
        <TitleWrapperRight>
          <h3>即時測驗</h3>
          <p>您可以創建測驗問答，</p>
          <p>讓與參問答的觀眾進行限時測驗。</p>
        </TitleWrapperRight>
      </Session>

      <Session>
        <LocateCircleNumber top="-32px" left="70vw">
          <CircleNumber>.03</CircleNumber>
        </LocateCircleNumber>
        <LeftBackgroundRectangle />
        <LocatePatternRight>
          <LotteryPattern />
        </LocatePatternRight>
        <TitleWrapper>
          <h3>抽獎系統</h3>
          <p>您可以創建抽獎活動，</p>
          <p>刺激觀眾於當前話題的參與度。</p>
        </TitleWrapper>
      </Session>

      <Session></Session>
    </HomePageWrapper>
  )
}

export default HomePage
