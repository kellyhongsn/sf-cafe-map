import React from 'react';
import { Cafe } from '../types/Cafe';

interface CafeMapProps {
  cafes: Cafe[];
  selectedCafe?: Cafe | null;
  onCafeSelect: (cafe: Cafe) => void;
}

const CafeMap: React.FC<CafeMapProps> = ({ cafes, selectedCafe, onCafeSelect }) => {
  return (
    <div style={{ 
      height: '100%', 
      width: '100%', 
      borderRadius: '8px', 
      overflow: 'hidden', 
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      background: '#ffffff',
      position: 'relative'
    }}>
      {/* Map background with subtle grid */}
      <div style={{
        width: '100%',
        height: '100%',
        background: `
          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(rgba(0,0,0,0.01) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.01) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        backgroundPosition: '-1px -1px, -1px -1px, -1px -1px, -1px -1px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Map title */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: 'white',
          padding: '12px 16px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          fontSize: '16px',
          fontWeight: '600',
          color: '#000000'
        }}>
          ☕ San Francisco Cafes
        </div>

        {/* Instructions */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'white',
          padding: '8px 12px',
          borderRadius: '6px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          fontSize: '12px',
          color: '#666666',
          maxWidth: '200px',
          textAlign: 'center'
        }}>
          Click coffee icons to select cafes
        </div>

        {/* Cafe markers positioned around the map */}
        {cafes.map((cafe, index) => {
          const positions = [
            { top: '25%', left: '30%' },
            { top: '40%', left: '65%' },
            { top: '65%', left: '25%' },
            { top: '30%', left: '75%' },
            { top: '75%', left: '60%' }
          ];
          
          const position = positions[index] || { top: '50%', left: '50%' };
          const isSelected = selectedCafe?.id === cafe.id;
          
          return (
            <div
              key={cafe.id}
              onClick={() => onCafeSelect(cafe)}
              style={{
                position: 'absolute',
                top: position.top,
                left: position.left,
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                background: isSelected ? '#000000' : 'white',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isSelected 
                  ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
                fontSize: '24px',
                border: isSelected ? '3px solid #333333' : '2px solid #e5e7eb',
                zIndex: isSelected ? 10 : 1
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
                }
              }}
              title={`${cafe.name} - Rating: ${cafe.rating}/10`}
            >
              <span style={{ 
                filter: isSelected ? 'invert(1)' : 'none',
                transition: 'filter 0.3s ease'
              }}>
                ☕
              </span>
            </div>
          );
        })}

        {/* Center message when no cafe is selected */}
        {!selectedCafe && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#999999',
            fontSize: '18px',
            fontWeight: '500',
            pointerEvents: 'none',
            zIndex: 0
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🗺️</div>
            <div>Click a coffee shop to explore</div>
          </div>
        )}

        {/* Selected cafe info popup */}
        {selectedCafe && (
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
            border: '1px solid #e5e7eb',
            zIndex: 20
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <img 
                src={selectedCafe.picture} 
                alt={selectedCafe.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '8px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  margin: '0 0 8px 0', 
                  fontSize: '18px', 
                  fontWeight: '600',
                  color: '#000000'
                }}>
                  {selectedCafe.name}
                </h3>
                <p style={{ 
                  margin: '0 0 8px 0', 
                  fontSize: '13px', 
                  color: '#666666',
                  lineHeight: '1.4'
                }}>
                  {selectedCafe.location.address}
                </p>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  fontSize: '14px'
                }}>
                  <span style={{ 
                    background: '#f5f5f5', 
                    color: '#000000', 
                    padding: '4px 8px', 
                    borderRadius: '6px',
                    fontWeight: '600'
                  }}>
                    {selectedCafe.rating}/10
                  </span>
                  <span style={{ color: '#666666' }}>
                    Click again for full details
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CafeMap; 