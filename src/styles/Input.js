import styled from '@emotion/styled'
import flexJustifyAlign from './flexJustifyAlign'

const InputWrapper = styled.div`
  ${flexJustifyAlign()}
  flex-direction: column;
  gap: 1.8rem;
`

const InputText = styled.input`
  padding: 0.8rem;
  width: 300px;
  &::placeholder {
    color: ${({ theme }) => theme.secondary_300};
  }
  border: ${({ theme }) => theme.border};
  border-radius: 3px;
`

export { InputWrapper, InputText }
