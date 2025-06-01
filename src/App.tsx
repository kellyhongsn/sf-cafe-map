import React, { useState } from 'react';
import { Map, List } from 'lucide-react';
import CafeMap from './components/CafeMap';
import CafeCard from './components/CafeCard';
import CafeDetail from './components/CafeDetail';
import { Cafe } from './types/Cafe';
import { sampleCafes } from './data/sampleCafes';

type ViewMode = 'map' | 'list' | 'detail';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('map');
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const [detailCafe, setDetailCafe] = useState<Cafe | null>(null);
  const [sortedCafes] = useState<Cafe[]>(
    [...sampleCafes].sort((a, b) => b.rating - a.rating)
  );

  const handleCafeClick = (cafe: Cafe) => {
    setDetailCafe(cafe);
    setViewMode('detail');
  };

  const handleBackToMap = () => {
    setDetailCafe(null);
    setViewMode('map');
  };

  if (viewMode === 'detail' && detailCafe) {
    return (
      <>
        <div style={{ minHeight: '100vh', background: '#ffffff' }}>
          <CafeDetail cafe={detailCafe} onBack={handleBackToMap} />
        </div>
        <footer className="footer">
          <p className="footer-text">Created by Kelly Hong</p>
        </footer>
      </>
    );
  }

  return (
    <>
      <div style={{ minHeight: '100vh', background: '#ffffff' }}>
        {/* Header */}
        <header className="header">
          <div className="header-container">
            <div className="header-left">
              <span className="coffee-emoji">☕</span>
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
                onCafeSelect={(cafe) => {
                  if (selectedCafe?.id === cafe.id) {
                    // If clicking the same cafe, open detail page
                    handleCafeClick(cafe);
                  } else {
                    // Otherwise, just select it
                    setSelectedCafe(cafe);
                  }
                }}
              />
              {selectedCafe && (
                <div style={{
                  position: 'fixed',
                  bottom: '20px',
                  right: '20px',
                  background: 'white',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e5e7eb',
                  cursor: 'pointer'
                }}
                onClick={() => handleCafeClick(selectedCafe)}
                >
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#000000', marginBottom: '4px' }}>
                    {selectedCafe.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#666666' }}>
                    Click to view details →
                  </div>
                </div>
              )}
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
                    onClick={() => handleCafeClick(cafe)}
                    isSelected={selectedCafe?.id === cafe.id}
                  />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">Created by Kelly Hong</p>
      </footer>
    </>
  );
}

export default App;
