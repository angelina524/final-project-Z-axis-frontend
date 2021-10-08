import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import LoadingContext from '../../contexts/loadingContext'
import { register } from '../../webapi/userApi'
import useForm from '../../hooks/useForm'
import storage from '../../localStorageApi'
import {
  UserFormWrapper,
  FormTitle,
  InputText,
  ErrorMessage,
  SubmitBtn,
  PromptLink
} from '../../components/form'
import { UserTokenContext } from '../../contexts/tokenContexts'

const RegisterPage = ({ isNow }) => {
  const { setUserToken } = useContext(UserTokenContext)
  const setIsLoading = useContext(LoadingContext)
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isFormValid = validateRegister()
    if (!isFormValid) return

    let userToken = ''
    try {
      setIsLoading(true)
      const response = await register(nickname, email, password)
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
  }, [nickname, email, password])

  return (
    <UserFormWrapper isNow={isNow} onSubmit={handleSubmit}>
      <FormTitle>{isNow && '立即'}註冊</FormTitle>
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
      <SubmitBtn type="submit">送出</SubmitBtn>
      <PromptLink to="/login">已經有帳號？ 按此登入</PromptLink>
    </UserFormWrapper>
  )
}
RegisterPage.propTypes = {
  isNow: PropTypes.bool
}

export default RegisterPage
