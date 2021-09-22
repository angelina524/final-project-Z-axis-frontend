import styled from '@emotion/styled'
import flexCenter from './flexCenter'

const InputWrapper = styled.div`
  ${flexCenter}
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