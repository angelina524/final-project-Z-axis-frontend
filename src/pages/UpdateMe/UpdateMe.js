import React from 'react'
import { Link } from 'react-router-dom'
import { Input, InputBox, InputSubmit } from '../../styles/Input'
import { Title, Description } from '../../styles/Content'

const UpdateMe = () => {
  return (
    <>
      <Title>修改個人資料</Title>
      <Input>
        <InputBox type='text' placeholder='暱稱' />
        <InputBox type='email' placeholder='信箱' />
        <InputSubmit type='submit' value='送出'/>
      </Input>
      <Description>
        <Link to='/user/me/update-password'>修改密碼？  按此修改</Link>
      </Description>
    </>
  )
}

export default UpdateMe