import React from 'react'
import styled from '@emotion/styled'
import flexJustifyAlign from '../styles/flexJustifyAlign'
import { useTheme } from '@emotion/react'
import {
  plusIcon,
  backstageIcon,
  issueIcon,
  testIcon,
  lotteryIcon,
  questionIcon
} from './../styles/icon'

const BackStageMenu = styled.div`
  ${flexJustifyAlign()}
  flex-direction: column;
`

const Profile = styled.div`
  ${flexJustifyAlign()}
  flex-direction: column;
`

const Avatar = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  margin: 1rem 0;
  border-radius: 50%;
  border: ${({ theme }) => theme.border};
`

const EditBtn = styled.div`
  font-size: 0.9rem;
  padding: 0.3rem 1rem;
  border-radius: 2.5rem;
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.secondary_300};
`

const OptionWrapper = styled.div`
  margin: 1.5rem 0;
  ${flexJustifyAlign()}
  flex-wrap: wrap;
  gap: 1.5em;
`

const OptionBtn = styled.div`
  width: 7rem;
  height: 6rem;
  border: ${({ theme }) => theme.border};
  border-radius: 1rem;
  ${flexJustifyAlign()}
  flex-direction: column;

  svg {
    margin-bottom: 1rem;
  }
`

const Text = styled.div``

const BackstageMenuContent = () => {
  const theme = useTheme()
  return (
    <BackStageMenu>
      <Profile>
        <Avatar />
        <EditBtn>修改個人資料</EditBtn>
      </Profile>
      <OptionWrapper>
        <OptionBtn>
          {plusIcon('2x', theme.secondary_300)}
          <Text>建立</Text>
        </OptionBtn>
        <OptionBtn>
          {backstageIcon('2x', theme.secondary_300)}
          <Text>後台</Text>
        </OptionBtn>
        <OptionBtn>
          {issueIcon('2x', theme.secondary_300)}
          <Text>留言箱</Text>
        </OptionBtn>
        <OptionBtn>
          {testIcon('2x', theme.secondary_300)}
          <Text>測驗</Text>
        </OptionBtn>
        <OptionBtn>
          {lotteryIcon('2x', theme.secondary_300)}
          <Text>抽獎</Text>
        </OptionBtn>
        <OptionBtn>
          {questionIcon('2x', theme.secondary_300)}
          <Text>問卷</Text>
        </OptionBtn>
      </OptionWrapper>
    </BackStageMenu>
  )
}

export default BackstageMenuContent
