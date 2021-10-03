import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

import SectionWrapper from './components/SectionWrapper'
import ButtonOrigin from '../../components/Button'

const Button = styled(ButtonOrigin)`
  align-self: flex-end;
  justify-self: center;
`

const EditWrapper = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-rows: 1fr 2rem 3fr 3rem;
  grid-gap: 1rem;
  min-height: 50vh;
`

const EditTitle = styled.h3`
  white-space: pre-line;
  word-break: break-all;
  color: ${({ theme }) => theme.secondary_100};
`

const EditDate = styled.p`
  & span {
    margin-right: 2rem;
  }
  color: ${({ theme }) => theme.secondary_300};
`

const EditContent = styled.p`
  white-space: pre-line;
  word-break: break-all;
`

const EditSection = () => {
  const { secondary_300: secondary300 } = useTheme()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [beginDate, setBeginDate] = useState('')
  const [finishDate, setFinishDate] = useState('')
  const [status, setStatus] = useState('')

  // test deploy backend ： OK 爽啦
  useEffect(() => {
    ;(async () => {
      const res = await fetch(
        'http://api.ben6515.tw/issues/9184bcb396b0de5ca4c86a464d075d19'
      )
      const {
        issue: { title, description, beginTime, finishTime }
      } = await res.json()
      setTitle(title)
      setContent(description)
      setBeginDate(beginTime.slice(0, 10))
      setFinishDate(finishTime.slice(0, 10))
    })()
  }, [])

  useEffect(() => {
    const now = new Date().toISOString().slice(0, 10)
    const nowStatus = () => {
      if (now < beginDate) return '即將發佈'
      return now < finishDate ? '進行中' : '已截止'
    }
    setStatus(nowStatus())
  }, [beginDate, finishDate])

  return (
    <SectionWrapper isGreyBackground={true}>
      <EditWrapper>
        <EditTitle>{title}</EditTitle>
        <EditDate>
          <span>{status}</span>
          {beginDate} - {finishDate}
        </EditDate>
        <EditContent>{content}</EditContent>
        <Button backgroundColor={secondary300} as={Link} to="/form">
          編輯
        </Button>
      </EditWrapper>
    </SectionWrapper>
  )
}

export default EditSection
