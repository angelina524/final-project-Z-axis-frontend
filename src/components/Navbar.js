import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import CenterAlignment from '../styles/CenterAlignment'

const Wrapper = styled.div`
  ${CenterAlignment};
  width: 100%;
  position: fixed;
  top: 3.5rem;
  z-index: 1;
`

const NavbarWrapper = styled.div`
  width: 85%;
  height: 4rem;
  box-shadow:0 4px 30px 0 rgba(0,0,0,.1);
  border: solid .5px rgba(0,0,0,.1);
  border-radius: 2rem;
  padding: 0em 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #000000;
    text-decoration: none;
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
          <Link to='/'>首頁</Link>
          <Link to='/login'>登入</Link>
          <Link to='/register'>註冊</Link>
          {/* <Link to='/user'>後台</Link> */}
          {/* <Link to='/logout'>登出</Link> */}
          <Link to="/test-web-api">測試 web api</Link>
        </NavbarLinks>
      </NavbarWrapper>
    </Wrapper>
  )
}

export default Navbar
