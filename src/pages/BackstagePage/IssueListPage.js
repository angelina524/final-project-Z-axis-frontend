import React, { useEffect, useState } from 'react'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

import {
  ActivitiesContainer,
  ActivityContent,
  ActivityDescription,
  ActivityHeader,
  ActivityInfo,
  ActivityTitle,
  ActivityType,
  ActivityWrapper,
  isIssueFinished,
  isIssueOncoming,
  isIssueOngoing,
  PositionedButton,
  PSEUDO_ELEMENT_WIDTH,
  StyledLink,
  transformDate
} from './utils'
import { BackstageSearchNavbar } from '../../components/BackstageNavbar'
import BackstageMenuContent from '../../components/BackstageMenuContent'
import { Menu } from '../../components/Menu'
import { commentIcon, issueIcon } from '../../styles/icon'
import { getAllIssues } from '../../webapi/issueApi'
import { BUTTON_HEIGHT } from '../../components/Button'

const GoToTopButton = styled.button`
  background: transparent;
  border: none;
  font-size: 0.875rem;

  &::before {
    top: calc(
      calc(var(${BUTTON_HEIGHT}) - ${PSEUDO_ELEMENT_WIDTH}) / 2
    ) !important;
  }
`

const IssueListPage = () => {
  const [oncomingIssues, setOncomingIssues] = useState([])
  const [ongoingIssues, setOngoingIssues] = useState([])
  const [finishedIssues, setFinishedIssues] = useState([])
  const theme = useTheme()
  const userToken = window.localStorage.getItem('userToken')

  useEffect(() => {
    const doAsyncEffects = async () => {
      const issuesData = await getAllIssues(userToken)
      for (const issueData of issuesData) {
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
    }
    doAsyncEffects()
  }, [])

  const exampleIssue = [
    {
      issue: {
        id: 0,
        title: '趕快建立新的 issue！',
        description: '快建立，懂？',
        beginTime: new Date(),
        finishTime: new Date()
      },
      url: 'example'
    }
  ]

  const renderIssues = (issueList, status) => {
    if (!issueList.length) issueList = exampleIssue
    return issueList.map(({ issue, url }) => (
      <ActivityContent
        key={issue.id}
        to={url === 'example' ? '/form' : `/issues/${url}`}
      >
        <ActivityHeader>
          <ActivityInfo>
            <div>{status}</div>
            <div>
              {transformDate(new Date(issue.beginTime))} -{' '}
              {transformDate(new Date(issue.finishTime))}
            </div>
          </ActivityInfo>
          {/* todo: comments 數量要用 issues 去關聯，或是直接在後端算好回傳給前端 */}
          <div>{commentIcon('sm', theme.secondary_300)} 20</div>
        </ActivityHeader>
        <ActivityTitle>{issue.title}</ActivityTitle>
        <ActivityDescription>{issue.description}</ActivityDescription>
      </ActivityContent>
    ))
  }

  return (
    <>
      <Menu userId={1} nickname="allen" MenuContent={BackstageMenuContent} />
      <BackstageSearchNavbar />
      <ActivityWrapper>
        <ActivityType>
          {issueIcon('2x', theme.secondary_200)}
          留言箱
        </ActivityType>
        <ActivitiesContainer color={theme.secondary_300}>
          {renderIssues(oncomingIssues, '即將發布')}
          <PositionedButton>
            <StyledLink to="/form">建立</StyledLink>
          </PositionedButton>
        </ActivitiesContainer>
        <ActivitiesContainer color={theme.primary}>
          {renderIssues(ongoingIssues, '進行中')}
          <GoToTopButton
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            按此回頂端
          </GoToTopButton>
        </ActivitiesContainer>
        <ActivitiesContainer color={theme.secondary_200}>
          {renderIssues(finishedIssues, '已截止')}
          <GoToTopButton
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            按此回頂端
          </GoToTopButton>
        </ActivitiesContainer>
      </ActivityWrapper>
    </>
  )
}

export default IssueListPage
