import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import flexJustifyAlign from '../styles/flexJustifyAlign'
import { issueIcon, hamburgerIcon } from '../styles/icon'

const MenuWrapper = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 20vw;
  background-color: ${({ theme }) => theme.secondary_900};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1.5rem;
  transition: transform 500ms ease;
  transform: ${({ isMenuOpen }) => !isMenuOpen && 'translate(-80vw)'};
`

const Nickname = styled.p`
  color: ${({ theme }) => theme.secondary_300};
  font-size: 0.9rem;
`

const ActivityWrapper = styled.div`
  ${flexJustifyAlign('', 'flex-start')}
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`

const ActivityType = styled.div`
  ${flexJustifyAlign('flex-start')}
  gap: 1rem;
`

const ActivityDuration = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.secondary_300};
`

const ActivityDescription = styled.p`
  font-size: 0.9rem;
  line-height: 2rem;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary_900};
  font-size: 1rem;
  height: 2.5rem;
  padding: 0 1.5rem;
  border-radius: 1.125rem;
  border: none;
  margin: 0 auto;
  display: block;
  margin-top: 1.5rem;
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

const Hamburger = ({ onClick, className }) => {
  const theme = useTheme()
  return (
    <div onClick={onClick} className={className}>
      {hamburgerIcon('2x', theme.primary)}
    </div>
  )
}

Hamburger.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
}

const StyledHamburger = styled(Hamburger)`
  position: absolute;
  top: 1rem;
  right: 0;
  transition: transform 500ms ease;
  transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? '-2rem' : '3rem')});
`

const Menu = ({
  userId,
  nickname,
  title,
  description,
  beginDate,
  finishDate
}) => {
  const theme = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <MenuWrapper isMenuOpen={isMenuOpen}>
      <StyledHamburger
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />
      <Nickname>{nickname}</Nickname>
      <ActivityWrapper>
        <ActivityType>
          {issueIcon('2x', theme.secondary_300)}
          <p>留言箱</p>
        </ActivityType>
        <p>{title}</p>
        <ActivityDuration>
          {beginDate} - {finishDate}
        </ActivityDuration>
        <ActivityDescription>{description}</ActivityDescription>
      </ActivityWrapper>
      {/* 判斷 userId 是否跟該 issue 的 userId 吻合，再顯示"進入此後台" */}
      <Button>進入此後台</Button>
      <Footer>
        {/* 後台頁面不會有後台按鈕 */}
        {userId && <Link to="/">後台</Link>}
        {userId && <Link to="/">登出</Link>}
        {!userId && <Link to="/register">註冊</Link>}
        {!userId && <Link to="/login">登入</Link>}
        <Link to="/">首頁</Link>
        <p>© Z-axis 2021</p>
      </Footer>
    </MenuWrapper>
  )
}

Menu.propTypes = {
  userId: PropTypes.number,
  nickname: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  beginDate: PropTypes.string,
  finishDate: PropTypes.string
}

export default Menu
