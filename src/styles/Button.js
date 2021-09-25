import styled from '@emotion/styled'

const SubmitBtn = styled.button`
  display: block;
  margin: 2.5rem auto 0;
  padding: 0.8rem;
  width: 300px;
  border: ${({ theme }) => theme.border};
  border-radius: 3px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary_900};
`

export default SubmitBtn
