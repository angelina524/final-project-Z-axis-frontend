import React from 'react'
import styled from '@emotion/styled'
import {
  plusIcon,
  issueIcon,
  testIcon,
  lotteryIcon,
  questionIcon
} from '../../styles/icon'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import Menu from '../../components/Menu'

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
  margin: 1rem;
  padding: 2rem 1rem;
  ${flexJustifyAlign()}
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: ${({ theme }) => theme.border};
  border-radius: 1rem;

  svg {
    margin: 0 0.5rem;
  }
`

const CardContent = styled.div`
  text-align: center;
`

const CardTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`

const CardText = styled.div`
  font-size: 0.5rem;
`

const AddPage = () => {
  return (
    <Wrapper>
      <Menu userId={1} nickname="嘎嘎嗚拉拉" />
      <Navbar>
        {plusIcon('1x', '#666666')}
        <div>建立</div>
      </Navbar>
      <CardWrapper>
        <Card>
          {issueIcon('3x', '#4167B2')}
          <CardContent>
            <CardTitle>留言箱</CardTitle>
            <CardText>創建專屬話題，提供即時留言與您輕鬆地進行話題討</CardText>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>測驗</CardTitle>
            <CardText>創建專屬話題，提供即時留言與您輕鬆地進行話題討</CardText>
          </CardContent>
          {testIcon('3x', '#4167B2')}
        </Card>
        <Card>
          {lotteryIcon('3x', '#4167B2')}
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
          {questionIcon('3x', '#4167B2')}
        </Card>
      </CardWrapper>
    </Wrapper>
  )
}

export default AddPage
