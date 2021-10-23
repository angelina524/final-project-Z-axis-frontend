import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import LoadingContext from '../../contexts/loadingContext'
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
import DesktopFormStyle from '../HomePage/components/DesktopFormStyle'

const LoginPage = () => {
  const { setUserToken } = useContext(UserTokenContext)
  const setIsLoading = useContext(LoadingContext)
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
      setIsLoading(true)
      const response = await login(email, password)
      const { data } = response
      if (!data.ok) throw new Error(data.message)
      userToken = data.token
      setIsLoading(false)
    } catch (error) {
      setErrorMessage(error.message)
      setIsLoading(false)
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
      <DesktopFormStyle />
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
