import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import flexJustifyAlign from '../styles/flexJustifyAlign'
import { issueIcon } from '../styles/icon'
import { useTheme } from '@emotion/react'

const ActivityWrapper = styled.div`
  ${flexJustifyAlign('', 'flex-start')}
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`

const ActivityType = styled.div`
  ${flexJustifyAlign('flex-start')}
  gap: 1rem;
`

const ActivityDuration = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.secondary_300};
`

const ActivityDescription = styled.p`
  font-size: 0.9rem;
  line-height: 2rem;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary_900};
  font-size: 1rem;
  height: 2.5rem;
  padding: 0 1.5rem;
  border-radius: 1.125rem;
  border: none;
  margin: 0 auto;
  display: block;
  margin-top: 1.5rem;
`

const ForestageContent = ({ title, description, beginDate, finishDate }) => {
  const theme = useTheme()
  return (
    <>
      <ActivityWrapper>
        <ActivityType>
          {issueIcon('2x', theme.secondary_300)}
          <p>留言箱</p>
        </ActivityType>
        <p>{title}</p>
        <ActivityDuration>
          {beginDate} - {finishDate}
        </ActivityDuration>
        <ActivityDescription>{description}</ActivityDescription>
      </ActivityWrapper>
      {/* 判斷 userId 是否跟該 issue 的 userId 吻合，再顯示"進入此後台" */}
      <Button>進入此後台</Button>
    </>
  )
}

ForestageContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  beginDate: PropTypes.string,
  finishDate: PropTypes.string
}

export default ForestageContent
