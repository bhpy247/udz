import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Itinerary } from "@/lib/types";

interface ItineraryCardProps {
  itinerary: Itinerary;
}

export default function ItineraryCard({ itinerary }: ItineraryCardProps) {
  const totalStops = itinerary.days.reduce((acc, d) => acc + d.stops.length, 0);

  return (
    <div className="bg-[#FAF7F2] border border-[#E9DFCF] overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300">
      <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-[#E9DFCF]">
        <Image
          src={itinerary.coverImage}
          alt={itinerary.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#F7F4ED]/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-medium tracking-widest uppercase text-[#252820] border border-[#DACBB7]">
          {itinerary.targetAudience}
        </div>
        <div className="absolute bottom-3 left-3 bg-[#252820]/90 backdrop-blur-sm px-3 py-1 text-white text-xs font-medium flex items-center space-x-1.5">
          <Clock className="w-3 h-3 text-[#DACBB7]" />
          <span>{itinerary.duration}</span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#252820] group-hover:text-[#B56B4B] transition-colors">
            <Link href={`/itineraries/${itinerary.slug}`}>{itinerary.title}</Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#252820]/80 mt-2.5 line-clamp-3 leading-relaxed">
            {itinerary.overview}
          </p>

          <div className="mt-4 pt-3 border-t border-[#E9DFCF] flex items-center justify-between text-xs text-[#777C61]">
            <span>{itinerary.days.length} {itinerary.days.length === 1 ? "Day" : "Days"} Curated</span>
            <span>{totalStops} Recommended Stops</span>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-[#E9DFCF]">
          <Link
            href={`/itineraries/${itinerary.slug}`}
            className="w-full inline-flex items-center justify-center space-x-2 bg-[#777C61] hover:bg-[#646950] text-white py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <span>Explore Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
