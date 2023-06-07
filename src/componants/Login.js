import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your own logic to submit the username and password to the server
    console.log(`Logging in with ${username} and ${password}`);
  };

  const isFormValid = () => {
    return username.trim() !== '' && password.trim() !== '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" autoComplete="username" value={username} onChange={handleUsernameChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" autoComplete="current-password" value={password} onChange={handlePasswordChange} />
        <br />
        <button type="submit" disabled={!isFormValid()}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
