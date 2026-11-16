import bcrypt from "bcryptjs";
import {
  roomsData as initialRooms,
  hotelsData as initialHotels,
  attractionsData as initialAttractions,
  itinerariesData as initialItineraries,
  experiencesData as initialExperiences,
  siteSettings as initialSettings,
} from "../data/seedData";

export interface StoredEnquiry {
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
  status: "New" | "Contacted" | "Confirmed" | "Cancelled" | "Completed";
  notes?: string;
  internalNotes: { id: string; author: string; text: string; date: string }[];
}

class Store {
  adminUser = {
    id: "admin-1",
    email: "admin@udaipurunfolded.com",
    name: "Udaipur Unfolded Host",
    passwordHash: bcrypt.hashSync("Udaipur@Admin2026", 10),
    role: "ADMIN",
  };

  rooms = JSON.parse(JSON.stringify(initialRooms));
  hotels = JSON.parse(JSON.stringify(initialHotels));
  attractions = JSON.parse(JSON.stringify(initialAttractions));
  itineraries = JSON.parse(JSON.stringify(initialItineraries));
  experiences = JSON.parse(JSON.stringify(initialExperiences));
  settings = { ...initialSettings };

  enquiries: StoredEnquiry[] = [
    {
      id: "enq-101",
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      guestName: "Pooja Sharma",
      guestPhone: "+91 98200 XXXXX",
      guestEmail: "pooja.sharma@example.com",
      roomSlug: "room-1",
      roomName: "Room 1 — The Courtyard Haven",
      checkInDate: "2026-12-05",
      checkOutDate: "2026-12-08",
      guestCount: 2,
      status: "Confirmed",
      notes: "Arriving for 3-day anniversary trip. Prefers ground floor near courtyard.",
      internalNotes: [
        {
          id: "note-1",
          author: "Host",
          text: "Confirmed via WhatsApp. Guest informed about 1 PM check-in and taxi pickup.",
          date: new Date(Date.now() - 86400000).toISOString(),
        },
      ],
    },
    {
      id: "enq-102",
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      guestName: "Arjun Mehta",
      guestPhone: "+91 94140 XXXXX",
      guestEmail: "arjun.m@example.com",
      roomSlug: "room-2",
      roomName: "Room 2 — The Amber Verandah Room",
      checkInDate: "2026-12-12",
      checkOutDate: "2026-12-14",
      guestCount: 2,
      status: "New",
      notes: "Requested quiet workspace and fast Wi-Fi for remote work days.",
      internalNotes: [],
    },
    {
      id: "enq-103",
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      guestName: "Dev & Priya Verma",
      guestPhone: "+91 97110 XXXXX",
      roomSlug: "both-rooms",
      roomName: "Both Rooms — Complete Residential Wing",
      checkInDate: "2026-12-24",
      checkOutDate: "2026-12-27",
      guestCount: 4,
      status: "Contacted",
      notes: "Family holiday with two children. Inquired about Lake Pichola boat booking.",
      internalNotes: [
        {
          id: "note-2",
          author: "Host",
          text: "Messaged on WhatsApp sharing rate of ₹3,300/night for both rooms combined.",
          date: new Date(Date.now() - 3600000).toISOString(),
        },
      ],
    },
  ];
}

export const db = new Store();
