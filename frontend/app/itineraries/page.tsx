import React from "react";
import { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { itinerariesData } from "@/lib/data";
import ItineraryCard from "@/components/ItineraryCard";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Curated Udaipur Itineraries — 1, 2 & 3 Day Trips | Udaipur Unfolded",
  description:
    "Hand-crafted Udaipur itineraries for 1 day, 2 days, 3 days, couples, and families. Optimised routes, sunset viewpoints, and local dining suggestions.",
  keywords: [
    "Udaipur itinerary",
    "Udaipur in 1 day",
    "Udaipur 2 days itinerary",
    "Udaipur 3 days travel plan",
    "Couples Udaipur trip",
    "Family Udaipur travel",
  ],
};

export default function ItinerariesPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E9DFCF] pb-12 sm:pb-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#B56B4B] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B56B4B]" />
              <span>Curated Travel Plans</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252820] leading-tight">
              Thoughtfully Sequenced Udaipur Itineraries
            </h1>
            <p className="text-base sm:text-lg text-[#252820]/80 font-sans leading-relaxed">
              Skip the exhausting back-and-forth commuting and confusing commercial tourist advice. Our curated day-wise travel plans organise monuments, boat rides, lunch spots, and golden hour viewpoints by geographical proximity and optimal lighting.
            </p>
          </div>
        </div>

        {/* Itineraries Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itinerariesData.map((itinerary) => (
            <ItineraryCard key={itinerary.id} itinerary={itinerary} />
          ))}
        </div>

        {/* Custom Itinerary Planning CTA */}
        <div className="mt-16 bg-[#FAF7F2] border border-[#DACBB7] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B56B4B]">
              Personalised Guidance
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#252820]">
              Need a Custom Trip Plan or Specific Recommendation?
            </h2>
            <p className="text-sm text-[#252820]/80 leading-relaxed">
              Arriving by overnight train? Visiting with elderly parents or celebrating an anniversary? Chat directly with our local host on WhatsApp. We are delighted to share tailored route suggestions based on your personal travel style.
            </p>
          </div>

          <a
            href={buildWhatsAppGeneralUrl(
              "Custom Udaipur Itinerary Advice",
              "Hi Udaipur Unfolded, I am planning a trip to Udaipur and would love personal recommendations for my travel dates and group."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-3.5 px-6 font-semibold uppercase tracking-wider text-xs transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
