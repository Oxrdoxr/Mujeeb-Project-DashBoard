import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // ✅ استيراد Link هنا
import '../styles/login.css';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [phone, setPhone] = useState('');

  const handleMockVerification = (e) => {
    e.preventDefault();
    alert('Identity verified successfully');
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Create an Account - Mujeeb</h2>
        <form onSubmit={handleMockVerification}>
          <label>Username</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose a username"
          />

          <label>National ID</label>
          <input
            type="text"
            required
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            placeholder="Enter your National ID"
          />

          <label>Phone Number</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="05XXXXXXXX"
          />

          <button type="submit">Verify with Nafath</button>
          <p style={{ marginTop: '1rem', textAlign: 'center' }}>
            Already registered? <Link to="/">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
