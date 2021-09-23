import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import flexJustifyAlign from '../styles/flexJustifyAlign'

const LogoVision = styled(Link)`
  ${flexJustifyAlign()}
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
  font-size: 1.7rem;
  font-weight: bold;
  color: ${({ theme }) => theme.secondary_900} !important;
`

const Logo = () => {
  return <LogoVision to="/">Z</LogoVision>
}

export default Logo
