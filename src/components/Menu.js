import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import flexJustifyAlign from '../styles/flexJustifyAlign'
import { Link } from 'react-router-dom'

const MenuWrapper = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 20vw;
  background-color: ${({ theme }) => theme.secondary_900};
  border-right: 1px solid ${({ theme }) => theme.secondary_300};
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

const Menu = ({ nickname }) => {
  return (
    <MenuWrapper>
      <Nickname>{nickname}</Nickname>
      <Footer>
        <Link to="/">後台</Link>
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
