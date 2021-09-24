import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import flexJustifyAlign from '../styles/flexJustifyAlign'
import { Link } from 'react-router-dom'
import {
  plusIcon,
  backstageIcon,
  issueIcon,
  testIcon,
  lotteryIcon,
  questionIcon
} from './../styles/icon'
import { useTheme } from '@emotion/react'

const MenuWrapper = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 20vw;
  background-color: ${({ theme }) => theme.secondary_900};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1.5rem;
`

const Nickname = styled.p`
  color: ${({ theme }) => theme.secondary_300};
  font-size: 0.9rem;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.secondary_850};
  padding: 1.5rem;
  ${flexJustifyAlign()}
  flex-direction: column;
  gap: 1.5rem;
  a {
    color: ${({ theme }) => theme.secondary_000};
  }
  p {
    font-size: 0.9rem;
  }
`

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

const Menu = ({ nickname }) => {
  const theme = useTheme()

  return (
    <MenuWrapper>
      <Nickname>{nickname}</Nickname>
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
      <Footer>
        {/* <Link to="/">後台</Link> */}
        <Link to="/">登出</Link>
        <Link to="/">首頁</Link>
        <p>© Z-axis 2021</p>
      </Footer>
    </MenuWrapper>
  )
}

Menu.propTypes = {
  nickname: PropTypes.string
}

export default Menu
