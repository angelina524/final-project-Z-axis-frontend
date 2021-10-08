import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import EditIssueContext from '../../contexts/editIssueContext'
import LoadingContext from '../../contexts/loadingContext'
import { plusIcon } from '../../components/icons'
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

const FormPage = () => {
  const { editIssue, setEditIssue } = useContext(EditIssueContext)
  const setIsLoading = useContext(LoadingContext)
  const { isEdit } = editIssue
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

  useEffect(() => {
    if (isEdit) {
      const {
        title,
        description,
        date: { startDate, endDate }
      } = editIssue
      setTitle(title)
      setDescription(description)
      setDate([
        {
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          key: 'selection'
        }
      ])
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

    if (isEdit) {
      setEditIssue({
        isEdit: false,
        title,
        description,
        date: {
          startDate: moment(startDate).format('YYYY-MM-DD'),
          endDate: moment(endDate).format('YYYY-MM-DD'),
          key: 'selection'
        }
      })
      try {
        setIsLoading(true)
        await updateIssue(
          editIssue.issueId,
          title,
          description,
          moment(startDate).format('YYYY-MM-DD'),
          moment(endDate).format('YYYY-MM-DD')
        )
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
      }
    } else {
      try {
        setIsLoading(true)
        await createIssue(
          title,
          description,
          moment(startDate).format('YYYY-MM-DD'),
          moment(endDate).format('YYYY-MM-DD')
        )
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
      }
    }
    setTitle('')
    setDescription('')
    setDate([
      {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
      }
    ])
    if (isEdit) {
      setEditIssue((prev) => ({ ...prev, isEdit: false }))
      history.push('/backstage/issues/' + editIssue.url)
    }
  }

  return (
    <>
      <Menu MenuContent={BackstageMenuContent} />
      <BackstageNavbar iconName={plusIcon} title="建立" />
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
