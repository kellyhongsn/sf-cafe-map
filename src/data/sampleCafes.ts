import { Cafe } from '../types/Cafe';

export const sampleCafes: Cafe[] = [
  {
    id: '1',
    name: 'Delah Cafe',
    description: 'Good because open late but also it\'s loud and drinks/coffee is not the best for given price. But it\'s a nice place to co-work with people and unique vibe.',
    location: {
      lat: 37.7939,
      lng: -122.4021,
      address: '450 Sansome St, San Francisco, CA 94111'
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
    picture: '/images/cafes/delah-cafe.png'
  },
  {
    id: '2',
    name: 'Le Cafe du Soleil',
    description: 'Good vibes and food, usually able to find seating but outlets are a bit limited.',
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
    picture: '/images/cafes/soleil.png'
  },
  {
    id: '3',
    name: 'Atlas Cafe',
    description: 'Good vibes and food, usually able to find seating.',
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
    picture: '/images/cafes/atlas.png'
  },
  {
    id: '4',
    name: 'Saint Frank Coffee',
    description: 'Good coffee, but limited seating and wifi during weekends. Also, coffee is more on the expensive side. (Their special is said to be the cappuccino but it was $9 so I never tried :()',
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
    id: '5',
    name: 'Motoring Coffee',
    description: 'Really good like nice drinks and good prices, good vibes. But it\'s pretty popular so difficult to get seating sometimes. Cool interior decorations.',
    location: {
      lat: 37.7966,
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
    id: '6',
    name: 'Sightglass Coffee',
    description: 'Lots of seating, but no wifi. Their house blend drip is good, but pour overs are not the best.',
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
    id: '7',
    name: 'Wrecking Ball Coffee',
    description: 'No seating, but really good coffee. I love their Ethiopia Yirgacheffe beans for iced pour overs. You\'ll be a fan if you like acidic coffee too.',
    location: {
      lat: 37.7946,
      lng: -122.4354,
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
    id: '8',
    name: 'Blue Bottle Coffee',
    description: '(Henry) Not good (black) coffee, but best interior and store vibes. Coffees are very overrated imho. I always get a latte here instead of black.',
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
    id: '9',
    name: 'Haus Coffee',
    description: 'Good coffee and interior is really nice but not a great place for working (wifi isn\'t great & no outlets).',
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
    id: '10',
    name: 'Cafe Réveille',
    description: 'Good food and drinks, sometimes very crowded on weekends so hard to find seating.',
    location: {
      lat: 37.7716,
      lng: -122.4462,
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
    id: '11',
    name: 'Coffeeshop',
    description: 'Pretty decent drinks, there is like one table and bar seating for working.',
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
    id: '12',
    name: 'The Coffee Movement',
    description: 'BEST COFFEE. Kelly will not drink coffee from any other cafe. No spots to work, but it\'s so good that I will still go there just for coffee. This coffee shop is within another restaurant. Henry agrees with them having the best coffee.',
    location: {
      lat: 37.7589,
      lng: -122.4138,
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