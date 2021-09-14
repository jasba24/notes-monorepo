import { forwardRef, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import StyledButton from './StyledComponents/StyledButton'

const Toggleable = forwardRef(({ children, buttonLabel = 'Show' }, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(
    ref,
    () => ({
      toggleVisibility
    })
  )
  return (
    <>
      <StyledButton
        style={hideWhenVisible}
        onClick={toggleVisibility}
      >
        {buttonLabel}
      </StyledButton>
      <div style={showWhenVisible}>
        {children}
        <button onClick={toggleVisibility}>Cancel</button>
      </div>
    </>
  )
})

Toggleable.displayName = 'Toggleable'

Toggleable.propTypes = {
  buttonLabel: PropTypes.string
}

export default Toggleable
