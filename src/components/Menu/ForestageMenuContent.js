import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'

import flexJustifyAlign from '../../styles/flexJustifyAlign'
import { issueIcon } from '../icons'

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

const Button = styled(Link)`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary_900};
  ${flexJustifyAlign()}
  text-align: center;
  font-size: 1rem;
  width: 55%;
  height: 2.5rem;
  padding: 0 1.5rem;
  border-radius: 1.125rem;
  border: none;
  margin: 0 auto;
  margin-top: 1.5rem;
`

const ForestageMenuContent = ({
  userId,
  issueUserId,
  title,
  description,
  beginDate,
  finishDate
}) => {
  const { url } = useParams()
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
      {userId === issueUserId && (
        <Button to={`../backstage/issues/${url}`}>進入此後台</Button>
      )}
    </>
  )
}

ForestageMenuContent.propTypes = {
  userId: PropTypes.number,
  issueUserId: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  beginDate: PropTypes.string,
  finishDate: PropTypes.string
}

export default ForestageMenuContent
