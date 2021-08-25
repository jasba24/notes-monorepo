import { useEffect, useState } from 'react'
import { createNote, getAllNotes, update } from '../services/notes'

export const useNotes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAllNotes().then((initialNotes) => {
      setNotes(initialNotes)
    })
  }, [])

  const addNote = (noteObject) => {
    createNote(noteObject).then((newNote) =>
      setNotes([...notes, newNote])
    )
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    return update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
  }

  return {
    notes,
    addNote,
    toggleImportanceOf
  }
}
