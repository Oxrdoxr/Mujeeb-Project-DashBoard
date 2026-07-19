import React from 'react';
import './../styles/main.css';
import ProfileSection from './ProfileSection';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-title">
          <img 
            src="/logo.svg" 
            alt="MUJEEB Logo"
            className="header-logo"
          />
          <h1 className="app-title">MUJEEB – Emergency Dashboard</h1>
        </div>
        <ProfileSection />
      </div>
    </header>
  );
};

export default Header;
