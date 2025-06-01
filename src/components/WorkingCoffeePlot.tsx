import React, { useState } from 'react';
import { Cafe } from '../types/Cafe';

interface WorkingCoffeePlotProps {
  cafes: Cafe[];
  selectedCafe?: Cafe | null;
  onCafeSelect?: (cafe: Cafe) => void;
}

const WorkingCoffeePlot: React.FC<WorkingCoffeePlotProps> = ({ 
  cafes, 
  selectedCafe, 
  onCafeSelect 
}) => {
  const [hoveredCafe, setHoveredCafe] = useState<Cafe | null>(null);
  const plotSize = 300;
  const padding = 40;
  const innerSize = plotSize - (padding * 2);

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    }}>
      <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '18px',
        fontWeight: '600',
        color: '#000000',
        textAlign: 'center'
      }}>
        Working vs Coffee Quality
      </h3>
      
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <svg width={plotSize} height={plotSize} style={{ border: '1px solid #e5e7eb' }}>
          {/* Grid lines */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
            <g key={i}>
              {/* Vertical grid lines */}
              <line
                x1={padding + (i * innerSize / 10)}
                y1={padding}
                x2={padding + (i * innerSize / 10)}
                y2={plotSize - padding}
                stroke="#f3f4f6"
                strokeWidth="1"
              />
              {/* Horizontal grid lines */}
              <line
                x1={padding}
                y1={padding + (i * innerSize / 10)}
                x2={plotSize - padding}
                y2={padding + (i * innerSize / 10)}
                stroke="#f3f4f6"
                strokeWidth="1"
              />
            </g>
          ))}
          
          {/* Axes */}
          <line
            x1={padding}
            y1={plotSize - padding}
            x2={plotSize - padding}
            y2={plotSize - padding}
            stroke="#000000"
            strokeWidth="2"
          />
          <line
            x1={padding}
            y1={padding}
            x2={padding}
            y2={plotSize - padding}
            stroke="#000000"
            strokeWidth="2"
          />
          
          {/* Axis labels */}
          <text
            x={plotSize / 2}
            y={plotSize - 10}
            textAnchor="middle"
            fontSize="12"
            fill="#666666"
            fontWeight="600"
          >
            Coffee Quality →
          </text>
          <text
            x={15}
            y={plotSize / 2}
            textAnchor="middle"
            fontSize="12"
            fill="#666666"
            fontWeight="600"
            transform={`rotate(-90, 15, ${plotSize / 2})`}
          >
            ← Working Quality
          </text>
          
          {/* Scale numbers */}
          {[0, 2, 4, 6, 8, 10].map(num => (
            <g key={num}>
              {/* X-axis numbers */}
              <text
                x={padding + (num * innerSize / 10)}
                y={plotSize - padding + 15}
                textAnchor="middle"
                fontSize="10"
                fill="#666666"
              >
                {num}
              </text>
              {/* Y-axis numbers */}
              <text
                x={padding - 10}
                y={plotSize - padding - (num * innerSize / 10) + 3}
                textAnchor="middle"
                fontSize="10"
                fill="#666666"
              >
                {num}
              </text>
            </g>
          ))}
          
          {/* Cafe points */}
          {cafes.map(cafe => {
            const x = padding + (cafe.workingVsCoffeeQuality.coffeeQuality * innerSize / 10);
            const y = plotSize - padding - (cafe.workingVsCoffeeQuality.working * innerSize / 10);
            const isSelected = selectedCafe?.id === cafe.id;
            const isHovered = hoveredCafe?.id === cafe.id;
            
            return (
              <g key={cafe.id}>
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 8 : isHovered ? 7 : 6}
                  fill={isSelected ? '#000000' : isHovered ? '#1d4ed8' : '#3b82f6'}
                  stroke={isSelected ? '#ffffff' : isHovered ? '#ffffff' : '#1d4ed8'}
                  strokeWidth={isSelected ? 3 : isHovered ? 2 : 2}
                  style={{ 
                    cursor: onCafeSelect ? 'pointer' : 'default',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => onCafeSelect && onCafeSelect(cafe)}
                  onMouseEnter={() => setHoveredCafe(cafe)}
                  onMouseLeave={() => setHoveredCafe(null)}
                />
                {(isSelected || isHovered) && (
                  <text
                    x={x}
                    y={y - 15}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#000000"
                    fontWeight="600"
                    style={{ pointerEvents: 'none' }}
                  >
                    {cafe.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
        
        {/* Legend */}
        <div style={{
          marginTop: '12px',
          fontSize: '11px',
          color: '#666666',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '4px' }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#3b82f6',
              marginRight: '6px'
            }}></span>
            Hover over points to see cafe names
          </div>
          <div>
            Top-right = Best for both working & coffee
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingCoffeePlot; 