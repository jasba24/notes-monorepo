import React, { useState } from 'react'
import LoginForm from '../components/LoginForm.js'
import { login } from '../services/login'
import { setToken } from '../services/notes'
import { useHistory } from 'react-router-dom'
import Notification from '../components/Notification'
import StyledFormContainer from '../components/StyledComponents/StyledFormContainer.js'
import { createUser } from '../services/users'

export default function Login () {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [label, setLabel] = useState('Login')

  const handleLogin = async (event, action, setAction) => {
    event.preventDefault()

    console.log(action)

    if (action === 'Login') {
      try {
        const user = await login({
          username,
          password
        })
        console.table(username, password)

        window.localStorage.setItem(
          'loggedNoteAppUser', JSON.stringify(user)
        )
        setToken(user.token)
        setUser(user)
        setUsername('')
        setPassword('')

        history.push('/')
      } catch (e) {
        setErrorMessage('Wrong credentials')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    } else if (action === 'SignUp') {
      try {
        const user = await createUser({
          username,
          password,
          name
        })
        window.localStorage.setItem(
          'CreatedNoteAppUser', JSON.stringify(user)
        )
        setAction('Login')
        setLabel(action)
        setUsername('')
        setPassword('')
        setName('')
      } catch (e) {
        setErrorMessage('Wrong credentials')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    }
    console.log(action)
  }

  const onToggleLabel = (value) => {
    setLabel(value)
  }
  if (errorMessage) {
    return <Notification message={errorMessage} />
  }

  if (user) {
    return <p>User is logged</p>
  }

  return (
    <StyledFormContainer>
      <h1>{label}</h1>
      <LoginForm
        user={user}
        username={username}
        password={password}
        name={name}
        handleUsernameChange={
                ({ target }) => setUsername(target.value)
        }
        handlePasswordChange={
                ({ target }) => setPassword(target.value)
        }
        handleNameChange={
                ({ target }) => setName(target.value)
        }
        handleSubmit={handleLogin}
        onToggleLabel={onToggleLabel}
        action={label}
      />
    </StyledFormContainer>
  )
}
