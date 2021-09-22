import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import flexCenter from '../styles/flexCenter'

const LogoVision = styled(Link)`
  ${flexCenter()}
  width: 40px;
  height: 40px;
  background: #4167b2;
  border-radius: 8px;
  font-size: 1.7rem;
  font-weight: bold;
  color: #ffffff !important;
`

const Logo = () => {
  return <LogoVision to="/">Z</LogoVision>
}

export default Logo
