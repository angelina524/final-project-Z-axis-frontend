import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import flexJustifyAlign from '../styles/flexJustifyAlign'
import { hamburgerIcon } from './../styles/icon'

const MenuWrapper = styled.aside`
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 20vw;
  background-color: ${({ theme }) => theme.secondary_900};
  box-shadow: ${({ theme, isMenuOpen }) => isMenuOpen && theme.boxShadow};
  padding: 1.5rem;
  transition: transform 500ms ease, box-shadow 500ms ease;
  transform: ${({ isMenuOpen }) => !isMenuOpen && 'translate(-80vw)'};
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

export const Menu = ({ userId, nickname, MenuContent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <MenuWrapper isMenuOpen={isMenuOpen}>
      <StyledHamburger
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />
      <Nickname>{nickname || 'Anonymous'}</Nickname>
      <MenuContent />
      <Footer>
        {!userId && (
          <>
            <Link to="/register">註冊</Link>
            <Link to="/login">登入</Link>
          </>
        )}
        {userId && <Link to="/">登出</Link>}
        <Link to="/">首頁</Link>
        <p>© Z-axis 2021</p>
      </Footer>
    </MenuWrapper>
  )
}

Menu.propTypes = {
  userId: PropTypes.number,
  nickname: PropTypes.string,
  MenuContent: PropTypes.elementType
}
