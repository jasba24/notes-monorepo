import { Link } from 'react-router-dom'

const LinkComponent = ({ route, name }) => {
  const inlineStyle = {
    padding: 5
  }
  return (
    <Link style={inlineStyle} to={route}>{name}</Link>
  )
}

export default LinkComponent
