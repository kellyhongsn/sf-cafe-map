import { Cafe } from '../types/Cafe';

export const sampleCafes: Cafe[] = [
  {
    id: '3',
    name: 'Sightglass Coffee',
    description: 'Industrial-chic roastery with high ceilings and abundant seating, though WiFi isn\'t available. Their house blend drip coffee shines, making it perfect for coffee purists who don\'t need to work online.',
    location: {
      lat: 37.7649,
      lng: -122.4094,
      address: '270 7th St, San Francisco, CA 94103'
    },
    rating: 5.5,
    workingVsCoffeeQuality: {
      working: 4,
      coffeeQuality: 7
    },
    attributes: {
      wifiSpeed: 1,
      outlets: 1,
      vibe: 3,
      service: 4,
      coffeeQuality: 2,
      coffeePrice: 3
    },
    hasWifi: false,
    picture: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop'
  },
  {
    id: '6',
    name: 'Delah Cafe',
    description: 'A vibrant late-night spot perfect for co-working sessions with friends. While the coffee and drinks are decent for the price, the real draw is the unique atmosphere and extended hours that make it ideal for evening work sessions.',
    location: {
      lat: 37.7749,
      lng: -122.3951,
      address: '370 4th St, San Francisco, CA 94107'
    },
    rating: 6.0,
    workingVsCoffeeQuality: {
      working: 6,
      coffeeQuality: 6
    },
    attributes: {
      wifiSpeed: 4,
      outlets: 4,
      vibe: 3,
      service: 3,
      coffeeQuality: 3,
      coffeePrice: 3
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1559496417-e7f25cb247cd?w=400&h=300&fit=crop'
  },
  {
    id: '7',
    name: 'Le Cafe du Soleil',
    description: 'A charming neighborhood cafe with excellent food and inviting vibes. While outlets are somewhat limited, you can usually find a good spot to settle in for work. The quality coffee and food make it worth the visit.',
    location: {
      lat: 37.7706,
      lng: -122.4472,
      address: '400 Waller St, San Francisco, CA 94117'
    },
    rating: 8.0,
    workingVsCoffeeQuality: {
      working: 8,
      coffeeQuality: 8
    },
    attributes: {
      wifiSpeed: 4,
      outlets: 3,
      vibe: 4,
      service: 4,
      coffeeQuality: 4,
      coffeePrice: 3
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop'
  },
  {
    id: '8',
    name: 'Atlas Cafe',
    description: 'A Mission District gem with fantastic vibes, delicious food, and reliable seating availability. The combination of great coffee and a welcoming atmosphere makes it an excellent choice for productive work sessions.',
    location: {
      lat: 37.7599,
      lng: -122.4148,
      address: '3049 20th St, San Francisco, CA 94110'
    },
    rating: 8.0,
    workingVsCoffeeQuality: {
      working: 9,
      coffeeQuality: 7
    },
    attributes: {
      wifiSpeed: 4,
      outlets: 4,
      vibe: 4,
      service: 4,
      coffeeQuality: 4,
      coffeePrice: 3
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop'
  },
  {
    id: '9',
    name: 'Saint Frank Coffee',
    description: 'A premium coffee destination known for exceptional quality, though seating is limited and WiFi can be spotty on weekends. While their famous $9 cappuccino might be pricey, the coffee craftsmanship is undeniable.',
    location: {
      lat: 37.7956,
      lng: -122.4244,
      address: '2340 Polk St, San Francisco, CA 94109'
    },
    rating: 8.0,
    workingVsCoffeeQuality: {
      working: 8,
      coffeeQuality: 8
    },
    attributes: {
      wifiSpeed: 4,
      outlets: 1,
      vibe: 5,
      service: 4,
      coffeeQuality: 4,
      coffeePrice: 5
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop'
  },
  {
    id: '10',
    name: 'Motoring Coffee',
    description: 'A popular Union Street spot with excellent drinks, reasonable prices, and cool interior design. The quality and atmosphere draw crowds, so arriving early is recommended to secure seating for work.',
    location: {
      lat: 37.7956,
      lng: -122.4344,
      address: '1525 Union St, San Francisco, CA 94123'
    },
    rating: 8.0,
    workingVsCoffeeQuality: {
      working: 8,
      coffeeQuality: 8
    },
    attributes: {
      wifiSpeed: 4,
      outlets: 3,
      vibe: 5,
      service: 4,
      coffeeQuality: 4,
      coffeePrice: 3
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'
  },
  {
    id: '11',
    name: 'Wrecking Ball Coffee',
    description: 'A coffee purist\'s paradise with no seating but exceptional beans. Their Ethiopia Yirgacheffe iced pour-overs are legendary among acidic coffee lovers. Perfect for grab-and-go coffee perfection.',
    location: {
      lat: 37.7956,
      lng: -122.4344,
      address: '2271 Union St, San Francisco, CA 94123'
    },
    rating: 5.5,
    workingVsCoffeeQuality: {
      working: 1,
      coffeeQuality: 10
    },
    attributes: {
      wifiSpeed: 1,
      outlets: 1,
      vibe: 3,
      service: 4,
      coffeeQuality: 5,
      coffeePrice: 4
    },
    hasWifi: false,
    picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
  },
  {
    id: '12',
    name: 'Blue Bottle Coffee - Fillmore',
    description: 'Beautiful interior design and unmatched store ambiance, though the black coffee doesn\'t live up to the hype. The space is perfect for working, and their lattes are much better than their drip coffee.',
    location: {
      lat: 37.7856,
      lng: -122.4344,
      address: '2453 Fillmore St, San Francisco, CA 94115'
    },
    rating: 5.5,
    workingVsCoffeeQuality: {
      working: 7,
      coffeeQuality: 4
    },
    attributes: {
      wifiSpeed: 4,
      outlets: 4,
      vibe: 5,
      service: 4,
      coffeeQuality: 2,
      coffeePrice: 4
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&h=300&fit=crop'
  },
  {
    id: '13',
    name: 'Haus Coffee',
    description: 'A beautifully designed cafe with excellent coffee, but challenging for remote work due to slow WiFi and no outlets. Best enjoyed as a coffee destination rather than a workspace.',
    location: {
      lat: 37.7519,
      lng: -122.4194,
      address: '3086 24th St, San Francisco, CA 94110'
    },
    rating: 5.0,
    workingVsCoffeeQuality: {
      working: 4,
      coffeeQuality: 6
    },
    attributes: {
      wifiSpeed: 2,
      outlets: 1,
      vibe: 3,
      service: 4,
      coffeeQuality: 4,
      coffeePrice: 3
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop'
  },
  {
    id: '14',
    name: 'Cafe Réveille',
    description: 'A popular spot serving excellent food and drinks in a lively atmosphere. Weekend crowds can make seating challenging, but the quality and extended evening hours make it worth the wait.',
    location: {
      lat: 37.7706,
      lng: -122.4472,
      address: '201 Steiner St, San Francisco, CA 94117'
    },
    rating: 6.5,
    workingVsCoffeeQuality: {
      working: 6,
      coffeeQuality: 7
    },
    attributes: {
      wifiSpeed: 4,
      outlets: 1,
      vibe: 4,
      service: 4,
      coffeeQuality: 4,
      coffeePrice: 3
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop'
  },
  {
    id: '15',
    name: 'Coffeeshop',
    description: 'A cozy neighborhood spot with solid drinks and minimal seating - just one table and bar seating. Perfect for a quick coffee break or solo work session in an intimate setting.',
    location: {
      lat: 37.7569,
      lng: -122.4194,
      address: '2761 21st St, San Francisco, CA 94110'
    },
    rating: 6.0,
    workingVsCoffeeQuality: {
      working: 4,
      coffeeQuality: 8
    },
    attributes: {
      wifiSpeed: 4,
      outlets: 1,
      vibe: 4,
      service: 4,
      coffeeQuality: 3,
      coffeePrice: 3
    },
    hasWifi: true,
    picture: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop'
  },
  {
    id: '16',
    name: 'The Coffee Movement',
    description: 'Absolutely exceptional coffee that has earned legendary status among SF coffee enthusiasts. Located within another restaurant with no workspace amenities, but the coffee quality is so outstanding it\'s worth the trip just for takeaway.',
    location: {
      lat: 37.7599,
      lng: -122.4148,
      address: '2814 19th St, San Francisco, CA 94110'
    },
    rating: 5.5,
    workingVsCoffeeQuality: {
      working: 1,
      coffeeQuality: 10
    },
    attributes: {
      wifiSpeed: 1,
      outlets: 1,
      vibe: 5,
      service: 4,
      coffeeQuality: 5,
      coffeePrice: 4
    },
    hasWifi: false,
    picture: 'https://images.unsplash.com/photo-1498804103079-b6e109adb7c2?w=400&h=300&fit=crop'
  }
]; 