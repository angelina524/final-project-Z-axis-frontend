import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from '@emotion/styled'

import SectionWrapper from './components/SectionWrapper'
import ButtonOrigin from '../../components/Button'
import EditIssueContext from '../../contexts/editIssueContext'
import LoadingContext from '../../contexts/loadingContext'
import BACKEND_BASE_URL from '../../constants/baseURL'

const Button = styled(ButtonOrigin)`
  align-self: flex-end;
  justify-self: center;
  background: ${({ theme }) => theme.secondary300};
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
  const { url } = useParams()
  const { editIssue, setEditIssue } = useContext(EditIssueContext)
  const setIsLoading = useContext(LoadingContext)
  const {
    title,
    description,
    date: { startDate, endDate }
  } = editIssue
  const [status, setStatus] = useState('')
  const history = useHistory()

  useEffect(() => {
    try {
      ;(async () => {
        setIsLoading(true)
        const res = await fetch(`${BACKEND_BASE_URL}/issues/${url}`)
        if (!res.ok) return
        const {
          issue: { title, description, beginDate, finishDate, id }
        } = await res.json()
        setEditIssue({
          url,
          issueId: id,
          title,
          description,
          date: {
            startDate: beginDate.slice(0, 10).replace(/-/g, '/'),
            endDate: finishDate.slice(0, 10).replace(/-/g, '/'),
            key: 'selection'
          }
        })
        setIsLoading(false)
      })()
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }, [url])

  useEffect(() => {
    const now = new Date().toISOString().slice(0, 10)
    const nowStatus = () => {
      if (now < startDate) return '即將發佈'
      return now < endDate ? '進行中' : '已截止'
    }
    setStatus(nowStatus())
  }, [startDate, endDate])

  const goToFormPage = () => {
    setEditIssue((prev) => ({ ...prev, isEdit: true }))
    history.push('/form')
  }

  return (
    <SectionWrapper isGreyBackground={true}>
      <EditWrapper>
        <EditTitle>{title}</EditTitle>
        <EditDate>
          <span>{status}</span>
          {startDate} - {endDate}
        </EditDate>
        <EditContent>{description}</EditContent>
        <Button onClick={goToFormPage}>編輯</Button>
      </EditWrapper>
    </SectionWrapper>
  )
}

export default EditSection
