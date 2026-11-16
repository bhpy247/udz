import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Attraction } from "@/lib/types";

interface DestinationCardProps {
  attraction: Attraction;
  compact?: boolean;
}

export default function DestinationCard({ attraction, compact = false }: DestinationCardProps) {
  return (
    <Link
      href={`/places-to-visit/${attraction.slug}`}
      className="group bg-[#FAF7F2] border border-[#E9DFCF] overflow-hidden flex flex-col hover:shadow-md transition-all duration-300 block"
    >
      <div className={`relative ${compact ? "h-52" : "h-64 sm:h-72"} w-full overflow-hidden bg-[#E9DFCF]`}>
        <Image
          src={attraction.heroImage}
          alt={attraction.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#F7F4ED]/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-medium tracking-widest uppercase text-[#252820] border border-[#DACBB7]">
          {attraction.category}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-[#777C61] mb-1.5">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#B56B4B]" />
              <span className="truncate max-w-[150px]">{attraction.location}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-[#777C61]" />
              <span>{attraction.estimatedDuration}</span>
            </span>
          </div>

          <div className="flex items-baseline space-x-2">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#252820] group-hover:text-[#B56B4B] transition-colors">
              {attraction.name}
            </h3>
            {attraction.hindiName && (
              <span className="text-xs text-[#777C61] font-serif opacity-75">
                {attraction.hindiName}
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-[#252820]/75 mt-2 line-clamp-2 leading-relaxed">
            {attraction.shortDescription}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#E9DFCF] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#B56B4B]">
          <span>View Guide & Tips</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
