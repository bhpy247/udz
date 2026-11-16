import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import {
  roomsData,
  attractionsData,
  itinerariesData,
  hotelsData,
  experiencesData,
  siteSettings,
} from "../../frontend/lib/data";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Udaipur Unfolded database...");

  // 1. Create Default Admin User
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash("Udaipur@Admin2026", salt);

  const admin = await prisma.adminUser.upsert({
    where: { email: "admin@udaipurunfolded.com" },
    update: {},
    create: {
      email: "admin@udaipurunfolded.com",
      name: "Property Host",
      passwordHash,
      role: "ADMIN",
    },
  });
  console.log(`Admin user ready: ${admin.email}`);

  // 2. Create Primary Property
  const property = await prisma.property.upsert({
    where: { slug: "ambamata-homestay" },
    update: {},
    create: {
      slug: "ambamata-homestay",
      name: "Udaipur Unfolded Residential Homestay",
      description: "Two peaceful private guest rooms in a family residential property near Ambamata Temple, Udaipur.",
      addressNote: "Near Ambamata Temple, Udaipur, Rajasthan (Exact house instructions shared privately upon booking)",
      city: "Udaipur",
      state: "Rajasthan",
      pincode: "313001",
      isResidential: true,
      whatsappContact: siteSettings.whatsappNumber,
    },
  });

  // 3. Seed Rooms
  for (const r of roomsData) {
    await prisma.room.upsert({
      where: { slug: r.slug },
      update: {
        pricePerNight: r.pricePerNight,
        maxGuests: r.maxGuests,
        isAvailable: r.isAvailable,
      },
      create: {
        propertyId: property.id,
        slug: r.slug,
        name: r.name,
        tagline: r.tagline,
        description: r.description,
        longDescription: r.longDescription,
        pricePerNight: r.pricePerNight,
        maxGuests: r.maxGuests,
        bedConfig: r.bedConfig,
        roomSize: r.roomSize,
        checkIn: r.checkIn,
        checkOut: r.checkOut,
        images: r.images,
        amenities: r.amenities,
        houseRules: r.houseRules,
        cancellationPolicy: r.cancellationPolicy,
        isAvailable: r.isAvailable,
        propertyLocationNote: r.propertyLocationNote,
      },
    });
  }
  console.log("Rooms seeded.");

  // 4. Seed Attractions
  for (const a of attractionsData) {
    await prisma.attraction.upsert({
      where: { slug: a.slug },
      update: {},
      create: {
        slug: a.slug,
        name: a.name,
        hindiName: a.hindiName,
        category: a.category,
        shortDescription: a.shortDescription,
        fullDescription: a.fullDescription,
        heroImage: a.heroImage,
        gallery: a.gallery,
        location: a.location,
        estimatedDuration: a.estimatedDuration,
        suggestedTiming: a.suggestedTiming,
        verifiedEntryFee: a.verifiedEntryFee,
        verifiedOpeningHours: a.verifiedOpeningHours,
        nearbyAttractions: a.nearbyAttractions,
        googleMapsUrl: a.googleMapsUrl,
      },
    });
  }
  console.log("Attractions seeded.");

  // 5. Seed Itineraries
  for (const it of itinerariesData) {
    const createdItinerary = await prisma.itinerary.upsert({
      where: { slug: it.slug },
      update: {},
      create: {
        slug: it.slug,
        title: it.title,
        duration: it.duration,
        targetAudience: it.targetAudience,
        coverImage: it.coverImage,
        overview: it.overview,
        travelTips: it.travelTips,
        recommendedStayRoomSlug: it.recommendedStayRoomSlug,
      },
    });

    for (const d of it.days) {
      const createdDay = await prisma.itineraryDay.create({
        data: {
          itineraryId: createdItinerary.id,
          dayNumber: d.dayNumber,
          dayTitle: d.dayTitle,
          theme: d.theme,
        },
      });

      for (let i = 0; i < d.stops.length; i++) {
        const s = d.stops[i];
        await prisma.itineraryStop.create({
          data: {
            dayId: createdDay.id,
            stopOrder: i + 1,
            timeSlot: s.timeSlot,
            destinationName: s.destinationName,
            destinationSlug: s.destinationSlug,
            description: s.description,
            tips: s.tips,
          },
        });
      }
    }
  }
  console.log("Itineraries seeded.");

  // 6. Seed Hotels
  for (const h of hotelsData) {
    await prisma.hotel.upsert({
      where: { slug: h.slug },
      update: {},
      create: {
        slug: h.slug,
        name: h.name,
        category: h.category,
        partnershipType: h.partnershipType,
        indicativePriceRange: h.indicativePriceRange,
        location: h.location,
        shortDescription: h.shortDescription,
        amenities: h.amenities,
        photos: h.photos,
        commissionNotePrivate: h.commissionNotePrivate,
      },
    });
  }
  console.log("Hotels seeded.");

  // 7. Seed Experiences
  for (const exp of experiencesData) {
    await prisma.experience.upsert({
      where: { slug: exp.slug },
      update: {},
      create: {
        slug: exp.slug,
        title: exp.title,
        category: exp.category,
        shortDescription: exp.shortDescription,
        description: exp.description,
        location: exp.location,
        image: exp.image,
        externalEnquiryLink: exp.externalEnquiryLink,
        verifiedStatus: exp.verifiedStatus,
      },
    });
  }
  console.log("Experiences seeded.");

  // 8. Seed Site Settings
  const settingsEntries = [
    { key: "whatsapp_number", value: siteSettings.whatsappNumber, description: "Host WhatsApp number for Click-to-Chat" },
    { key: "business_email", value: siteSettings.businessEmail, description: "Official business email" },
    { key: "instagram_url", value: siteSettings.instagramUrl, description: "Brand Instagram profile" },
    { key: "brand_tagline", value: siteSettings.brandTagline, description: "Brand tagline" },
    { key: "general_location", value: siteSettings.generalLocation, description: "Public reference location" },
    { key: "google_maps_link", value: siteSettings.googleMapsLink, description: "Google Maps directions link" },
  ];

  for (const s of settingsEntries) {
    await prisma.siteSetting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: s,
    });
  }
  console.log("Site settings seeded.");

  // 9. Seed Sample Initial Enquiry
  const sampleEnquiry = await prisma.enquiry.create({
    data: {
      guestName: "Pooja Sharma",
      guestPhone: "+91 98200 XXXXX",
      guestEmail: "pooja.s@example.com",
      roomSlug: "room-1",
      checkInDate: "2026-12-05",
      checkOutDate: "2026-12-08",
      guestCount: 2,
      status: "Contacted",
      notes: "Arriving for quiet 3-day anniversary trip. Enquired about lake sunset boat booking.",
      enquiryNotes: {
        create: [
          {
            authorName: "Host",
            content: "Shared room photos and confirmed quiet ground floor verandah availability over WhatsApp.",
          },
        ],
      },
    },
  });
  console.log("Sample enquiry created:", sampleEnquiry.id);
  console.log("Seed completed successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
