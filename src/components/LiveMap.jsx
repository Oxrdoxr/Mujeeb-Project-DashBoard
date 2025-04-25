import React from 'react';
import { FiMapPin, FiZoomIn } from 'react-icons/fi';
import '../styles/main.css';

const LiveMap = () => {
  return (
    <div className="map-section">
      <h2 className="section-title">Live Map</h2>
      <div className="map-container">
        <div className="map-placeholder">
          <FiMapPin className="map-pin" />
          <span className="map-label">In Progress</span>
        </div>
      </div>
      <button className="zoom-button">
        <FiZoomIn className="button-icon" />
        Zoom to Location
      </button>
    </div>
  );
};

export default LiveMap;