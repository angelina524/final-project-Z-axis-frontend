import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import flexJustifyAlign from '../styles/flexJustifyAlign'
import { useTheme } from '@emotion/react'
import optionList from '../constants/optionList'

const BackStageMenu = styled.div`
  ${flexJustifyAlign()}
  flex-direction: column;
`

const Profile = styled.div`
  ${flexJustifyAlign()}
  flex-direction: column;
`

const Avatar = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  margin: 1rem 0;
  border-radius: 50%;
  border: ${({ theme }) => theme.border};
`

const EditBtn = styled.div`
  font-size: 0.9rem;
  padding: 0.3rem 1rem;
  border-radius: 2.5rem;
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.secondary_300};
`

const OptionWrapper = styled.div`
  margin: 1.5rem 0;
  ${flexJustifyAlign()}
  flex-wrap: wrap;
  gap: 1.5em;
`

const OptionBtn = styled.div`
  width: 7rem;
  height: 6rem;
  border: ${({ theme }) => theme.border};
  border-radius: 1rem;
  ${flexJustifyAlign()}
  flex-direction: column;
  gap: 0.5rem;
`

const Option = ({ iconName, optionName }) => {
  const theme = useTheme()
  return (
    <OptionBtn>
      {iconName('2x', theme.secondary_300)}
      <div>{optionName}</div>
    </OptionBtn>
  )
}

Option.propTypes = {
  iconName: PropTypes.func,
  optionName: PropTypes.string
}

const BackstageMenuContent = () => {
  return (
    <BackStageMenu>
      <Profile>
        <Avatar />
        <EditBtn>修改個人資料</EditBtn>
      </Profile>
      <OptionWrapper>
        {optionList.map((option) => (
          <Option
            key={option.optionName}
            iconName={option.iconName}
            optionName={option.optionName}
          />
        ))}
      </OptionWrapper>
    </BackStageMenu>
  )
}

export default BackstageMenuContent
