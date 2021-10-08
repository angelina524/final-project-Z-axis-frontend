import React, { useContext } from 'react'
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
import { UserTokenContext } from '../../contexts/tokenContexts'

const PageWrapper = styled(Wrapper)`
  top: 4rem;
  margin-bottom: 8rem;
`

const BackstageSinglePage = () => {
  const { userToken } = useContext(UserTokenContext)

  const RedirectHome = () => {
    const history = useHistory()
    history.push('/')
  }

  return (
    <>
      {userToken && (
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
        </PageWrapper>
      )}
      {!userToken && RedirectHome()}
    </>
  )
}
export default BackstageSinglePage
