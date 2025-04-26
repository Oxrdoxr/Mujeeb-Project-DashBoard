import React from 'react';
import { ref, update } from 'firebase/database';
import { database } from '../firebase/firebaseConfig';
import '../styles/main.css';

const IncidentDetails = ({ incident, setSelectedIncident }) => {
  if (!incident) return null;

  const handleUpdateStatus = (newStatus) => {
    const refItem = ref(database, `accidents/${incident.id}`);
    update(refItem, { status: newStatus });
    setSelectedIncident(null);
  };

  return (
    <div className="incident-details">
      <h2 className="section-title">Accident Details</h2>
      <p><strong>Driver:</strong> {incident.driverName}</p>
      <p><strong>Location:</strong> ({incident.lat}, {incident.lng})</p>
      <p><strong>Status:</strong> {incident.status}</p>
      <p><strong>Timestamp:</strong> {incident.timestamp}</p>

      {/* ✅ هنا نضيف الشرط */}
      {incident.status === 'new' && (
        <div className="update-status-buttons">
          <button className="status-button responding" onClick={() => handleUpdateStatus('responding')}>
            Start Responding
          </button>
        </div>
      )}

      {incident.status === 'responding' && (
        <div className="update-status-buttons">
          <button className="status-button resolved" onClick={() => handleUpdateStatus('resolved')}>
            Mark as Resolved
          </button>
        </div>
      )}

      {incident.status === 'resolved' && (
        <p style={{ color: 'green', fontWeight: 'bold', marginTop: '1rem' }}>
          ✅ This accident is already resolved.
        </p>
      )}
    </div>
  );
};

export default IncidentDetails;
