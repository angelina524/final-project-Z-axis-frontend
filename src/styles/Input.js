import styled from '@emotion/styled'

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`

const InputBox = styled.input`
  padding: 0.8rem;
  width: 300px;
  &::placeholder {
    color: #AAAAAA;
  }
  border: 1px #AAAAAA solid;
  border-radius: 3px;
`

const InputSubmit = styled.input`
  padding:0.8rem;
  width: 300px;
  border: 1px #AAAAAA solid;
  border-radius: 3px;
  background: #4167B2;
  color: #FFFFFF;
`

export { Input, InputBox, InputSubmit }