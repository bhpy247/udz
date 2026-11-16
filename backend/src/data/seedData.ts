export interface Room {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  pricePerNight: number;
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

export const siteSettings = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919414000000",
  whatsappDisplayNumber: "+91 94140 XXXXX",
  businessEmail: "hello@udaipurunfolded.com",
  instagramUrl: "https://instagram.com/udaipurunfolded",
  brandTagline: "Stay closer. Explore deeper.",
  generalLocation: "Near Ambamata Temple, Udaipur, Rajasthan 313001",
  googleMapsLink: "https://maps.google.com/?q=Ambamata+Temple+Udaipur",
};

export const roomsData: Room[] = [
  {
    id: "room-1",
    slug: "room-1",
    name: "Room 1 — The Courtyard Haven",
    tagline: "Serene garden-facing private sanctuary near Ambamata Temple",
    description: "A bright, peaceful bedroom tucked into a tranquil residential neighborhood. Featuring hand-finished lime-plaster accents, a plush queen bed, and a quiet writing desk.",
    longDescription: "Room 1 is one of two private guest rooms hosted inside our residential home in the tranquil Ambamata neighbourhood. Located just 7 minutes from Lake Pichola and Fateh Sagar, this room offers an authentic, quiet Udaipur stay away from chaotic tourist traffic while remaining effortlessly central.",
    pricePerNight: 1650,
    maxGuests: 2,
    bedConfig: "1 Queen-size Bed with orthopedic mattress",
    roomSize: "220 sq. ft.",
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-Speed Wi-Fi (100 Mbps)",
      "Attached Private Bathroom",
      "24/7 Hot Water (Geyser)",
      "Air Conditioning & Ceiling Fan",
      "Electric Kettle & Tea Setup",
      "Filtered RO Drinking Water",
      "Work Desk & Reading Lamp"
    ],
    houseRules: [
      "Residential neighbourhood — quiet hours after 10:00 PM",
      "Government-issued ID required for all guests at check-in",
      "No smoking inside the room"
    ],
    cancellationPolicy: "Full refund up to 48 hours before check-in date. Manual confirmation via WhatsApp.",
    isAvailable: true,
    propertyLocationNote: "Residential property near Ambamata Temple. Exact building instructions shared after enquiry confirmation."
  },
  {
    id: "room-2",
    slug: "room-2",
    name: "Room 2 — The Amber Verandah Room",
    tagline: "Airy heritage-toned private room with private sit-out corner",
    description: "Characterised by warm terracotta accents, natural stone flooring, and bespoke wood furnishings. Features dedicated balcony access overlooking leafy residential lanes.",
    longDescription: "Room 2 is our second private guest accommodation, curated with warmth and traditional Rajasthani craftsmanship.",
    pricePerNight: 1850,
    maxGuests: 2,
    bedConfig: "1 Queen-size Bed or 2 Twin Bed configuration upon advance request",
    roomSize: "240 sq. ft.",
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-Speed Wi-Fi (100 Mbps)",
      "Attached Private Bathroom",
      "24/7 Hot Water Geyser",
      "Air Conditioning & Ceiling Fan",
      "Private Sit-out / Verandah access"
    ],
    houseRules: [
      "Residential peaceful setting — no loud parties",
      "Government-issued ID mandatory at check-in"
    ],
    cancellationPolicy: "Full refund up to 48 hours prior to arrival. Manual confirmation via WhatsApp.",
    isAvailable: true,
    propertyLocationNote: "Residential property near Ambamata Temple."
  }
];

export const hotelsData = [
  {
    id: "our-ambamata-homestay",
    slug: "our-ambamata-homestay",
    name: "Udaipur Unfolded Homestay (Our Property)",
    category: "Budget stays",
    partnershipType: "Our own accommodation",
    indicativePriceRange: "₹1,600 – ₹1,900 / night",
    location: "Near Ambamata Temple, Udaipur",
    shortDescription: "Our signature two private guest rooms hosted in a peaceful residential home.",
    amenities: ["Free Wi-Fi", "Air Conditioning", "24/7 Hot Water", "Verandah Access"],
    photos: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "jagdish-heritage-haveli",
    slug: "jagdish-heritage-haveli",
    name: "Old City Heritage Haveli (Partner)",
    category: "Heritage hotels",
    partnershipType: "Verified partner property",
    indicativePriceRange: "₹3,200 – ₹5,500 / night",
    location: "Near Jagdish Chowk, Old City",
    shortDescription: "A carefully restored 180-year-old family haveli featuring traditional Mewari arches.",
    amenities: ["Rooftop Restaurant", "Lake Views", "Wi-Fi"],
    photos: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    commissionNotePrivate: "Verified partner with 10% direct booking referral agreement."
  }
];

export const attractionsData = [
  {
    id: "city-palace",
    slug: "city-palace",
    name: "City Palace",
    hindiName: "राजमहल",
    category: "Heritage",
    shortDescription: "A monumental 400-year-old architectural marvel crowning the eastern bank of Lake Pichola.",
    fullDescription: "Built over nearly four centuries by successive Maharanas of Mewar.",
    heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80",
    gallery: [],
    location: "Old City, Udaipur",
    estimatedDuration: "2.5 – 3.5 Hours",
    suggestedTiming: "9:00 AM – 11:30 AM",
    verifiedEntryFee: "~₹300 - ₹400 for adults",
    verifiedOpeningHours: "9:30 AM – 5:30 PM",
    nearbyAttractions: ["Jagdish Temple", "Lake Pichola"],
    googleMapsUrl: "https://maps.google.com/?q=City+Palace+Udaipur"
  }
];

export const itinerariesData = [
  {
    id: "one-day-udaipur",
    slug: "one-day-udaipur",
    title: "Udaipur in 1 Day — The Classic Heritage Circuit",
    duration: "1 Day (8:30 AM – 9:00 PM)",
    targetAudience: "Essential",
    coverImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80",
    overview: "Designed for travellers with only 24 hours in the city.",
    travelTips: ["Start early before City Palace queues open at 9:30 AM"],
    days: [
      {
        dayNumber: 1,
        dayTitle: "Royal Palaces, Shimmering Lakes & Folk Evenings",
        theme: "Immersion in Mewar's Greatest Landmarks",
        stops: []
      }
    ]
  }
];

export const experiencesData = [
  {
    id: "mewari-thali-food-walk",
    slug: "mewari-thali-food-walk",
    title: "Authentic Mewari Food & Old Town Tasting",
    category: "Local Food",
    shortDescription: "Savour authentic Dal Baati Churma cooked with desi ghee.",
    description: "Explore the culinary soul of Udaipur through family-run kitchens.",
    location: "Old Town & Bada Bazaar",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80",
    verifiedStatus: "Locally curated recommendation"
  }
];
