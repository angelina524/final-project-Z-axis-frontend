import React from 'react'
import {
  UserFormWrapper,
  FormTitle,
  InputText,
  ErrorMessage,
  SubmitBtn,
  PromptLink
} from '../utils'

const UpdatePassword = () => {
  return (
    <UserFormWrapper>
      <FormTitle>修改密碼</FormTitle>
      <InputText type="password" placeholder="原密碼" />
      <InputText type="password" placeholder="新密碼" />
      <InputText type="password" placeholder="新密碼再次輸入" />
      <ErrorMessage></ErrorMessage>
      <SubmitBtn type="submit">送出</SubmitBtn>
      <PromptLink to="/user/me">修改個人資料？ 按此修改</PromptLink>
    </UserFormWrapper>
  )
}

export default UpdatePassword
