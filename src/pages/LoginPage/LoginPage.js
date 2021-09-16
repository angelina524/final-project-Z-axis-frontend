import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import React from 'react'

const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content:center;
  margin-top: 4rem;
  color: #4167B2;
`

const InputLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const InputEmail = styled.input`
  margin-top: 2rem;
  padding:0.6rem;
  width: 300px;
  ::placeholder {
    color: #AAAAAA;
  }
  border: 1px #AAAAAA solid;
  border-radius: 3px;
`

const InputPassword = styled.input`
  margin-top: 1.5rem;
  padding:0.6rem;
  width: 300px;
    ::placeholder {
    color: #AAAAAA;
  }
  border: 1px #AAAAAA solid;
  border-radius: 3px;
`

const InputSubmit = styled.input`
  margin-top: 2rem;
  padding:0.6rem;
  width: 300px;
  border: 1px #AAAAAA solid;
  border-radius: 3px;
  background: #4167B2;
  color: #FFFFFF;
`

const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: #4167B2;
  }
  margin-top: 4rem;
`

const LoginPage = () => {
  return (
    <>
      <H1>登入</H1>
      <InputLogin>
        <InputEmail type='email' placeholder='信箱' />
        <InputPassword type='password' placeholder='密碼' />
        <InputSubmit type='submit' value='送出'/>
      </InputLogin>
      <P>
        <Link to='/register'>還沒有帳號？  按此註冊</Link>
      </P>
    </>
  )
}

export default LoginPage