import React from 'react';
import { FiAlertCircle, FiNavigation, FiCheckCircle } from 'react-icons/fi';
import '../styles/main.css';

const StatusCards = () => {
  return (
    <div className="status-section">
      <h2 className="section-title">Incident Status Summary</h2>
      <div className="status-cards">
        <div className="status-card new">
          <FiAlertCircle className="status-icon" />
          <h3>New</h3>
          <p className="count">30</p>
        </div>
        <div className="status-card responding">
          <FiNavigation className="status-icon" />
          <h3>Responding</h3>
          <p className="count">15</p>
        </div>
        <div className="status-card resolved">
          <FiCheckCircle className="status-icon" />
          <h3>Resolved</h3>
          <p className="count">10</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCards;