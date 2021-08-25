import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './index.css'
import NoteDetail from './components/NoteDetail'
import Link from './components/Link'
import { useUser } from './hooks/useUser'
import { useNotes } from './hooks/useNotes'
import Login from './views/Login'
import Notes from './views/Notes'
import Home from './views/Home'
import Users from './views/Users'

const App = () => {
  const { user } = useUser()
  const { notes } = useNotes()

  return (
    <BrowserRouter>
      <header className='spacing'>
        <Link route='/' name='Home' />
        <Link route='/notes' name='Notes' />
        <Link route='/users' name='Users' />
        {
          user
            ? <em>Logged as {user.name}</em>
            : (
              <Link route='/login' name='Login' />
              )
        }

      </header>

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
        <Route path='/notes'>
          <Notes />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
