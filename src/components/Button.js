import styled from '@emotion/styled'

export const BUTTON_HEIGHT = '2.5rem'

export default styled.button`
  background: ${({ theme }) => theme.secondary_300};
  border: none;
  width: 7.8125rem;
  border-radius: 20px;
  color: ${({ theme }) => theme.secondary_900};
  font-size: 1rem;
  text-align: center;
  line-height: ${BUTTON_HEIGHT};
`
