import { useState } from 'react'
import FormPrueba from '../components/FormPrueba'

const LoginPrueba = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [label, setLabel] = useState('Login')

  const login = (username, password) => {

  }

  const createUser = (username, password, name) => {
    return {
      username,
      password,
      name
    }
  }

  const handleSubmit = async (ev, action, setAction) => {
    ev.preventDefault()

    if (action === 'Login') {
      try {
        const user = await login({
          username,
          password
        })

        window.localStorage.setItem(
          'loggedNoteAppUser', JSON.stringify(user)
        )

        setUsername('')
        setPassword('')

        history.push('/')
      } catch (e) {
        setErrorMessage('Wrong credentials')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    }
    try {
      const user = createUser({
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
    console.table(username, password)
  }

  if (errorMessage) { <Notification message={errorMessage} /> }

  return (
    <main>
      <FormPrueba
        handleSubmit={handleSubmit}
        action={label}
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
      />
    </main>
  )
}

export default LoginPrueba
