import React from 'react'
import { InputWrapper, InputText } from '../../styles/Input'
import SubmitBtn from '../../styles/Button'
import { Title, PromptLink } from '../../styles/Content'

const LoginPage = () => {
  return (
    <>
      <Title>登入</Title>
      <InputWrapper>
        <InputText type='email' placeholder='信箱' />
        <InputText type='password' placeholder='密碼' />
      </InputWrapper>
      <SubmitBtn type='submit'>送出</SubmitBtn>
      <PromptLink to='/register'>還沒有帳號？  按此註冊</PromptLink>
    </>
  )
}

export default LoginPage