import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import {
  plusIcon,
  issueIcon,
  testIcon,
  lotteryIcon,
  questionIcon
} from '../../styles/icon'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import { BackstageNavbar } from '../../components/BackstageNavbar'
// import Menu from '../../components/Menu'

const Wrapper = styled.div`
  top: 4rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 1rem;
  ${flexJustifyAlign()}
  flex-direction: column;
`

const CardWrapper = styled.div`
  margin: 0.9rem;
  width: 90%;
  ${flexJustifyAlign()}
  flex-direction: column;
  gap: 1.5rem;
`

const Card = styled(Link)`
  width: 100%;
  padding: 2rem 1rem;
  ${flexJustifyAlign()}
  color: ${({ theme }) => theme.secondary_000};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: ${({ theme }) => theme.border};
  border-radius: 1rem;
  cursor: pointer;

  svg {
    margin: 0 1rem;
  }
`

const CardContent = styled.div`
  text-align: center;
  width: 70%;
  margin: 0 0.8rem;
`

const CardTitle = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
`

const CardText = styled.div`
  font-size: 0.9rem;
`

const AddPage = () => {
  const theme = useTheme()
  return (
    <Wrapper>
      {/* <Menu userId={1} nickname="嘎嘎嗚拉拉" /> */}
      <BackstageNavbar iconName={plusIcon} title="建立" />
      <CardWrapper>
        <Card to="/form">
          {issueIcon('3x', theme.primary)}
          <CardContent>
            <CardTitle>留言箱</CardTitle>
            <CardText>
              創建專屬話題屬話題，創建專屬話題屬話題，創建專屬話題屬話
            </CardText>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>測驗</CardTitle>
            <CardText>創建專屬話題，提供即時留言與您輕鬆地進行話題討</CardText>
          </CardContent>
          {testIcon('3x', theme.primary)}
        </Card>
        <Card>
          {lotteryIcon('3x', theme.primary)}
          <CardContent>
            <CardTitle>抽獎</CardTitle>
            <CardText>創建專屬話題，提供即時留言與您輕鬆地進行話題討</CardText>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>問卷</CardTitle>
            <CardText>創建專屬話題，提供即時留言與您輕鬆地進行話題討</CardText>
          </CardContent>
          {questionIcon('3x', theme.primary)}
        </Card>
      </CardWrapper>
    </Wrapper>
  )
}

export default AddPage
