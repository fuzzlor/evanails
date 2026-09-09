export type ScreenType =
  | 'overview'
  | 'services'
  | 'price'
  | 'interior'
  | 'portfolio'
  | 'about'
  | 'contact'
  | 'booking'
  | 'my-bookings';

export type Language = 'en' | 'ru' | 'vi' | 'ko';

export interface ServiceItem {
  id: string;
  titleKey: string;
  category: 'manicure' | 'pedicure' | 'extension' | 'art' | 'combo';
  durationMin: number;
  priceVnd: number;
  image: string;
  isPopular?: boolean;
  tagKey: string;
  descKey: string;
  features: string[];
}

export interface PriceListItem {
  id: string;
  nameKey: string;
  category: 'manicure' | 'pedicure' | 'extension' | 'art' | 'care';
  durationMin: number;
  priceVnd: number;
  descriptionKey?: string;
}

export interface PortfolioItem {
  id: string;
  titleKey: string;
  category: 'manicure' | 'pedicure' | 'art' | 'sculpt' | 'french';
  image: string;
  descKey: string;
  tagKey: string;
  studioIndex: string;
}

export interface InteriorSpace {
  id: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  image: string;
  badgeKey: string;
  aspect: string;
}

export interface BookingRecord {
  id: string;
  clientName: string;
  contact: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  specialNotes?: string;
  masterId?: string;
  masterName?: string;
  totalVnd: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface Master {
  id: string;
  name: string;
  roleKey: string;
  experience: string;
  specialties: string[];
  avatar: string;
  rating: number;
}

export interface ReviewItem {
  id: string;
  author: string;
  roleKey: string;
  avatarBg: string;
  initials: string;
  stars: number;
  quoteKey: string;
}
