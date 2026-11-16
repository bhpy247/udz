"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ChevronLeft,
  ArrowRight,
  MessageCircle,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { Itinerary } from "@/lib/types";
import { roomsData } from "@/lib/data";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

interface ItineraryDetailClientProps {
  itinerary: Itinerary;
}

export default function ItineraryDetailClient({ itinerary }: ItineraryDetailClientProps) {
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  const recommendedRoom = roomsData.find(
    (r) => r.slug === itinerary.recommendedStayRoomSlug
  ) || roomsData[0];

  const currentDay = itinerary.days[activeDayIndex] || itinerary.days[0];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Row */}
        <div className="flex items-center justify-between py-4 border-b border-[#E9DFCF] mb-8 text-xs text-[#777C61]">
          <Link
            href="/itineraries"
            className="inline-flex items-center space-x-1.5 text-[#252820] hover:text-[#B56B4B] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="font-semibold uppercase tracking-wider">All Itineraries</span>
          </Link>

          <span className="px-2.5 py-0.5 bg-[#FAF7F2] border border-[#DACBB7] uppercase font-mono text-[10px]">
            {itinerary.targetAudience}
          </span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#B56B4B] uppercase">
              <Clock className="w-3.5 h-3.5" />
              <span>{itinerary.duration}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252820] leading-tight">
              {itinerary.title}
            </h1>
            <p className="text-base sm:text-lg text-[#252820]/80 font-sans leading-relaxed">
              {itinerary.overview}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#777C61]">
              <span>• {itinerary.days.length} Total {itinerary.days.length === 1 ? "Day" : "Days"}</span>
              <span>• Recommended Stay: Ambamata Homestay</span>
              <span>• Hand-sequenced by local hosts</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#E9DFCF] border border-[#DACBB7]">
              <Image
                src={itinerary.coverImage}
                alt={itinerary.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Day Switcher (For Multi-Day Itineraries) */}
        {itinerary.days.length > 1 && (
          <div className="flex border-b border-[#DACBB7] mb-10 overflow-x-auto space-x-2">
            {itinerary.days.map((day, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDayIndex(idx)}
                className={`py-3 px-6 text-sm font-serif font-bold transition-all whitespace-nowrap border-b-2 -mb-[1px] ${
                  activeDayIndex === idx
                    ? "border-[#B56B4B] text-[#B56B4B] bg-[#FAF7F2]"
                    : "border-transparent text-[#777C61] hover:text-[#252820]"
                }`}
              >
                Day {day.dayNumber}: {day.dayTitle.split(":")[1] || day.dayTitle}
              </button>
            ))}
          </div>
        )}

        {/* Day Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: The Timeline Stops */}
          <div className="lg:col-span-8 space-y-8">
            <div className="border-b border-[#E9DFCF] pb-4">
              <span className="text-xs uppercase font-semibold text-[#B56B4B] tracking-wider">
                {currentDay.dayTitle}
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#252820] mt-1">
                Theme: {currentDay.theme}
              </h2>
            </div>

            {/* Vertical Timeline */}
            <div className="relative border-l-2 border-[#DACBB7] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
              {currentDay.stops.map((stop) => (
                <div key={stop.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#FAF7F2] border-2 border-[#B56B4B] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#B56B4B]" />
                  </div>

                  <div className="bg-[#FAF7F2] border border-[#E9DFCF] p-5 sm:p-6 transition-all group-hover:border-[#B56B4B]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-block bg-[#E9DFCF] text-[#252820] text-xs font-semibold px-2.5 py-1">
                        {stop.timeSlot}
                      </span>
                      {stop.destinationSlug && (
                        <Link
                          href={`/places-to-visit/${stop.destinationSlug}`}
                          className="text-[11px] font-semibold text-[#B56B4B] hover:underline flex items-center space-x-1"
                        >
                          <span>Destination Guide</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#252820]">
                      {stop.destinationName}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#252820]/80 mt-2 leading-relaxed">
                      {stop.description}
                    </p>

                    {stop.tips && (
                      <div className="mt-3 pt-3 border-t border-[#E9DFCF] flex items-start space-x-2 text-xs text-[#777C61]">
                        <Lightbulb className="w-3.5 h-3.5 text-[#B56B4B] shrink-0 mt-0.5" />
                        <span><strong>Local Tip:</strong> {stop.tips}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Travel Tips List */}
            {itinerary.travelTips && itinerary.travelTips.length > 0 && (
              <div className="mt-12 p-6 bg-[#FAF7F2] border border-[#DACBB7] space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#252820]">
                  Essential Tips for This Itinerary
                </h3>
                <ul className="space-y-2 text-xs text-[#252820]/85">
                  {itinerary.travelTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#777C61] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: Recommended Room & Enquiry Action */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            {/* Recommended Stay Card */}
            <div className="bg-[#FAF7F2] border border-[#DACBB7] p-6 space-y-4 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B56B4B]">
                Ideal Accommodation Pairing
              </span>

              <h3 className="font-serif text-xl font-bold text-[#252820]">
                {recommendedRoom.name}
              </h3>

              <div className="relative h-44 w-full bg-[#E9DFCF] overflow-hidden">
                <Image
                  src={recommendedRoom.images[0]}
                  alt={recommendedRoom.name}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-xs text-[#777C61] leading-relaxed">
                Stay at our Ambamata homestay for effortless 5-minute access to the starting points of this itinerary.
              </p>

              <div className="flex items-baseline space-x-1.5 pt-1">
                <span className="font-serif text-2xl font-bold text-[#252820]">
                  ₹{recommendedRoom.pricePerNight.toLocaleString()}
                </span>
                <span className="text-xs text-[#777C61]">/ night</span>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href={`/stays/${recommendedRoom.slug}`}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>View Room Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Custom Trip Enquiry */}
            <div className="bg-[#E9DFCF]/50 border border-[#DACBB7] p-5 space-y-3">
              <h4 className="font-serif text-base font-bold text-[#252820]">
                Customise This Route
              </h4>
              <p className="text-xs text-[#777C61] leading-relaxed">
                Have specific constraints, dates, or food preferences? Message our host directly on WhatsApp for tailored advice.
              </p>
              <a
                href={buildWhatsAppGeneralUrl(
                  `Itinerary Customisation: ${itinerary.title}`,
                  `Hi Udaipur Unfolded, I am reviewing your "${itinerary.title}" and would like assistance customising it.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#777C61] hover:bg-[#646950] text-white py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Customise on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
