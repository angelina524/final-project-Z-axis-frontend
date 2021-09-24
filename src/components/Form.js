import React, { useState } from 'react'
import styled from '@emotion/styled'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange } from 'react-date-range'
import { InputWrapper, InputText } from './../styles/Input'
import SubmitBtn from './../styles/Button'
import flexJustifyAlign from './../styles/flexJustifyAlign'

const FormWrapper = styled.div`
  border-radius: 1rem;
  ${flexJustifyAlign()}
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: ${({ theme }) => theme.border};
  padding: 2rem 0.5rem;
`

const FormTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`

const ErrorMessage = styled.div``

const Form = () => {
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

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const startDate = new Date(date[0].startDate)
      .toLocaleDateString()
      .replaceAll('/', '-')
    const endDate = new Date(date[0].endDate)
      .toLocaleDateString()
      .replaceAll('/', '-')

    if (title === '' || startDate === '' || endDate === '') {
      return setErrorMessage('標題、起始日期、結束日期為必填')
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

    return console.log(title, description, startDate, endDate)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <FormWrapper>
        <FormTitle>新增留言箱</FormTitle>
        <InputWrapper>
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
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
          />
        </InputWrapper>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <SubmitBtn type="submit">送出</SubmitBtn>
      </FormWrapper>
    </form>
  )
}

export default Form
