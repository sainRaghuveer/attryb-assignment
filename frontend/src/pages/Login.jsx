import React, { useState } from 'react';
import "../styles/Login.css"
import { login } from '../Redux/authentication/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Input, useToast } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate= useNavigate();
  const toast= useToast();

  const handleNavigate=()=>{
    navigate("/home")
  }
  const handleToast=(title, status)=>{
    toast({
      title: `${title}`,
      status: `${status}`,
      isClosable: true,
      position:"top"
    })
  }

  const handleLogin = () => {
    let obj={
      email:email,
      password:password,
    }
    dispatch(login(obj, handleNavigate, handleToast));
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="auth-container">
        <h2>Login</h2>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="button" onClick={handleLogin}>
            Log in
          </Button>
      </div>
    </div >
  );
};

export default Login;
