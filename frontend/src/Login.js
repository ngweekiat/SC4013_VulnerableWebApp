import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (data.success) {
        setMessage("Login successful!");
        navigate('/dashboard');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Error logging in');
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url('/images/background.jpg')`,
      }}
    >
      <div className="loginBox">
        <img
          src="/images/logo.png"
          alt="DBS Logo"
          className="logo"
        />
        <h2
          className="title"
          dangerouslySetInnerHTML={{
            __html: `
              NTU Bank
              <!-- Developer Note: Hi john heres the login details for testing -->
              <!-- Admin username: admin -->
              <!-- Admin password: password -->
              <!-- Remember to delete it before deploying or i'll put you on a PIP -->
              <!-- Thx -Adam -->
            `,
          }}
        ></h2>

        <input
          type="text"
          placeholder="User ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="PIN"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />

        <button onClick={handleLogin} className="loginButton">
          Login
        </button>
        <button className="getStartedButton">Get Started</button>

        <p className="message">{message}</p>
        <div className="links">
          <a href="#" className="link">Forgot User ID or PIN</a>
          <a href="#" className="link">Frequently Asked Questions</a>
          <a href="#" className="link">Maintenance Schedule</a>
          <a href="#" className="link">Security & You</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
