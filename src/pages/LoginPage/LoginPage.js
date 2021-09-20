import React from 'react'
import { Link } from 'react-router-dom'
import { Input, InputBox, InputSubmit } from '../../styles/Input'
import { Title, Description } from '../../styles/Content'

const LoginPage = () => {
  return (
    <>
      <Title>登入</Title>
      <Input>
        <InputBox type='email' placeholder='信箱' />
        <InputBox type='password' placeholder='密碼' />
        <InputSubmit type='submit' value='送出'/>
      </Input>
      <Description>
        <Link to='/register'>還沒有帳號？  按此註冊</Link>
      </Description>
    </>
  )
}

export default LoginPage