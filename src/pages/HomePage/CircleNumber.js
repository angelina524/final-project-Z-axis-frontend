import styled from '@emotion/styled'
import flexCenter from '../../styles/flexCenter'

const CircleNumber = styled.div`
  ${flexCenter()}
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.secondary_300};
  background-color: transparent;
`

export default CircleNumber
