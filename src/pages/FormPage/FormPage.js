import React, { useEffect, useState } from 'react'
import { plusIcon } from '../../styles/icon'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange } from 'react-date-range'
import { BackstageNavbar } from '../../components/BackstageNavbar'
import { Menu } from '../../components/Menu'
import BackstageMenuContent from '../../components/BackstageMenuContent'
import {
  AddFormWrapper,
  FormTitle,
  InputText,
  ErrorMessage,
  SubmitBtn
} from '../utils'

const FormPage = () => {
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
    setErrorMessage('')
  }, [title, description, date])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const startDate = new Date(date[0].startDate)
      .toLocaleDateString()
      .replaceAll('/', '-')
    const endDate = new Date(date[0].endDate)
      .toLocaleDateString()
      .replaceAll('/', '-')

    if (title === '' || startDate === '' || endDate === '') {
      return setErrorMessage('必填欄位：標題、起始日期、結束日期')
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

    // todo: 串 API
    return console.log(title, description, startDate, endDate)
  }

  return (
    <>
      <Menu
        userId={1}
        nickname="嘎嘎嗚拉拉"
        MenuContent={BackstageMenuContent}
      />
      <BackstageNavbar iconName={plusIcon} title="建立" />
      <AddFormWrapper onSubmit={handleFormSubmit}>
        <FormTitle>新增留言箱</FormTitle>
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
        <DateRange
          editableDateInputs={true}
          onChange={(e) => setDate([e.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          minDate={new Date()}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <SubmitBtn type="submit">送出</SubmitBtn>
      </AddFormWrapper>
    </>
  )
}

export default FormPage
