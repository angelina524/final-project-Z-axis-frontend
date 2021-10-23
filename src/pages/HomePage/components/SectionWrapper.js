import styled from '@emotion/styled'
import { device } from '../../../styles/media'

const SectionWrapper = styled.div`
  @media ${device.desktop} {
    position: relative;
    top: -75vh;
  }
`

export default SectionWrapper
