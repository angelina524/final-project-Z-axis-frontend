import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import { login } from '../../webapi/userApi'
import useForm from '../../hooks/useForm'
import {
  PromptLink,
  UserFormWrapper,
  FormTitle,
  InputText,
  ErrorMessage,
  SubmitBtn
} from '../utils'

const LoginPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    setErrorMessage,
    validateLogin
  } = useForm()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isFormValid = validateLogin()
    if (!isFormValid) return

    let userToken = ''
    try {
      userToken = await login(email, password)
    } catch (error) {
      setErrorMessage('信箱或密碼錯誤')
      return
    }

    window.localStorage.setItem('userToken', userToken)
    history.push('/')
  }

  useEffect(() => {
    setErrorMessage('')
  }, [email, password])

  return (
    <UserFormWrapper onSubmit={handleSubmit}>
      <FormTitle>登入</FormTitle>
      <InputText
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="信箱"
      />
      <InputText
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="密碼"
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <SubmitBtn type="submit">送出</SubmitBtn>
      <PromptLink to="/register">還沒有帳號？ 按此註冊</PromptLink>
    </UserFormWrapper>
  )
}

export default LoginPage
