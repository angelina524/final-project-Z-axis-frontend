import styled from '@emotion/styled'

export const BUTTON_HEIGHT = '2.25rem'

export default styled.button`
  background: ${({ theme }) => theme.secondary_300};
  background: ${({ backgroundColor }) => backgroundColor};
  border: none;
  width: 6.8125rem;
  border-radius: calc(${BUTTON_HEIGHT} / 2);
  color: ${({ theme }) => theme.secondary_900};
  font-size: 1rem;
  text-align: center;
  line-height: ${BUTTON_HEIGHT};
`
