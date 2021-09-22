import styled from '@emotion/styled'

const BackgroundCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondary_850};
  position: absolute;
  right: -100px;
  top: 30vh;
`

export default BackgroundCircle
