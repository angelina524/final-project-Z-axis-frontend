import styled from '@emotion/styled'
import CenterAlignment from './CenterAlignment'

const InputWrapper = styled.div`
  ${CenterAlignment}
  flex-direction: column;
  gap: 1.8rem;
`

const InputText = styled.input`
  padding: 0.8rem;
  width: 300px;
  &::placeholder {
    color: #AAAAAA;
  }
  border: 1px #AAAAAA solid;
  border-radius: 3px;
`

export { InputWrapper, InputText}