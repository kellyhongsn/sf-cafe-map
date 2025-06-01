import React, { useState } from 'react';
import { Map, List, Coffee } from 'lucide-react';
import CafeMap from './components/CafeMap';
import CafeCard from './components/CafeCard';
import { Cafe } from './types/Cafe';
import { sampleCafes } from './data/sampleCafes';

type ViewMode = 'map' | 'list';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('map');
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const [sortedCafes] = useState<Cafe[]>(
    [...sampleCafes].sort((a, b) => b.rating - a.rating)
  );

  const handleCafeSelect = (cafe: Cafe) => {
    setSelectedCafe(cafe);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f3ff 0%, #eff6ff 100%)' }}>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <Coffee className="icon icon-purple" size={28} />
            <h1 className="header-title">SF Cafe Map</h1>
            <span className="header-subtitle">
              Find the perfect cafe to work from
            </span>
          </div>
          
          {/* View Toggle */}
          <div className="view-toggle">
            <button
              onClick={() => setViewMode('map')}
              className={`view-button ${viewMode === 'map' ? 'active' : ''}`}
            >
              <Map size={16} />
              Map
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
            >
              <List size={16} />
              List
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        {viewMode === 'map' ? (
          <div className="map-container">
            <CafeMap
              cafes={sortedCafes}
              selectedCafe={selectedCafe}
              onCafeSelect={handleCafeSelect}
            />
          </div>
        ) : (
          <div>
            <div className="list-header">
              <h2 className="list-title">
                Top Rated Cafes for Working
              </h2>
              <p className="list-subtitle">
                Ranked by overall rating • {sortedCafes.length} cafes found
              </p>
            </div>
            
            <div className="cafe-grid">
              {sortedCafes.map((cafe) => (
                <CafeCard
                  key={cafe.id}
                  cafe={cafe}
                  onClick={() => handleCafeSelect(cafe)}
                  isSelected={selectedCafe?.id === cafe.id}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
