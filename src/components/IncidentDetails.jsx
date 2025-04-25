import React from 'react';
import { FiMapPin, FiClock, FiUser, FiAlertCircle } from 'react-icons/fi';
import '../styles/main.css';

const IncidentDetails = () => {
  return (
    <div className="incident-details">
      <h2 className="section-title">Incident Details</h2>
      <div className="details-grid">
        <div className="detail-item">
          <FiMapPin className="detail-icon" />
          <div>
            <p className="detail-label">Location</p>
            <p className="detail-value">Riyadh – King Fahad Road</p>
          </div>
        </div>
        <div className="detail-item">
          <FiClock className="detail-icon" />
          <div>
            <p className="detail-label">Timestamp</p>
            <p className="detail-value">2 minutes ago</p>
          </div>
        </div>
        <div className="detail-item">
          <FiUser className="detail-icon" />
          <div>
            <p className="detail-label">Driver Info</p>
            <p className="detail-value">Driver: Ali S.</p>
          </div>
        </div>
        <div className="detail-item">
          <FiAlertCircle className="detail-icon" />
          <div>
            <p className="detail-label">Status</p>
            <p className="detail-value status-in-progress">In Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentDetails;