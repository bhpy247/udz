import React from "react";
import { Metadata } from "next";
import { attractionsData } from "@/lib/data";
import DestinationCard from "@/components/DestinationCard";

export const metadata: Metadata = {
  title: "15 Best Places to Visit in Udaipur — Verified Guide | Udaipur Unfolded",
  description:
    "Curated guide to Udaipur's top heritage monuments, scenic lakes, hilltop palaces, and historic gardens with verified timings and local tips.",
  keywords: [
    "Places to visit in Udaipur",
    "Tourist places in Udaipur",
    "Udaipur sightseeing",
    "City Palace Udaipur timings",
    "Lake Pichola ghats",
    "Monsoon Palace sunset",
  ],
};

export default function PlacesToVisitPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E9DFCF] pb-12 sm:pb-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#B56B4B] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B56B4B]" />
              <span>Destination Discovery</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252820] leading-tight">
              15 Iconic Places to Visit in Udaipur
            </h1>
            <p className="text-base sm:text-lg text-[#252820]/80 font-sans leading-relaxed">
              Explore the royal architecture, timeless freshwater lakes, intricate stone temples, and secluded hilltop vantage points that make Udaipur Rajasthan&apos;s most poetic city. Every entry includes verified visiting advice from our local hosts.
            </p>
          </div>

          {/* Quick Categories Bar */}
          <div className="mt-8 flex flex-wrap gap-2 text-xs">
            {["All 15 Destinations", "Heritage Palaces", "Freshwater Lakes", "Ancient Temples", "Imperial Gardens", "Mountain Viewpoints", "Folk Culture"].map((filter, idx) => (
              <span
                key={idx}
                className="bg-[#FAF7F2] border border-[#DACBB7] px-3 py-1.5 text-[#252820] font-medium"
              >
                {filter}
              </span>
            ))}
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractionsData.map((attraction) => (
            <DestinationCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </div>
    </div>
  );
}
