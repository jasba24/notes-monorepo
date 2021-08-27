import styled from 'styled-components'

const Button = styled.button`
  background: white;
  cursor: pointer;
  font-size: 1em;
  margin: 0.5em;
  padding: 4px 12px;
  border: 1px solid #09f;
  border-radius: 5px;
  transition: all .3s ease;

  &:hover {
    background: #09f;
  }
`

export default Button
