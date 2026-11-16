"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Calendar,
  Ticket,
  ChevronLeft,
  Navigation,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Attraction } from "@/lib/types";
import { itinerariesData } from "@/lib/data";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

interface AttractionDetailClientProps {
  attraction: Attraction;
}

export default function AttractionDetailClient({ attraction }: AttractionDetailClientProps) {
  const [activeImage, setActiveImage] = useState(0);
  const allImages = [attraction.heroImage, ...(attraction.gallery || [])];

  const relatedItineraries = itinerariesData.filter((it) =>
    attraction.relatedItineraries?.includes(it.slug)
  );

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Row */}
        <div className="flex items-center justify-between py-4 border-b border-[#E9DFCF] mb-8 text-xs text-[#777C61]">
          <Link
            href="/places-to-visit"
            className="inline-flex items-center space-x-1.5 text-[#252820] hover:text-[#B56B4B] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="font-semibold uppercase tracking-wider">All Destinations</span>
          </Link>

          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 bg-[#FAF7F2] border border-[#DACBB7] uppercase font-mono text-[10px]">
              {attraction.category}
            </span>
          </div>
        </div>

        {/* Title Section */}
        <div className="max-w-4xl space-y-2 mb-8">
          <div className="flex items-baseline space-x-3">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252820] leading-tight">
              {attraction.name}
            </h1>
            {attraction.hindiName && (
              <span className="font-serif text-xl sm:text-2xl text-[#777C61] opacity-75">
                {attraction.hindiName}
              </span>
            )}
          </div>
          <p className="text-base sm:text-lg text-[#777C61] font-sans">
            {attraction.shortDescription}
          </p>
        </div>

        {/* Hero Gallery */}
        <div className="space-y-4 mb-14">
          <div className="relative h-[340px] sm:h-[500px] w-full overflow-hidden bg-[#E9DFCF] border border-[#DACBB7]">
            <Image
              src={allImages[activeImage]}
              alt={attraction.name}
              fill
              priority
              className="object-cover transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-[#252820]/80 backdrop-blur-sm text-white px-3 py-1 text-xs">
              {attraction.name} • {attraction.location}
            </div>
          </div>

          {allImages.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative h-20 sm:h-24 border-2 transition-all overflow-hidden ${
                    activeImage === idx
                      ? "border-[#B56B4B] opacity-100"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#252820]">
                About & Heritage History
              </h2>
              <div className="text-sm sm:text-base text-[#252820]/85 font-sans leading-relaxed whitespace-pre-line">
                {attraction.fullDescription}
              </div>
            </div>

            {/* Quick Practical Info Box */}
            <div className="p-6 bg-[#FAF7F2] border border-[#DACBB7] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#252820] border-b border-[#DACBB7]/70 pb-3">
                Visitor Information & Practical Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-[#777C61] font-semibold uppercase tracking-wider block">
                    Estimated Visit Duration
                  </span>
                  <span className="font-serif text-sm font-bold text-[#252820] flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B56B4B]" />
                    <span>{attraction.estimatedDuration}</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[#777C61] font-semibold uppercase tracking-wider block">
                    Suggested Time to Visit
                  </span>
                  <span className="font-serif text-sm font-bold text-[#252820] flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B56B4B]" />
                    <span>{attraction.suggestedTiming}</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[#777C61] font-semibold uppercase tracking-wider block">
                    Verified Opening Hours
                  </span>
                  <span className="font-sans text-xs text-[#252820] font-medium">
                    {attraction.verifiedOpeningHours || "Inquire locally (seasonal changes apply)"}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[#777C61] font-semibold uppercase tracking-wider block">
                    Entry Fee (Verified)
                  </span>
                  <span className="font-sans text-xs text-[#252820] font-medium flex items-center space-x-1.5">
                    <Ticket className="w-3.5 h-3.5 text-[#B56B4B]" />
                    <span>{attraction.verifiedEntryFee || "Free admission"}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            {attraction.nearbyAttractions && attraction.nearbyAttractions.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-[#E9DFCF]">
                <h3 className="font-serif text-xl font-bold text-[#252820]">
                  Nearby Places in Walking or Auto Distance
                </h3>
                <div className="flex flex-wrap gap-2">
                  {attraction.nearbyAttractions.map((place, idx) => (
                    <span
                      key={idx}
                      className="bg-[#E9DFCF]/60 text-xs text-[#252820] px-3 py-1.5 border border-[#DACBB7]/60"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Related Curated Itineraries */}
            {relatedItineraries.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-[#E9DFCF]">
                <h3 className="font-serif text-xl font-bold text-[#252820]">
                  Featured in Our Curated Travel Plans
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedItineraries.map((it) => (
                    <Link
                      key={it.id}
                      href={`/itineraries/${it.slug}`}
                      className="bg-[#FAF7F2] border border-[#DACBB7] p-4 flex flex-col justify-between hover:border-[#B56B4B] transition-colors"
                    >
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-[#B56B4B]">
                          {it.duration}
                        </span>
                        <h4 className="font-serif text-base font-bold text-[#252820] mt-1">
                          {it.title}
                        </h4>
                      </div>
                      <span className="text-xs font-semibold text-[#777C61] flex items-center space-x-1 mt-3">
                        <span>View Step-by-Step Route</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Action Sidebar */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            {/* Directions & Maps Card */}
            <div className="bg-[#FAF7F2] border border-[#DACBB7] p-6 space-y-4 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#252820]">
                Plan Your Visit
              </h3>
              <p className="text-xs text-[#777C61] leading-relaxed">
                Open exact navigation directions in Google Maps or ask our local host for auto-rickshaw fare estimates.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href={attraction.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#252820] hover:bg-[#B56B4B] text-white py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={buildWhatsAppGeneralUrl(
                    `Sightseeing Advice: ${attraction.name}`,
                    `Hi Udaipur Unfolded, I'm planning to visit ${attraction.name}. What is the best time and how can I reach easily from Ambamata?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#777C61] hover:bg-[#646950] text-white py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask Host for Tips</span>
                </a>
              </div>
            </div>

            {/* Homestay Proximity Card */}
            <div className="bg-[#E9DFCF]/40 border border-[#DACBB7] p-5 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B56B4B]">
                Stay With Us in Udaipur
              </span>
              <h4 className="font-serif text-base font-bold text-[#252820]">
                Looking for a Peaceful Base?
              </h4>
              <p className="text-xs text-[#252820]/80 leading-relaxed">
                Our two private rooms in Ambamata are only 5–7 minutes from this monument, allowing you to beat tourist crowds early in the morning.
              </p>
              <Link
                href="/stays"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#B56B4B] hover:text-[#9E593A] pt-1"
              >
                <span>Explore Homestay Rooms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
