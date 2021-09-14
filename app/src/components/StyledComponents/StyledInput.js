import styled from 'styled-components'

const StyledInput = styled.input`
  width: 200px;
  height: 30px;
  margin-bottom: 20px;
  background-color: transparent;
  border-radius: 5px;
  border-color: #000;
  color: green;
  outline-color: green;
  outline-width: 10px;

  &::placeholder {
    color: green;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #09f inset !important;
    -webkit-text-fill-color: green !important;
}

`

export default StyledInput
