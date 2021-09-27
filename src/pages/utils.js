import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import flexJustifyAlign from './../styles/flexJustifyAlign'

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`

export const UserFormWrapper = styled.form`
  position: relative;
  margin: 11.5rem 0 2rem;
  ${flexJustifyAlign()}
  flex-direction: column;
  gap: 1.5rem;
`

export const AddFormWrapper = styled.form`
  position: relative;
  height: calc(100vh-4rem);
  top: 4rem;
  margin: 1rem 0;
  ${flexJustifyAlign()}
  flex-direction: column;
  gap: 1.5rem;
`

export const FormTitle = styled.h1`
  color: ${({ theme }) => theme.primary};
`

export const InputText = styled.input`
  padding: 0.7rem;
  width: 300px;
  &::placeholder {
    color: ${({ theme }) => theme.secondary_300};
  }
  border: ${({ theme }) => theme.border};
  border-radius: 3px;
`

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: 50px;
  color: ${({ theme }) => theme.warning};
`

export const SubmitBtn = styled.button`
  display: block;
  padding: 0.7rem;
  width: 300px;
  border: ${({ theme }) => theme.border};
  border-radius: 3px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary_900};
`

export const PromptLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
`

export const isEmailFormatValid = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regex.test(email)
}

export const isPasswordFormatValid = (email) => {
  const regex = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z]).*$/
  return regex.test(email)
}
