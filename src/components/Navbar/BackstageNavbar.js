import React, { useEffect, useState } from 'react'
import { useLocation, Link, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import ButtonOrigin from '../../components/Button'

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
  padding-left: 4rem;

  svg {
    margin: 0 10px;
  }
`

const SearchBarWrapper = styled.div`
  position: absolute;
  right: 10%;
  width: 60%;
  ${flexJustifyAlign('space-between')}
  border: ${({ theme }) => theme.border};
  padding: 0.4rem 1.5rem;
  border-radius: 2.5rem;
`

const SearchInput = styled.input`
  border: none;
  font-size: 0.7rem;

  &:focus {
    outline: none;
  }

  &:placeholder {
    font-size: 0.7rem;
  }
`

const SearchBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

const Button = styled(ButtonOrigin)`
  margin-right: 1rem;
  background: ${({ theme }) => theme.primary};
`

export const BackstageNavbar = ({ iconName, title }) => {
  const theme = useTheme()
  const { url } = useParams()
  const location = useLocation()
  return (
    <Navbar>
      <div>
        {iconName('1x', theme.secondary_200)}
        <span>{title}</span>
      </div>
      {location.pathname.indexOf('/backstage/issues') === 0 && (
        <Button as={Link} to={`/issues/${url}`}>
          進入此前台
        </Button>
      )}
    </Navbar>
  )
}

BackstageNavbar.propTypes = {
  iconName: PropTypes.func,
  title: PropTypes.string
}

export const BackstageSearchNavbar = ({ issues, setFilteredIssues }) => {
  const [searchValue, setSearchValue] = useState('')
  const [isOnComposition, setIsOnComposition] = useState(false)

  const handleSearchSubmit = () => {
    if (searchValue === '') return
    // todo: 串 API
    console.log(searchValue)
    setSearchValue('')
  }

  useEffect(() => {
    if (isOnComposition) return
    setFilteredIssues(
      issues.filter(({ issue }) => issue.title.includes(searchValue))
    )
  }, [searchValue, isOnComposition])

  return (
    <Navbar>
      <SearchBarWrapper>
        <SearchInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="輸入標題"
          onCompositionStart={() => setIsOnComposition(true)}
          onCompositionEnd={() => setIsOnComposition(false)}
        ></SearchInput>
        <SearchBtn onClick={handleSearchSubmit}>查詢</SearchBtn>
      </SearchBarWrapper>
    </Navbar>
  )
}

BackstageSearchNavbar.propTypes = {
  issues: PropTypes.array,
  setFilteredIssues: PropTypes.func
}
