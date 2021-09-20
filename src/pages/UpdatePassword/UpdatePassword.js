import React from 'react'
import { Link } from 'react-router-dom'
import { Input, InputBox, InputSubmit } from '../../styles/Input'
import { Title, Description } from '../../styles/Content'

const UpdatePassword = () => {
  return (
    <>
      <Title>修改密碼</Title>
      <Input>
        <InputBox type='password' placeholder='原密碼' />
        <InputBox type='password' placeholder='新密碼' />
        <InputBox type='password' placeholder='新密碼再次輸入' />
        <InputSubmit type='submit' value='送出'/>
      </Input>
      <Description>
        <Link to='/user/me'>修改個人資料？  按此修改</Link>
      </Description>
    </>
  )
}

export default UpdatePassword