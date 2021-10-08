import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'

import { plusIcon } from '../../components/icons'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import { BackstageNavbar } from '../../components/Navbar/BackstageNavbar'
import Menu from '../../components/Menu/Menu'
import BackstageMenuContent from '../../components/Menu/BackstageMenuContent'
import cardList from '../../constants/cardList'
import { UserTokenContext } from '../../contexts/tokenContexts'

const Wrapper = styled.div`
  top: 4rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 1rem;
  ${flexJustifyAlign()}
  flex-direction: column;
`

const CardsWrapper = styled.div`
  margin: 0.9rem;
  width: 90%;
  ${flexJustifyAlign()}
  flex-direction: column;
  gap: 1.5rem;
`

const Card = styled(Link)`
  width: 100%;
  padding: 1.8rem 1rem;
  ${flexJustifyAlign()}
  color: ${({ theme }) => theme.secondary_000};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: ${({ theme }) => theme.border};
  border-radius: 1rem;
  cursor: pointer;

  svg {
    margin: 0 0.5rem;
  }
`

const CardContent = styled.div`
  text-align: center;
  width: 70%;
  margin: 0 0.8rem;
`

const CardTitle = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
`

const CardText = styled.div`
  font-size: 0.9rem;
`

const CardContainer = ({ path, iconName, cardTitle, cardText }) => {
  const theme = useTheme()
  return (
    <Card to={path}>
      {iconName('3x', theme.primary)}
      <CardContent>
        <CardTitle>{cardTitle}</CardTitle>
        <CardText>{cardText}</CardText>
      </CardContent>
    </Card>
  )
}

CardContainer.propTypes = {
  path: PropTypes.string,
  iconName: PropTypes.func,
  cardTitle: PropTypes.string,
  cardText: PropTypes.string
}

const AddPage = () => {
  const { userToken } = useContext(UserTokenContext)
  const history = useHistory()

  const RedirectHome = () => {
    history.push('/')
  }

  useEffect(() => {
    if (!userToken) RedirectHome()
  }, [userToken])

  return (
    <Wrapper>
      <Menu MenuContent={BackstageMenuContent} />
      <BackstageNavbar iconName={plusIcon} title="建立" />
      <CardsWrapper>
        {cardList.map((card) => (
          <CardContainer
            key={card.cardTitle}
            path={card.path}
            iconName={card.iconName}
            cardTitle={card.cardTitle}
            cardText={card.cardText}
          />
        ))}
      </CardsWrapper>
    </Wrapper>
  )
}

export default AddPage
