import styled from '@emotion/styled'
import flexCenter from './flexCenter'
import { Link } from 'react-router-dom'

const Title = styled.h1`
  ${flexCenter()}
  margin-top: 11.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
`

const PromptLink = styled(Link)`
  display: block;
  margin-top: 3.5rem;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
`

export { Title, PromptLink }
