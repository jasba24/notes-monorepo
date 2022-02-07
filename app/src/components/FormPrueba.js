const FormPrueba = ({
  handleSubmit,
  handleSignUp,
  username,
  password,
  name,
  handleUsernameChange,
  handlePasswordChange,
  handleNameChange
}) => {
  return (
    <>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <div>
          <input
            type='text'
            name='Name'
            placeholder='Name'
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <input
            type='text'
            name='Username'
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <input
            type='password'
            name='Password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      <p>You do not have an account? <button onClick={handleSignUp}>Sign up</button></p>
    </>
  )
}
export default FormPrueba
