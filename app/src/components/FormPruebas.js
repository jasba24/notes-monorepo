const FormPruebas = ({
  handleSubmit,
  handleLogIn,
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
        <button type='submit'>Sign Up</button>
      </form>
      <p>Do you already have an account? <button onClick={handleLogIn}>Login</button></p>
    </>
  )
}
export default FormPruebas
