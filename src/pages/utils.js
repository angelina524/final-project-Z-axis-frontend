import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`

const ErrorMessage = styled.p`
  position: absolute;
  bottom: 15%;
  color: ${({ theme }) => theme.warning};
`

export { Wrapper, ErrorMessage }

export const isEmailFormatValid = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regex.test(email)
}

export const isPasswordFormatValid = (email) => {
  const regex = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z]).*$/
  return regex.test(email)
}
