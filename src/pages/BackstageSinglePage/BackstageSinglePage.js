import React from 'react'
import styled from '@emotion/styled'

import { Wrapper } from '../utils'
import BackstageMenuContent from '../../components/BackstageMenuContent'
import { BackstageNavbar } from '../../components/BackstageNavbar'
import { Menu } from '../../components/Menu'
import cardList from '../../constants/cardList'

import EditSection from './EditSection'
import QRcodeSection from './QRcodeSection'
import GraphSection from './GraphSection'

const PageWrapper = styled(Wrapper)`
  top: 4rem;
  margin-bottom: 8rem;
`

const BackstageSinglePage = () => {
  return (
    <PageWrapper>
      <Menu
        userId={1}
        nickname="benben bunbun"
        MenuContent={BackstageMenuContent}
      />
      <BackstageNavbar
        iconName={cardList[0].iconName}
        title={cardList[0].cardTitle}
        buttonName="進入此前台"
      />
      {/* TODO */}
      <EditSection />
      <QRcodeSection />
      <GraphSection />
    </PageWrapper>
  )
}
export default BackstageSinglePage
