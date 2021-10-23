import React from 'react'
import styled from '@emotion/styled'

export const SvgWrapper = styled.svg`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 20vh;
  right: 5vh;
  z-index: -1;
  transform: scale(1.6);
  @media (max-width: 768px) {
    display: none;
  }
`

const FormCurve = () => {
  return (
    <SvgWrapper>
      <path
        d="M0 300 C150 270,150 120,300,0"
        strokeDasharray="10,10"
        stroke="#c4c4c4"
        fill="none"
      />
    </SvgWrapper>
  )
}

export default FormCurve
