import styled from '@emotion/styled'

const Wrap = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Lottery = styled.div`
  width: 160px;
  height: 92px;
  background-color: #c4c4c4;
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    width: 40px;
    height: 64px;
    margin: 3px;
    font-family: Roboto, sans-serif;
    font-size: 2.8rem;
    background-color: #f9f9f9;
    color: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1:nth-of-type(1) {
    border-radius: 10px 0 0 10px;
  }
  h1:nth-of-type(2) {
    border-radius: 0px;
  }
  h1:nth-of-type(3) {
    border-radius: 0 10px 10px 0;
  }
`

const LotteryTop = styled.div`
  width: 80px;
  height: 22px;
  border-radius: 10px;
  position: absolute;
  top: -18px;
  background-color: #c4c4c4;
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 8px;
    border-radius: 6px;
    background-color: #fff;
    position: absolute;
    top: 8px;
    left: 10px;
  }
`

const LotteryBottom = styled.div`
  width: 180px;
  height: 40px;
  border-radius: 15px;
  position: absolute;
  bottom: -35px;
  background-color: #c4c4c4;
  &:before {
    content: '';
    display: block;
    width: 160px;
    height: 24px;
    position: absolute;
    top: 8px;
    left: 10px;
    border-radius: 6px;
    background-color: #fff;
  }
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    border-radius: 5px;
    box-shadow: 0 0 0 6px #c4c4c4;
    position: absolute;
    top: 18px;
    left: 60px;
    background-color: #fff;
  }
`

const LotteryRight = styled.div`
  height: 50px;
  width: 10px;
  background-color: #c4c4c4;
  border-radius: 0 0 6px 0;
  position: absolute;
  top: -5px;
  right: -24px;
  &:before {
    content: '';
    display: block;
    width: 20px;
    height: 10px;
    background-color: #c4c4c4;
    position: absolute;
    bottom: 0;
    left: -20px;
  }
  &:after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #c4c4c4;
    position: absolute;
    top: -10px;
    left: -5px;
  }
`

const BackgroundLottery = () => {
  return(
    <Wrap>
      <Lottery>
        <LotteryTop />
        <h1>7</h1>
        <h1>7</h1>
        <h1>7</h1>
        <LotteryRight />
        <LotteryBottom />
      </Lottery>
    </Wrap>
  )
}

export default BackgroundLottery