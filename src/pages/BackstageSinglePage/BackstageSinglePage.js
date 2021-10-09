import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from '@emotion/styled'

import Wrapper from '../../components/Wrapper'
import BackstageMenuContent from '../../components/Menu/BackstageMenuContent'
import { BackstageNavbar } from '../../components/Navbar/BackstageNavbar'
import Menu from '../../components/Menu/Menu'
import cardList from '../../constants/cardList'
import EditIssueContext from '../../contexts/editIssueContext'
import LoadingContext from '../../contexts/loadingContext'
import BACKEND_BASE_URL from '../../constants/baseURL'

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
  const { setEditIssue } = useContext(EditIssueContext)
  const setIsLoading = useContext(LoadingContext)
  const history = useHistory()
  const { url } = useParams()

  useEffect(() => {
    if (!userToken) history.push('/')
  }, [userToken])

  useEffect(() => {
    try {
      ;(async () => {
        setIsLoading(true)
        const res = await fetch(`${BACKEND_BASE_URL}/issues/${url}`)
        if (!res.ok) return
        const { issue } = await res.json()
        const { title, description, beginDate, finishDate, id } = issue
        setEditIssue({
          url,
          issueId: id,
          title,
          description,
          date: {
            startDate: beginDate.slice(0, 10).replace(/-/g, '/'),
            endDate: finishDate.slice(0, 10).replace(/-/g, '/'),
            key: 'selection'
          }
        })
        setIsLoading(false)
      })()
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }, [url])

  return (
    <PageWrapper padding="0">
      <Menu MenuContent={BackstageMenuContent} />
      <BackstageNavbar
        iconName={cardList[0].iconName}
        title={cardList[0].cardTitle}
        buttonName="進入此前台"
      />
      <EditSection />
      <QRcodeSection />
      <GraphSection url={url} setIsLoading={setIsLoading} />
      <IssuePage isBackstage={true} />
    </PageWrapper>
  )
}
export default BackstageSinglePage
