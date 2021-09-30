import React, { memo } from 'react'
import styled from '@emotion/styled'
import Animal from 'react-animals'

const AvatarWrapper = styled.div`
  position: absolute;
  left: 0;
  top: -20px;
`

const Avatar = () => {
  return (
    <AvatarWrapper>
      <Animal size="35px" />
    </AvatarWrapper>
  )
}

export default memo(Avatar)
