import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import React from 'react'
import { Wrap } from '../utils'

const A = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: #4167B2;
    margin: 0.5rem;
  }
  margin-top: 4rem;
  flex-direction: column;
`

const User = () => {
  return (
    <Wrap>
      <A>
        <Link to='/user/me/update-password'>修改密碼</Link>
        <Link to='/user/me'>修改個人資料</Link>
      </A>
    </Wrap>
  )
}

export default User