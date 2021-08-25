import { useState } from 'react'
import Note from '../components/Note'
import CreateNoteForm from '../components/CreateNoteForm'
import Notification from '../components/Notification'
import { useNotes } from '../hooks/useNotes'
import { useUser } from '../hooks/useUser'
import Link from '../components/Link'

export default function App () {
  const [errorMessage, setErrorMessage] = useState(null)

  const { notes, addNote, toggleImportanceOf } = useNotes()

  const { user, logout } = useUser()

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
      <h1>Notes</h1>

      <Notification message={errorMessage} />

      {
        user
          ? <CreateNoteForm
              addNote={addNote}
              handleLogout={logout}
            />
          : <h2>you want to create a note, <Link route='login' name='log in' /> </h2>
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
