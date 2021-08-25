import { Link } from 'react-router-dom'

const LinkComponent = ({ route, name }) => {
  return (
    <Link className='spacing' to={route}>{name}</Link>
  )
}

export default LinkComponent
