"use client";

import React from "react";
import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { Experience } from "@/lib/types";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-[#FAF7F2] border border-[#E9DFCF] overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300">
      <div className="relative h-56 w-full overflow-hidden bg-[#E9DFCF]">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#F7F4ED]/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-medium tracking-widest uppercase text-[#252820] border border-[#DACBB7]">
          {experience.category}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-1 text-xs text-[#777C61] mb-2 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#B56B4B]" />
            <span>{experience.location}</span>
          </div>

          <h3 className="font-serif text-lg font-bold text-[#252820] group-hover:text-[#B56B4B] transition-colors">
            {experience.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#252820]/75 mt-2 line-clamp-3 leading-relaxed">
            {experience.shortDescription}
          </p>
        </div>

        <div className="mt-5 pt-3 border-t border-[#E9DFCF] flex items-center justify-between">
          <span className="text-[10px] text-[#777C61] font-sans">
            {experience.verifiedStatus}
          </span>
          <a
            href={buildWhatsAppGeneralUrl(`Experience Recommendation: ${experience.title}`, `Hi, I saw "${experience.title}" on Udaipur Unfolded and would love to know more tips or local timings.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-xs font-semibold text-[#B56B4B] hover:text-[#9E593A] transition-colors"
          >
            <span>Ask Host</span>
            <MessageCircle className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
