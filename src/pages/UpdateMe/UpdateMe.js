import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { getMe, updateMe } from '../../webapi/userApi'
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
import BackToUserPageBtn from '../../components/BackToUserPageBtn'
import { UserTokenContext } from '../../contexts/tokenContexts'

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
  const { setUserToken } = useContext(UserTokenContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isFormValid = validateUpdateMe()
    if (!isFormValid) return

    let newUserToken = ''
    try {
      const response = await updateMe(nickname, email)
      const { data } = response
      if (!data.ok) throw new Error(data.message)
      newUserToken = data.token
    } catch (error) {
      setErrorMessage(error.message)
      return
    }

    setUserToken(newUserToken)
    storage.setUserToken(newUserToken)
    history.push('/user')
  }

  useEffect(() => {
    const getUserInformation = async () => {
      let user = {}
      try {
        const response = await getMe()
        const { data } = response
        if (!data.ok) throw new Error(data.message)
        user = data.user
      } catch (error) {
        setErrorMessage(error.message)
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
      <BackToUserPageBtn />
    </UserFormWrapper>
  )
}

export default UpdateMe
