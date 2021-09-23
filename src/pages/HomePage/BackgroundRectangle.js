import React from 'react'
import styled from '@emotion/styled'

const Rectangle = styled.div`
  width: 80vw;
  height: 400px;
  background-color: ${({ theme }) => theme.secondary_850};
`

const BackgroundRectangle = () => {
  return <Rectangle />
}

export default BackgroundRectangle
