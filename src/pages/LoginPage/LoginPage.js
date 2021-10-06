import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { login } from '../../webapi/userApi'
import useForm from '../../hooks/useForm'
import storage from '../../localStorageApi'
import {
  PromptLink,
  UserFormWrapper,
  FormTitle,
  InputText,
  ErrorMessage,
  SubmitBtn
} from '../../components/form'
import { UserTokenContext } from '../../contexts/tokenContexts'

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
  const { setUserToken } = useContext(UserTokenContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isFormValid = validateLogin()
    if (!isFormValid) return

    let userToken = ''
    try {
      const response = await login(email, password)
      const { data } = response
      if (!data.ok) throw new Error(data.message)
      userToken = data.token
    } catch (error) {
      setErrorMessage(error.message)
      return
    }

    setUserToken(userToken)
    storage.setUserToken(userToken)
    history.push('/backstage')
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
