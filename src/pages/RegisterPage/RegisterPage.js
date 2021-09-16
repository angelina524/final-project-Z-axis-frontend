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

const InputRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const InputNickname = styled.input`
  margin-top: 2rem;
  padding:0.6rem;
  width: 300px;
  ::placeholder {
    color: #AAAAAA;
  }
  border: 1px #AAAAAA solid;
  border-radius: 3px;
`

const InputEmail = styled.input`
  margin-top: 1.5rem;
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

const RegisterPage = () => {
  return (
    <>
      <H1>註冊</H1>
      <InputRegister>
        <InputNickname type='text' placeholder='暱稱' />
        <InputEmail type='email' placeholder='信箱' />
        <InputPassword type='password' placeholder='密碼' />
        <InputSubmit type='submit' value='送出'/>
      </InputRegister>
      <P>
        <Link to='/login'>已經有帳號？  按此登入</Link>
      </P>
    </>
  )
}

export default RegisterPage