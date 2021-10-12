import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import flexJustifyAlign from '../styles/flexJustifyAlign'

export const INPUT_HEIGHT = '2.875rem'
const USER_FORM_GAP = '1.75rem'
export const SUBMIT_BUTTON_MARGIN = '0.875rem'

export const UserFormWrapper = styled.form`
  position: relative;
  margin: ${({ isNow }) => (isNow ? '5rem 0 8rem' : '11.5rem 0 2rem')};
  ${flexJustifyAlign()}
  flex-direction: column;
  gap: ${USER_FORM_GAP};
`

export const AddFormWrapper = styled.form`
  position: relative;
  height: calc(100vh - 4rem);
  top: 4rem;
  ${flexJustifyAlign()}
  flex-direction: column;
  gap: 1.5rem;
`

export const FormTitle = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 1.75rem;
`

export const InputText = styled.input`
  padding: 0 1rem;
  width: 300px;
  &::placeholder {
    color: ${({ theme }) => theme.secondary_300};
  }
  border: ${({ theme }) => theme.border};
  border-radius: 3px;
  font-size: 0.875rem;
  height: ${INPUT_HEIGHT};
`

export const RemindText = styled.div`
  color: ${({ theme }) => theme.secondary_300};
  max-width: 300px;
`

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: calc(calc(${USER_FORM_GAP} + ${SUBMIT_BUTTON_MARGIN}) / 2);
  transform: translateY(-50%);
  color: ${({ theme }) => theme.warning};
`

export const SubmitBtn = styled.button`
  display: block;
  width: 300px;
  border: ${({ theme }) => theme.border};
  border-radius: 3px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary_900};
  cursor: pointer;
  font-size: 1rem;
  height: ${INPUT_HEIGHT};
  margin: ${SUBMIT_BUTTON_MARGIN} 0;
`

export const PromptLink = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
`
