import React from 'react'
import { InputWrapper, InputText } from '../../styles/Input'
import SubmitBtn from '../../styles/Button'
import { Title, PromptLink } from '../../styles/Content'

const UpdatePassword = () => {
  return (
    <>
      <Title>修改密碼</Title>
      <InputWrapper>
        <InputText type="password" placeholder="原密碼" />
        <InputText type="password" placeholder="新密碼" />
        <InputText type="password" placeholder="新密碼再次輸入" />
      </InputWrapper>
      <SubmitBtn type="submit">送出</SubmitBtn>
      <PromptLink to="/user/me">修改個人資料？ 按此修改</PromptLink>
    </>
  )
}

export default UpdatePassword
