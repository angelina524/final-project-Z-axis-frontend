import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import Wrapper from '../../components/Wrapper'
import flexJustifyAlign from '../../styles/flexJustifyAlign'
import Button, { BUTTON_HEIGHT } from '../../components/Button'

// 設置變數方便偽元素定位
export const ACTIVITIES_CONTAINER_PADDING_LEFT = '1.75rem'
const PSEUDO_ELEMENT_WIDTH = '12px'
// issue title 跟前面圓點的水平差距
const PSEUDO_ELEMENT_AND_TITLE_GAP = '3px'

export const ActivityWrapper = styled(Wrapper)`
  width: 95%;
  top: 4rem;
  padding: 0 1rem 4rem;

  & > div + div {
    margin-top: 4rem;
  }
`

export const ActivityType = styled.header`
  ${flexJustifyAlign('', 'center')};
  gap: 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const ActivitiesContainer = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.secondary_300} 50%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: left;
  background-size: 1px 20px;
  background-repeat: repeat-y;

  margin-left: 1.25rem;
  padding-left: ${ACTIVITIES_CONTAINER_PADDING_LEFT};
  padding-bottom: 1.25rem;

  & > * {
    position: relative;

    &::before {
      content: '';
      width: ${PSEUDO_ELEMENT_WIDTH};
      height: ${PSEUDO_ELEMENT_WIDTH};
      background: ${({ color }) => color};
      border-radius: 50%;
      position: absolute;
      left: calc(
        calc(-${PSEUDO_ELEMENT_WIDTH} / 2) -
          ${ACTIVITIES_CONTAINER_PADDING_LEFT}
      );
      top: ${PSEUDO_ELEMENT_AND_TITLE_GAP};
    }
  }

  & > button {
    top: ${BUTTON_HEIGHT};
  }
`

export const ActivityContent = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.secondary_000};
  font-size: 0.75rem;
  position: relative;
  top: -${PSEUDO_ELEMENT_AND_TITLE_GAP};

  & + & {
    margin-top: 2.5rem;
  }

  & > div + div {
    margin-top: 0.5rem;
  }
`

export const ActivityHeader = styled.div`
  ${flexJustifyAlign('space-between')}
  color: ${({ theme }) => theme.secondary_300};
`

export const ActivityInfo = styled.div`
  ${flexJustifyAlign()}
  gap: 1rem;
`

export const ActivityTitle = styled.div`
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ActivityDescription = styled.div`
  font-size: 0.875rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const PositionedButton = styled(Button)`
  &::before {
    top: calc(calc(${BUTTON_HEIGHT} - ${PSEUDO_ELEMENT_WIDTH}) / 2);
  }
`

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  color: ${({ theme }) => theme.secondary_900};
`
