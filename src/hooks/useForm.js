import { useState } from 'react'
import { isEmailFormatValid, isPasswordFormatValid } from '../pages/utils'

const useForm = () => {
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [againPassword, setAgainPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // 表單驗證不知道有沒有更可以重複使用的寫法，先每個都分開寫
  const validateRegister = () => {
    if (nickname === '' || email === '' || password === '') {
      setErrorMessage('暱稱、信箱及密碼不能空白')
      return false
    }
    if (!isEmailFormatValid(email)) {
      setErrorMessage('信箱格式錯誤')
      return false
    }
    if (!isPasswordFormatValid(password)) {
      setErrorMessage('密碼格式錯誤，長度需為 8 以上並包含小寫英文字母、數字')
      return false
    }
    return true
  }

  const validateLogin = () => {
    if (email === '' || password === '') {
      setErrorMessage('信箱及密碼不能空白')
      return false
    }
    if (!isEmailFormatValid(email)) {
      setErrorMessage('信箱格式錯誤')
      return false
    }
    if (!isPasswordFormatValid(password)) {
      setErrorMessage('密碼格式錯誤，長度需為 8 以上並包含小寫英文字母、數字')
      return false
    }
    return true
  }

  const validateUpdateMe = () => {
    if (nickname === '' || email === '') {
      setErrorMessage('暱稱及信箱不能空白')
      return false
    }
    if (!isEmailFormatValid(email)) {
      setErrorMessage('信箱格式錯誤')
      return false
    }
    return true
  }

  const validateUpdatePassword = () => {
    if (oldPassword === '' || newPassword === '' || againPassword === '') {
      setErrorMessage('原密碼、新密碼、再次輸入密碼皆不得空白')
      return false
    }
    if (
      !isPasswordFormatValid(oldPassword) ||
      !isPasswordFormatValid(newPassword) ||
      !isPasswordFormatValid(againPassword)
    ) {
      setErrorMessage('密碼格式錯誤，長度需為 8 以上並包含小寫英文字母、數字')
      return false
    }
    if (newPassword !== againPassword) {
      setErrorMessage('再次輸入的密碼與新密碼不一樣')
      return false
    }
    return true
  }

  return {
    nickname,
    setNickname,
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    setErrorMessage,
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    againPassword,
    setAgainPassword,
    validateRegister,
    validateLogin,
    validateUpdateMe,
    validateUpdatePassword
  }
}

export default useForm
