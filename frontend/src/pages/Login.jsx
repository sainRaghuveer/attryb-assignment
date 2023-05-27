import React, { useState } from 'react';
import "../styles/Login.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login', { username, password });
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="auth-container">
        <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Log in
          </button>
      </div>
    </div >
  );
};

export default Login;
