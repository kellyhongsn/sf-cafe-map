import React from 'react';
import { ArrowLeft, MapPin, Wifi, Coffee, Zap, Plug, Users, Heart } from 'lucide-react';
import { Cafe } from '../types/Cafe';

interface CafeDetailProps {
  cafe: Cafe;
  onBack: () => void;
}

const CafeDetail: React.FC<CafeDetailProps> = ({ cafe, onBack }) => {
  const renderStars = (rating: number, maxRating: number = 5) => {
    return Array.from({ length: maxRating }, (_, i) => (
      <span
        key={i}
        className={`star ${i < rating ? 'filled' : 'empty'}`}
      >
        ★
      </span>
    ));
  };

  const attributes = [
    { name: 'WiFi Speed', value: cafe.attributes.wifiSpeed, icon: <Zap className="icon-small" /> },
    { name: 'Outlets', value: cafe.attributes.outlets, icon: <Plug className="icon-small" /> },
    { name: 'Vibe', value: cafe.attributes.vibe, icon: <Heart className="icon-small" /> },
    { name: 'Service', value: cafe.attributes.service, icon: <Users className="icon-small" /> },
    { name: 'Coffee Quality', value: cafe.attributes.coffeeQuality, icon: <Coffee className="icon-small" /> },
    { name: 'Coffee Price', value: cafe.attributes.coffeePrice, icon: <span style={{fontSize: '12px'}}>$</span> }
  ];

  return (
    <div className="cafe-detail">
      <button onClick={onBack} className="back-button">
        <ArrowLeft size={16} />
        Back to Map
      </button>

      <div className="cafe-detail-header">
        <img
          src={cafe.picture}
          alt={cafe.name}
          className="cafe-detail-image"
        />
        
        <h1 className="cafe-detail-title">{cafe.name}</h1>
        
        <div className="cafe-detail-address">
          <MapPin className="icon-small" style={{ display: 'inline', marginRight: '4px' }} />
          {cafe.location.address}
        </div>
        
        <div className="cafe-detail-rating">
          Rating: {cafe.rating}/10
          {cafe.hasWifi && (
            <span style={{ marginLeft: '16px', color: '#666666', fontSize: '1rem', fontWeight: 'normal' }}>
              <Wifi className="icon-small" style={{ display: 'inline', marginRight: '4px' }} />
              WiFi Available
            </span>
          )}
        </div>
      </div>

      <p className="cafe-detail-description">{cafe.description}</p>

      <div className="cafe-detail-section">
        <h2 className="cafe-detail-section-title">Working vs Coffee Quality</h2>
        <div className="working-quality-chart">
          <div className="chart-item">
            <div className="chart-value">{cafe.workingVsCoffeeQuality.working}</div>
            <div className="chart-label">Good for Working</div>
          </div>
          <div className="chart-item">
            <div className="chart-value">{cafe.workingVsCoffeeQuality.coffeeQuality}</div>
            <div className="chart-label">Coffee Quality</div>
          </div>
        </div>
      </div>

      <div className="cafe-detail-section">
        <h2 className="cafe-detail-section-title">Detailed Attributes</h2>
        <div className="attributes-grid">
          {attributes.map((attr, index) => (
            <div key={index} className="attribute-item">
              <div className="attribute-name">
                {attr.icon} {attr.name}
              </div>
              <div className="attribute-stars">
                {renderStars(attr.value)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CafeDetail; 