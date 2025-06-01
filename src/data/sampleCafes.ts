import { Cafe } from '../types/Cafe';

export const sampleCafes: Cafe[] = [
  {
    id: '1',
    name: 'Blue Bottle Coffee',
    description: 'Minimalist coffee shop with excellent single-origin beans and a clean, modern atmosphere perfect for focused work.',
    location: {
      lat: 37.7749,
      lng: -122.4194,
      address: '66 Mint St, San Francisco, CA 94103'
    },
    rating: 8.5,
    workingVsCoffeeQuality: {
      working: 8,
      coffeeQuality: 9
    },
    attributes: {
      wifiSpeed: 4,
      outlets: 3,
      vibe: 4,
      service: 4,
      coffeeQuality: 5,
      coffeePrice: 4
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Ritual Coffee Roasters',
    description: 'Spacious cafe with communal tables, strong wifi, and a buzzing atmosphere that\'s great for collaborative work.',
    location: {
      lat: 37.7849,
      lng: -122.4094,
      address: '1026 Valencia St, San Francisco, CA 94110'
    },
    rating: 8.2,
    workingVsCoffeeQuality: {
      working: 9,
      coffeeQuality: 8
    },
    attributes: {
      wifiSpeed: 5,
      outlets: 4,
      vibe: 5,
      service: 4,
      coffeeQuality: 4,
      coffeePrice: 3
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Sightglass Coffee',
    description: 'Industrial-chic roastery with high ceilings, plenty of seating, and the aroma of freshly roasted beans.',
    location: {
      lat: 37.7649,
      lng: -122.4094,
      address: '270 7th St, San Francisco, CA 94103'
    },
    rating: 8.7,
    workingVsCoffeeQuality: {
      working: 7,
      coffeeQuality: 9
    },
    attributes: {
      wifiSpeed: 4,
      outlets: 5,
      vibe: 4,
      service: 5,
      coffeeQuality: 5,
      coffeePrice: 4
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    name: 'Philz Coffee',
    description: 'Cozy neighborhood spot known for custom blended coffee and a relaxed, homey atmosphere.',
    location: {
      lat: 37.7849,
      lng: -122.4294,
      address: '3101 24th St, San Francisco, CA 94110'
    },
    rating: 7.8,
    workingVsCoffeeQuality: {
      working: 6,
      coffeeQuality: 8
    },
    attributes: {
      wifiSpeed: 3,
      outlets: 2,
      vibe: 5,
      service: 5,
      coffeeQuality: 4,
      coffeePrice: 3
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1559496417-e7f25cb247cd?w=400&h=300&fit=crop'
  },
  {
    id: '5',
    name: 'The Mill',
    description: 'Trendy spot with artisanal toast, excellent coffee, and a hip atmosphere that attracts creatives.',
    location: {
      lat: 37.7849,
      lng: -122.4394,
      address: '736 Divisadero St, San Francisco, CA 94117'
    },
    rating: 8.0,
    workingVsCoffeeQuality: {
      working: 5,
      coffeeQuality: 8
    },
    attributes: {
      wifiSpeed: 3,
      outlets: 2,
      vibe: 5,
      service: 4,
      coffeeQuality: 4,
      coffeePrice: 4
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop'
  }
]; 