import styled from '@emotion/styled'

export const BUTTON_HEIGHT = '2.5rem'

const Button = styled.button`
  width: 7.8125rem;
  line-height: ${BUTTON_HEIGHT};
  border-radius: 20px;
  font-size: 1rem;
  text-align: center;
  border: none;
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ theme }) => theme.secondary_900};
  align-self: flex-end;
  justify-self: center;
`

export default Button
