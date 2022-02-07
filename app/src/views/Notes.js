import { useState } from 'react'
import Note from '../components/Note'
import CreateNoteForm from '../components/CreateNoteForm'
import Notification from '../components/Notification'
import { useNotes } from '../hooks/useNotes'
// import { useUser } from '../hooks/useUser'
import Link from '../components/Link'
import HelmetTitle from '../components/HelmetTitle'

export default function App () {
  const [errorMessage, setErrorMessage] = useState(null)

  const { notes, addNote, toggleImportanceOf } = useNotes()

  // const { user } = useUser()

  const toggleImportanceOfNote = (id) => {
    toggleImportanceOf(id) // el que viene del custom hook
      .catch(() => {
        setErrorMessage(
          'Note was already removed from server'
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  return (
    <div>
      <HelmetTitle page='Notes' />

      <Notification message={errorMessage} />

      {
        window.localStorage.getItem('loggedNoteAppUser')
          ? <CreateNoteForm
              addNote={addNote}
            />
          : <h2>you want to create a note, <Link route='/login' name='log in' /> </h2>
      }

      {notes.length === 0 && 'Loading...'}
      <ol>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOfNote(note.id)}
          />
        ))}
      </ol>

    </div>
  )
}
