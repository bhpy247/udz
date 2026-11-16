import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  Clock,
  Shield,
  MapPin,
  Home,
  MessageCircle,
} from "lucide-react";
import { roomsData } from "@/lib/data";
import RoomCard from "@/components/RoomCard";
import StaysEnquiryForm from "./StaysEnquiryForm";

export const metadata: Metadata = {
  title: "Private Homestay Rooms in Udaipur — Near Ambamata Temple | Udaipur Unfolded",
  description:
    "Explore our two private guest rooms located in a peaceful residential home near Ambamata Temple, Udaipur. High-speed Wi-Fi, 24/7 hot water, serene verandah, and genuine local hospitality.",
  keywords: [
    "Udaipur homestay rooms",
    "Homestay near Ambamata Temple",
    "Private room Lake Pichola Udaipur",
    "Budget boutique stay Udaipur",
    "Residential homestay Udaipur",
  ],
};

export default function StaysPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F7F4ED]">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#E9DFCF] pb-12 sm:pb-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#B56B4B] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B56B4B]" />
              <span>Primary Accommodation</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252820] leading-tight">
              Quiet Private Rooms in Ambamata
            </h1>
            <p className="text-base sm:text-lg text-[#252820]/80 font-sans leading-relaxed">
              Our residential homestay offers two peaceful, thoughtfully furnished private rooms tucked away in a quiet residential lane near <strong>Ambamata Temple</strong>. Located just 5 to 7 minutes from Lake Pichola and Fateh Sagar, you enjoy restful nights away from commercial noise, complemented by warm, authentic Mewari hospitality.
            </p>
          </div>

          {/* Quick Context Highlights */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#252820]">
            <div className="bg-[#FAF7F2] border border-[#DACBB7]/60 p-3.5">
              <span className="block text-[#777C61] font-medium text-[10px] uppercase tracking-wider">Inventory</span>
              <span className="font-serif text-base font-bold text-[#252820]">2 Private Rooms</span>
            </div>
            <div className="bg-[#FAF7F2] border border-[#DACBB7]/60 p-3.5">
              <span className="block text-[#777C61] font-medium text-[10px] uppercase tracking-wider">Starting Rate</span>
              <span className="font-serif text-base font-bold text-[#252820]">₹1,650 / night</span>
            </div>
            <div className="bg-[#FAF7F2] border border-[#DACBB7]/60 p-3.5">
              <span className="block text-[#777C61] font-medium text-[10px] uppercase tracking-wider">Location</span>
              <span className="font-serif text-base font-bold text-[#252820]">Ambamata Temple</span>
            </div>
            <div className="bg-[#FAF7F2] border border-[#DACBB7]/60 p-3.5">
              <span className="block text-[#777C61] font-medium text-[10px] uppercase tracking-wider">Booking Method</span>
              <span className="font-serif text-base font-bold text-[#B56B4B]">Direct WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Rooms Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Both Rooms Wing Offer */}
        <div className="mt-12 bg-[#FAF7F2] border border-[#DACBB7] p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-[#E9DFCF] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#252820]">
              <Home className="w-3.5 h-3.5 text-[#B56B4B]" />
              <span>Full Floor / Family Option</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#252820]">
              Book the Entire Residential Wing (Both Rooms)
            </h3>
            <p className="text-sm text-[#252820]/80 leading-relaxed">
              Visiting Udaipur with parents, friends, or young children? You can reserve both Room 1 and Room 2 simultaneously. Enjoy private access to the entire floor, including the shaded verandah, sitting nook, and private entry for up to 4 guests.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#777C61] pt-1">
              <span>• Total Capacity: Up to 4 Guests</span>
              <span>• 2 Queen Beds & 2 Private Bathrooms</span>
              <span>• Indicative Bundle Rate: ~₹3,300 / night</span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <Link
              href="#enquiry-section"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-3.5 px-6 text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire for Both Rooms</span>
            </Link>
          </div>
        </div>

        {/* Dedicated WhatsApp Booking Enquiry Section */}
        <div id="enquiry-section" className="mt-16 pt-12 border-t border-[#E9DFCF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-semibold tracking-widest text-[#B56B4B] uppercase">
                Seamless Communication
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#252820]">
                Enquire via WhatsApp
              </h2>
              <p className="text-sm text-[#252820]/80 leading-relaxed">
                We believe in genuine, personal communication. Select your dates and guest details here. This form prepares a pre-filled WhatsApp message directly for the property host.
              </p>

              <div className="space-y-3.5 pt-2 text-xs text-[#252820]">
                <div className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#777C61] shrink-0 mt-0.5" />
                  <span><strong>Zero Bot Friction:</strong> You speak directly with the local host who lives in the property.</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#777C61] shrink-0 mt-0.5" />
                  <span><strong>No Advance Charge:</strong> Dates and total pricing are confirmed transparently before any commitment.</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#777C61] shrink-0 mt-0.5" />
                  <span><strong>Local Guidance Included:</strong> Feel free to ask questions about taxi pickups, train arrival timings, or temple schedules.</span>
                </div>
              </div>

              <div className="p-4 bg-[#E9DFCF]/50 border border-[#DACBB7] text-xs text-[#777C61] leading-relaxed">
                <span className="font-semibold text-[#252820]">Privacy Notice:</span> To protect residential privacy, the exact house number and landmark directions are shared privately over WhatsApp once your enquiry is confirmed.
              </div>
            </div>

            {/* Interactive Form Component */}
            <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#DACBB7] p-6 sm:p-8 shadow-sm">
              <StaysEnquiryForm />
            </div>
          </div>
        </div>

        {/* Property Rules & Standards */}
        <div className="mt-20 pt-12 border-t border-[#E9DFCF] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm font-semibold uppercase tracking-wider text-[#252820]">
              <Clock className="w-4 h-4 text-[#B56B4B]" />
              <span>Timings</span>
            </div>
            <p className="text-xs text-[#777C61] leading-relaxed">
              Standard Check-in: 1:00 PM<br />
              Standard Check-out: 11:00 AM<br />
              Early check-in or late luggage storage accommodated whenever availability permits.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm font-semibold uppercase tracking-wider text-[#252820]">
              <Shield className="w-4 h-4 text-[#B56B4B]" />
              <span>House Culture</span>
            </div>
            <p className="text-xs text-[#777C61] leading-relaxed">
              Quiet residential setting. We request our guests to observe quiet hours after 10:00 PM. No loud commercial events or non-resident overnight guests.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm font-semibold uppercase tracking-wider text-[#252820]">
              <MapPin className="w-4 h-4 text-[#B56B4B]" />
              <span>Central Access</span>
            </div>
            <p className="text-xs text-[#777C61] leading-relaxed">
              Ambamata locality offers easy tuk-tuk / auto-rickshaw access, nearby grocery stores, medical facilities, and tranquil walking streets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
