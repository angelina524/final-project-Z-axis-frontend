import React, { useState } from 'react'
import styled from '@emotion/styled'
import { plusIcon } from '../../styles/icon'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange } from 'react-date-range'
import { InputWrapper, InputText } from '../../styles/Input'
import SubmitBtn from '../../styles/Button'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import { BackstageNavbar } from '../../components/BackstageNavbar'

const FormWrapper = styled.div`
  height: 100vh;
  top: 4rem;
  margin: 1rem 0;
  border-radius: 1rem;
  ${flexJustifyAlign()}
  flex-direction: column;
`

const FormTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.warning};
`

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
  const [errorMessage, setErrorMessage] = useState(null)

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    setErrorMessage(null)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
    setErrorMessage(null)
  }

  const handleDateChange = (e) => {
    setDate([e.selection])
    setErrorMessage(null)
  }

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
      <BackstageNavbar iconName={plusIcon} title="建立" />
      <form onSubmit={handleFormSubmit}>
        <FormWrapper>
          <FormTitle>新增留言箱</FormTitle>
          <InputWrapper>
            <InputText
              value={title}
              onChange={handleTitleChange}
              name="title"
              placeholder="標題"
            />
            <InputText
              value={description}
              onChange={handleDescriptionChange}
              name="description"
              placeholder="描述"
            />
            <DateRange
              editableDateInputs={true}
              onChange={handleDateChange}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={new Date()}
            />
          </InputWrapper>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <SubmitBtn type="submit">送出</SubmitBtn>
        </FormWrapper>
      </form>
    </>
  )
}

export default FormPage
