import React, { useEffect, useState } from 'react';
import { database } from '../firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';

const IncidentList = ({ selectedStatus, setSelectedIncident }) => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    if (!selectedStatus) return;

    const refAccidents = ref(database, 'accidents/');
    onValue(refAccidents, (snapshot) => {
      const data = snapshot.val();
      const filteredIncidents = Object.entries(data || {}).map(([id, incident]) => ({
        id,
        ...incident,
      })).filter((item) => item.status === selectedStatus);

      setIncidents(filteredIncidents);
    });
  }, [selectedStatus]);

  if (!selectedStatus) return null;

  return (
    <div>
      <h2 className="section-title">
        {selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)} Incidents
      </h2>
      <div className="incident-list-container">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="incident-card"
            onClick={() => setSelectedIncident(incident)}
          >
            <p><strong>Driver:</strong> {incident.driverName}</p>
            <p><strong>Location:</strong> ({incident.lat}, {incident.lng})</p>
            <p><strong>Status:</strong> {incident.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncidentList;
