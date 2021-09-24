import styled from '@emotion/styled'
import flexJustifyAlign from '../../styles/flexJustifyAlign'

const CircleNumber = styled.div`
  ${flexJustifyAlign()}
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.secondary_300};
  color: ${({ theme }) => theme.secondary_300};
  font-weight: 700;
  background-color: transparent;
`

export default CircleNumber
