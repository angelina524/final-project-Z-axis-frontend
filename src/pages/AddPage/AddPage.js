import React, { useState } from 'react'
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
// import Menu from '../../components/Menu'
import Form from '../../components/Form'

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 1rem;
  ${flexJustifyAlign()}
  flex-direction: column;
`

const Navbar = styled.div`
  width: 100%;
  height: 20%;
  background: ${({ theme }) => theme.secondary_900};
  ${flexJustifyAlign('flex-start')}

  svg {
    margin: 0 10px;
  }
`

const CardWrapper = styled.div`
  width: 90%;
  margin: 0.5rem 0;
  ${flexJustifyAlign()}
  flex-direction: column;
`

const Card = styled.div`
  width: 100%;
  margin: 0.9rem;
  padding: 2rem 1rem;
  ${flexJustifyAlign()}
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: ${({ theme }) => theme.border};
  border-radius: 1rem;

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
  const [isIssueFormOpen, setIsIssueFormOpen] = useState(false)
  return (
    <Wrapper>
      {/* <Menu nickname="嘎嘎嗚拉拉" /> */}
      <Navbar>
        {plusIcon('1x', theme.secondary_200)}
        <div>建立</div>
      </Navbar>
      <CardWrapper>
        <Card onClick={() => setIsIssueFormOpen(!isIssueFormOpen)}>
          {issueIcon('3x', theme.primary)}
          <CardContent>
            <CardTitle>留言箱</CardTitle>
            <CardText>
              創建專屬話題屬話題，創建專屬話題屬話題，創建專屬話題屬話
            </CardText>
          </CardContent>
        </Card>
        {isIssueFormOpen && <Form />}
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
