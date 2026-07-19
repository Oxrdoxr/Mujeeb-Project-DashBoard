import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSection = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: '6px 12px',
        backgroundColor: '#d9534f',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Logout
    </button>
  );
};

export default ProfileSection;
