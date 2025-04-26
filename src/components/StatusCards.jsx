import React, { useEffect, useState } from 'react';
import { FiAlertCircle, FiNavigation, FiCheckCircle } from 'react-icons/fi';
import '../styles/main.css';
import { database } from '../firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';

const StatusCards = ({ onSelectStatus }) => {
  const [counts, setCounts] = useState({
    new: 0,
    responding: 0,
    resolved: 0,
  });

  useEffect(() => {
    const refAccidents = ref(database, 'accidents/');
    onValue(refAccidents, (snapshot) => {
      const data = snapshot.val();
      let newCount = 0;
      let respondingCount = 0;
      let resolvedCount = 0;

      if (data) {
        Object.values(data).forEach((accident) => {
          if (accident.status === 'new') newCount++;
          else if (accident.status === 'responding') respondingCount++;
          else if (accident.status === 'resolved') resolvedCount++;
        });
      }

      setCounts({
        new: newCount,
        responding: respondingCount,
        resolved: resolvedCount,
      });
    });
  }, []);

  return (
    <div className="status-section">
      <h2 className="section-title">Latest Reported Emergency</h2>
      <div className="status-cards">
        <div className="status-card new" onClick={() => onSelectStatus('new')}>
          <FiAlertCircle className="status-icon" />
          <h3>New</h3>
          <p className="count">{counts.new}</p>
        </div>
        <div className="status-card responding" onClick={() => onSelectStatus('responding')}>
          <FiNavigation className="status-icon" />
          <h3>Responding</h3>
          <p className="count">{counts.responding}</p>
        </div>
        <div className="status-card resolved" onClick={() => onSelectStatus('resolved')}>
          <FiCheckCircle className="status-icon" />
          <h3>Resolved</h3>
          <p className="count">{counts.resolved}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCards;
