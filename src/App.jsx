import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import StatusCards from './components/StatusCards';
import IncidentList from './components/IncidentList';
import IncidentDetails from './components/IncidentDetails';
import LiveMap from './components/LiveMap';
import Login from './pages/Login'; // 👈 
import Signup from './pages/Signup';
//import ProfileSection from './components/ProfileSection';
import './styles/main.css';

const Dashboard = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedIncident, setSelectedIncident] = useState(null);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h1 className="welcome-title">Welcome, Officer</h1>
        
        <StatusCards onSelectStatus={setSelectedStatus} />
        <div className="dashboard-flex">
          <div className="left-section">
            <IncidentList
            selectedStatus={selectedStatus}
            setSelectedIncident={setSelectedIncident}
            />
            {selectedIncident && (
              <IncidentDetails
              incident={selectedIncident}
              setSelectedIncident={setSelectedIncident}
              />
              )}
            </div>
          <div className="right-section">
            <LiveMap selectedIncident={selectedIncident} />
          </div>
          </div>
          </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
