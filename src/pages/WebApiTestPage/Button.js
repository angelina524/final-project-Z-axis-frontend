import styled from '@emotion/styled'

export const Button = styled.div`
  margin: 0 auto;
  text-align: center;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.secondary_100};
  padding: 0.1rem;
  width: 12rem;
  cursor: pointer;
`
