import StyledLink from './StyledLink'
import StyledButton from './StyledButton'

const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important'

  return (
    <li className='note'>
      <StyledLink to={`/notes/${note.id}`}>{note.content}</StyledLink>
      <StyledButton onClick={toggleImportance}>{label}</StyledButton>
    </li>
  )
}

export default Note
