import React from 'react'
import styled from '@emotion/styled'

import BackgroundCircle from './BackgroundCircle'
import BackgroundCircleDashed from './BackgroundCircleDashed'
import FormCurve from './FormCurve'

const FormStyleCircle = styled(BackgroundCircle)`
  transform: scale(1.6);
  top: -25vh;
  left: -25vh;
  @media (max-width: 768px) {
    display: none;
  }
`

const FormStyleCircleDashed = styled(BackgroundCircleDashed)`
  transform: scale(2.2);
  top: -5vh;
  left: -20vh;
  @media (max-width: 768px) {
    display: none;
  }
`

const DesktopFormStyle = () => {
  return (
    <>
      <FormStyleCircle />
      <FormStyleCircleDashed />
      <FormCurve />
    </>
  )
}

export default DesktopFormStyle
