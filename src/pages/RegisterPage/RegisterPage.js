import React from 'react'
import { InputWrapper, InputText } from '../../styles/Input'
import SubmitBtn from '../../styles/Button'
import { Title, PromptLink } from '../../styles/Content'

const RegisterPage = () => {
  return (
    <>
      <Title>註冊</Title>
      <InputWrapper>
        <InputText type="text" placeholder="暱稱" />
        <InputText type="email" placeholder="信箱" />
        <InputText type="password" placeholder="密碼" />
      </InputWrapper>
      <SubmitBtn type="submit">送出</SubmitBtn>
      <PromptLink to="/login">已經有帳號？ 按此登入</PromptLink>
    </>
  )
}

export default RegisterPage
