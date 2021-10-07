import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Button = styled(Link)`
  margin-top: 1rem;
  padding: 0.3rem 1rem;
  border-radius: 2.5rem;
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.secondary_300};
`

const BackToUserPageBtn = () => {
  return <Button to="/user/me">回個人資料</Button>
}

export default BackToUserPageBtn
