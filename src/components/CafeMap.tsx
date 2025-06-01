import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import { Cafe } from '../types/Cafe';
import 'leaflet/dist/leaflet.css';

interface CafeMapProps {
  cafes: Cafe[];
  selectedCafe?: Cafe | null;
  onCafeSelect: (cafe: Cafe) => void;
}

const CafeMap: React.FC<CafeMapProps> = ({ cafes, selectedCafe, onCafeSelect }) => {
  // San Francisco center coordinates
  const center: [number, number] = [37.7749, -122.4194];

  return (
    <div style={{ 
      height: '100%', 
      width: '100%', 
      position: 'relative'
    }}>
      <style>
        {`
          .coffee-marker {
            background: #ffffff;
            border: 2px solid #e5e7eb;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
          }
          .coffee-marker:hover {
            background: #f9f9f9;
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }
          .coffee-marker.selected {
            background: #000000;
            color: white;
            border-color: #333;
            transform: scale(1.15);
          }
          
          /* Hide all Leaflet controls */
          .leaflet-control-container {
            display: none !important;
          }
          
          /* Clean map styling */
          .leaflet-container {
            background: #f8f9fa !important;
          }
          
          /* Remove attribution */
          .leaflet-control-attribution {
            display: none !important;
          }
          
          /* Remove zoom control */
          .leaflet-control-zoom {
            display: none !important;
          }
        `}
      </style>

      <MapContainer 
        center={center} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        attributionControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
      >
        {/* Clean tile layer */}
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution=""
        />
        
        {cafes.map((cafe) => {
          const isSelected = selectedCafe?.id === cafe.id;
          
          return (
            <Marker
              key={cafe.id}
              position={[cafe.location.lat, cafe.location.lng]}
              icon={L.divIcon({
                html: '☕',
                className: `coffee-marker ${isSelected ? 'selected' : ''}`,
                iconSize: [32, 32],
                iconAnchor: [16, 16],
              })}
              eventHandlers={{
                click: () => onCafeSelect(cafe),
              }}
            />
          );
        })}
      </MapContainer>
    </div>
  );
};

export default CafeMap; 