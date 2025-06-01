import React from 'react';
import { Cafe } from '../types/Cafe';
import { Wifi, MapPin, Coffee, Zap, Plug, Users, Heart } from 'lucide-react';

interface CafeCardProps {
  cafe: Cafe;
  onClick: () => void;
  isSelected?: boolean;
}

const CafeCard: React.FC<CafeCardProps> = ({ cafe, onClick, isSelected }) => {
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

  const renderAttribute = (label: string, value: number, icon: React.ReactNode, maxValue: number = 5) => (
    <div className="attribute-row">
      <div className="attribute-label">
        {icon}
        <span>{label}</span>
      </div>
      <div className="stars">
        {renderStars(value, maxValue)}
      </div>
    </div>
  );

  return (
    <div
      onClick={onClick}
      className="cafe-card"
    >
      {/* Header */}
      <div className="cafe-header">
        <img
          src={cafe.picture}
          alt={cafe.name}
          className="cafe-image"
        />
        <div className="cafe-info">
          <h3 className="cafe-name">{cafe.name}</h3>
          <div className="cafe-address">
            <MapPin className="icon-small" size={12} />
            <span>{cafe.location.address}</span>
          </div>
          <div className="cafe-badges">
            <div className="rating-badge">
              {cafe.rating}/10
            </div>
            {cafe.hasWifi && (
              <div className="wifi-badge">
                <Wifi className="icon-small" size={12} />
                <span>WiFi</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="cafe-description">{cafe.description}</p>

      {/* Working vs Coffee Quality Chart */}
      <div className="working-quality-section">
        <h4 className="working-quality-title">Working vs Coffee Quality</h4>
        <div className="working-quality-scores">
          <div className="score-item">
            <div className="score-value">{cafe.workingVsCoffeeQuality.working}/10</div>
            <div className="score-label">Working</div>
          </div>
          <div className="score-item">
            <div className="score-value">{cafe.workingVsCoffeeQuality.coffeeQuality}/10</div>
            <div className="score-label">Coffee</div>
          </div>
        </div>
      </div>

      {/* Attributes */}
      <div className="attributes-section">
        {renderAttribute('WiFi Speed', cafe.attributes.wifiSpeed, <Zap className="icon-small" size={12} />)}
        {renderAttribute('Outlets', cafe.attributes.outlets, <Plug className="icon-small" size={12} />)}
        {renderAttribute('Vibe', cafe.attributes.vibe, <Heart className="icon-small" size={12} />)}
        {renderAttribute('Service', cafe.attributes.service, <Users className="icon-small" size={12} />)}
        {renderAttribute('Coffee Quality', cafe.attributes.coffeeQuality, <Coffee className="icon-small" size={12} />)}
        {renderAttribute('Coffee Price', cafe.attributes.coffeePrice, <span style={{fontSize: '12px'}}>$</span>)}
      </div>

      {/* Click hint */}
      <div style={{
        marginTop: '12px',
        padding: '8px',
        background: '#f9f9f9',
        borderRadius: '6px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#666666'
      }}>
        Click to view details
      </div>
    </div>
  );
};

export default CafeCard; 