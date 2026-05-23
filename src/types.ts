export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starter' | 'main' | 'dessert' | 'cocktail';
  image: string;
  tags: string[];
  sommelierPairing?: string;
  ingredients?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  source?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  category: 'interior' | 'culinary' | 'bar' | 'moments';
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  seatingArea: 'main-salon' | 'garden-terrace' | 'chef-counter';
  dietaryRestrictions?: string;
  specialOccasion?: 'none' | 'birthday' | 'anniversary' | 'business' | 'other';
  notes?: string;
}
