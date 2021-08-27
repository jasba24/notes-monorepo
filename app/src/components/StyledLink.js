import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #09f;
  padding: 5px;

  &:hover {
    border-bottom: 1px solid #09f;
  }
`

export default StyledLink
