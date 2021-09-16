import { Wrap } from '../utils'
import BackgroundCircle from './BackgroundCircle'
import BackgroundCircleDashed from './BackgroundCircleDashed'
import BackgroundRectangle from './BackgroundRectangle'
import CircleNumber from './CircleNumber'
import Curve from './Curve'

import BackgroundIssue from './components/BackgroundIssue'
import BackgroundTest from './components/BackgroundTest'
import BackgroundLottery from './components/BackgroundLottery'

import styled from '@emotion/styled'
const Big = styled.div`
  display: inline-block;
  transform: scale(1.5) translate(100%, -50%);
`

const HomePage = () => {
  return (
    <Wrap>
      <Curve />
      <h1>homepage</h1>
      <p>z-axis</p>
      <BackgroundCircle />
      <BackgroundCircleDashed />
      <CircleNumber>.01</CircleNumber>
      <CircleNumber>.02</CircleNumber>
      <CircleNumber>.03</CircleNumber>
      <CircleNumber>.04</CircleNumber>
      <BackgroundRectangle />

      <BackgroundIssue />
      <Big><BackgroundIssue /></Big>
      <BackgroundTest />
      <Big><BackgroundTest /></Big>
      <BackgroundLottery />
      <Big><BackgroundLottery /></Big>

    </Wrap>
  )
}

export default HomePage