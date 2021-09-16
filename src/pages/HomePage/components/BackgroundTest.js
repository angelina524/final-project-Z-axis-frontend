import styled from '@emotion/styled'

const Wrap = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const Clock = styled.div`
  background-color: #c4c4c4;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before, &:after {
    content: "";
    display: block;
    background-color: #c4c4c4;
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
    top: 6px;
    right: 0px;
  }
`

const OuterClock = styled.div`
  background-color: #fff;
  width: 135px;
  height: 135px;
  border-radius: 50%;
  position: relative;
  span {
    background-color: #c4c4c4;
    width: 15px;
    height: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  span:nth-of-type(1) {
    top: 10%;
    left: 40%;
    transform-origin: center left;
    transform: rotate(90deg) translate(-10px, -14px);
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

const InnerClock = styled.div`
  background-color: #c4c4c4;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:before {
    content: "";
    display: block;
    background-color: #c4c4c4;
    width: 25px;
    height: 7px;
    transform: rotate(90deg) translate(10px, -10px);
    transform-origin: center left;
  }
  &:after {
    content: "";
    display: block;
    background-color: #c4c4c4;
    height: 7px;
    width: 40px;
    transform: rotate(-45deg) translate(7px, 7px);
    transform-origin: center left;
  }
`

const ClockTop = styled.div`
  width: 66px;
  height: 30px;
  border-radius: 50px;
  background-color: #c4c4c4;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  &:before {
    content: "";
    display: block;
    width: 20px;
    height: 17px;
    background-color: #c4c4c4;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:after {
    content: "";
    display: block;
    width: 44px;
    height: 15px;
    border-radius: 10px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const BackgroundTest = () => {
  return (
    <Wrap>
      <Clock>
        <ClockTop />
        <OuterClock>
          <span />
          <span />
          <span />
          <span />
          <InnerClock />
        </OuterClock>
      </Clock>
    </Wrap>
  )
}

export default BackgroundTest