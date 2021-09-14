import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './index.css'
import NoteDetail from './components/NoteDetail'
import Link from './components/Link'
import { useUser } from './hooks/useUser'
import { useNotes } from './hooks/useNotes'
import Login from './views/Login'
import Notes from './views/Notes'
import StyledHeader from './components/StyledComponents/StyledHeader'

const App = () => {
  const { user } = useUser()
  const { notes } = useNotes()

  return (
    <BrowserRouter>
      <StyledHeader className='spacing'>
        <Link route='/' name='Notes App' />
        <nav>
          <Link route='/' name='Notes' />
          {
          user
            ? <em>Logged as {user.name}</em>
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
            return user
              ? <Redirect to='/' />
              : <Login />
          }
        }
        />
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
