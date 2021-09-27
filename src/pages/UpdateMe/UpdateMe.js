import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import { getMe, updateMe } from '../../webapi/userApi'
import useForm from '../../hooks/useForm'
import {
  UserFormWrapper,
  FormTitle,
  InputText,
  ErrorMessage,
  SubmitBtn,
  PromptLink
} from '../utils'

const UpdateMe = () => {
  const {
    nickname,
    setNickname,
    email,
    setEmail,
    errorMessage,
    setErrorMessage,
    validateUpdateMe
  } = useForm('')
  const history = useHistory()

  // 暫時在這裡拿 userToken
  const userToken = window.localStorage.getItem('userToken')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isFormValid = validateUpdateMe()
    if (!isFormValid) return

    let newUserToken = ''
    try {
      newUserToken = await updateMe(userToken, nickname, email)
    } catch (error) {
      setErrorMessage('修改個人資料失敗，請再試一次')
      return
    }

    window.localStorage.setItem('userToken', newUserToken)
    history.push('/user')
  }

  useEffect(() => {
    const getUserInformation = async () => {
      let user = null
      try {
        user = await getMe(userToken)
      } catch (error) {
        setErrorMessage('取得個人資訊失敗')
        return
      }
      setNickname(user.nickname)
      setEmail(user.email)
    }
    getUserInformation()
  }, [])

  useEffect(() => {
    setErrorMessage('')
  }, [nickname, email])

  return (
    <UserFormWrapper onSubmit={handleSubmit}>
      <FormTitle>修改個人資料</FormTitle>
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
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <SubmitBtn type="submit">送出</SubmitBtn>
      <PromptLink to="/user/me/update-password">修改密碼？ 按此修改</PromptLink>
    </UserFormWrapper>
  )
}

export default UpdateMe
