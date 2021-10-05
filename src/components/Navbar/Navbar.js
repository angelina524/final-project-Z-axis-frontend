import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import { UserTokenContext } from '../../contexts/tokenContexts'
import storage from '../../localStorageApi'

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

const RegisterNow = styled.div`
  display: inline-block;
  width: 6rem;
  height: 2.6rem;
  border-radius: 1.3rem;
  line-height: 2.6rem;
  text-align: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary_900};
  cursor: pointer;
`

const Navbar = () => {
  const { userToken } = useContext(UserTokenContext)
  const location = useLocation()
  const goToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <Wrapper>
      <NavbarWrapper>
        <Logo />
        <NavbarLinks>
          <Link to="/">首頁</Link>
          {!userToken && (
            <>
              <Link to="/login">登入</Link>
              {location.pathname === '/' && (
                <RegisterNow onClick={goToBottom}>立即註冊</RegisterNow>
              )}
              {location.pathname !== '/' && <Link to="/register">註冊</Link>}
            </>
          )}
          {userToken && (
            <>
              <Link to="/backstage">後台</Link>
              <a onClick={() => storage.clearUserToken()} href="/">
                登出
              </a>
            </>
          )}

          {/* <Link to="/test-web-api">測試 web api</Link> */}
        </NavbarLinks>
      </NavbarWrapper>
    </Wrapper>
  )
}

export default Navbar
