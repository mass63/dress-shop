export interface Product {
  id: string;
  name: string;
  category: 'Ladies Wear' | 'Kids Wear' | 'Blouses' | 'Chudidars & Kurtis' | 'Men\'s Alteration' | 'Custom Pieces';
  price?: number;
  priceText?: string; // e.g. "₹899" or "Price on enquiry"
  isAvailable: boolean;
  stockStatus: 'In Stock' | 'Made to Order' | 'Limited Stock';
  image: string;
  additionalImages?: string[];
  description: string;
  fabric?: string;
  sizes?: string[];
  colors?: string[];
  customizable: boolean;
  featured?: boolean;
}

export interface TailoringService {
  id: string;
  title: string;
  category: 'Stitching' | 'Alteration' | 'Custom Design';
  shortDescription: string;
  fullDescription: string;
  startingPrice: string;
  turnaroundTime: string;
  iconName: string; // lucide icon identifier
  image: string;
  highlights: string[];
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Tailoring Work' | 'Dresses' | 'Shop & Craft' | 'Blouses & Ethnic';
  image: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  serviceUsed: string;
  date: string;
}

export interface OpeningHour {
  day: string;
  open: string;
  close: string;
  isClosed?: boolean;
}

export interface ShopConfig {
  shopName: string;
  tagline: string;
  subtitle: string;
  ownerName: string;
  tailorTitle: string;
  experienceYears: string;
  phoneNumber: string;
  displayPhone: string;
  whatsappNumber: string;
  displayWhatsapp: string;
  email: string;
  address: {
    street: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  googleMapsEmbedUrl: string;
  googleMapsDirectionUrl: string;
  openingHours: OpeningHour[];
  socials: {
    instagram?: string;
    facebook?: string;
  };
  specialties: string[];
  businessValues: { title: string; desc: string; icon: string }[];
}
