import React from 'react';
import { Cafe } from '../types/Cafe';

interface WorkingCoffeePlotProps {
  cafes: Cafe[];
  selectedCafe?: Cafe | null;
  onCafeSelect: (cafe: Cafe) => void;
  onFilterChange?: (filterType: 'all' | 'working' | 'coffee' | 'overall') => void;
}

const WorkingCoffeePlot: React.FC<WorkingCoffeePlotProps> = ({ 
  cafes, 
  selectedCafe, 
  onCafeSelect,
  onFilterChange
}) => {
  const plotWidth = Math.max(800, window.innerWidth - 100); // Minimum 800px width
  const plotHeight = Math.max(600, window.innerHeight - 160); // Minimum 600px height

  // Calculate positions for each cafe
  const getCafePosition = (cafe: Cafe) => {
    const x = (cafe.workingVsCoffeeQuality.working / 10) * (plotWidth - 140) + 70;
    const y = plotHeight - ((cafe.workingVsCoffeeQuality.coffeeQuality / 10) * (plotHeight - 140) + 70);
    return { x, y };
  };

  return (
    <div style={{
      width: '100%',
      height: `${plotHeight + 40}px`,
      background: '#fafafa',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      position: 'relative',
      margin: '20px 0',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
    }}>
      {/* Title */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '20px',
        fontWeight: '600',
        color: '#000000',
        textAlign: 'center'
      }}>
        Working Quality vs Coffee Quality
      </div>

      {/* Floating Filter Bar */}
      {onFilterChange && (
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          display: 'flex',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '8px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          zIndex: 50
        }}>
          <button
            onClick={() => onFilterChange('overall')}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #e5e7eb',
              background: '#000000',
              color: '#ffffff',
              fontSize: '12px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s ease'
            }}
          >
            📊 Overall
          </button>
          <button
            onClick={() => onFilterChange('all')}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #e5e7eb',
              background: '#ffffff',
              color: '#666666',
              fontSize: '12px',
              cursor: 'pointer',
              fontWeight: '400',
              transition: 'all 0.2s ease'
            }}
          >
            All Cafes
          </button>
          <button
            onClick={() => onFilterChange('working')}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #e5e7eb',
              background: '#ffffff',
              color: '#666666',
              fontSize: '12px',
              cursor: 'pointer',
              fontWeight: '400',
              transition: 'all 0.2s ease'
            }}
          >
            🖥️ Working
          </button>
          <button
            onClick={() => onFilterChange('coffee')}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #e5e7eb',
              background: '#ffffff',
              color: '#666666',
              fontSize: '12px',
              cursor: 'pointer',
              fontWeight: '400',
              transition: 'all 0.2s ease'
            }}
          >
            ☕ Coffee
          </button>
        </div>
      )}

      {/* Y-axis label */}
      <div style={{
        position: 'absolute',
        left: '20px',
        top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        fontSize: '14px',
        fontWeight: '600',
        color: '#666666',
        transformOrigin: 'center'
      }}>
        Coffee Quality →
      </div>

      {/* X-axis label */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '14px',
        fontWeight: '600',
        color: '#666666'
      }}>
        ← Working Quality →
      </div>

      {/* Grid lines */}
      <svg 
        width={plotWidth} 
        height={plotHeight}
        style={{ position: 'absolute', top: '40px', left: '50px' }}
      >
        {/* Vertical grid lines */}
        {Array.from({ length: 11 }, (_, i) => (
          <line
            key={`v-${i}`}
            x1={(i / 10) * (plotWidth - 140) + 70}
            y1={70}
            x2={(i / 10) * (plotWidth - 140) + 70}
            y2={plotHeight - 70}
            stroke="#e5e7eb"
            strokeWidth="1"
            opacity="0.5"
          />
        ))}
        
        {/* Horizontal grid lines */}
        {Array.from({ length: 11 }, (_, i) => (
          <line
            key={`h-${i}`}
            x1={70}
            y1={70 + (i / 10) * (plotHeight - 140)}
            x2={plotWidth - 70}
            y2={70 + (i / 10) * (plotHeight - 140)}
            stroke="#e5e7eb"
            strokeWidth="1"
            opacity="0.5"
          />
        ))}

        {/* Axes */}
        <line
          x1={70}
          y1={70}
          x2={70}
          y2={plotHeight - 70}
          stroke="#333333"
          strokeWidth="2"
        />
        <line
          x1={70}
          y1={plotHeight - 70}
          x2={plotWidth - 70}
          y2={plotHeight - 70}
          stroke="#333333"
          strokeWidth="2"
        />

        {/* Axis labels */}
        {Array.from({ length: 11 }, (_, i) => (
          <g key={`x-label-${i}`}>
            <text
              x={(i / 10) * (plotWidth - 140) + 70}
              y={plotHeight - 45}
              textAnchor="middle"
              fontSize="12"
              fill="#666666"
            >
              {i}
            </text>
          </g>
        ))}
        
        {Array.from({ length: 11 }, (_, i) => (
          <g key={`y-label-${i}`}>
            <text
              x={55}
              y={plotHeight - 70 - (i / 10) * (plotHeight - 140) + 4}
              textAnchor="middle"
              fontSize="12"
              fill="#666666"
            >
              {i}
            </text>
          </g>
        ))}
      </svg>

      {/* Cafe dots */}
      {cafes.map((cafe) => {
        const { x, y } = getCafePosition(cafe);
        const isSelected = selectedCafe?.id === cafe.id;
        
        return (
          <div
            key={cafe.id}
            onClick={() => onCafeSelect(cafe)}
            style={{
              position: 'absolute',
              left: `${x + 50}px`,
              top: `${y + 40}px`,
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: isSelected ? '#000000' : '#ffffff',
              border: `2px solid ${isSelected ? '#333333' : '#e5e7eb'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '16px',
              boxShadow: isSelected 
                ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                : '0 2px 8px rgba(0, 0, 0, 0.15)',
              transform: isSelected ? 'scale(1.2)' : 'scale(1)',
              transition: 'all 0.3s ease',
              zIndex: isSelected ? 10 : 1
            }}
            onMouseEnter={(e) => {
              if (!isSelected) {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSelected) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
              }
            }}
            title={`${cafe.name} - Working: ${cafe.workingVsCoffeeQuality.working}/10, Coffee: ${cafe.workingVsCoffeeQuality.coffeeQuality}/10`}
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

      {/* Legend */}
      <div style={{
        position: 'absolute',
        top: '70px',
        right: '20px',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        fontSize: '12px',
        color: '#666666',
        maxWidth: '200px'
      }}>
        <div style={{ 
          fontWeight: '600', 
          marginBottom: '8px', 
          color: '#000000' 
        }}>
          Legend ({cafes.length} cafes)
        </div>
        <div style={{ marginBottom: '4px' }}>
          • Higher = Better for working/coffee
        </div>
        <div style={{ marginBottom: '4px' }}>
          • Top right = Best overall
        </div>
        <div>
          • Click ☕ for details
        </div>
      </div>

      {/* Selected cafe info */}
      {selectedCafe && (
        <div style={{
          position: 'absolute',
          bottom: '60px',
          left: '20px',
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '12px 16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          border: '1px solid #e5e7eb',
          maxWidth: '300px',
          zIndex: 20
        }}>
          <div style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#000000',
            marginBottom: '4px'
          }}>
            {selectedCafe.name}
          </div>
          <div style={{ 
            fontSize: '12px', 
            color: '#666666',
            marginBottom: '8px'
          }}>
            {selectedCafe.location.address}
          </div>
          <div style={{ 
            display: 'flex', 
            gap: '12px',
            fontSize: '14px'
          }}>
            <span style={{ 
              background: '#f0f9ff', 
              color: '#0369a1', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontWeight: '600'
            }}>
              Working: {selectedCafe.workingVsCoffeeQuality.working}/10
            </span>
            <span style={{ 
              background: '#fef3c7', 
              color: '#d97706', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontWeight: '600'
            }}>
              Coffee: {selectedCafe.workingVsCoffeeQuality.coffeeQuality}/10
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkingCoffeePlot; 