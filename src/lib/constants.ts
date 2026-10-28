/**
 * Design System Constants
 */
export const DESIGN_SYSTEM = {
  colors: {
    paper: '#f8fafc',
    ink: '#0b1220',
    cobalt: {
      50: '#eff4ff',
      100: '#dbe6ff',
      200: '#bfd3fe',
      300: '#93b4fd',
      400: '#608dfa',
      500: '#2563eb',
      600: '#1d4ed8',
      700: '#1e40af',
      800: '#1e3a8a',
      900: '#172554',
    },
    emerald: {
      500: '#10b981',
      600: '#059669',
    }
  },
  shadows: {
    card: '0 1px 2px rgba(15,23,42,.04), 0 12px 30px -12px rgba(15,23,42,.18)',
    cardhi: '0 2px 4px rgba(15,23,42,.06), 0 28px 50px -18px rgba(37,99,235,.30)',
    nav: '0 1px 0 rgba(15,23,42,.06), 0 12px 24px -16px rgba(15,23,42,.08)',
    pill: '0 2px 8px rgba(37,99,235,.25)',
    sheet: '0 -10px 40px rgba(15,23,42,.12)'
  }
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  priceDisplay: string;
  numericPrice: number;
  category: string;
  budgetBracket: string;
  imageUrl: string;
  badge?: string;
  batteryHealth?: string;
  heartNote?: string;
  inStock: boolean;
};

export type WarrantyItem = {
  title: string;
  desc: string;
  icon: string;
};

export type Review = {
  id: number;
  customerName: string;
  rating: number;
  reviewText: string;
  photoPath?: string;
  purchaseDate: string;
  status: string;
};

export type StoreInfo = {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  socials: {
    facebook: string;
    instagram: string;
    tiktok: string;
    youtube: string;
  };
};

export type SiteData = {
  products: Product[];
  announcements: any[];
  reviews: Review[];
  categoryDescriptions: Record<string, any>;
  warranty: WarrantyItem[];
  storeInfo: StoreInfo;
};