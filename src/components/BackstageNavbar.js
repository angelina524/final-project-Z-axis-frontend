import React, { useState } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import flexJustifyAlign from './../styles/flexJustifyAlign'

const Navbar = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background: ${({ theme }) => theme.secondary_900};
  ${flexJustifyAlign('flex-start')}

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

// todo: 加漢堡
export const BackstageNavbar = ({ iconName, title }) => {
  const theme = useTheme()
  return (
    <Navbar>
      {iconName('1x', theme.secondary_200)}
      <span>{title}</span>
    </Navbar>
  )
}

export const BackstageSearchNavbar = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchSubmit = () => {
    if (searchValue === '') return
    // todo: 串 API
    console.log(searchValue)
    setSearchValue('')
  }

  return (
    <Navbar>
      <SearchBarWrapper>
        <SearchInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="輸入標題"
        ></SearchInput>
        <SearchBtn onClick={handleSearchSubmit}>查詢</SearchBtn>
      </SearchBarWrapper>
    </Navbar>
  )
}

BackstageNavbar.propTypes = {
  iconName: PropTypes.function,
  title: PropTypes.string
}
