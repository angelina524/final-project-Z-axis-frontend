import styled from '@emotion/styled'

const BackgroundCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #f9f9f9;
  position: absolute;
  right: -100px;
  top: 30vh;
`

export const BackgroundCircleForUser = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #f9f9f9;
  position: absolute;
	top: 50%; 
	left: 50%; 
	transform: translate(-230%, -100%)
`

export default BackgroundCircle