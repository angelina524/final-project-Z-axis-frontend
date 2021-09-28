import React from 'react'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { BackstageSearchNavbar } from '../../components/BackstageNavbar'
import BackstageMenuContent from '../../components/BackstageMenuContent'
import { Menu } from '../../components/Menu'
import { Wrapper } from '../utils'
import { commentIcon, issueIcon, testIcon } from '../../styles/icon'
import flexJustifyAlign from '../../styles/flexJustifyAlign'

const ACTIVITIES_CONTAINER_PADDING_LEFT = '1.75rem'
const PSEUDO_ELEMENT_WIDTH = '12px'

const PseudoDiv = styled.div`
  position: relative;

  &::before {
    content: '';
    width: ${PSEUDO_ELEMENT_WIDTH};
    height: ${PSEUDO_ELEMENT_WIDTH};
    background: ${({ theme }) => theme.secondary_300};
    border-radius: 50%;
    position: absolute;
    left: calc(
      calc(
          calc(-${PSEUDO_ELEMENT_WIDTH} / 2) -
            ${ACTIVITIES_CONTAINER_PADDING_LEFT}
        ) - 1px
    );
    // 最後 -1px 是 border 的寬度
  }
`

const ActivityWrapper = styled(Wrapper)`
  width: 95%;
  top: 4rem;
  padding: 0 1rem 2rem;
`

const ActivityType = styled.div`
  ${flexJustifyAlign('', 'center')};
  gap: 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`

const ActivitiesContainer = styled.div`
  border-left: 1px dashed ${({ theme }) => theme.secondary_300};
  margin-left: 1.25rem;
  padding-left: ${ACTIVITIES_CONTAINER_PADDING_LEFT};
`

const ActivityContent = styled.div`
  font-size: 0.75rem;

  & + & {
    margin-top: 1rem;
  }

  & > div + div {
    margin-top: 0.5rem;
  }
`

const ActivityHeader = styled(PseudoDiv)`
  ${flexJustifyAlign('space-between')}
  color: ${({ theme }) => theme.secondary_300};
`

const ActivityInfo = styled.div`
  ${flexJustifyAlign()}
  gap: 1rem;
`

const ActivityStatus = styled.div``

const ActivityDuration = styled.div``

const CommentsNum = styled.div``

const ActivityTitle = styled.div`
  font-size: 0.875rem;
`

const ActivityDescription = styled.div``

const MoreButton = styled.button`
  --height: 2.5rem;

  background: ${({ theme }) => theme.secondary_300};
  border: none;
  width: 7.8125rem;
  height: var(--height);
  border-radius: 20px;
  color: ${({ theme }) => theme.secondary_900};
  font-size: 1rem;
  position: relative;
  top: calc(var(--height) / 2);

  position: relative;

  &::before {
    content: '';
    width: ${PSEUDO_ELEMENT_WIDTH};
    height: ${PSEUDO_ELEMENT_WIDTH};
    background: ${({ theme }) => theme.secondary_300};
    border-radius: 50%;
    position: absolute;
    top: 0.75rem;
    left: calc(
      calc(
          calc(-${PSEUDO_ELEMENT_WIDTH} / 2) -
            ${ACTIVITIES_CONTAINER_PADDING_LEFT}
        ) - 1px
    );
    // 最後 -1px 是 border 的寬度
  }
`

const BackstagePage = () => {
  const theme = useTheme()
  return (
    <>
      <Menu userId={1} nickname="allen" MenuContent={BackstageMenuContent} />
      <BackstageSearchNavbar />
      <ActivityWrapper>
        <ActivityType>
          {issueIcon('2x', theme.secondary_200)}
          留言箱
        </ActivityType>
        <ActivitiesContainer>
          <ActivityContent>
            <ActivityHeader>
              <ActivityInfo>
                <ActivityStatus>即將發布</ActivityStatus>
                <ActivityDuration>2021/01/01 - 2021/01/07</ActivityDuration>
              </ActivityInfo>
              <CommentsNum>
                {commentIcon('sm', theme.secondary_300)} 20
              </CommentsNum>
            </ActivityHeader>
            <ActivityTitle>你所不知道的 hooks</ActivityTitle>
            <ActivityDescription>
              這是一個呱呱呱呱跟啦啦啦的簡介，沒什麼內容，顆顆...
            </ActivityDescription>
          </ActivityContent>
          <ActivityContent>
            <ActivityHeader>
              <ActivityInfo>
                <ActivityStatus>即將發布</ActivityStatus>
                <ActivityDuration>2021/01/01 - 2021/01/07</ActivityDuration>
              </ActivityInfo>
              <CommentsNum>
                {commentIcon('sm', theme.secondary_300)} 20
              </CommentsNum>
            </ActivityHeader>
            <ActivityTitle>你所不知道的 hooks</ActivityTitle>
            <ActivityDescription>
              這是一個呱呱呱呱跟啦啦啦的簡介，沒什麼內容，顆顆...
            </ActivityDescription>
          </ActivityContent>
          <MoreButton>看更多</MoreButton>
        </ActivitiesContainer>
      </ActivityWrapper>

      <ActivityWrapper>
        <ActivityType>
          {testIcon('2x', theme.secondary_200)}
          測驗
        </ActivityType>
        <ActivitiesContainer>
          <ActivityContent>
            <ActivityHeader>
              <ActivityInfo>
                <ActivityStatus>即將發布</ActivityStatus>
                <ActivityDuration>2021/01/01 - 2021/01/07</ActivityDuration>
              </ActivityInfo>
              <CommentsNum>
                {commentIcon('sm', theme.secondary_300)} 20
              </CommentsNum>
            </ActivityHeader>
            <ActivityTitle>你所不知道的 hooks</ActivityTitle>
            <ActivityDescription>
              這是一個呱呱呱呱跟啦啦啦的簡介，沒什麼內容，顆顆...
            </ActivityDescription>
          </ActivityContent>
          <ActivityContent>
            <ActivityHeader>
              <ActivityInfo>
                <ActivityStatus>即將發布</ActivityStatus>
                <ActivityDuration>2021/01/01 - 2021/01/07</ActivityDuration>
              </ActivityInfo>
              <CommentsNum>
                {commentIcon('sm', theme.secondary_300)} 20
              </CommentsNum>
            </ActivityHeader>
            <ActivityTitle>你所不知道的 hooks</ActivityTitle>
            <ActivityDescription>
              這是一個呱呱呱呱跟啦啦啦的簡介，沒什麼內容，顆顆...
            </ActivityDescription>
          </ActivityContent>
        </ActivitiesContainer>
      </ActivityWrapper>
    </>
  )
}

export default BackstagePage
