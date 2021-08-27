import StyledLink from './StyledLink'

const LinkComponent = ({ route, name }) => {
  return (
    <StyledLink to={route}>{name}</StyledLink>
  )
}

export default LinkComponent
