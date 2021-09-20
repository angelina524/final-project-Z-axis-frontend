import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const LogoVision = styled(Link)`
  width: 40px;
  height: 40px;
  background: #4167B2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  font-weight: bold;
  a {
    color: #FFFFFF;
  }
`

const Logo = () => {
  return (
    <LogoVision><Link to='/'>Z</Link></LogoVision>
  )
}

export default Logo