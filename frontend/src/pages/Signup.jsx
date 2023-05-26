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
    <div className="auth-container">
      <h2>SignUp</h2>
      <form>
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
      </form>
    </div>
  );
};

