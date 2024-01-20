import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async(e) => {
    e.preventDefault();
    const response = await axios.get(`http://192.168.29.190:8000/User/checkLogin/${username}`,{
      params:{
        password: password
      }
    });
    if(response && response.data.message === "Login successful")
    {
      alert(response.data.message);
      login({ username: username });
      
    }else{
      alert(response.data.message);
    }
    // Add your login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          required= {true}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required= {true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <Link to="/Signup">Signup</Link></p>
      </div>
    </div>
  );
};

export default Login;
