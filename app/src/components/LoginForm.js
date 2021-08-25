
import PropTypes from 'prop-types'
import { useState } from 'react'

const useField = ({ type }) => {
  const [value, setValue] = useState('')

  const onChange = ev => {
    setValue(ev.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const LoginForm = ({
  handleSubmit
}) => {
  const username = useField({ type: 'text' })
  const password = useField({ type: 'password' })
  return (
    <form data-test-id='login-form' onSubmit={handleSubmit}>
      <div>
        <input
          {...username}
          name='Username'
          placeholder='Username'
        />
      </div>
      <div>
        <input
          {...password}
          name='Password'
          placeholder='Password'
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  )
}

LoginForm.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired
}

export default LoginForm
