import { useParams } from 'react-router-dom'

const NoteDetail = ({ notes }) => {
  const { noteId } = useParams()
  const note = notes.find(note => note.id === noteId)
  if (!note) return null
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user.name}</div>
      <div>
        <strong>
          {note.important ? 'important' : 'not important'}
        </strong>
      </div>
    </div>
  )
}

export default NoteDetail
