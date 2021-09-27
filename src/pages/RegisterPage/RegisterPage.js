import React from 'react'
import {
  UserFormWrapper,
  FormTitle,
  InputText,
  ErrorMessage,
  SubmitBtn,
  PromptLink
} from '../utils'

const RegisterPage = () => {
  return (
    <UserFormWrapper>
      <FormTitle>註冊</FormTitle>
      <InputText type="text" placeholder="暱稱" />
      <InputText type="email" placeholder="信箱" />
      <InputText type="password" placeholder="密碼" />
      <ErrorMessage></ErrorMessage>
      <SubmitBtn type="submit">送出</SubmitBtn>
      <PromptLink to="/login">已經有帳號？ 按此登入</PromptLink>
    </UserFormWrapper>
  )
}

export default RegisterPage
