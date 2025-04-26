import React, { useState } from 'react';
import Header from './components/Header';
import StatusCards from './components/StatusCards';
import IncidentList from './components/IncidentList';
import IncidentDetails from './components/IncidentDetails';
import LiveMap from './components/LiveMap';
import './styles/main.css';

function App() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedIncident, setSelectedIncident] = useState(null);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h1 className="welcome-title">Welcome, Officer</h1>

        <StatusCards onSelectStatus={setSelectedStatus} />


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

        <LiveMap selectedIncident={selectedIncident} />
      </main>
    </div>
  );
}

export default App;
