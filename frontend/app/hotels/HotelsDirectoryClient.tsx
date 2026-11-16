"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Filter,
  MapPin,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Handshake,
} from "lucide-react";
import { hotelsData } from "@/lib/data";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

export default function HotelsDirectoryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPartnership, setSelectedPartnership] = useState<string>("All");
  const [partnerPropertyName, setPartnerPropertyName] = useState("");
  const [partnerOwnerContact, setPartnerOwnerContact] = useState("");
  const [partnerLocation, setPartnerLocation] = useState("");
  const [partnerNotes, setPartnerNotes] = useState("");

  const filteredHotels = useMemo(() => {
    return hotelsData.filter((hotel) => {
      if (selectedCategory !== "All" && hotel.category !== selectedCategory) {
        return false;
      }
      if (selectedPartnership !== "All" && hotel.partnershipType !== selectedPartnership) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, selectedPartnership]);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = `Property: ${partnerPropertyName}\nLocation: ${partnerLocation}\nContact: ${partnerOwnerContact}\nNotes: ${partnerNotes}`;
    const url = buildWhatsAppGeneralUrl("Hotel & Homestay Partnership Enquiry", details);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E9DFCF] pb-12 sm:pb-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#B56B4B] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B56B4B]" />
              <span>Curated Directory</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252820] leading-tight">
              Curated Udaipur Hotels & Stays
            </h1>
            <p className="text-base sm:text-lg text-[#252820]/80 font-sans leading-relaxed">
              In addition to our primary two-room residential homestay in Ambamata, we maintain a transparent, hand-curated directory of verified partner properties and recommended heritage hotels across Udaipur.
            </p>
          </div>

          {/* Transparent Classification Explanation */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-[#FAF7F2] border border-[#B56B4B]/40 p-4 space-y-1.5">
              <span className="inline-block px-2 py-0.5 bg-[#B56B4B] text-white text-[10px] font-bold uppercase tracking-wider">
                Our Own Accommodation
              </span>
              <p className="text-[#252820] font-semibold">Residential Homestay in Ambamata</p>
              <p className="text-[#777C61] leading-relaxed">
                Hosted personally by us. Direct booking, daily local host presence, and initial rates below ₹2,000/night.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#777C61]/40 p-4 space-y-1.5">
              <span className="inline-block px-2 py-0.5 bg-[#777C61] text-white text-[10px] font-bold uppercase tracking-wider">
                Verified Partner Property
              </span>
              <p className="text-[#252820] font-semibold">Inspected Heritage & Boutiques</p>
              <p className="text-[#777C61] leading-relaxed">
                Independent properties personally inspected by our team for hygiene, authentic Mewari character, and host reliability.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#DACBB7] p-4 space-y-1.5">
              <span className="inline-block px-2 py-0.5 bg-[#DACBB7] text-[#252820] text-[10px] font-bold uppercase tracking-wider">
                Recommended Third-Party
              </span>
              <p className="text-[#252820] font-semibold">Editorial Recommendations</p>
              <p className="text-[#777C61] leading-relaxed">
                Notable hotels and luxury resorts we appreciate for their scenic location, though not managed by us.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mt-10 mb-8 flex flex-wrap items-center justify-between gap-4 p-4 bg-[#FAF7F2] border border-[#DACBB7]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#252820] flex items-center space-x-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#B56B4B]" />
              <span>Category:</span>
            </span>
            {["All", "Budget stays", "Mid-range hotels", "Heritage hotels", "Premium hotels"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#252820] text-white font-medium"
                    : "bg-[#F7F4ED] text-[#252820] hover:bg-[#E9DFCF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#777C61]">
              Partnership:
            </span>
            <select
              value={selectedPartnership}
              onChange={(e) => setSelectedPartnership(e.target.value)}
              className="bg-[#F7F4ED] border border-[#DACBB7] text-xs text-[#252820] px-2.5 py-1.5 focus:outline-none"
            >
              <option value="All">All Properties</option>
              <option value="Our own accommodation">Our Own Homestay</option>
              <option value="Verified partner property">Verified Partners</option>
              <option value="Recommended third-party">Recommended Third-Party</option>
            </select>
          </div>
        </div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => {
            const isOurHomestay = hotel.partnershipType === "Our own accommodation";

            return (
              <div
                key={hotel.id}
                className="bg-[#FAF7F2] border border-[#E9DFCF] overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-[#E9DFCF]">
                    <Image
                      src={hotel.photos[0]}
                      alt={hotel.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#F7F4ED]/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-medium tracking-widest uppercase text-[#252820] border border-[#DACBB7]">
                      {hotel.category}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider ${
                          isOurHomestay
                            ? "bg-[#B56B4B] text-white"
                            : hotel.partnershipType === "Verified partner property"
                            ? "bg-[#777C61] text-white"
                            : "bg-[#252820]/80 text-[#DACBB7]"
                        }`}
                      >
                        {hotel.partnershipType}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-1.5 text-xs text-[#777C61]">
                      <MapPin className="w-3.5 h-3.5 text-[#B56B4B] shrink-0" />
                      <span>{hotel.location}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#252820] group-hover:text-[#B56B4B] transition-colors">
                      {hotel.name}
                    </h3>

                    <div className="text-xs font-semibold text-[#B56B4B]">
                      Indicative: {hotel.indicativePriceRange}
                    </div>

                    <p className="text-xs text-[#252820]/80 leading-relaxed line-clamp-3">
                      {hotel.shortDescription}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {hotel.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="bg-[#E9DFCF]/50 text-[10px] text-[#252820] px-2 py-0.5 border border-[#DACBB7]/40"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E9DFCF] mt-4 flex items-center justify-between gap-3">
                  {isOurHomestay ? (
                    <Link
                      href="/stays"
                      className="w-full inline-flex items-center justify-center space-x-1.5 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <span>View Our Rooms</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <a
                      href={buildWhatsAppGeneralUrl(
                        `Hotel Enquiry: ${hotel.name}`,
                        `Hi, I saw ${hotel.name} listed under your curated hotel directory. Could you share indicative availability and guidance?`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-1.5 bg-[#777C61] hover:bg-[#646950] text-white py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire via Host</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Hotel Partnership Enquiry Section */}
        <div id="partnership" className="mt-20 pt-16 border-t border-[#E9DFCF]">
          <div className="bg-[#FAF7F2] border border-[#DACBB7] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#B56B4B] uppercase">
                  <Handshake className="w-4 h-4 text-[#B56B4B]" />
                  <span>Property Owners & Hoteliers</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#252820]">
                  Partner With Udaipur Unfolded
                </h2>
                <p className="text-sm text-[#252820]/80 leading-relaxed">
                  Are you an independent homestay owner or heritage hotelier in Udaipur? We curate respectful, mindful travellers who appreciate authentic local culture and heritage architecture.
                </p>

                <div className="space-y-3 pt-2 text-xs text-[#252820]">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#777C61] shrink-0 mt-0.5" />
                    <span>No unverified automatic listings — we personally verify every partner.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#777C61] shrink-0 mt-0.5" />
                    <span>Fair direct referral arrangements without predatory OTA commission margins.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#777C61] shrink-0 mt-0.5" />
                    <span>Focus on guest satisfaction, authentic Mewari hospitality, and spotless hygiene.</span>
                  </div>
                </div>
              </div>

              {/* Partnership Form */}
              <div className="lg:col-span-7 bg-[#F7F4ED] border border-[#DACBB7] p-6 sm:p-8">
                <h3 className="font-serif text-xl font-bold text-[#252820] mb-4">
                  Submit a Partnership Request
                </h3>
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1">
                        Property Name
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerPropertyName}
                        onChange={(e) => setPartnerPropertyName(e.target.value)}
                        placeholder="e.g. Mewar Heritage Villa"
                        className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2 text-xs sm:text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1">
                        Location / Neighbourhood
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerLocation}
                        onChange={(e) => setPartnerLocation(e.target.value)}
                        placeholder="e.g. Chandpole / Fateh Sagar"
                        className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2 text-xs sm:text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1">
                      Owner / Manager Contact (Phone or WhatsApp)
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerOwnerContact}
                      onChange={(e) => setPartnerOwnerContact(e.target.value)}
                      placeholder="+91 98765 XXXXX"
                      className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2 text-xs sm:text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1">
                      Brief Description of Rooms & Architecture
                    </label>
                    <textarea
                      rows={3}
                      value={partnerNotes}
                      onChange={(e) => setPartnerNotes(e.target.value)}
                      placeholder="Number of rooms, tariff range, heritage features, or special guest amenities."
                      className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2 text-xs text-[#252820] placeholder-[#777C61]/70 focus:outline-none focus:border-[#B56B4B] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-3.5 px-6 font-semibold uppercase tracking-widest text-xs transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Submit Partnership via WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
