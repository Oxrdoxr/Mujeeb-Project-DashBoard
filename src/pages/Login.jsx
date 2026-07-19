import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // مؤقتاً بدون تحقق، نوجه المستخدم مباشرة إلى لوحة التحكم
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login to Mujeeb</h2>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />

          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button type="submit">Login</button>
          <p style={{ marginTop: '1rem', textAlign: 'center' }}>
            Don't have an account? <Link to="/signup">Create one</Link>
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
