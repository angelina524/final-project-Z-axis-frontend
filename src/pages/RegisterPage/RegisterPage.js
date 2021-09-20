import React from 'react'
import { Link } from 'react-router-dom'
import { Input, InputBox, InputSubmit } from '../../styles/Input'
import { Title, Description } from '../../styles/Content'

const RegisterPage = () => {
  return (
    <>
      <Title>註冊</Title>
      <Input>
        <InputBox type='text' placeholder='暱稱' />
        <InputBox type='email' placeholder='信箱' />
        <InputBox type='password' placeholder='密碼' />
        <InputSubmit type='submit' value='送出'/>
      </Input>
      <Description>
        <Link to='/login'>已經有帳號？  按此登入</Link>
      </Description>
    </>
  )
}

export default RegisterPage