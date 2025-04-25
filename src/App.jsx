import React from 'react';
import Header from './components/Header';
import IncidentDetails from './components/IncidentDetails';
import StatusCards from './components/StatusCards';
import LiveMap from './components/LiveMap';
import './styles/main.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h1 className="welcome-title">Welcome, Officer</h1>
        <IncidentDetails />
        <StatusCards />
        <LiveMap />
      </main>
    </div>
  );
}

export default App;