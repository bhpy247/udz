import { Room, Attraction, Itinerary, Hotel, Experience, SiteSettings } from './types';

export const siteSettings: SiteSettings = {
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
    longDescription: "Room 1 is one of two private guest rooms hosted inside our residential home in the tranquil Ambamata neighbourhood. Located just 7 minutes from Lake Pichola and Fateh Sagar, this room offers an authentic, quiet Udaipur stay away from chaotic tourist traffic while remaining effortlessly central.\n\nThe room features abundant morning light, an attached private bathroom with 24/7 hot water, high-speed Wi-Fi, and access to a breezy ground floor verandah shaded by neem and bougainvillea. Ideal for solo explorers, remote creatives, and couples seeking respectful, genuine local hospitality.",
    pricePerNight: 1650, // Below ₹2,000/night
    maxGuests: 2,
    bedConfig: "1 Queen-size Bed with orthopedic mattress",
    roomSize: "220 sq. ft.",
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-Speed Wi-Fi (100 Mbps)",
      "Attached Private Bathroom",
      "24/7 Hot Water (Geyser)",
      "Air Conditioning & Ceiling Fan",
      "Electric Kettle & Tea Setup",
      "Filtered RO Drinking Water",
      "Work Desk & Reading Lamp",
      "Daily Housekeeping",
      "Luggage Storage on request",
      "Curated Local Neighborhood Guide"
    ],
    houseRules: [
      "Residential neighbourhood — quiet hours after 10:00 PM",
      "Government-issued ID required for all guests at check-in",
      "No smoking inside the room (open terrace permitted)",
      "Outside visitors not allowed overnight",
      "Respectful community ethos"
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
    longDescription: "Room 2 is our second private guest accommodation, curated with warmth and traditional Rajasthani craftsmanship. Fitted with natural stone floors that remain naturally cool during warm afternoons and large bay windows, it is designed for travellers who value authentic living over generic hotel corridors.\n\nEnjoy fresh morning chai on the adjoining sit-out area, plan your city walks with our personal maps, and experience the warmth of a local Udaipur home.",
    pricePerNight: 1850, // Below ₹2,000/night
    maxGuests: 2,
    bedConfig: "1 Queen-size Bed or 2 Twin Bed configuration upon advance request",
    roomSize: "240 sq. ft.",
    checkIn: "1:00 PM",
    checkOut: "11:00 AM",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High-Speed Wi-Fi (100 Mbps)",
      "Attached Private Bathroom",
      "24/7 Hot Water Geyser",
      "Air Conditioning & Ceiling Fan",
      "Private Sit-out / Verandah access",
      "Electric Kettle & Organic Green Tea",
      "Filtered RO Drinking Water",
      "Writing Table & Bookshelf",
      "Daily Housekeeping",
      "Wardrobe & Luggage Rack"
    ],
    houseRules: [
      "Residential peaceful setting — no loud parties or disturbances",
      "Government-issued ID mandatory at check-in",
      "No smoking in enclosed bedroom spaces",
      "Eco-conscious air conditioner and water usage"
    ],
    cancellationPolicy: "Full refund up to 48 hours prior to arrival. Manual confirmation via WhatsApp.",
    isAvailable: true,
    propertyLocationNote: "Residential property near Ambamata Temple. Exact building address provided privately upon booking."
  }
];

