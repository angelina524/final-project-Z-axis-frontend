import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
`

const NavbarWrap = styled.div`
  margin-top: 4rem;
  width: 85%;
  height: 4rem;
  box-shadow:0 4px 30px 0 rgb(0 0 0 / 10%);
  border: solid .5px rgba(0,0,0,.1);
  border-radius: 5rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #000;
    text-decoration: none;
  }
`

const NavbarLogo = styled.div`
  margin-left: 1.5rem;
`

const NavbarLink = styled.div`
  margin-right: 1.5rem;
  a {
    margin: 1rem;
  }
`
const Logo = styled.div`
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

const Navbar = () => {
  return (
    <Wrapper>
      <NavbarWrap>
        <NavbarLogo>
          <Logo><Link to='/'>Z</Link></Logo>
        </NavbarLogo>
        <NavbarLink>
          <Link to='/'>首頁</Link>
          <Link to='/login'>登入</Link>
          <Link to='/register'>註冊</Link>
          {/* <Link to='/user'>後台</Link> */}
          {/* <Link to='/logout'>登出</Link> */}
        </NavbarLink>
      </NavbarWrap>
    </Wrapper>
  )
}

export default Navbar