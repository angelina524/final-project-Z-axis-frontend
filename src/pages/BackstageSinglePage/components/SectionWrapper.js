import styled from '@emotion/styled'

const SectionWrapper = styled.div`
  width: 100%;
  background: ${({ isGreyBackground, theme }) =>
    isGreyBackground ? theme.secondary_850 : theme.secondary_900};
  padding: 1rem 0 2rem;
`

export default SectionWrapper
