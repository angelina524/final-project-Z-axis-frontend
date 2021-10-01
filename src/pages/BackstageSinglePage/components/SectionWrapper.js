import styled from '@emotion/styled'

const SectionWrapper = styled.div`
  width: 100%;
  ${({ isGreyBackground }) => isGreyBackground && 'background: #f9f9f9;'}
`
// background: ${({ theme }) => theme.secondary_850};

export default SectionWrapper
