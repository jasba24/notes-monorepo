import { useState } from 'react'
import StyledForm from './StyledComponents/StyledForm'
import StyledInput from './StyledComponents/StyledInput'
import StyledButton from './StyledComponents/StyledButton'
import StyledP from './StyledComponents/StyledP'

const LoginForm = ({
  handleSubmit,
  user,
  onToggleLabel,
  action,
  username,
  password,
  name,
  handleUsernameChange,
  handlePasswordChange,
  handleNameChange
}) => {
  const [signIn, setSignIn] = useState(true)
  const [label, setLabel] = useState(action)

  const handleLogIn = (ev) => {
    ev.preventDefault()
    setSignIn(true)
    handleToggleLabel('Login')
  }

  const handleSignUp = (ev) => {
    ev.preventDefault()
    setSignIn(false)
    handleToggleLabel('SignUp')
  }

  const handleToggleLabel = (value) => {
    setLabel(value)
    onToggleLabel(value)
  }

  return (
    <>
      <StyledForm data-test-id='login-form' onSubmit={(ev) => handleSubmit(ev, label, setLabel)}>
        {(!user && !signIn) && (
          <div>
            <StyledInput
              type='text'
              name='Name'
              placeholder='Name'
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
        )}
        <div>
          <StyledInput
            type='text'
            name='Username'
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <StyledInput
            type='password'
            name='Password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {signIn
          ? (
            <StyledButton type='submit'>Login</StyledButton>
            )
          : (
            <StyledButton onClick={handleSignUp}>Sign up</StyledButton>
            )}
      </StyledForm>
      {signIn
        ? (
          <StyledP>You do not have an account? <StyledButton onClick={handleSignUp}>Sign up</StyledButton></StyledP>
          )
        : (
          <StyledP>Do you already have an account? <StyledButton onClick={handleLogIn}>Login</StyledButton></StyledP>
          )}
    </>
  )
}

export default LoginForm
