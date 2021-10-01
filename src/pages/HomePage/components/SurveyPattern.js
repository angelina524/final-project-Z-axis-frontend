import React from 'react'
import styled from '@emotion/styled'

import flexJustifyAlign from '../../../styles/flexJustifyAlign'

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  ${flexJustifyAlign()}
`

const Notepad = styled.div`
  width: 160px;
  height: 166px;
  border: 18px solid ${({ theme }) => theme.secondary_300};
  border-radius: 40px;
  position: relative;
`

const TopLine = styled.div`
  width: 12px;
  height: 40px;
  box-shadow: 26px 0px 0px ${({ theme }) => theme.secondary_300},
    -26px 0px 0px ${({ theme }) => theme.secondary_300};
  background: ${({ theme }) => theme.secondary_300};
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
`

const Frame = styled.div`
  width: 25px;
  height: 25px;
  border: 6px solid ${({ theme }) => theme.secondary_300};
  position: absolute;
  transform: translateY(-50%);
  left: 15px;
  top: ${({ id }) => id * 26 + '%'};
`

const Check = styled.div`
  width: 45px;
  height: 20px;
  background: ${({ theme }) => theme.secondary_300};
  position: absolute;
  top: 50%;
  left: 60%;
  transform: rotate(45deg);
  &:after {
    content: '';
    width: 20px;
    height: 65px;
    background: ${({ theme }) => theme.secondary_300};
    position: absolute;
    top: -59px;
    right: 0px;
  }
`

const TestPattern = () => {
  return (
    <Wrapper>
      <Notepad>
        <TopLine />
        <Frame id="1" />
        <Frame id="2" />
        <Frame id="3" />
        <Check />
      </Notepad>
    </Wrapper>
  )
}

export default TestPattern
