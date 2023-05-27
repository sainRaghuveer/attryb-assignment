import React, { useState } from 'react';
import "../styles/Signup.css"

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {

    console.log('Signup', { username, password, email });
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="auth-container">
        <h1>SignUp</h1>
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
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" onClick={handleSignUp}>
          Sign up
        </button>

      </div>
    </div>
  );
};

