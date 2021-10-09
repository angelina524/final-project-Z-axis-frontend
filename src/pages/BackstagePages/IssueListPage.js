import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import moment from 'moment'

import {
  ActivitiesContainer,
  ACTIVITIES_CONTAINER_PADDING_LEFT,
  ActivityContent,
  ActivityDescription,
  ActivityHeader,
  ActivityInfo,
  ActivityTitle,
  ActivityType,
  ActivityWrapper,
  PositionedButton,
  StyledLink
} from './components'
import { BackstageSearchNavbar } from '../../components/Navbar/BackstageNavbar'
import BackstageMenuContent from '../../components/Menu/BackstageMenuContent'
import Menu from '../../components/Menu/Menu'
import { commentIcon, goToTopIcon, issueIcon } from '../../components/icons'
import { getAllIssues } from '../../webapi/issueApi'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import { isIssueFinished, isIssueOncoming, isIssueOngoing } from '../../utils'
import { UserTokenContext } from '../../contexts/tokenContexts'
import LoadingContext from '../../contexts/loadingContext'

const GoToTopButton = styled.button`
  ${flexJustifyAlign()}
  flex-direction: column;
  background: ${({ theme }) => theme.secondary_900};
  border: none;
  font-size: 0.875rem;
  cursor: pointer;
  left: -${ACTIVITIES_CONTAINER_PADDING_LEFT};
  transform: translateX(-50%);

  &::before {
    display: none;
  }
`

const IssueListPage = () => {
  const [issues, setIssues] = useState([])
  const [filteredIssues, setFilteredIssues] = useState([])
  const [oncomingIssues, setOncomingIssues] = useState([])
  const [ongoingIssues, setOngoingIssues] = useState([])
  const [finishedIssues, setFinishedIssues] = useState([])
  const theme = useTheme()
  const setIsLoading = useContext(LoadingContext)
  const { userToken } = useContext(UserTokenContext)
  const history = useHistory()

  useEffect(() => {
    if (!userToken) history.push('/')
  }, [userToken])

  useEffect(() => {
    const doAsyncEffects = async () => {
      setIsLoading(true)
      let issuesData = []
      try {
        const response = await getAllIssues()
        const { data } = response
        if (!data.ok) throw new Error(data.message)
        issuesData = data.issuesWithURL
        setIssues(issuesData)
      } catch (error) {
        console.log(error.message)
      }
      setIsLoading(false)
    }
    doAsyncEffects()
  }, [])

  useEffect(() => {
    setFilteredIssues(issues)
  }, [issues])

  useEffect(() => {
    setFinishedIssues([])
    setOncomingIssues([])
    setOngoingIssues([])
    for (const issueData of filteredIssues) {
      if (isIssueFinished(issueData.issue)) {
        setFinishedIssues((prev) => [...prev, issueData])
        continue
      }
      if (isIssueOncoming(issueData.issue)) {
        setOncomingIssues((prev) => [...prev, issueData])
        continue
      }
      if (isIssueOngoing(issueData.issue)) {
        setOngoingIssues((prev) => [...prev, issueData])
      }
    }
  }, [filteredIssues])

  const exampleIssue = [
    {
      issue: {
        id: 0,
        title: '建立新的留言箱',
        description: '',
        beginDate: new Date(),
        finishDate: new Date()
      },
      url: 'example',
      commentCount: 0
    }
  ]

  const renderIssues = (issueList, status) => {
    if (!issueList.length) issueList = exampleIssue

    return issueList.map(({ issue, url, commentCount }) => (
      <ActivityContent
        key={issue.id}
        to={url === 'example' ? '/form' : `/backstage/issues/${url}`}
      >
        <ActivityHeader>
          <ActivityInfo>
            <div>{status}</div>
            <div>
              {moment(issue.beginDate).format('YYYY/MM/DD')} -{' '}
              {moment(issue.finishDate).format('YYYY/MM/DD')}
            </div>
          </ActivityInfo>
          <div>
            {commentIcon('sm', theme.secondary_300)} {commentCount}
          </div>
        </ActivityHeader>
        <ActivityTitle>{issue.title}</ActivityTitle>
        <ActivityDescription>{issue.description}</ActivityDescription>
      </ActivityContent>
    ))
  }

  const renderOncomingSection = () => (
    <ActivitiesContainer color={theme.secondary_300}>
      {renderIssues(oncomingIssues, '即將發布')}
      <PositionedButton>
        <StyledLink to="/form">建立</StyledLink>
      </PositionedButton>
    </ActivitiesContainer>
  )
  const renderOngoingSection = () => (
    <ActivitiesContainer color={theme.primary}>
      {renderIssues(ongoingIssues, '進行中')}
      <GoToTopButton
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {goToTopIcon('2x', theme.secondary_200)} 回頂端
      </GoToTopButton>
    </ActivitiesContainer>
  )
  const renderFinishedSection = () => (
    <ActivitiesContainer color={theme.secondary_200}>
      {renderIssues(finishedIssues, '已結束')}
      <GoToTopButton
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {goToTopIcon('2x', theme.secondary_200)} 回頂端
      </GoToTopButton>
    </ActivitiesContainer>
  )

  return (
    <>
      <Menu MenuContent={BackstageMenuContent} />
      <BackstageSearchNavbar
        issues={issues}
        setFilteredIssues={setFilteredIssues}
      />
      <ActivityWrapper>
        <ActivityType>
          {issueIcon('2x', theme.secondary_200)}
          留言箱
        </ActivityType>
        {renderOncomingSection()}
        {renderOngoingSection()}
        {renderFinishedSection()}
      </ActivityWrapper>
    </>
  )
}

export default IssueListPage
