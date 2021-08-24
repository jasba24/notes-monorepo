import { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Notes from './Notes'
import NoteDetail from './components/NoteDetail'
import { getAllNotes, setToken } from './services/notes'
import Login from './Login'
import { Helmet } from 'react-helmet'
import Link from './components/Link'

const Home = () => (
  <>
    <Helmet>
      <title>Home | Notes App</title>
    </Helmet>
    <h1>Home Page</h1>
  </>
)

const Users = () => <h1>Users Page</h1>

const App = () => {
  const [notes, setNotes] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    getAllNotes().then((initialNotes) => {
      setNotes(initialNotes)
    })
  }, [])

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      setUser(user)
      setToken(user.token)
    }
  }, [])
  return (
    <BrowserRouter>
      <header>
        <Link route='/' name='Home' />
        <Link route='/notes' name='Notes' />
        <Link route='/users' name='Users' />
        {
          user
            ? <em>logged as {user.name}</em>
            : <Link route='/login' name='login' />
        }

      </header>

      <Switch>
        <Route
          path='/login' render={
          () => (
            user
              ? <Redirect to='/' />
              : <Login />
          )
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
