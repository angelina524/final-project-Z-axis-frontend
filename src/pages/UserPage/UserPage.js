import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import React from 'react'
import flexCenter from '../../styles/flexCenter'

const Test = styled.div`
  ${flexCenter()}
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    margin: 0.5rem;
  }
  margin-top: 12rem;
  flex-direction: column;
`

const User = () => {
  return (
    <>
      <Test>
        <Link to="/user/me/update-password">修改密碼</Link>
        <Link to="/user/me">修改個人資料</Link>
      </Test>
    </>
  )
}

export default User
