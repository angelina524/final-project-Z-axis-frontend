import React from 'react'
import styled from '@emotion/styled'

import BackgroundCircleDashed from './components/BackgroundCircleDashed'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import Section from './components/Section'
import { device } from '../../styles/media'

const SecondBackgroundCircleDashed = styled(BackgroundCircleDashed)`
  transform: scale(1.6);
  left: -100px;
  top: 25vh;
`

const TextWrapper = styled.div`
  ${flexJustifyAlign('center', 'flex-start')}
  flex-direction: column;
  width: 100%;
  height: 60vh;
  margin: 0 2rem;
  p {
    line-height: 2;
    letter-spacing: 1px;
    font-size: 1.125rem;
  }
  @media ${device.desktop} {
    max-width: 1400px;
    position: absolute;
    top: -60vh;
    left: 40vh;
  }
`

const TextSection = () => {
  return (
    <Section>
      <SecondBackgroundCircleDashed />
      <TextWrapper>
        <p>提供 4 項即時多人互動功能，</p>
        <p>打造與觀眾更加自由的線上互動空間。</p>
      </TextWrapper>
    </Section>
  )
}

export default TextSection
