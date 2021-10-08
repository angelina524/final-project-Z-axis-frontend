import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import flexJustifyAlign from '../../styles/flexJustifyAlign'

const Navbar = styled.div`
  width: 100%;
  height: 4rem;
  z-index: 4;
  background: ${({ theme }) => theme.secondary_900};
  ${flexJustifyAlign('space-between')}

  padding-right: 10%;

  ${(props) =>
    props.isBackstage
      ? `
    padding-left: 1rem;
  `
      : `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      padding-left: 4rem;
  `}
`

const FilterWrapper = styled.div`
  ${flexJustifyAlign()}
  gap: 1rem;
`

const FilterOption = styled.div`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0.5rem;

  border-bottom: ${({ active, theme }) =>
    active ? `1px solid ${theme.primary}` : ''};
`

const TotalComments = styled.div`
  color: ${({ theme }) => theme.secondary_300};
  font-size: 0.9rem;
`

export const ForestageIssueNavbar = ({
  isBackstage,
  totalComments,
  filter,
  setFilter
}) => {
  return (
    <Navbar isBackstage={isBackstage}>
      <FilterWrapper>
        <FilterOption active={!filter} onClick={() => setFilter(false)}>
          所有
        </FilterOption>
        <FilterOption active={filter} onClick={() => setFilter(true)}>
          熱門
        </FilterOption>
      </FilterWrapper>
      <TotalComments>留言數 {totalComments} 筆</TotalComments>
    </Navbar>
  )
}

ForestageIssueNavbar.propTypes = {
  isBackstage: PropTypes.bool,
  filter: PropTypes.bool,
  setFilter: PropTypes.func,
  totalComments: PropTypes.number
}
