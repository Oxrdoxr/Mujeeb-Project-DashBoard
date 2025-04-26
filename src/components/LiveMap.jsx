import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { database } from '../firebase/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/main.css';

// إعداد أيقونات marker حسب الحالة
const getMarkerIcon = (status) => {
  const color = {
    new: 'red',
    responding: 'orange',
    resolved: 'green',
  }[status?.toLowerCase()] || 'gray';

  return L.icon({
    iconUrl: require(`../assets/marker-${color}.png`),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    shadowSize: [41, 41],
  });
};

// حل مشكلة الأيقونة الافتراضية
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// مكون لتحريك الخريطة تلقائياً عند تحديد حادث
const FlyToIncident = ({ incident }) => {
  const map = useMap();

  useEffect(() => {
    if (incident && incident.lat && incident.lng) {
      map.flyTo([incident.lat, incident.lng], 14); // زووم قريب للحادث
    }
  }, [incident, map]);

  return null;
};

const LiveMap = ({ selectedIncident }) => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const refAccidents = ref(database, 'accidents/');
    onValue(refAccidents, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.entries(data).map(([id, value]) => ({ id, ...value }));
        setIncidents(list);
      }
    });
  }, []);

  return (
    <div className="live-map-section">
      <h2 className="section-title">Live Map</h2>
      <MapContainer
        center={[24.7136, 46.6753]} // الرياض
        zoom={8}
        scrollWheelZoom={true}
        style={{ height: '400px', width: '100%', borderRadius: '10px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {selectedIncident && <FlyToIncident incident={selectedIncident} />}

        {incidents
          .filter((inc) => inc.status !== 'resolved' || inc.id === selectedIncident?.id)
          .map((incident) => (
            <Marker
              key={incident.id}
              position={[incident.lat, incident.lng]}
              icon={getMarkerIcon(incident.status)}
            >
              <Popup>
                <div>
                  <strong>Driver:</strong> {incident.driverName} <br />
                  <strong>Status:</strong> {incident.status}
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default LiveMap;
