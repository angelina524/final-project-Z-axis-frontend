import styled from '@emotion/styled'

const TitleWrapper = styled.div`
  margin: 0 2rem;
  letter-spacing: 2px;
  h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
  }
  p {
    line-height: 2;
    letter-spacing: 1px;
  }
`

export default TitleWrapper
