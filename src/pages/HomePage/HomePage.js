import React from 'react'
import { Wrap } from '../utils'
import BackgroundCircle from './BackgroundCircle'
import BackgroundCircleDashed from './BackgroundCircleDashed'
import BackgroundRectangle from './BackgroundRectangle'
import CircleNumber from './CircleNumber'
import Curve from './Curve'

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
    </Wrap>
  )
}

export default HomePage
