import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
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
import { UserTokenContext } from '../../contexts/tokenContexts'

const PageWrapper = styled(Wrapper)`
  top: 4rem;
  margin-bottom: 8rem;
`

const BackstageSinglePage = () => {
  const { userToken } = useContext(UserTokenContext)
  const history = useHistory()

  useEffect(() => {
    if (!userToken) history.push('/')
  }, [userToken])

  return (
    <PageWrapper padding="0">
      <Menu MenuContent={BackstageMenuContent} />
      <BackstageNavbar
        iconName={cardList[0].iconName}
        title={cardList[0].cardTitle}
        buttonName="進入此前台"
      />
      {/* TODO */}
      <EditSection />
      <QRcodeSection />
      <GraphSection />
      <IssuePage isBackstage={true} />
    </PageWrapper>
  )
}
export default BackstageSinglePage
