export interface Room {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  pricePerNight: number; // Stays below ₹2,000 for initial business
  maxGuests: number;
  bedConfig: string;
  roomSize: string;
  checkIn: string;
  checkOut: string;
  images: string[];
  amenities: string[];
  houseRules: string[];
  cancellationPolicy: string;
  isAvailable: boolean;
  propertyLocationNote: string;
}

export interface Attraction {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  gallery: string[];
  location: string;
  estimatedDuration: string;
  suggestedTiming: string;
  verifiedEntryFee?: string;
  verifiedOpeningHours?: string;
  nearbyAttractions: string[];
  googleMapsUrl: string;
  relatedItineraries: string[];
  category: 'Heritage' | 'Lake' | 'Cultural' | 'Temple' | 'Viewpoint' | 'Garden';
}

export interface ItineraryStop {
  id: string;
  timeSlot: string;
  destinationName: string;
  destinationSlug?: string;
  description: string;
  tips: string;
}

export interface ItineraryDay {
  dayNumber: number;
  dayTitle: string;
  theme: string;
  stops: ItineraryStop[];
}

export interface Itinerary {
  id: string;
  slug: string;
  title: string;
  duration: string;
  targetAudience: 'Essential' | 'Couples' | 'Families' | 'Slow Travel';
  coverImage: string;
  overview: string;
  days: ItineraryDay[];
  travelTips: string[];
  recommendedStayRoomSlug?: string;
}

export interface Hotel {
  id: string;
  slug: string;
  name: string;
  category: 'Budget stays' | 'Mid-range hotels' | 'Premium hotels' | 'Heritage hotels';
  partnershipType: 'Our own accommodation' | 'Verified partner property' | 'Recommended third-party';
  indicativePriceRange: string;
  location: string;
  shortDescription: string;
  amenities: string[];
  photos: string[];
  commissionNotePrivate?: string;
}

export interface Experience {
  id: string;
  slug: string;
  title: string;
  category: 'Local Food' | 'Rooftop Dining' | 'Traditional Markets' | 'Boat Rides' | 'Cultural Experiences' | 'Photography';
  shortDescription: string;
  description: string;
  location: string;
  image: string;
  externalEnquiryLink?: string;
  verifiedStatus: string;
}

export interface Enquiry {
  id: string;
  createdAt: string;
  guestName: string;
  guestPhone: string;
  guestEmail?: string;
  roomSlug: string;
  roomName: string;
  checkInDate: string;
  checkOutDate: string;
  guestCount: number;
  status: 'New' | 'Contacted' | 'Confirmed' | 'Cancelled' | 'Completed';
  notes: string;
}

export interface SiteSettings {
  whatsappNumber: string; // e.g. "919876543210"
  whatsappDisplayNumber: string; // "+91 98765 43210"
  businessEmail: string;
  instagramUrl: string;
  brandTagline: string;
  generalLocation: string;
  googleMapsLink: string;
}
