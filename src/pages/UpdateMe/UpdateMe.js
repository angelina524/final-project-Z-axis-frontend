import React from 'react'
import {
  UserFormWrapper,
  FormTitle,
  InputText,
  ErrorMessage,
  SubmitBtn,
  PromptLink
} from '../utils'

const UpdateMe = () => {
  return (
    <UserFormWrapper>
      <FormTitle>修改個人資料</FormTitle>
      <InputText type="text" placeholder="暱稱" />
      <InputText type="email" placeholder="信箱" />
      <ErrorMessage></ErrorMessage>
      <SubmitBtn type="submit">送出</SubmitBtn>
      <PromptLink to="/user/me/update-password">修改密碼？ 按此修改</PromptLink>
    </UserFormWrapper>
  )
}

export default UpdateMe
