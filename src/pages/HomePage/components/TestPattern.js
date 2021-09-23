import React from 'react'
import styled from '@emotion/styled'

import flexJustifyAlign from '../../../styles/flexJustifyAlign'

const Wrap = styled.div`
  width: 200px;
  height: 200px;
  ${flexJustifyAlign('center', 'flex-end')}
`

const Clock = styled.div`
  background-color: ${({ theme }) => theme.secondary_300};
  width: 170px;
  height: 170px;
  border-radius: 50%;
  position: relative;
  ${flexJustifyAlign()}
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme.secondary_300};
    width: 15px;
    height: 15px;
    position: absolute;
    top: 15px;
    right: 15px;
    transform: rotate(45deg);
  }
  &:after {
    width: 30px;
    height: 16px;
    border-radius: 8px;
    top: 7px;
    right: 1px;
  }
`

const OuterClock = styled.div`
  background-color: #fff;
  width: 135px;
  height: 135px;
  border-radius: 50%;
  position: relative;
  span:nth-of-type(1) {
    top: 10%;
    left: 40%;
    transform-origin: center left;
    transform: rotate(90deg) translate(-10px, -13px);
  }
  span:nth-of-type(2) {
    top: 50%;
    left: 10%;
  }
  span:nth-of-type(3) {
    top: 50%;
    left: 90%;
  }
  span:nth-of-type(4) {
    top: 90%;
    left: 50%;
    transform-origin: center left;
    transform: rotate(90deg) translateX(-13px);
  }
`

const Scale = styled.span`
  background-color: ${({ theme }) => theme.secondary_300};
  width: 15px;
  height: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const InnerClock = styled.div`
  background-color: ${({ theme }) => theme.secondary_300};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:before {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme.secondary_300};
    width: 25px;
    height: 8px;
    transform: rotate(90deg) translate(20px, 3px);
  }
  &:after {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme.secondary_300};
    height: 8px;
    width: 40px;
    transform: rotate(-45deg) translate(13px, -7px);
  }
`

const ClockTop = styled.div`
  width: 60px;
  height: 34px;
  border-radius: 50px;
  border: 9px solid ${({ theme }) => theme.secondary_300};
  background-color: ${({ theme }) => theme.secondary_900};
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  &:before {
    content: '';
    display: block;
    width: 20px;
    height: 16px;
    background-color: ${({ theme }) => theme.secondary_300};
    position: absolute;
    bottom: -17px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const TestPattern = () => {
  return (
    <Wrap>
      <Clock>
        <ClockTop />
        <OuterClock>
          <Scale />
          <Scale />
          <Scale />
          <Scale />
          <InnerClock />
        </OuterClock>
      </Clock>
    </Wrap>
  )
}

export default TestPattern
