import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

import SectionWrapper from './components/SectionWrapper'
import ButtonOrigin from '../../components/Button'

const Button = styled(ButtonOrigin)`
  align-self: flex-end;
  justify-self: center;
`

const EditWrapper = styled.form`
  padding: 2rem;
  display: grid;
  grid-template-rows: auto 2rem auto 3rem;
  grid-gap: 1rem;
  min-height: 50vh;
`

const EditTitle = styled.h3`
  overflow: hidden;
  white-space: pre-line;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.secondary_100};
`

const EditDate = styled.p`
  & span {
    margin-right: 2rem;
  }
  color: ${({ theme }) => theme.secondary_300};
`

const EditContent = styled.p`
  overflow: hidden;
  white-space: pre-line;
  text-overflow: ellipsis;
`

const EditSection = () => {
  const { secondary_300: secondary300 } = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <SectionWrapper isGreyBackground={true}>
      <EditWrapper onSubmit={(e) => handleSubmit(e)}>
        <EditTitle>
          你所不知道的 hooks s s s ss s s s s s
          ssssssssssssssssssssssssssssssssssssssssss s s s s ss s s sss
        </EditTitle>
        <EditDate>
          <span>進行中</span>2021/01/01 - 2021/01/05
        </EditDate>
        <EditContent>
          helle world hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
        </EditContent>
        <Button backgroundColor={secondary300}>編輯</Button>
      </EditWrapper>
    </SectionWrapper>
  )
}

export default EditSection
