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

const InputUpdateMe = styled.div`
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

const UpdateMe = () => {
  return (
    <>
      <H1>修改個人資料</H1>
      <InputUpdateMe>
        <InputNickname type='text' placeholder='暱稱' />
        <InputEmail type='email' placeholder='信箱' />
        <InputSubmit type='submit' value='送出'/>
      </InputUpdateMe>
      <P>
        <Link to='/user/me/update-password'>修改密碼？  按此修改</Link>
      </P>
    </>
  )
}

export default UpdateMe