import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: green;
  padding: 5px;

  &:hover {
    border-bottom: 1px solid green;
  }
`

export default StyledLink
