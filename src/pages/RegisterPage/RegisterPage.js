import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { InputWrapper, InputText } from '../../styles/Input'
import SubmitBtn from '../../styles/Button'
import { Title, PromptLink } from '../../styles/Content'
import { ErrorMessage } from '../utils'
import { register } from '../../webapi/userApi'
import useForm from '../../hooks/useForm'

const RegisterPage = () => {
  const {
    nickname,
    setNickname,
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    setErrorMessage,
    validateRegister
  } = useForm()
  const history = useHistory()

  const handleSubmit = async () => {
    const isFormValid = validateRegister()
    if (!isFormValid) return

    let userToken = ''
    try {
      userToken = await register(nickname, email, password)
    } catch (error) {
      setErrorMessage('註冊失敗，請再試一次')
      return
    }

    window.localStorage.setItem('userToken', userToken)
    history.push('/')
  }

  useEffect(() => {
    setErrorMessage('')
  }, [nickname, email, password])

  return (
    <>
      <Title>註冊</Title>
      <InputWrapper>
        <InputText
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          type="text"
          placeholder="暱稱"
        />
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
      <PromptLink to="/login">已經有帳號？ 按此登入</PromptLink>
    </>
  )
}

export default RegisterPage