export const attractionsData: Attraction[] = [
  {
    id: "city-palace",
    slug: "city-palace",
    name: "City Palace",
    hindiName: "राजमहल",
    category: "Heritage",
    shortDescription: "A monumental 400-year-old architectural marvel crowning the eastern bank of Lake Pichola.",
    fullDescription: "Built over nearly four centuries by successive Maharanas of Mewar starting with Maharana Udai Singh II in 1559, the City Palace complex is a breathtaking fusion of Rajasthani and Mughal architectural styles. Towering over Lake Pichola with majestic granite and marble facades, it houses courtyards, pavilions, terraces, corridors, and hanging gardens.",
    heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Old City, Udaipur",
    estimatedDuration: "2.5 – 3.5 Hours",
    suggestedTiming: "9:00 AM – 11:30 AM (before mid-day heat & crowds)",
    verifiedEntryFee: "Museum Entry: ~₹300 - ₹400 for adults (student discounts available)",
    verifiedOpeningHours: "9:30 AM – 5:30 PM (Daily)",
    nearbyAttractions: ["Jagdish Temple", "Bagore Ki Haveli", "Lake Pichola"],
    googleMapsUrl: "https://maps.google.com/?q=City+Palace+Udaipur",
    relatedItineraries: ["one-day-udaipur", "two-day-udaipur", "three-day-udaipur"]
  },
  {
    id: "lake-pichola",
    slug: "lake-pichola",
    name: "Lake Pichola",
    hindiName: "पिछोला झील",
    category: "Lake",
    shortDescription: "The picturesque heart of Udaipur, framed by Aravali hills, palaces, and historic ghats.",
    fullDescription: "An artificial freshwater lake created in 1362 AD by a Banjara tribesman and later expanded by Maharana Udai Singh II. Pichola is world-renowned for its shimmering waters reflecting the Jag Mandir Island Palace, Lake Palace (Taj), and majestic City Palace ghats at golden hour.",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Lake Pichola, Udaipur",
    estimatedDuration: "1.5 – 2 Hours",
    suggestedTiming: "4:30 PM – 6:30 PM (Sunset boat ride)",
    verifiedEntryFee: "Free ghat access; Boat ride ticket varies (~₹400 - ₹800 depending on boat type)",
    verifiedOpeningHours: "Public ghats accessible all day; Boat operations ~9:00 AM – 6:00 PM",
    nearbyAttractions: ["Ambrai Ghat", "City Palace", "Gangaur Ghat", "Jagdish Temple"],
    googleMapsUrl: "https://maps.google.com/?q=Lake+Pichola+Udaipur",
    relatedItineraries: ["one-day-udaipur", "two-day-udaipur", "couples-udaipur"]
  },
  {
    id: "jagdish-temple",
    slug: "jagdish-temple",
    name: "Jagdish Temple",
    hindiName: "श्री जगदीश मन्दिर",
    category: "Temple",
    shortDescription: "An intricately carved 1651 AD Hindu temple dedicated to Lord Vishnu in the heart of the old city.",
    fullDescription: "Commissioned by Maharana Jagat Singh I in 1651, Jagdish Temple stands atop an elevated plinth with an imposing 79-foot spire. Carved entirely from yellow-sandstone with tiers of elephants, horsemen, dancers, and musicians, it remains an active centre of local devotional life with resonant morning and evening aartis.",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Jagdish Chowk, Old City",
    estimatedDuration: "45 Minutes",
    suggestedTiming: "Early morning 6:30 AM or Evening Aarti at 7:00 PM",
    verifiedEntryFee: "Free entry (Modest clothing expected)",
    verifiedOpeningHours: "5:00 AM – 1:00 PM, 4:00 PM – 9:00 PM",
    nearbyAttractions: ["City Palace", "Bagore Ki Haveli", "Gangaur Ghat"],
    googleMapsUrl: "https://maps.google.com/?q=Jagdish+Temple+Udaipur",
    relatedItineraries: ["one-day-udaipur", "two-day-udaipur"]
  },
  {
    id: "bagore-ki-haveli",
    slug: "bagore-ki-haveli",
    name: "Bagore Ki Haveli",
    hindiName: "बाग़ोर की हवेली",
    category: "Cultural",
    shortDescription: "18th-century noble haveli hosting museum exhibits and the famous Dharohar evening folk dance.",
    fullDescription: "Built right at Gangaur Ghat on Lake Pichola by Amar Chand Badwa, Prime Minister of Mewar, in the 18th century. Featuring 138 rooms with balconies, jharokhas, and colored glass windows. Every evening at 7:00 PM, the courtyards come alive with the legendary Dharohar Rajasthani folk dance and puppet show.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Gangaur Ghat Marg, Udaipur",
    estimatedDuration: "1 Hour (Museum) or 1.5 Hours (Evening Show)",
    suggestedTiming: "Show: 7:00 PM – 8:00 PM (Arrive at 6:15 PM for good seats)",
    verifiedEntryFee: "Museum: ~₹100; Evening Dharohar Show: ~₹150 - ₹200",
    verifiedOpeningHours: "Museum: 9:30 AM – 5:30 PM; Show: 7:00 PM – 8:00 PM",
    nearbyAttractions: ["Gangaur Ghat", "Jagdish Temple", "Ambrai Ghat"],
    googleMapsUrl: "https://maps.google.com/?q=Bagore+Ki+Haveli+Udaipur",
    relatedItineraries: ["one-day-udaipur", "two-day-udaipur", "three-day-udaipur"]
  },
  {
    id: "fateh-sagar-lake",
    slug: "fateh-sagar-lake",
    name: "Fateh Sagar Lake",
    hindiName: "फतेह सागर झील",
    category: "Lake",
    shortDescription: "Udaipur's favourite breezy water body, lined with scenic promenades, coffee stalls, and island parks.",
    fullDescription: "Constructed in 1687 by Maharana Jai Singh and later remodeled by Maharana Fateh Singh. A beloved social gathering spot for locals, Fateh Sagar is famous for morning joggers on Rani Road, motorboating to Nehru Park island, and evening coffee by 'Mumbai Market' along the lake promenade.",
    heroImage: "https://images.unsplash.com/photo-1622303046736-22467d307a50?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "North of Pichola, Udaipur",
    estimatedDuration: "1.5 – 2 Hours",
    suggestedTiming: "Late afternoon for strolls, or dusk for hot coffee along the embankment",
    verifiedEntryFee: "Free public access; Speedboat/Motorboat rides separate (~₹150 - ₹400)",
    verifiedOpeningHours: "Open 24 hours for promenade; Boating ~8:00 AM – 5:30 PM",
    nearbyAttractions: ["Saheliyon Ki Bari", "Nehru Park", "Moti Magri"],
    googleMapsUrl: "https://maps.google.com/?q=Fateh+Sagar+Lake+Udaipur",
    relatedItineraries: ["two-day-udaipur", "three-day-udaipur", "family-trip"]
  },
  {
    id: "saheliyon-ki-bari",
    slug: "saheliyon-ki-bari",
    name: "Saheliyon Ki Bari",
    hindiName: "सहेलियों की बाड़ी",
    category: "Garden",
    shortDescription: "The historic Garden of the Maidens featuring marble pavilions, lotus pools, and gravity-fed fountains.",
    fullDescription: "Laid out by Maharana Sangram Singh II in the 18th century for a royal princess and her forty-eight maidens. The garden is famous for its natural gravity-driven brass fountains supplied directly by Fateh Sagar Lake without electric motors, fragrant frangipani blossoms, and elephant fountain sculptures.",
    heroImage: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Saheli Marg, Udaipur",
    estimatedDuration: "1 Hour",
    suggestedTiming: "Morning 9:00 AM – 10:30 AM",
    verifiedEntryFee: "Entry: ~₹20 - ₹50 for Indian nationals",
    verifiedOpeningHours: "9:00 AM – 7:00 PM (Daily)",
    nearbyAttractions: ["Fateh Sagar Lake", "Sukhadia Circle"],
    googleMapsUrl: "https://maps.google.com/?q=Saheliyon+Ki+Bari+Udaipur",
    relatedItineraries: ["two-day-udaipur", "family-trip"]
  },
  {
    id: "sajjangarh-monsoon-palace",
    slug: "sajjangarh-monsoon-palace",
    name: "Sajjangarh / Monsoon Palace",
    hindiName: "सज्जनगढ़ दुर्ग",
    category: "Viewpoint",
    shortDescription: "A hilltop fortress 3,100 feet above sea level offering dramatic 360-degree sunset panoramas.",
    fullDescription: "Perched high atop Bansdara mountain overlooking the entire city and surrounding Aravali range. Built by Maharana Sajjan Singh in 1884 as an astronomical centre and monsoon retreat to watch rain clouds roll across the plains. Famous for its golden sunset vantage points.",
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Bansdara Peak, Sajjangarh Wildlife Sanctuary",
    estimatedDuration: "2 Hours",
    suggestedTiming: "4:30 PM – 6:30 PM for sunset viewing",
    verifiedEntryFee: "~₹100 - ₹300 per person plus vehicle toll charges",
    verifiedOpeningHours: "9:00 AM – 6:30 PM (Daily)",
    nearbyAttractions: ["Sajjangarh Biological Park", "Badi Lake"],
    googleMapsUrl: "https://maps.google.com/?q=Monsoon+Palace+Udaipur",
    relatedItineraries: ["two-day-udaipur", "three-day-udaipur", "couples-udaipur"]
  },
  {
    id: "ambrai-ghat",
    slug: "ambrai-ghat",
    name: "Ambrai Ghat (Manjhi Ghat)",
    hindiName: "अम्बराई घाट",
    category: "Lake",
    shortDescription: "The premiere vantage point opposite the City Palace across the calm waters of Lake Pichola.",
    fullDescription: "Located at the western shore of Lake Pichola directly facing the illuminated facades of the City Palace, Lake Palace, and Gangaur Ghat. A peaceful stone ghat where travellers and locals sit quietly to listen to the gentle lap of the water and watch twilight embrace the old city.",
    heroImage: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Hanuman Ghat Marg, Outside Chandpole, Udaipur",
    estimatedDuration: "1 Hour",
    suggestedTiming: "Early sunrise (peaceful) or 6:00 PM sunset",
    verifiedEntryFee: "~₹10 token municipal entry during peak hours",
    verifiedOpeningHours: "6:00 AM – 10:00 PM",
    nearbyAttractions: ["Lake Pichola", "Ambrai Restaurant", "Chandpole Bridge"],
    googleMapsUrl: "https://maps.google.com/?q=Ambrai+Ghat+Udaipur",
    relatedItineraries: ["one-day-udaipur", "couples-udaipur"]
  },
  {
    id: "gangaur-ghat",
    slug: "gangaur-ghat",
    name: "Gangaur Ghat",
    hindiName: "गणगौर घाट",
    category: "Heritage",
    shortDescription: "Vibrant historic stepped ghat on Pichola, central to Udaipur's religious festivities.",
    fullDescription: "The most iconic bathing and ceremonial ghat on the eastern shore of Lake Pichola, right behind Bagore Ki Haveli. Site of colourful festivities during the annual Gangaur and Mewar festivals, and a beloved backdrop for photographers throughout the year.",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Old City, near Jagdish Chowk",
    estimatedDuration: "45 Minutes",
    suggestedTiming: "Morning light or early dusk",
    verifiedEntryFee: "Free access",
    verifiedOpeningHours: "Open 24 hours",
    nearbyAttractions: ["Bagore Ki Haveli", "Jagdish Temple", "City Palace"],
    googleMapsUrl: "https://maps.google.com/?q=Gangaur+Ghat+Udaipur",
    relatedItineraries: ["one-day-udaipur", "two-day-udaipur"]
  },
  {
    id: "shilpgram",
    slug: "shilpgram",
    name: "Shilpgram Crafts Village",
    hindiName: "शिल्पग्राम",
    category: "Cultural",
    shortDescription: "A living rural arts and crafts complex depicting traditional tribal and village life of Western India.",
    fullDescription: "Spanning 70 acres in the foothills of the Aravalis west of Udaipur, Shilpgram features authentic traditional huts and workshops representing the distinct vernacular architecture of Rajasthan, Gujarat, Goa, and Maharashtra. A haven for folk arts, terracotta potters, weaving, and live performances.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Near Haveli, Shilpgram Road, Udaipur",
    estimatedDuration: "2 Hours",
    suggestedTiming: "Afternoon 2:00 PM – 5:00 PM",
    verifiedEntryFee: "~₹50 for Indian visitors, ~₹100 for foreign visitors",
    verifiedOpeningHours: "11:00 AM – 7:00 PM (Daily)",
    nearbyAttractions: ["Fateh Sagar Lake", "Badi Lake"],
    googleMapsUrl: "https://maps.google.com/?q=Shilpgram+Udaipur",
    relatedItineraries: ["three-day-udaipur", "family-trip"]
  },
  {
    id: "badi-lake",
    slug: "badi-lake",
    name: "Badi Lake & Bahubali Hill",
    hindiName: "बड़ी झील",
    category: "Lake",
    shortDescription: "An unhurried, pristine freshwater lake famous for the scenic Bahubali Hill trek and stillness.",
    fullDescription: "Built by Maharana Raj Singh I in 1680 to counter devastating drought in village Badi. Unlike Pichola and Fateh Sagar, Badi Lake has no commercial buildings or shops along its pristine banks, making it a peaceful escape. The short 15-minute hike up Bahubali Peak yields one of the finest wild vistas in Rajasthan.",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "12 km West of Udaipur city",
    estimatedDuration: "2.5 Hours including drive",
    suggestedTiming: "Sunrise for the Bahubali hike or quiet morning coffee",
    verifiedEntryFee: "~₹10 entry fee; Bahubali viewpoint parking fee ~₹20 - ₹50",
    verifiedOpeningHours: "8:00 AM – 6:30 PM",
    nearbyAttractions: ["Shilpgram", "Sajjangarh"],
    googleMapsUrl: "https://maps.google.com/?q=Lake+Badi+Udaipur",
    relatedItineraries: ["three-day-udaipur", "couples-udaipur"]
  },
  {
    id: "doodh-talai",
    slug: "doodh-talai",
    name: "Doodh Talai Lake & Musical Garden",
    hindiName: "दूध तलाई",
    category: "Lake",
    shortDescription: "A small picturesque lake adjacent to Pichola with musical rock gardens and sunset views.",
    fullDescription: "Located directly beside Lake Pichola near the southern foot of Machla Magra hill. Doodh Talai features the Manikya Lal Verma Garden and is the boarding station for the ropeway up to Karni Mata Temple.",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Southern end of Pichola, Udaipur",
    estimatedDuration: "1 Hour",
    suggestedTiming: "5:00 PM – 6:30 PM",
    verifiedEntryFee: "~₹20 - ₹30 garden maintenance fee",
    verifiedOpeningHours: "8:00 AM – 9:00 PM",
    nearbyAttractions: ["Karni Mata Ropeway", "Lake Pichola"],
    googleMapsUrl: "https://maps.google.com/?q=Doodh+Talai+Udaipur",
    relatedItineraries: ["two-day-udaipur"]
  },
  {
    id: "karni-mata-ropeway",
    slug: "karni-mata-ropeway",
    name: "Karni Mata Ropeway (Mansapurna)",
    hindiName: "करणी माता उड़नखटोला",
    category: "Viewpoint",
    shortDescription: "Scenic cable car ascent to Machla Magra hill for dramatic panoramic views of the lake basin.",
    fullDescription: "A modern cable car connecting Doodh Talai with the elevated Karni Mata shrine atop Machla Magra. The 5-minute ride glides over forested slopes, rewarding passengers with sweeping views across Lake Pichola, the City Palace, and Jag Mandir Island.",
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Doodh Talai, Udaipur",
    estimatedDuration: "1.5 Hours",
    suggestedTiming: "5:30 PM sunset for sparkling city lights",
    verifiedEntryFee: "Ropeway Return Ticket: ~₹120 - ₹150 for adults",
    verifiedOpeningHours: "9:00 AM – 9:00 PM (Subject to weather)",
    nearbyAttractions: ["Doodh Talai", "City Palace"],
    googleMapsUrl: "https://maps.google.com/?q=Karni+Mata+Ropeway+Udaipur",
    relatedItineraries: ["two-day-udaipur"]
  },
  {
    id: "gulab-bagh",
    slug: "gulab-bagh",
    name: "Gulab Bagh (Sajjan Niwas Garden)",
    hindiName: "गुलाब बाग़",
    category: "Garden",
    shortDescription: "100-acre historic botanical garden established in 1881 with heritage library and rose varieties.",
    fullDescription: "Commissioned by Maharana Sajjan Singh in 1881, Gulab Bagh (Rose Garden) is the largest historic garden in Udaipur. It contains a heritage library with rare manuscripts, century-old banyan trees, and shaded walking avenues.",
    heroImage: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Gulab Bagh Road, Udaipur",
    estimatedDuration: "1 Hour",
    suggestedTiming: "Morning 7:00 AM – 9:00 AM",
    verifiedEntryFee: "~₹25 garden entrance fee",
    verifiedOpeningHours: "6:00 AM – 6:00 PM",
    nearbyAttractions: ["Vintage Car Museum", "City Palace"],
    googleMapsUrl: "https://maps.google.com/?q=Gulab+Bagh+Udaipur",
    relatedItineraries: ["three-day-udaipur", "family-trip"]
  },
  {
    id: "vintage-car-museum",
    slug: "vintage-car-museum",
    name: "Vintage & Classic Car Museum",
    hindiName: "विंटेज कार म्यूजियम",
    category: "Heritage",
    shortDescription: "Private collection of royal Rolls-Royces, Cadillacs, and classic convertibles belonging to Mewar royals.",
    fullDescription: "Housed in the historic Mewar State Motor Garage, this museum showcases rare preserved vintage automobiles including the 1934 Rolls-Royce Phantom II featured in the James Bond movie Octopussy, 1938 Cadillacs, and classic Austin models.",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
    ],
    location: "Gulab Bagh Road, Brahmpuri, Udaipur",
    estimatedDuration: "45 Minutes",
    suggestedTiming: "11:00 AM – 3:00 PM",
    verifiedEntryFee: "~₹400 per adult (ticket includes vintage car viewing)",
    verifiedOpeningHours: "9:00 AM – 9:00 PM (Daily)",
    nearbyAttractions: ["Gulab Bagh", "City Palace"],
    googleMapsUrl: "https://maps.google.com/?q=Vintage+Car+Museum+Udaipur",
    relatedItineraries: ["three-day-udaipur"]
  }
];

