import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(`http://192.168.29.190:8000/User/checkUsername/${username}`);
      console.log(response.data);
  
      if (response && response.data.userExists) {
        alert('Username already exists');
      } else {
        await axios.post(`http://192.168.29.190:8000/User/Signup`, { username, name, password })
          .then(() => {
            alert('Signed up, you can now login');
          });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error during signup. Please try again.');
    }
  };
  
  

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSignup}>
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="Username"
          required= {true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          required= {true}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required= {true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
      <div className="signup-link">
        <p>Have an account? <Link to="/Login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
