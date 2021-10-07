import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { getMe, deleteMe } from '../../webapi/userApi'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import { UserFormWrapper, FormTitle } from '../../components/form'
import Avatar from '../../components/Avatar'
import { editIcon } from '../../components/icons'
import { UserTokenContext } from '../../contexts/tokenContexts'

const UserInfoWrapper = styled.div`
  position: relative;
  width: 90%;
  padding: 2rem;
  background: ${({ theme }) => theme.secondary_850};
  border-radius: 1rem;
`

const InfoTop = styled.div`
  ${flexJustifyAlign('flex-start', 'flex-start')};
`

const UserAvatarWrapper = styled.div`
  margin-right: 2rem;
`

const Content = styled.div`
  margin-bottom: 0.5rem;
`

const ContentTitle = styled.div`
  color: ${({ theme }) => theme.secondary_300};
`

const ContentText = styled.div`
  word-break: break-all;
`

const InfoBottom = styled.div`
  ${flexJustifyAlign()}
  margin-top: 1.5rem;
  gap: 3rem;
`

const InfoOption = styled(Link)`
  width: 8rem;
  height: 6rem;
  background: ${({ theme }) => theme.secondary_900};
  color: ${({ theme }) => theme.secondary_000};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 1rem;
  ${flexJustifyAlign()}
  flex-direction: column;
  gap: 0.5rem;
`

const DeleteUserBtn = styled.div`
  margin-top: 1rem;
  padding: 0.3rem 1rem;
  border-radius: 2.5rem;
  color: ${({ theme }) => theme.secondary_900};
  background: ${({ theme }) => theme.secondary_300};
`

const RemindWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.primary};
  height: 100%;
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

const UserPage = () => {
  const { setUserToken } = useContext(UserTokenContext)
  const theme = useTheme()
  const history = useHistory()
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [isDeleteRemindOpen, setIsDeleteRemindOpen] = useState(false)

  useEffect(() => {
    const getUserInformation = async () => {
      let user = {}
      try {
        const response = await getMe()
        const { data } = response
        if (!data.ok) throw new Error(data.message)
        user = data.user
      } catch (error) {
        console.log(error.message)
        return
      }
      setNickname(user.nickname)
      setEmail(user.email)
    }

    getUserInformation()
  }, [])

  const handleUserDelete = async () => {
    try {
      const response = await deleteMe()
      const { data } = response
      if (!data.ok) throw new Error(data.message)
    } catch (error) {
      console.log(error.message)
    }

    setUserToken('')
    return history.push('/')
  }

  const renderDeleteRemind = () => (
    <RemindWrapper>
      <h2>確認刪除使用者？</h2>
      <div>
        <RemindBtn onClick={handleUserDelete}>確認</RemindBtn>
        <RemindBtn onClick={() => setIsDeleteRemindOpen(false)}>取消</RemindBtn>
      </div>
    </RemindWrapper>
  )

  return (
    <UserFormWrapper>
      <FormTitle>個人資料</FormTitle>
      <UserInfoWrapper>
        <InfoTop>
          <UserAvatarWrapper>
            <Avatar size={'70px'} />
          </UserAvatarWrapper>
          <div>
            <Content>
              <ContentTitle>暱稱</ContentTitle>
              <ContentText>{nickname}</ContentText>
            </Content>
            <Content>
              <ContentTitle>信箱</ContentTitle>
              <ContentText>{email}</ContentText>
            </Content>
          </div>
        </InfoTop>
        <InfoBottom>
          <InfoOption to="/user/me/update">
            {editIcon('2x', theme.secondary_300)}
            <div>修改個人資料</div>
          </InfoOption>
          <InfoOption to="/user/me/update-password">
            {editIcon('2x', theme.secondary_300)}
            <div>修改密碼</div>
          </InfoOption>
        </InfoBottom>
        {isDeleteRemindOpen && renderDeleteRemind()}
      </UserInfoWrapper>
      <DeleteUserBtn onClick={() => setIsDeleteRemindOpen((prev) => !prev)}>
        刪除使用者
      </DeleteUserBtn>
    </UserFormWrapper>
  )
}

export default UserPage
