import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from '@emotion/styled'

import SectionWrapper from './components/SectionWrapper'
import ButtonOrigin from '../../components/Button'
import EditIssueContext from '../../contexts/editIssueContext'
import LoadingContext from '../../contexts/loadingContext'
import BACKEND_BASE_URL from '../../constants/baseURL'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import { deleteIssue } from '../../webapi/issueApi'

const Buttons = styled.div`
  ${flexJustifyAlign()}
`

const Button = styled(ButtonOrigin)`
  align-self: flex-end;
  justify-self: center;
  background: ${({ theme }) => theme.secondary300};
  margin: 1rem;
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

const RemindWrapper = styled.div`
  position: fixed;
  z-index: 4;
  top: 13rem;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.primary};
  min-height: 30vh;
  border-radius: 1rem;
  color: ${({ theme }) => theme.secondary_900};
  ${flexJustifyAlign()};
  flex-direction: column;
`

const RemindBtn = styled.button`
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  margin: 5rem 1rem 0 1rem;
  cursor: pointer;
  font-size: 1rem;
`

const EditSection = () => {
  const history = useHistory()
  const { url } = useParams()
  const { editIssue, setEditIssue } = useContext(EditIssueContext)
  const setIsLoading = useContext(LoadingContext)
  const {
    title,
    description,
    date: { startDate, endDate }
  } = editIssue
  const [status, setStatus] = useState('')
  const [isDeleteRemindOpen, setIsDeleteRemindOpen] = useState(false)

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
    const now = new Date().toISOString().slice(0, 10).replace(/-/g, '/')
    console.log(now, startDate, endDate)
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

  const handleIssueDelete = async () => {
    try {
      const response = await deleteIssue(editIssue.issueId)
      const { data } = response
      if (!data.ok) throw new Error(data.message)
    } catch (error) {
      console.log(error.message)
      return
    }

    return history.push('/issues')
  }

  const renderDeleteRemind = () => (
    <RemindWrapper>
      <h2>確認刪除留言箱？</h2>
      <div>
        <RemindBtn onClick={handleIssueDelete}>確認</RemindBtn>
        <RemindBtn onClick={() => setIsDeleteRemindOpen(false)}>取消</RemindBtn>
      </div>
    </RemindWrapper>
  )

  return (
    <SectionWrapper isGreyBackground={true}>
      <EditWrapper>
        <EditTitle>{title}</EditTitle>
        <EditDate>
          <span>{status}</span>
          {startDate} - {endDate}
        </EditDate>
        <EditContent>{description}</EditContent>
        <Buttons>
          <Button onClick={goToFormPage}>編輯</Button>
          <Button onClick={() => setIsDeleteRemindOpen((prev) => !prev)}>
            刪除
          </Button>
        </Buttons>
        {isDeleteRemindOpen && renderDeleteRemind()}
      </EditWrapper>
    </SectionWrapper>
  )
}

export default EditSection
