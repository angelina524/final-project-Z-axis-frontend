import React from 'react'
import { InputWrapper, InputText } from '../../styles/Input'
import SubmitBtn from '../../styles/Button'
import { Title, PromptLink } from '../../styles/Content'

const UpdateMe = () => {
  return (
    <>
      <Title>修改個人資料</Title>
      <InputWrapper>
        <InputText type='text' placeholder='暱稱' />
        <InputText type='email' placeholder='信箱' />
      </InputWrapper>
      <SubmitBtn type='submit'>送出</SubmitBtn>
        <PromptLink to='/user/me/update-password'>修改密碼？  按此修改</PromptLink>
    </>
  )
}

export default UpdateMe