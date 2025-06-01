import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Cafe } from '../types/Cafe';
import 'leaflet/dist/leaflet.css';

interface CafeMapProps {
  cafes: Cafe[];
  selectedCafe?: Cafe | null;
  onCafeSelect: (cafe: Cafe) => void;
}

// Custom marker icon
const cafeIcon = new Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTRDNS4zNDMxNSAxNCA0IDEyLjY1NjkgNCA5QzQgNS4zNDMxNSA1LjM0MzE1IDQgOSA0SDE1QzE4LjY1NjkgNCAyMCA1LjM0MzE1IDIwIDlDMjAgMTIuNjU2OSAxOC42NTY5IDE0IDE1IDE0SDE0VjIwSDEwVjE0SDdaIiBmaWxsPSIjOEI1Q0Y2Ii8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iOSIgcj0iMiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const CafeMap: React.FC<CafeMapProps> = ({ cafes, selectedCafe, onCafeSelect }) => {
  return (
    <div style={{ height: '100%', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <MapContainer
        center={[37.7749, -122.4194]} // San Francisco center
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cafes.map((cafe) => (
          <Marker
            key={cafe.id}
            position={[cafe.location.lat, cafe.location.lng]}
            icon={cafeIcon}
            eventHandlers={{
              click: () => onCafeSelect(cafe),
            }}
          >
            <Popup>
              <div style={{ padding: '8px', minWidth: '200px' }}>
                <h3 style={{ fontWeight: '600', fontSize: '18px', marginBottom: '4px', margin: '0 0 4px 0' }}>{cafe.name}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px', margin: '0 0 8px 0' }}>{cafe.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>Rating:</span>
                  <span style={{ 
                    background: '#f3e8ff', 
                    color: '#7c3aed', 
                    padding: '2px 8px', 
                    borderRadius: '12px', 
                    fontSize: '12px', 
                    fontWeight: '600' 
                  }}>
                    {cafe.rating}/10
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: '0' }}>{cafe.location.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CafeMap; 