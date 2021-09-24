import styled from '@emotion/styled'

const BackgroundCircle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondary_850};
  position: absolute;
  right: -120px;
  top: 70vh;
  z-index: -1;
`

export default BackgroundCircle
