import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import CenterAlignment from '../styles/CenterAlignment'

const LogoVision = styled(Link)`
  width: 40px;
  height: 40px;
  background: #4167B2;
  border-radius: 8px;
  ${CenterAlignment};
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