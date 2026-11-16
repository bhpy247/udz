"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Bed, ArrowRight, MessageCircle } from "lucide-react";
import { Room } from "@/lib/types";
import EnquiryModal from "./EnquiryModal";

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-[#FAF7F2] border border-[#E9DFCF] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg">
        {/* Image Container */}
        <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#E9DFCF]">
          <Image
            src={room.images[0]}
            alt={room.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
          {/* Subtle editorial badge */}
          <div className="absolute top-4 left-4 bg-[#F7F4ED]/90 backdrop-blur-sm px-3 py-1 text-[11px] font-medium tracking-widest uppercase text-[#252820] border border-[#DACBB7]">
            Residential Homestay
          </div>
          {/* Pricing Tag */}
          <div className="absolute bottom-4 right-4 bg-[#252820]/90 backdrop-blur-sm px-3.5 py-1.5 text-white">
            <span className="text-xs text-[#DACBB7]">From </span>
            <span className="font-serif text-lg font-bold text-white">₹{room.pricePerNight.toLocaleString()}</span>
            <span className="text-[11px] text-[#DACBB7]"> / night</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 text-xs text-[#777C61] mb-2 font-medium">
              <span className="flex items-center space-x-1">
                <Users className="w-3.5 h-3.5 text-[#B56B4B]" />
                <span>Up to {room.maxGuests} Guests</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Bed className="w-3.5 h-3.5 text-[#B56B4B]" />
                <span>{room.roomSize}</span>
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#252820] group-hover:text-[#B56B4B] transition-colors">
              <Link href={`/stays/${room.slug}`}>{room.name}</Link>
            </h3>

            <p className="text-xs text-[#777C61] font-medium mt-1 italic">
              {room.tagline}
            </p>

            <p className="text-sm text-[#252820]/80 mt-3 leading-relaxed line-clamp-3">
              {room.description}
            </p>

            {/* Key Amenities */}
            <div className="mt-5 pt-4 border-t border-[#E9DFCF] flex flex-wrap gap-2">
              {room.amenities.slice(0, 4).map((amenity, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-[#E9DFCF]/50 text-[#252820] text-[11px] px-2.5 py-1 border border-[#DACBB7]/50"
                >
                  {amenity}
                </span>
              ))}
              {room.amenities.length > 4 && (
                <span className="inline-block text-[#777C61] text-[11px] px-1 py-1">
                  +{room.amenities.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 pt-5 border-t border-[#E9DFCF] flex items-center justify-between gap-3">
            <Link
              href={`/stays/${room.slug}`}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-wider uppercase text-[#252820] hover:text-[#B56B4B] transition-colors"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center space-x-1.5 bg-[#B56B4B] hover:bg-[#9E593A] text-white text-xs font-medium px-4 py-2 uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultRoomSlug={room.slug}
      />
    </>
  );
}
