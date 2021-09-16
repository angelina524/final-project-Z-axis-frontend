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

const InputUpdatePassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const InputPassword = styled.input`
  margin-top: 2rem;
  padding:0.6rem;
  width: 300px;
  ::placeholder {
    color: #AAAAAA;
  }
  border: 1px #AAAAAA solid;
  border-radius: 3px;
`

const InputNewPassword = styled.input`
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

const UpdatePassword = () => {
  return (
    <>
      <H1>修改密碼</H1>
      <InputUpdatePassword>
        <InputPassword type='password' placeholder='原密碼' />
        <InputNewPassword type='password' placeholder='新密碼' />
        <InputNewPassword type='password' placeholder='新密碼再次輸入' />
        <InputSubmit type='submit' value='送出'/>
      </InputUpdatePassword>
      <P>
        <Link to='/user/me'>修改個人資料？  按此修改</Link>
      </P>
    </>
  )
}

export default UpdatePassword