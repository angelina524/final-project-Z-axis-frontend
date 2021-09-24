import React from 'react'
import styled from '@emotion/styled'

import { InputWrapper, InputText } from '../../styles/Input'
import SubmitBtn from '../../styles/Button'
import { Title, PromptLink } from '../../styles/Content'
import Session from './components/Session'

const HomeTitle = styled(Title)`
  margin-top: 0;
`

const HomePage = () => {
  return (
    <Session>
      <HomeTitle>立即註冊</HomeTitle>
      <InputWrapper>
        <InputText type="text" placeholder="暱稱" />
        <InputText type="email" placeholder="信箱" />
        <InputText type="password" placeholder="密碼" />
      </InputWrapper>
      <SubmitBtn type="submit">送出</SubmitBtn>
      <PromptLink to="/login">已經有帳號？ 按此登入</PromptLink>
    </Session>
  )
}

export default HomePage
