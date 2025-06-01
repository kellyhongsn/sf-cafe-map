export interface Cafe {
  id: string;
  name: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  rating: number; // out of 10
  workingVsCoffeeQuality: {
    working: number; // 1-10 scale
    coffeeQuality: number; // 1-10 scale
  };
  attributes: {
    wifiSpeed: number; // 1-5 scale
    outlets: number; // 1-5 scale
    vibe: number; // 1-5 scale
    service: number; // 1-5 scale
    coffeeQuality: number; // 1-5 scale
    coffeePrice: number; // 1-5 scale
  };
  hasWifi: boolean;
  picture: string; // URL or path to image
} 