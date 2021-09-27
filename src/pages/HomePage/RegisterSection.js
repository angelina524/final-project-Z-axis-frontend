import React from 'react'
import styled from '@emotion/styled'
import { useFormik } from 'formik'

import { InputWrapper, InputText } from '../../styles/Input'
import SubmitBtn from '../../styles/Button'
import { Title } from '../../styles/Content'
import Section from './components/Section'
import { register } from '../../webapi/userApi'
import { setUserToken } from '../../localStorageApi'

const HomeTitle = styled(Title)`
  margin-top: 0;
`

const RegisterSection = styled(Section)`
  min-height: 75vh;
`

const HomePage = () => {
  const formik = useFormik({
    initialValues: {
      nickname: '',
      email: '',
      password: ''
    },
    onSubmit: async (value) => {
      const { nickname, email, password } = value
      console.log(nickname, email, password)
      try {
        const token = await register(nickname, email, password)
        setUserToken(token)
      } catch (err) {
        console.log(err)
      }
    }
  })

  return (
    <RegisterSection>
      <HomeTitle>立即註冊</HomeTitle>
      <form onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <InputText
            type="text"
            placeholder="暱稱"
            name="nickname"
            onChange={formik.handleChange}
            value={formik.values.nickname}
          />
          <InputText
            type="email"
            placeholder="信箱"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <InputText
            type="password"
            placeholder="密碼"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </InputWrapper>
        <SubmitBtn type="submit">送出</SubmitBtn>
      </form>
    </RegisterSection>
  )
}

export default HomePage
