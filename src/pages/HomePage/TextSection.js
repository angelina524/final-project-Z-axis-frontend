import React from 'react'
import styled from '@emotion/styled'

import BackgroundCircleDashed from './components/BackgroundCircleDashed'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import Section from './components/Section'
import WidthWrapper from '../../components/WidthWrapper'

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
  }
`

const TextSection = () => {
  return (
    <Section>
      <WidthWrapper>
        <SecondBackgroundCircleDashed />
        <TextWrapper>
          <p>提供 3 項即時多人互動功能，</p>
          <p>打造與觀眾更加自由的線上互動空間。</p>
        </TextWrapper>
      </WidthWrapper>
    </Section>
  )
}

export default TextSection
