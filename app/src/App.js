import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './index.css'
import NoteDetail from './components/NoteDetail'
import Link from './components/Link'
import { useUser } from './hooks/useUser'
import { useNotes } from './hooks/useNotes'
import Login from './views/Login'
import Notes from './views/Notes'
import StyledHeader from './components/StyledComponents/StyledHeader'
import StyledLink from './components/StyledComponents/StyledLink'
// import { useEffect } from 'react'
import LoginPrueba from './views/LoginPrueba'

const App = () => {
  const { logout } = useUser()
  const { notes } = useNotes()

  console.log('token', Boolean(window.localStorage.getItem('loggedNoteAppUser')))

  return (
    <BrowserRouter>
      <StyledHeader className='spacing'>
        <Link route='/' name='Notes App' />
        <nav>
          <Link route='/' name='Notes' />
          {
            window.localStorage.getItem('loggedNoteAppUser')
              ? (
                <StyledLink onClick={logout}>
                  Logout
                </StyledLink>
                )
              : (
                <Link route='/login' name='Login' />
                )
        }
        </nav>
      </StyledHeader>

      <Switch>
        <Route
          path='/login' render={
          () => {
            return window.localStorage.getItem('loggedNoteAppUser')
              ? <Redirect to='/' />
              : <Login />
          }
        }
        />
        <Route path='/loginPrueba'>
          <LoginPrueba />
        </Route>
        <Route path='/notes/:noteId'>
          <NoteDetail notes={notes} />
        </Route>
        <Route path='/'>
          <Notes />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