export const itinerariesData: Itinerary[] = [
  {
    id: "one-day-udaipur",
    slug: "one-day-udaipur",
    title: "Udaipur in 1 Day — The Classic Heritage Circuit",
    duration: "1 Day (8:30 AM – 9:00 PM)",
    targetAudience: "Essential",
    coverImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80",
    overview: "Designed for travellers with only 24 hours in the city. Covers the defining royal monuments, historic old town alleys, an ethereal sunset lake cruise, and evening cultural dance without rushing.",
    travelTips: [
      "Start early at Jagdish Temple before the City Palace queues open at 9:30 AM",
      "Wear comfortable slip-on shoes for temple and palace courtyard walking",
      "Pre-book the 7:00 PM Bagore Ki Haveli Dharohar show by 6:00 PM at Gangaur Ghat"
    ],
    recommendedStayRoomSlug: "room-1",
    days: [
      {
        dayNumber: 1,
        dayTitle: "Royal Palaces, Shimmering Lakes & Folk Evenings",
        theme: "Immersion in Mewar's Greatest Landmarks",
        stops: [
          {
            id: "stop-1",
            timeSlot: "8:30 AM – 9:15 AM",
            destinationName: "Jagdish Temple & Morning Chai",
            destinationSlug: "jagdish-temple",
            description: "Begin with devotional serenity at the 17th-century carved Vishnu shrine, followed by fresh masala chai at Jagdish Chowk.",
            tips: "Respect the dress code and leave footwear at the marked gate counter."
          },
          {
            id: "stop-2",
            timeSlot: "9:30 AM – 1:00 PM",
            destinationName: "City Palace Complex",
            destinationSlug: "city-palace",
            description: "Explore the Mardana and Zenana Mahal, Mor Chowk (peacock courtyards), and panoramic balconies looking out over Pichola.",
            tips: "Hire an approved Mewar Trust guide or rent the official audio guide for fascinating context."
          },
          {
            id: "stop-3",
            timeSlot: "1:15 PM – 2:45 PM",
            destinationName: "Traditional Lunch in Lal Ghat",
            description: "Relax with authentic Mewari Ker Sangri, Gatte ki Sabzi, or Bajra Roti at a quiet haveli rooftop.",
            tips: "Stay hydrated with fresh lime soda or cooling buttermilk."
          },
          {
            id: "stop-4",
            timeSlot: "3:15 PM – 5:00 PM",
            destinationName: "Old Town Walk & Hathi Pol Bazaars",
            description: "Stroll down Clock Tower and Jagdish Chowk alleys to discover authentic miniature Pichwai painters and local leather ateliers.",
            tips: "Look for certified master artisan workshops."
          },
          {
            id: "stop-5",
            timeSlot: "5:15 PM – 6:30 PM",
            destinationName: "Sunset Boat Ride on Lake Pichola",
            destinationSlug: "lake-pichola",
            description: "Board from Rameshwar Ghat for a golden hour cruise gliding past Jag Mandir Island and the illuminated palace facade.",
            tips: "Arrive at the ticket counter by 4:45 PM during peak tourist season."
          },
          {
            id: "stop-6",
            timeSlot: "7:00 PM – 8:00 PM",
            destinationName: "Dharohar Folk Dance at Bagore Ki Haveli",
            destinationSlug: "bagore-ki-haveli",
            description: "Witness the celebrated Rajasthani Chari dance, Terah Taali, and the world-famous 11-pot balancing feat on brass plates.",
            tips: "Queue up by 6:20 PM to secure prime front-row floor cushions."
          },
          {
            id: "stop-7",
            timeSlot: "8:30 PM Onwards",
            destinationName: "Dinner at Ambrai Ghat Waterfront",
            destinationSlug: "ambrai-ghat",
            description: "Wind down with dinner or quiet contemplation opposite the glittering City Palace reflections across the lake.",
            tips: "Reserve a waterfront table at least 24 hours in advance."
          }
        ]
      }
    ]
  },
  {
    id: "two-day-udaipur",
    slug: "two-day-udaipur",
    title: "Udaipur in 2 Days — Lakes, Hills & Hidden Heritage",
    duration: "2 Days / 1 Night",
    targetAudience: "Essential",
    coverImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    overview: "The ideal balance of historic landmarks on Day 1 and serene hilltop viewpoints, serene lakes, and tranquil royal gardens on Day 2.",
    travelTips: [
      "Rent a local auto-rickshaw or scooter for Day 2 exploration toward Fateh Sagar and Sajjangarh",
      "Stay in our Ambamata private rooms for immediate 5-minute access to both lake circuits",
      "Carry light sun protection and comfortable walking shoes"
    ],
    recommendedStayRoomSlug: "room-2",
    days: [
      {
        dayNumber: 1,
        dayTitle: "Day 1: Heart of Old Mewar & Lake Pichola",
        theme: "Palaces, Ghats & Historic Courtyards",
        stops: [
          {
            id: "d1-s1",
            timeSlot: "9:00 AM – 1:00 PM",
            destinationName: "City Palace & Jagdish Temple",
            destinationSlug: "city-palace",
            description: "Immerse yourself in Rajasthan's largest royal palace complex and the adjacent intricately carved Jagdish Temple.",
            tips: "Buy combined museum entry tickets online or at the gate."
          },
          {
            id: "d1-s2",
            timeSlot: "2:30 PM – 4:30 PM",
            destinationName: "Bagore Ki Haveli & Gangaur Ghat Walk",
            destinationSlug: "bagore-ki-haveli",
            description: "Tour the 18th-century noble haveli's museum followed by a peaceful sit-out by the stone steps of Gangaur Ghat.",
            tips: "Explore the antique turban and puppet gallery inside."
          },
          {
            id: "d1-s3",
            timeSlot: "5:00 PM – 7:30 PM",
            destinationName: "Pichola Boat Cruise & Ambrai Ghat Sunset",
            destinationSlug: "ambrai-ghat",
            description: "Experience the transition from sunset to twilight from the tranquil waters of Pichola and Ambrai Ghat.",
            tips: "Bring your camera for golden light over the City Palace."
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Day 2: Royal Gardens, Fateh Sagar & Mountain Sunset",
        theme: "Gardens, Promenades & High Aravali Vistas",
        stops: [
          {
            id: "d2-s1",
            timeSlot: "9:00 AM – 10:30 AM",
            destinationName: "Saheliyon Ki Bari",
            destinationSlug: "saheliyon-ki-bari",
            description: "Morning stroll through the lush 18th-century royal maidens' garden and gravity-fed fountains.",
            tips: "Visit early while the garden paths are quiet and misted."
          },
          {
            id: "d2-s2",
            timeSlot: "11:00 AM – 1:30 PM",
            destinationName: "Fateh Sagar Lake & Rani Road Drive",
            destinationSlug: "fateh-sagar-lake",
            description: "Take in the broad breezes of Fateh Sagar, walk Rani Road, and enjoy an island speed-boat ride to Nehru Park.",
            tips: "Try freshly brewed cold coffee or kulhad coffee near the promenade."
          },
          {
            id: "d2-s3",
            timeSlot: "2:00 PM – 3:30 PM",
            destinationName: "Sukhadia Circle Street Food",
            description: "Savour local delicacies like Poha, Mirchi Vada, and Pav Bhaji in this famous circular landscaped hub.",
            tips: "Ask for local spicy garlic chutney with kachoris."
          },
          {
            id: "d2-s4",
            timeSlot: "4:15 PM – 6:30 PM",
            destinationName: "Sajjangarh Monsoon Palace Sunset",
            destinationSlug: "sajjangarh-monsoon-palace",
            description: "Climb the winding mountain pass to Bansdara peak for sunset panoramas looking down at lakes, palaces, and Aravali ridges.",
            tips: "Book an authorized sanctuary taxi or ride up before 4:30 PM to beat vehicle limits."
          }
        ]
      }
    ]
  },
  {
    id: "three-day-udaipur",
    slug: "three-day-udaipur",
    title: "Udaipur in 3 Days — The Immersive Cultural Explorer",
    duration: "3 Days / 2 Nights",
    targetAudience: "Slow Travel",
    coverImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    overview: "The complete Udaipur experience. Integrates royal history, artisan workshops, quiet nature walks at Lake Badi, tribal heritage at Shilpgram, and curated culinary experiences.",
    travelTips: [
      "Dedicate Day 3 morning to the peaceful sunrise hike at Badi Lake",
      "Leave luggage at our Ambamata homestay on your final day with zero hassle",
      "Ask your hosts for personalised recommendations for offbeat silver and textile bazaars"
    ],
    recommendedStayRoomSlug: "room-1",
    days: [
      {
        dayNumber: 1,
        dayTitle: "Day 1: Royal Heritage & Lake Pichola",
        theme: "Palace Magnificence & Ghat Living",
        stops: [
          {
            id: "d1-s1",
            timeSlot: "9:30 AM – 1:30 PM",
            destinationName: "City Palace & Jagdish Temple",
            destinationSlug: "city-palace",
            description: "Complete tour of City Palace museum and intricate Jagdish Temple stone architecture.",
            tips: "Check the silver gallery and vintage carriage displays."
          },
          {
            id: "d1-s2",
            timeSlot: "5:00 PM – 8:00 PM",
            destinationName: "Sunset Boat Cruise & Dharohar Folk Show",
            destinationSlug: "bagore-ki-haveli",
            description: "Gliding across Lake Pichola followed by the colourful live folk performances at Bagore Ki Haveli.",
            tips: "Grab dinner at a rooftop haveli near Gangaur Ghat afterwards."
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Day 2: Royal Gardens, Vintage Heritage & Sunset Fortress",
        theme: "Imperial Gardens & Mountain Panoramas",
        stops: [
          {
            id: "d2-s1",
            timeSlot: "9:00 AM – 11:30 AM",
            destinationName: "Saheliyon Ki Bari & Vintage Car Museum",
            destinationSlug: "saheliyon-ki-bari",
            description: "Marvel at royal gravity fountains, followed by inspecting the Maharanas' rare Rolls-Royces.",
            tips: "Great experience for families and design enthusiasts."
          },
          {
            id: "d2-s2",
            timeSlot: "12:00 PM – 3:30 PM",
            destinationName: "Fateh Sagar Lake & Shilpgram Crafts Village",
            destinationSlug: "shilpgram",
            description: "Promenade walk at Fateh Sagar followed by exploring live artisan workshops and terracotta pottery at Shilpgram.",
            tips: "Pick up hand-printed indigo textiles directly from craftspersons."
          },
          {
            id: "d2-s3",
            timeSlot: "4:30 PM – 7:00 PM",
            destinationName: "Monsoon Palace at Sunset",
            destinationSlug: "sajjangarh-monsoon-palace",
            description: "Unrivalled sunset vantage point 3,100 feet above the valley.",
            tips: "Watch for wild deer in the sanctuary forest en route."
          }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Day 3: Nature, Hilltop Shrines & Local Bazaars",
        theme: "Quiet Waters, Sacred Vistas & Market Trails",
        stops: [
          {
            id: "d3-s1",
            timeSlot: "6:30 AM – 9:30 AM",
            destinationName: "Badi Lake & Bahubali Hill Sunrise Trek",
            destinationSlug: "badi-lake",
            description: "A serene early morning drive to Badi Lake, followed by a light 15-minute hike to the Bahubali rock overlooking emerald waters.",
            tips: "Start at first dawn for empty trails and cooler mountain air."
          },
          {
            id: "d3-s2",
            timeSlot: "11:00 AM – 2:00 PM",
            destinationName: "Old Town Craft Shopping Trail",
            description: "Explore the bustling lanes of Bada Bazaar, Malki Pole, and Mochiwada for handcrafted leather journals, Mojris, and silver jewellery.",
            tips: "Ask your hosts for the most trustworthy family-run silver jewelers."
          },
          {
            id: "d3-s3",
            timeSlot: "4:30 PM – 6:30 PM",
            destinationName: "Karni Mata Ropeway & Doodh Talai",
            destinationSlug: "karni-mata-ropeway",
            description: "Ride the cable car to Machla Magra for a final aerial farewell gaze at the City of Lakes.",
            tips: "A relaxing conclusion to your 3-day exploration."
          }
        ]
      }
    ]
  },
  {
    id: "couples-udaipur",
    slug: "couples-udaipur",
    title: "Romantic Udaipur — Sunset Waters & Candlelit Rooftops",
    duration: "2 to 3 Days",
    targetAudience: "Couples",
    coverImage: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80",
    overview: "Tailored for slow, intimate exploration. Emphasises private ghat vantage points, quiet boat charters, atmospheric heritage dining, and tranquil morning walks.",
    travelTips: [
      "Opt for private boat hire at Lake Pichola around 5:15 PM for golden light photos",
      "Reserve an intimate terrace table at sunset well ahead of time",
      "Stay in our tranquil Ambamata rooms for authentic peaceful evenings away from noisy tourist commercial hubs"
    ],
    recommendedStayRoomSlug: "room-2",
    days: [
      {
        dayNumber: 1,
        dayTitle: "Day 1: Sunset on Pichola & Waterfront Dining",
        theme: "Serenade on the Water",
        stops: [
          {
            id: "c-1",
            timeSlot: "3:30 PM – 5:00 PM",
            destinationName: "Old Haveli Exploration & Pichola Ghats",
            destinationSlug: "lake-pichola",
            description: "Wander hand-in-hand through quiet stone archways and historic ghats.",
            tips: "Visit Gangaur and Hanuman Ghats for scenic portrait settings."
          },
          {
            id: "c-2",
            timeSlot: "5:15 PM – 6:30 PM",
            destinationName: "Private Lake Pichola Boat Cruise",
            destinationSlug: "lake-pichola",
            description: "Glide around Jag Mandir and the Lake Palace under pink-and-amber Rajasthan skies.",
            tips: "Bring warm shawls during cooler winter evenings (November to February)."
          },
          {
            id: "c-3",
            timeSlot: "7:30 PM Onwards",
            destinationName: "Candlelight Dinner by Lake Pichola",
            destinationSlug: "ambrai-ghat",
            description: "Intimate dinner listening to traditional sitar music across the water.",
            tips: "Sample local Laal Maas or rich Mewari Paneer curry."
          }
        ]
      }
    ]
  },
  {
    id: "family-trip",
    slug: "family-trip",
    title: "Family Udaipur Explorer — Palaces, Gardens & Cable Cars",
    duration: "2 to 3 Days",
    targetAudience: "Families",
    coverImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    overview: "Curated with manageable walking distances, interactive experiences for all generations, playful garden stops, ropeway rides, and family-friendly dining.",
    travelTips: [
      "Break visits into morning and late afternoon sessions to avoid mid-day fatigue",
      "Combine both private rooms at our Ambamata homestay to host a complete family with total privacy",
      "Keep plenty of drinking water during daytime excursions"
    ],
    recommendedStayRoomSlug: "room-1",
    days: [
      {
        dayNumber: 1,
        dayTitle: "Day 1: Castles, Puppets & Boats",
        theme: "Interactive History & Fun",
        stops: [
          {
            id: "f-1",
            timeSlot: "9:30 AM – 12:30 PM",
            destinationName: "City Palace Tour",
            destinationSlug: "city-palace",
            description: "Engaging walk through the grand palace armoury, mirrored rooms, and courtyards.",
            tips: "Children love the vintage weapon galleries and royal carriage models."
          },
          {
            id: "f-2",
            timeSlot: "4:30 PM – 6:00 PM",
            destinationName: "Karni Mata Cable Car",
            destinationSlug: "karni-mata-ropeway",
            description: "Thrilling 5-minute ropeway ride high above the lakeside hills.",
            tips: "Kids enjoy watching the city shrink beneath the cabin."
          },
          {
            id: "f-3",
            timeSlot: "7:00 PM – 8:00 PM",
            destinationName: "Dharohar Puppet & Folk Show",
            destinationSlug: "bagore-ki-haveli",
            description: "Captivating traditional Rajasthani string puppet performance and fire dances.",
            tips: "Arrive early so young ones can sit on comfortable floor mats up front."
          }
        ]
      }
    ]
  }
];

export const hotelsData: Hotel[] = [
  {
    id: "our-ambamata-homestay",
    slug: "our-ambamata-homestay",
    name: "Udaipur Unfolded Homestay (Our Property)",
    category: "Budget stays",
    partnershipType: "Our own accommodation",
    indicativePriceRange: "₹1,600 – ₹1,900 / night",
    location: "Near Ambamata Temple, Udaipur",
    shortDescription: "Our signature two private guest rooms hosted in a peaceful residential home. Authentic local hospitality, quiet nights, and fast Wi-Fi.",
    amenities: ["Free Wi-Fi", "Air Conditioning", "24/7 Hot Water", "Verandah Access", "Daily Housekeeping", "Personal Local Guide"],
    photos: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
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
    shortDescription: "A carefully restored 180-year-old family haveli featuring traditional Mewari arches, courtyard seating, and rooftop lake vistas.",
    amenities: ["Rooftop Restaurant", "Lake Views", "Wi-Fi", "Heritage Courtyard", "Room Service"],
    photos: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    commissionNotePrivate: "Verified partner with 10% direct booking referral agreement."
  },
  {
    id: "fateh-breeze-boutique",
    slug: "fateh-breeze-boutique",
    name: "Fateh Sagar Lakeside Retreat (Partner)",
    category: "Mid-range hotels",
    partnershipType: "Verified partner property",
    indicativePriceRange: "₹2,400 – ₹3,800 / night",
    location: "Fateh Sagar Road, Udaipur",
    shortDescription: "Comfortable boutique hotel steps from the Fateh Sagar walkway. Great for morning walks, quiet stays, and family travellers.",
    amenities: ["Lake Proximity", "Breakfast Included", "Free Wi-Fi", "Parking", "Elevator"],
    photos: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    commissionNotePrivate: "Direct owner liaison, verified cleanliness standards."
  },
  {
    id: "lake-palace-heritage-view",
    slug: "lake-palace-heritage-view",
    name: "Boutique Heritage Inn at Hanuman Ghat",
    category: "Heritage hotels",
    partnershipType: "Recommended third-party",
    indicativePriceRange: "₹4,500 – ₹7,500 / night",
    location: "Hanuman Ghat, Lake Pichola",
    shortDescription: "Independent boutique heritage property offering uninterrupted vistas of the Lake Palace and Gangaur Ghat.",
    amenities: ["Waterfront Dining", "Sunset Terrace", "Wi-Fi", "Tour Desk"],
    photos: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "aravali-hills-resort",
    slug: "aravali-hills-resort",
    name: "Aravali Valley Nature Resort",
    category: "Premium hotels",
    partnershipType: "Recommended third-party",
    indicativePriceRange: "₹8,000 – ₹14,000 / night",
    location: "Near Badi Lake, Udaipur",
    shortDescription: "Expansive luxury property surrounded by rugged hills. Features swimming pools, lush gardens, and secluded suites.",
    amenities: ["Swimming Pool", "Spa Services", "Mountain Views", "Multi-Cuisine Dining", "Private Balconies"],
    photos: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export const experiencesData: Experience[] = [
  {
    id: "mewari-thali-food-walk",
    slug: "mewari-thali-food-walk",
    title: "Authentic Mewari Food & Old Town Tasting",
    category: "Local Food",
    shortDescription: "Savour authentic Dal Baati Churma cooked with desi ghee, spicy Mirchi Vadas, and authentic local sweets.",
    description: "Explore the culinary soul of Udaipur through family-run kitchens that have cooked Mewari recipes for generations. Discover how the arid climate shaped the unique spices of Rajasthan, from smoky Ker Sangri to rich Kadhi and soft churma.",
    location: "Old Town & Bada Bazaar",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80",
    verifiedStatus: "Locally curated recommendation"
  },
  {
    id: "pichola-rooftop-dining",
    slug: "pichola-rooftop-dining",
    title: "Twilight Rooftop Dining Overlooking Pichola",
    category: "Rooftop Dining",
    shortDescription: "Watch the City Palace illuminate across the calm water as you enjoy dinner with gentle acoustic sitar melodies.",
    description: "Udaipur's rooftop culture is unmatched in India. We share our curated shortlist of non-touristy, honest rooftop spots where you can enjoy authentic food without paying exorbitant luxury surcharges.",
    location: "Chandpole & Hanuman Ghat waterfronts",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    verifiedStatus: "Curated local guide"
  },
  {
    id: "traditional-textile-markets",
    slug: "traditional-textile-markets",
    title: "Artisans & Traditional Markets of Hathi Pol",
    category: "Traditional Markets",
    shortDescription: "Discover authentic Bandhani textiles, traditional Mojri leather shoes, and miniature Pichwai artwork.",
    description: "Navigate the authentic bazaars with our insider pointers. Learn how to identify genuine vegetable-dyed block prints versus synthetic copies, and meet master artisans in their historic haveli studios.",
    location: "Hathi Pol, Bada Bazaar & Mochiwada",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    verifiedStatus: "Direct artisan network"
  },
  {
    id: "pichola-sunset-boat-ride",
    slug: "pichola-sunset-boat-ride",
    title: "Sunset Boat Cruise on Lake Pichola",
    category: "Boat Rides",
    shortDescription: "A gentle 45-minute cruise providing postcard perspectives of the Jag Mandir and the City Palace facade.",
    description: "The quintessential Udaipur experience. Board from Rameshwar Ghat for a leisurely cruise around the historical islands, taking in the grand palaces as twilight turns the water into liquid gold.",
    location: "Lake Pichola (Rameshwar Ghat Jetty)",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80",
    verifiedStatus: "Municipal & official jetty operations"
  },
  {
    id: "dharohar-folk-dance",
    slug: "dharohar-folk-dance",
    title: "Dharohar Rajasthani Folk Dance & Puppetry",
    category: "Cultural Experiences",
    shortDescription: "High-energy live performance of Chari dance, Terah Taali, and traditional Mewari music inside a historic haveli.",
    description: "Held every evening inside the central neem courtyard of Bagore Ki Haveli. Witness elderly masters balance eleven earthen pots on their heads while dancing atop shards of brass and glass.",
    location: "Bagore Ki Haveli, Gangaur Ghat",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    verifiedStatus: "Historic cultural institution"
  },
  {
    id: "golden-hour-photography",
    slug: "golden-hour-photography",
    title: "Secret Ghats & Golden Hour Photography Trail",
    category: "Photography",
    shortDescription: "Our personal field map of sunrise and sunset vantage points without crowds.",
    description: "From the quiet steps of Ambrai Ghat at 6:00 AM to the Bahubali cliff edge at Badi Lake, we provide photography enthusiasts with precise GPS coordinates, best focal length advice, and lighting notes.",
    location: "Multiple locations across Udaipur",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80",
    verifiedStatus: "Curated by Udaipur Unfolded"
  }
];
