import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { updatePassword } from '../../webapi/userApi'
import useForm from '../../hooks/useForm'
import {
  UserFormWrapper,
  FormTitle,
  InputText,
  ErrorMessage,
  SubmitBtn,
  PromptLink
} from '../../components/form'

const UpdatePassword = () => {
  const {
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    againPassword,
    setAgainPassword,
    errorMessage,
    setErrorMessage,
    validateUpdatePassword
  } = useForm()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isFormValid = validateUpdatePassword()
    if (!isFormValid) return

    try {
      const response = await updatePassword(
        oldPassword,
        newPassword,
        againPassword
      )
      const { data } = response
      if (!data.ok) throw new Error(data.message)
    } catch (error) {
      setErrorMessage(error.message)
      return
    }

    history.push('/user')
  }

  useEffect(() => {
    setErrorMessage('')
  }, [oldPassword, newPassword, againPassword])

  return (
    <UserFormWrapper onSubmit={handleSubmit}>
      <FormTitle>修改密碼</FormTitle>
      <InputText
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        type="password"
        placeholder="原密碼"
      />
      <InputText
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        type="password"
        placeholder="新密碼"
      />
      <InputText
        value={againPassword}
        onChange={(e) => setAgainPassword(e.target.value)}
        type="password"
        placeholder="新密碼再次輸入"
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <SubmitBtn type="submit">送出</SubmitBtn>
      <PromptLink to="/user/me">修改個人資料？ 按此修改</PromptLink>
    </UserFormWrapper>
  )
}

export default UpdatePassword
