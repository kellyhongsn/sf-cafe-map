import React, { useState } from 'react';
import { Map, List, X } from 'lucide-react';
import CafeMap from './components/CafeMap';
import CafeCard from './components/CafeCard';
import CafeDetail from './components/CafeDetail';
import WorkingCoffeePlot from './components/WorkingCoffeePlot';
import { Cafe } from './types/Cafe';
import { sampleCafes } from './data/sampleCafes';

type ViewMode = 'map' | 'list' | 'detail';
type FilterType = 'all' | 'working' | 'coffee' | 'overall';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('map');
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const [detailCafe, setDetailCafe] = useState<Cafe | null>(null);
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [sortedCafes] = useState<Cafe[]>(
    [...sampleCafes].sort((a, b) => b.rating - a.rating)
  );

  const handleCafeClick = (cafe: Cafe) => {
    if (viewMode === 'map') {
      setSelectedCafe(cafe);
    } else {
      // For list view, open full page detail
      setDetailCafe(cafe);
      setViewMode('detail');
    }
  };

  const handleCloseSidebar = () => {
    setSelectedCafe(null);
  };

  const handleBackToList = () => {
    setDetailCafe(null);
    setViewMode('list');
  };

  const getFilteredCafes = () => {
    let filtered = [...sortedCafes];
    
    if (filterType === 'working') {
      filtered.sort((a, b) => b.workingVsCoffeeQuality.working - a.workingVsCoffeeQuality.working);
    } else if (filterType === 'coffee') {
      filtered.sort((a, b) => b.workingVsCoffeeQuality.coffeeQuality - a.workingVsCoffeeQuality.coffeeQuality);
    }
    
    return filtered;
  };

  // Full page detail view
  if (viewMode === 'detail' && detailCafe) {
    return (
      <>
        <div style={{ minHeight: '100vh', background: '#ffffff' }}>
          <CafeDetail cafe={detailCafe} onBack={handleBackToList} />
        </div>
        <footer style={{
          background: '#f9f9f9',
          padding: '20px',
          textAlign: 'center',
          borderTop: '1px solid #e5e7eb',
          fontSize: '14px',
          color: '#666666'
        }}>
          Created with ❤️ by{' '}
          <a 
            href="https://x.com/alishbaimran_" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#666666', textDecoration: 'none' }}
          >
            Alishba Imran
          </a>
          {', '}
          <a 
            href="https://x.com/kellyhongsn" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#666666', textDecoration: 'none' }}
          >
            Kelly Hong
          </a>
          {', '}
          <a 
            href="https://henryhmko.github.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#666666', textDecoration: 'none' }}
          >
            Henry Ko
          </a>
        </footer>
      </>
    );
  }

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      {/* Top Navigation Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '20px' }}>☕</span>
          <h1 style={{ 
            margin: 0, 
            fontSize: '18px', 
            fontWeight: '600',
            color: '#000000'
          }}>
            SF Cafe Map
          </h1>
        </div>
        
        <div style={{
          display: 'flex',
          background: '#f3f4f6',
          borderRadius: '8px',
          padding: '4px'
        }}>
          <button
            onClick={() => setViewMode('map')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              background: viewMode === 'map' ? '#ffffff' : 'transparent',
              color: viewMode === 'map' ? '#000000' : '#666666',
              fontWeight: viewMode === 'map' ? '600' : '400',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: viewMode === 'map' ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Map size={16} />
            Map
          </button>
          <button
            onClick={() => setViewMode('list')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              background: viewMode === 'list' ? '#ffffff' : 'transparent',
              color: viewMode === 'list' ? '#000000' : '#666666',
              fontWeight: viewMode === 'list' ? '600' : '400',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: viewMode === 'list' ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <List size={16} />
            List
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ paddingTop: '60px', height: 'calc(100vh - 60px)' }}>
        {viewMode === 'map' ? (
          <div style={{ 
            position: 'relative',
            height: '100%',
            width: '100%'
          }}>
            <CafeMap
              cafes={sortedCafes}
              selectedCafe={selectedCafe}
              onCafeSelect={handleCafeClick}
            />
            
            {/* Side Panel for Cafe Details */}
            {selectedCafe && (
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '400px',
                height: '100%',
                background: 'white',
                boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.15)',
                borderLeft: '1px solid #e5e7eb',
                zIndex: 900,
                overflow: 'auto'
              }}>
                <div style={{
                  padding: '20px',
                  borderBottom: '1px solid #e5e7eb',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h2 style={{ 
                    margin: 0, 
                    fontSize: '18px', 
                    fontWeight: '600',
                    color: '#000000'
                  }}>
                    Cafe Details
                  </h2>
                  <button
                    onClick={handleCloseSidebar}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      borderRadius: '4px',
                      color: '#666666'
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div style={{ padding: '20px' }}>
                  <img 
                    src={selectedCafe.picture} 
                    alt={selectedCafe.name}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '16px'
                    }}
                  />
                  
                  <h3 style={{ 
                    margin: '0 0 8px 0', 
                    fontSize: '20px', 
                    fontWeight: '600',
                    color: '#000000'
                  }}>
                    {selectedCafe.name}
                  </h3>
                  
                  <p style={{ 
                    margin: '0 0 12px 0', 
                    fontSize: '14px', 
                    color: '#666666'
                  }}>
                    {selectedCafe.location.address}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    <span style={{ 
                      background: '#f5f5f5', 
                      color: '#000000', 
                      padding: '4px 8px', 
                      borderRadius: '6px',
                      fontWeight: '600',
                      fontSize: '14px'
                    }}>
                      {selectedCafe.rating}/10
                    </span>
                    {selectedCafe.hasWifi && (
                      <span style={{ 
                        color: '#666666',
                        fontSize: '14px'
                      }}>
                        📶 WiFi Available
                      </span>
                    )}
                  </div>
                  
                  <p style={{ 
                    margin: '0 0 20px 0', 
                    fontSize: '14px', 
                    color: '#333333',
                    lineHeight: '1.5'
                  }}>
                    {selectedCafe.description}
                  </p>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      background: '#f9f9f9',
                      padding: '12px',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '18px', fontWeight: '600', color: '#000000' }}>
                        {selectedCafe.workingVsCoffeeQuality.working}/10
                      </div>
                      <div style={{ fontSize: '12px', color: '#666666' }}>
                        Good for Working
                      </div>
                    </div>
                    <div style={{
                      background: '#f9f9f9',
                      padding: '12px',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '18px', fontWeight: '600', color: '#000000' }}>
                        {selectedCafe.workingVsCoffeeQuality.coffeeQuality}/10
                      </div>
                      <div style={{ fontSize: '12px', color: '#666666' }}>
                        Coffee Quality
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                    fontSize: '12px'
                  }}>
                    <div>WiFi: {'★'.repeat(selectedCafe.attributes.wifiSpeed)}{'☆'.repeat(5-selectedCafe.attributes.wifiSpeed)}</div>
                    <div>Outlets: {'★'.repeat(selectedCafe.attributes.outlets)}{'☆'.repeat(5-selectedCafe.attributes.outlets)}</div>
                    <div>Vibe: {'★'.repeat(selectedCafe.attributes.vibe)}{'☆'.repeat(5-selectedCafe.attributes.vibe)}</div>
                    <div>Service: {'★'.repeat(selectedCafe.attributes.service)}{'☆'.repeat(5-selectedCafe.attributes.service)}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Check if we're showing the 2D plot (overall view) */}
            {filterType === 'overall' ? (
              <div style={{ 
                height: '100%', 
                width: '100%',
                position: 'relative'
              }}>
                <WorkingCoffeePlot 
                  cafes={getFilteredCafes()} 
                  selectedCafe={selectedCafe}
                  onCafeSelect={handleCafeClick}
                  onFilterChange={setFilterType}
                />
              </div>
            ) : (
              <div style={{ padding: '20px', height: '100%', overflow: 'auto', paddingBottom: '100px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <h2 style={{ 
                    margin: '0 0 8px 0', 
                    fontSize: '24px', 
                    fontWeight: '600',
                    color: '#000000'
                  }}>
                    Top Rated Cafes for Working
                  </h2>
                  <p style={{ 
                    margin: '0 0 16px 0', 
                    fontSize: '14px', 
                    color: '#666666'
                  }}>
                    {getFilteredCafes().length} cafes found
                  </p>
                  
                  {/* Filter Buttons */}
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '20px'
                  }}>
                    <button
                      onClick={() => setFilterType('overall' as FilterType)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '6px',
                        border: '1px solid #e5e7eb',
                        background: (filterType as string) === 'overall' ? '#000000' : '#ffffff',
                        color: (filterType as string) === 'overall' ? '#ffffff' : '#666666',
                        fontSize: '14px',
                        cursor: 'pointer',
                        fontWeight: (filterType as string) === 'overall' ? '600' : '400',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      📊 Overall View
                    </button>
                    <button
                      onClick={() => setFilterType('all')}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '6px',
                        border: '1px solid #e5e7eb',
                        background: filterType === 'all' ? '#000000' : '#ffffff',
                        color: filterType === 'all' ? '#ffffff' : '#666666',
                        fontSize: '14px',
                        cursor: 'pointer',
                        fontWeight: filterType === 'all' ? '600' : '400',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      All Cafes
                    </button>
                    <button
                      onClick={() => setFilterType('working')}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '6px',
                        border: '1px solid #e5e7eb',
                        background: filterType === 'working' ? '#000000' : '#ffffff',
                        color: filterType === 'working' ? '#ffffff' : '#666666',
                        fontSize: '14px',
                        cursor: 'pointer',
                        fontWeight: filterType === 'working' ? '600' : '400',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      🖥️ Best for Working
                    </button>
                    <button
                      onClick={() => setFilterType('coffee')}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '6px',
                        border: '1px solid #e5e7eb',
                        background: filterType === 'coffee' ? '#000000' : '#ffffff',
                        color: filterType === 'coffee' ? '#ffffff' : '#666666',
                        fontSize: '14px',
                        cursor: 'pointer',
                        fontWeight: filterType === 'coffee' ? '600' : '400',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      ☕ Best Coffee
                    </button>
                  </div>
                </div>
                
                {/* Cafe Cards Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '20px'
                }}>
                  {getFilteredCafes().map((cafe) => (
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
          </>
        )}
      </div>

      {/* Footer - only show on map and list views */}
      {viewMode !== 'detail' && (
        <footer style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '12px 20px',
          borderTop: '1px solid #e5e7eb',
          fontSize: '12px',
          color: '#666666',
          textAlign: 'center',
          zIndex: 1000
        }}>
          Created with ❤️ by{' '}
          <a 
            href="https://x.com/alishbaimran_" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#1d4ed8', textDecoration: 'none' }}
          >
            Alishba Imran
          </a>
          {', '}
          <a 
            href="https://x.com/kellyhongsn" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#1d4ed8', textDecoration: 'none' }}
          >
            Kelly Hong
          </a>
          {', '}
          <a 
            href="https://henryhmko.github.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#1d4ed8', textDecoration: 'none' }}
          >
            Henry Ko
          </a>
        </footer>
      )}

      {/* Floating Suggest Cafe Button */}
      <button
        onClick={() => window.open('https://forms.gle/2E5hpEDwCDVuGkAz6', '_blank')}
        style={{
          position: 'fixed',
          bottom: viewMode !== 'detail' ? '80px' : '20px', // Adjust position based on footer visibility
          right: '20px',
          background: '#000000',
          color: '#ffffff',
          border: 'none',
          borderRadius: '50px',
          padding: '12px 20px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#333333';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#000000';
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        }}
      >
        <span style={{ fontSize: '16px' }}>☕</span>
        Suggest Cafe
      </button>
    </div>
  );
}

export default App;
