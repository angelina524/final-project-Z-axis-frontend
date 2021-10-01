import React from 'react'
import styled from '@emotion/styled'
import flexJustifyAlign from '../styles/flexJustifyAlign'

const Navbar = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background: ${({ theme }) => theme.secondary_900};
  ${flexJustifyAlign('space-between')}
  padding-right: 10%;
`

const FilterWrapper = styled.div`
  ${flexJustifyAlign()}
  gap: 1.5rem;
`

const FilterOption = styled.div`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.primary};
`

const TotalComments = styled.div`
  color: ${({ theme }) => theme.secondary_300};
  font-size: 0.9rem;
`

// todo: 加漢堡
// todo: 篩選功能
export const ForestageIssueNavbar = () => {
  return (
    <Navbar>
      <FilterWrapper>
        <FilterOption>所有</FilterOption>
        <FilterOption>熱門</FilterOption>
        <FilterOption>已讀</FilterOption>
      </FilterWrapper>
      <TotalComments>留言數 20 筆</TotalComments>
    </Navbar>
  )
}
