import styled from '@emotion/styled'

const BackgroundCircleDashed = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23333' stroke-width='3' stroke-dasharray='10%2c10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  background-color: transparent;
  position: absolute;
  right: -100px;
  top: 40vh;
`

export default BackgroundCircleDashed
