import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import flexJustifyAlign from '../styles/flexJustifyAlign'

const Wrapper = styled.div`
  ${flexJustifyAlign()}
  width: 100%;
  position: fixed;
  top: 3.5rem;
  z-index: 5;
`

const NavbarWrapper = styled.div`
  width: 85%;
  height: 5rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: ${({ theme }) => theme.border};
  border-radius: 2.5rem;
  padding: 0em 1.5rem;
  ${flexJustifyAlign('space-between', 'center')}
  background-color: ${({ theme }) => theme.secondary_900};
  a {
    color: ${({ theme }) => theme.secondary_000};
  }
`

const NavbarLinks = styled.div`
  a {
    margin: 1rem;
  }
`

const Navbar = () => {
  return (
    <Wrapper>
      <NavbarWrapper>
        <Logo />
        <NavbarLinks>
          <Link to="/">首頁</Link>
          <Link to="/login">登入</Link>
          <Link to="/register">註冊</Link>
          {/* <Link to='/user'>後台</Link> */}
          {/* <Link to='/logout'>登出</Link> */}

          {/* <Link to="/test-web-api">測試 web api</Link> */}
        </NavbarLinks>
      </NavbarWrapper>
    </Wrapper>

  )
}

export default Navbar
