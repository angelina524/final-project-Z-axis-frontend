import React from 'react'
import styled from '@emotion/styled'
import flexJustifyAlign from '../../../styles/flexJustifyAlign'

const Wrap = styled.div`
  width: 200px;
  height: 200px;
  ${flexJustifyAlign()}
`

const Lottery = styled.div`
  width: 160px;
  height: 92px;
  background-color: ${({ theme }) => theme.secondary_300};
  border-radius: 20px;
  position: relative;
  ${flexJustifyAlign()}
  h2:nth-of-type(1) {
    border-radius: 10px 0 0 10px;
  }
  h2:nth-of-type(2) {
    border-radius: 0px;
  }
  h2:nth-of-type(3) {
    border-radius: 0 10px 10px 0;
  }
`

const NumberWrap = styled.h2`
  width: 40px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  margin: 3px;
  font-family: Roboto, sans-serif;
  font-size: 2.8rem;
  background-color: ${({ theme }) => theme.secondary_850};
  color: ${({ theme }) => theme.secondary_300};
`

const LotteryTop = styled.div`
  width: 60px;
  height: 8px;
  border-radius: 10px;
  position: absolute;
  top: -8px;
  background-color: #fff;
  box-shadow: 0px 0px 0px 8px ${({ theme }) => theme.secondary_300};
`

const LotteryBottom = styled.div`
  width: 180px;
  height: 40px;
  border-radius: 15px;
  position: absolute;
  bottom: -35px;
  background-color: ${({ theme }) => theme.secondary_300};
  &:before {
    content: '';
    display: block;
    width: 160px;
    height: 24px;
    position: absolute;
    top: 8px;
    left: 10px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.secondary_900};
  }
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    border-radius: 5px;
    box-shadow: 0 0 0 6px ${({ theme }) => theme.secondary_300};
    position: absolute;
    top: 18px;
    left: 60px;
    background-color: ${({ theme }) => theme.secondary_900};
  }
`

const LotteryRight = styled.div`
  height: 50px;
  width: 10px;
  background-color: ${({ theme }) => theme.secondary_300};
  border-radius: 0 0 6px 0;
  position: absolute;
  top: -5px;
  right: -24px;
  &:before {
    content: '';
    display: block;
    width: 20px;
    height: 10px;
    background-color: ${({ theme }) => theme.secondary_300};
    position: absolute;
    bottom: 0;
    left: -19px;
  }
  &:after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.secondary_300};
    position: absolute;
    top: -10px;
    left: -5px;
  }
`

const LotteryPattern = () => {
  return (
    <Wrap>
      <Lottery>
        <LotteryTop />
        <NumberWrap>7</NumberWrap>
        <NumberWrap>7</NumberWrap>
        <NumberWrap>7</NumberWrap>
        <LotteryRight />
        <LotteryBottom />
      </Lottery>
    </Wrap>
  )
}

export default LotteryPattern
