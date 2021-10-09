import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import EditIssueContext from '../../contexts/editIssueContext'
import LoadingContext from '../../contexts/loadingContext'
import { editIcon, plusIcon } from '../../components/icons'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange } from 'react-date-range'
import { BackstageNavbar } from '../../components/Navbar/BackstageNavbar'
import Menu from '../../components/Menu/Menu'
import BackstageMenuContent from '../../components/Menu/BackstageMenuContent'
import {
  AddFormWrapper,
  FormTitle,
  InputText,
  RemindText,
  ErrorMessage,
  SubmitBtn
} from '../../components/form'
import { createIssue, updateIssue } from '../../webapi/issueApi'
import { UserTokenContext } from '../../contexts/tokenContexts'
import defaultEditIssue from '../../constants/defaultEditIssue'

const FormPage = () => {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ])
  const [errorMessage, setErrorMessage] = useState('')
  const setIsLoading = useContext(LoadingContext)
  const { userToken } = useContext(UserTokenContext)
  const { editIssue, setEditIssue } = useContext(EditIssueContext)
  const { isEdit } = editIssue

  useEffect(() => {
    if (!userToken) history.push('/')
  }, [userToken])

  useEffect(() => {
    if (!isEdit) return
    const { title, description, date } = editIssue
    const { startDate, endDate } = date
    setTitle(title)
    setDescription(description)
    setDate([
      {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        key: 'selection'
      }
    ])

    return () => {
      setEditIssue(defaultEditIssue)
    }
  }, [editIssue, isEdit])

  useEffect(() => {
    setErrorMessage('')
  }, [title, description, date])

  const addDays = (date, days) => {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (title === '') {
      return setErrorMessage('必填欄位：標題')
    }
    const startDate = moment(new Date(date[0].startDate)).format('YYYY-MM-DD')

    let endDate = null
    if (!date[0].endDate || date[0].endDate > addDays(startDate, 4)) {
      endDate = moment(addDays(startDate, 4)).format('YYYY-MM-DD')
    } else {
      endDate = moment(date[0].endDate).format('YYYY-MM-DD')
    }

    try {
      setIsLoading(true)
      const issueFormData = [
        title,
        description,
        moment(startDate).format('YYYY-MM-DD'),
        moment(endDate).format('YYYY-MM-DD')
      ]
      const response = isEdit
        ? await updateIssue(editIssue.issueId, ...issueFormData)
        : await createIssue(...issueFormData)
      const { data } = response
      if (!data.ok) throw new Error(data.massage)
      setIsLoading(false)
      setTitle('')
      setDescription('')
      setDate([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ])
      if (isEdit) setEditIssue((prev) => ({ ...prev, isEdit: false }))
      history.push(`/backstage/issues/${isEdit ? editIssue.url : data.url}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Menu MenuContent={BackstageMenuContent} />
      <BackstageNavbar
        iconName={isEdit ? editIcon : plusIcon}
        title={isEdit ? '編輯' : '建立'}
      />
      <AddFormWrapper onSubmit={handleFormSubmit}>
        <FormTitle>{isEdit ? '編輯' : '新增'}留言箱</FormTitle>
        <InputText
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          placeholder="標題"
        />
        <InputText
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          placeholder="描述"
        />
        <RemindText>超過 5 天或未設置則以 5 天計算</RemindText>
        <DateRange
          editableDateInputs={true}
          onChange={(e) => setDate([e.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          minDate={new Date()}
          showDateDisplay={false}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <SubmitBtn type="submit">{isEdit ? '更新' : '送出'}</SubmitBtn>
      </AddFormWrapper>
    </>
  )
}

export default FormPage
