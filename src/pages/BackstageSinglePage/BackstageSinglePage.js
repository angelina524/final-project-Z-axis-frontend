import React from 'react'
import styled from '@emotion/styled'

import Wrapper from '../../components/Wrapper'
import BackstageMenuContent from '../../components/Menu/BackstageMenuContent'
import { BackstageNavbar } from '../../components/Navbar/BackstageNavbar'
import Menu from '../../components/Menu/Menu'
import cardList from '../../constants/cardList'

import EditSection from './EditSection'
import QRcodeSection from './QRcodeSection'
import GraphSection from './GraphSection'
import IssuePage from '../IssuePage'

const PageWrapper = styled(Wrapper)`
  top: 4rem;
  margin-bottom: 8rem;
`

const BackstageSinglePage = () => (
  <PageWrapper padding="0">
    <Menu MenuContent={BackstageMenuContent} />
    <BackstageNavbar
      iconName={cardList[0].iconName}
      title={cardList[0].cardTitle}
      buttonName="進入此前台"
    />
    <EditSection />
    <QRcodeSection />
    <GraphSection />
    <IssuePage isBackstage={true} />
  </PageWrapper>
)

export default BackstageSinglePage
