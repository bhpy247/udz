"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  MapPin,
  MessageCircle,
  AlertCircle,
  ChevronLeft,
  Share2,
} from "lucide-react";
import { Room } from "@/lib/types";
import { buildWhatsAppBookingUrl } from "@/lib/whatsapp";

interface RoomDetailClientProps {
  room: Room;
}

export default function RoomDetailClient({ room }: RoomDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(room.maxGuests);
  const [customNotes, setCustomNotes] = useState("");
  const [copiedNotice, setCopiedNotice] = useState(false);

  const handleWhatsAppEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppBookingUrl({
      roomName: room.name,
      checkIn: checkInDate || "Flexible / To discuss",
      checkOut: checkOutDate || "Flexible / To discuss",
      guests,
      customNotes: customNotes.trim() ? customNotes : undefined,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${room.name} — Udaipur Unfolded`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotice(true);
      setTimeout(() => setCopiedNotice(false), 2500);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link & Breadcrumbs */}
        <div className="flex items-center justify-between py-4 border-b border-[#E9DFCF] mb-8 text-xs text-[#777C61]">
          <Link
            href="/stays"
            className="inline-flex items-center space-x-1.5 text-[#252820] hover:text-[#B56B4B] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="font-semibold uppercase tracking-wider">All Stays</span>
          </Link>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleShare}
              className="inline-flex items-center space-x-1 text-[#252820] hover:text-[#B56B4B]"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedNotice ? "Link Copied!" : "Share Room"}</span>
            </button>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline font-mono text-[11px] text-[#777C61]">
              Inventory: {room.id.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Room Header */}
        <div className="max-w-3xl space-y-2 mb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#B56B4B] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B56B4B]" />
            <span>Residential Homestay Room</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252820] leading-tight">
            {room.name}
          </h1>
          <p className="text-sm sm:text-base text-[#777C61] italic font-medium">
            {room.tagline}
          </p>
        </div>

        {/* Elegant Image Gallery */}
        <div className="space-y-4 mb-14">
          {/* Main Large Showcase Image */}
          <div className="relative h-[340px] sm:h-[500px] w-full overflow-hidden bg-[#E9DFCF] border border-[#DACBB7]">
            <Image
              src={room.images[activeImageIndex]}
              alt={`${room.name} photo ${activeImageIndex + 1}`}
              fill
              priority
              className="object-cover transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-[#252820]/80 backdrop-blur-sm text-white px-3 py-1 text-xs">
              Photo {activeImageIndex + 1} of {room.images.length}
            </div>
            <div className="absolute top-4 right-4 bg-[#F7F4ED]/90 backdrop-blur-sm border border-[#DACBB7] px-3 py-1 text-xs font-semibold text-[#252820]">
              Available for Booking
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {room.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-20 sm:h-28 overflow-hidden border-2 transition-all ${
                  activeImageIndex === idx
                    ? "border-[#B56B4B] opacity-100"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${room.name} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          <p className="text-[11px] text-[#777C61] text-right italic">
            *High quality reference ambiance of our residential accommodation. Real host photographs updated periodically.
          </p>
        </div>

        {/* Content & Booking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Details, Specs, Amenities */}
          <div className="lg:col-span-7 space-y-10">
            {/* Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#FAF7F2] border border-[#DACBB7]">
              <div>
                <span className="block text-[10px] uppercase font-semibold text-[#777C61]">Guest Capacity</span>
                <span className="font-serif text-sm sm:text-base font-bold text-[#252820]">Max {room.maxGuests} Guests</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-semibold text-[#777C61]">Room Size</span>
                <span className="font-serif text-sm sm:text-base font-bold text-[#252820]">{room.roomSize}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-semibold text-[#777C61]">Check-in</span>
                <span className="font-serif text-sm sm:text-base font-bold text-[#252820]">{room.checkIn}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-semibold text-[#777C61]">Check-out</span>
                <span className="font-serif text-sm sm:text-base font-bold text-[#252820]">{room.checkOut}</span>
              </div>
            </div>

            {/* Narrative Description */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#252820]">
                About This Room
              </h2>
              <div className="text-sm sm:text-base text-[#252820]/85 font-sans leading-relaxed whitespace-pre-line space-y-3">
                {room.longDescription}
              </div>
            </div>

            {/* Bedding Configuration */}
            <div className="p-4 bg-[#E9DFCF]/40 border-l-2 border-[#B56B4B] space-y-1">
              <span className="text-xs uppercase font-bold tracking-wider text-[#252820]">Bed Configuration</span>
              <p className="text-xs text-[#252820]/90 font-medium">{room.bedConfig}</p>
            </div>

            {/* Amenities List */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#252820]">
                Amenities & In-Room Comforts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-[#252820]">
                    <CheckCircle2 className="w-4 h-4 text-[#777C61] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules */}
            <div className="space-y-4 pt-4 border-t border-[#E9DFCF]">
              <h3 className="font-serif text-xl font-bold text-[#252820]">
                House Rules & Neighbourhood Etiquette
              </h3>
              <ul className="space-y-2 text-xs text-[#252820]/80">
                {room.houseRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#B56B4B] font-bold">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cancellation Policy */}
            <div className="space-y-2 pt-4 border-t border-[#E9DFCF]">
              <h3 className="font-serif text-lg font-bold text-[#252820]">
                Cancellation Policy
              </h3>
              <p className="text-xs text-[#777C61] leading-relaxed">
                {room.cancellationPolicy}
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Booking Enquiry Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#FAF7F2] border border-[#DACBB7] p-6 sm:p-8 shadow-md space-y-6">
              {/* Pricing Display */}
              <div className="border-b border-[#DACBB7]/70 pb-5">
                <span className="text-xs text-[#777C61] block">Price per night</span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#252820]">
                    ₹{room.pricePerNight.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#777C61]">/ night (approx. initial rate)</span>
                </div>
                <p className="text-[11px] text-[#777C61] mt-1">
                  Taxes included. No surprise platform booking fees.
                </p>
              </div>

              {/* Booking Enquiry Form */}
              <form onSubmit={handleWhatsAppEnquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    required
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3.5 py-2 text-xs sm:text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3.5 py-2 text-xs sm:text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3.5 py-2 text-xs sm:text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
                  >
                    <option value={1}>1 Guest (Solo)</option>
                    <option value={2}>2 Guests (Max Capacity for this room)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1">
                    Notes for Host (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    placeholder="e.g. Arriving by flight at 4 PM"
                    className="w-full bg-[#F7F4ED] border border-[#DACBB7] px-3.5 py-2 text-xs text-[#252820] placeholder-[#777C61]/70 focus:outline-none focus:border-[#B56B4B] resize-none"
                  />
                </div>

                {/* Direct Host Clarification Notice */}
                <div className="bg-[#E9DFCF]/60 p-3 text-[11px] leading-relaxed text-[#252820] border-l-2 border-[#B56B4B] space-y-1">
                  <div className="flex items-center space-x-1.5 font-semibold">
                    <AlertCircle className="w-3.5 h-3.5 text-[#B56B4B]" />
                    <span>Enquiry via WhatsApp:</span>
                  </div>
                  <p>
                    Clicking below creates a ready message for WhatsApp. Availability and pricing will be personally confirmed by the host before reservation.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-3.5 px-6 font-semibold uppercase tracking-widest text-xs transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </form>

              {/* Host location note */}
              <div className="pt-4 border-t border-[#DACBB7]/70 text-xs text-[#777C61] space-y-2">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B56B4B] shrink-0 mt-0.5" />
                  <span>{room.propertyLocationNote}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
