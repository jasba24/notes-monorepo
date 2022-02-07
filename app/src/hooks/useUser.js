import { useEffect, useState } from 'react'
import { setToken } from '../services/notes'
import { login as loginService } from '../services/login'

export const useUser = () => {
  const [user, setUser] = useState(null)
  const [action, setAction] = useState(null)

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJson) {
      const userLogin = JSON.parse(loggedUserJson)
      setToken(userLogin.token)
      setUser(userLogin)
    }
  }, [action])

  const login = (username, password) => {
    return loginService({
      username,
      password
    }).then((userLogin) => {
      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(userLogin)
      )
      setToken(userLogin.token)
      setUser(userLogin)
      setAction('login')
    })
  }

  const logout = () => {
    window.localStorage.removeItem('loggedNoteAppUser')
    setToken(null)
    setUser(null)
    setAction('logout')
  }

  return {
    user,
    login,
    logout
  }
}
