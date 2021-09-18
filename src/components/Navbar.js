import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const NavbarWrap = styled.div`
  width: 100%;
  height: 2rem;
  border: 1px solid #333;
  background-color: #fff;
  display: flex;
  align-items: center;
  a {
    color: #000;
    margin: 0 0.5rem;
    text-decoration: none;
  }
`

const Navbar = () => {
  return (
    <NavbarWrap>
      <Link to="/">Z-axis</Link>
      <Link to="/">首頁</Link>
      <Link to="/about">關於</Link>
      <Link to="/login">登入</Link>
      <Link to="/test-web-api">測試 web api</Link>
    </NavbarWrap>
  )
}

export default Navbar
