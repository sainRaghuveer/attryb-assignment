import React, { useState } from 'react';
import "../styles/Signup.css"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../Redux/authentication/action';
import { Button, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const toast= useToast();

  const handleNavigate=()=>{
    navigate("/login")
  }
  const handleToast=(title, status)=>{
    toast({
      title: `${title}`,
      status: `${status}`,
      isClosable: true,
      position:"top"
    })
  }

  const handleSignUp = () => {
    let obj={
      username:username,
      password:password,
      email:email
    }
    dispatch(signUpUser(obj, handleNavigate, handleToast));
    
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
        <Button type="button" onClick={handleSignUp}>
          Sign up
        </Button>

      </div>
    </div>
  );
};

