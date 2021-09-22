import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import flexCenter from '../styles/flexCenter'

const LogoVision = styled(Link)`
  width: 40px;
  height: 40px;
  background: #4167B2;
  border-radius: 8px;
  ${flexCenter};
  font-size: 1.7rem;
  font-weight: bold;
  color: #FFFFFF !important;
`

const Logo = () => {
  return (
    <LogoVision to='/'>Z</LogoVision>
  )
}

export default Logo