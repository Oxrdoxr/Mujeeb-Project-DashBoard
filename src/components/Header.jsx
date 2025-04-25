import React from 'react';
import './../styles/main.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <img 
          src="/logo.svg" 
          alt="MUJEEB Logo"
          className="header-logo"
        />
        <h1 className="app-title">MUJEEB – Emergency Dashboard</h1>
      </div>
    </header>
  );
};

export default Header;