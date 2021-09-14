import styled from '@emotion/styled'

const SvgWrap = styled.svg`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const Curve = () => {
  return (
    <SvgWrap>
      <path d="M0 300 C150 270,150 120,300,0" stroke-dasharray="10,10" stroke="#c4c4c4" fill="none"/>
    </SvgWrap>
  )
}

export default Curve