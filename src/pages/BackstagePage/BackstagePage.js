import React, { useEffect, useState } from 'react'
import { useTheme } from '@emotion/react'
import { BackstageSearchNavbar } from '../../components/BackstageNavbar'
import BackstageMenuContent from '../../components/BackstageMenuContent'
import { Menu } from '../../components/Menu'
import { commentIcon, issueIcon, testIcon } from '../../styles/icon'
import { getAllIssues } from '../../webapi/issueApi'
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
  StyledLink,
  transformDate
} from './utils'

const getIssueStatus = (issue) => {
  if (isIssueFinished(issue)) return '已截止'
  if (isIssueOncoming(issue)) return '即將發布'
  if (isIssueOngoing(issue)) return '進行中'
}

const BackstagePage = () => {
  const [issues, setIssues] = useState([])
  const theme = useTheme()
  const userToken = window.localStorage.getItem('userToken')

  useEffect(() => {
    const doAsyncEffects = async () => {
      const issuesData = await getAllIssues(userToken)
      setIssues(issuesData)
    }
    doAsyncEffects()
  }, [])

  const renderIssues = () =>
    // todo: 可以改成後端能接受 query 決定回傳的 issue 數
    issues
      .sort(
        (a, b) =>
          Date.UTC(...b.issue.beginTime.substring(0, 10).split('-')) -
          Date.UTC(...a.issue.beginTime.substring(0, 10).split('-'))
      )
      .slice(0, 3)
      .map(({ issue, url }) => {
        return (
          <ActivityContent key={issue.id} to={`/issues/${url}`}>
            <ActivityHeader color={theme.secondary_300}>
              <ActivityInfo>
                <div>{getIssueStatus(issue)}</div>
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
        )
      })

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
          {renderIssues()}
          <PositionedButton color={theme.secondary_300}>
            <StyledLink to="/issues">看更多</StyledLink>
          </PositionedButton>
        </ActivitiesContainer>
      </ActivityWrapper>

      {/* 以下測驗為假資料先填空，沒有實際功能 */}
      <ActivityWrapper>
        <ActivityType>
          {testIcon('2x', theme.secondary_200)}
          測驗
        </ActivityType>
        <ActivitiesContainer color={theme.secondary_300}>
          <ActivityContent to="/add">
            <ActivityHeader>
              <ActivityInfo>
                <div>即將發布</div>
                <div>2021/01/01 - 2021/01/07</div>
              </ActivityInfo>
              <div>{commentIcon('sm', theme.secondary_300)} 20</div>
            </ActivityHeader>
            <ActivityTitle>你所不知道的 hooks</ActivityTitle>
            <ActivityDescription>
              這是一個呱呱呱呱跟啦啦啦的簡介，沒什麼內容...
            </ActivityDescription>
          </ActivityContent>
          <ActivityContent to="/add">
            <ActivityHeader>
              <ActivityInfo>
                <div>即將發布</div>
                <div>2021/01/01 - 2021/01/07</div>
              </ActivityInfo>
              <div>{commentIcon('sm', theme.secondary_300)} 20</div>
            </ActivityHeader>
            <ActivityTitle>你所不知道的 hooks</ActivityTitle>
            <ActivityDescription>
              這是一個呱呱呱呱跟啦啦啦的簡介，沒什麼內容...
            </ActivityDescription>
          </ActivityContent>
          <PositionedButton color={theme.secondary_300}>
            <StyledLink to="/issues">看更多</StyledLink>
          </PositionedButton>
        </ActivitiesContainer>
      </ActivityWrapper>
    </>
  )
}

export default BackstagePage
