import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { InputWrapper, InputText } from '../../styles/Input'
import SubmitBtn from '../../styles/Button'
import { Title, PromptLink } from '../../styles/Content'
import { login } from '../../webapi/userApi'
import { ErrorMessage } from '../utils'
import useForm from '../../hooks/useForm'

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

  const handleSubmit = async () => {
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
    <>
      <Title>登入</Title>
      <InputWrapper>
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
      </InputWrapper>
      <SubmitBtn onClick={handleSubmit} type="submit">
        送出
      </SubmitBtn>
      <PromptLink to="/register">還沒有帳號？ 按此註冊</PromptLink>
    </>
  )
}

export default LoginPage
