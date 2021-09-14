import styled from 'styled-components'

const StyledButton = styled.button`
  background: white;
  cursor: pointer;
  font-size: 1em;
  margin: 0.5em;
  padding: 4px 12px;
  background-color: green;
  border-radius: 5px;
  transition: all .3s ease;

  &:hover {
    background: #09f;
  }
`

export default StyledButton
