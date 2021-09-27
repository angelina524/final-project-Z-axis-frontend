import React from 'react'
import {
  PromptLink,
  UserFormWrapper,
  FormTitle,
  InputText,
  ErrorMessage,
  SubmitBtn
} from '../utils'

const LoginPage = () => {
  return (
    <UserFormWrapper>
      <FormTitle>登入</FormTitle>
      <InputText type="email" placeholder="信箱" />
      <InputText type="password" placeholder="密碼" />
      <ErrorMessage></ErrorMessage>
      <SubmitBtn type="submit">送出</SubmitBtn>
      <PromptLink to="/register">還沒有帳號？ 按此註冊</PromptLink>
    </UserFormWrapper>
  )
}

export default LoginPage
