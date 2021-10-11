import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #fff;
  span:nth-of-type(1) {
    border-radius: 43% 57% 24% 76% / 48% 50% 50% 52%;
  }
  span:nth-of-type(2) {
    border-radius: 24% 76% 54% 46% / 54% 29% 71% 46%;
    animation-direction: reverse;
  }
  span:nth-of-type(3) {
    border-radius: 42% 58% 49% 51% / 71% 71% 29% 29%;
    animation-duration: 3s;
  }
`

const Circle = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid ${({ theme }) => theme.primary};
  animation: ${rotate} 5s linear infinite;
`

const LoadingText = styled.h2`
  color: ${({ theme }) => theme.primary};
  background-color: transparent;
`

const Loader = () => {
  return (
    <Wrapper>
      <LoaderWrapper>
        <Circle />
        <Circle />
        <Circle />
        <LoadingText>Z-axis</LoadingText>
      </LoaderWrapper>
    </Wrapper>
  )
}

export default Loader
