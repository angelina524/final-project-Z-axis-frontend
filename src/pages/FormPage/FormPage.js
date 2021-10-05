import React, { useEffect, useState, useContext } from 'react'
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
import { createIssue } from '../../webapi/issueApi'
import { getMe } from '../../webapi/userApi'
import { UserTokenContext } from '../../contexts/tokenContexts'

const FormPage = () => {
  const { userToken } = useContext(UserTokenContext)
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
  const [userId, setUserId] = useState(null)
  const [userNickname, setUserNickname] = useState(null)

  useEffect(() => {
    const doAsyncEffects = async () => {
      if (!userToken) return
      const userData = await getMe(userToken)
      setUserId(userData.id)
      setUserNickname(userData.nickname)
    }

    doAsyncEffects()
  }, [])

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
    const startDate = new Date(date[0].startDate)
      .toLocaleDateString()
      .replaceAll('/', '-')

    let endDate = null
    if (!date[0].endDate || date[0].endDate > addDays(startDate, 4)) {
      endDate = new Date(addDays(startDate, 4))
        .toLocaleDateString()
        .replaceAll('/', '-')
    } else {
      endDate = new Date(date[0].endDate)
        .toLocaleDateString()
        .replaceAll('/', '-')
    }

    await createIssue(userToken, title, description, startDate, endDate)

    setTitle('')
    setDescription('')
    setDate([
      {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
      }
    ])
  }

  return (
    <>
      <Menu
        userId={userId}
        nickname={userNickname}
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
        <SubmitBtn type="submit">送出</SubmitBtn>
      </AddFormWrapper>
    </>
  )
}

export default FormPage
