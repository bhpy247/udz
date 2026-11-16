import React from "react";
import { Metadata } from "next";
import {
  UtensilsCrossed,
  Sunset,
  ShoppingBag,
  Ship,
  Sparkles,
  Camera,
  MessageCircle,
} from "lucide-react";
import { experiencesData } from "@/lib/data";
import ExperienceCard from "@/components/ExperienceCard";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Local Experiences in Udaipur — Food, Markets, Rooftops & Ghats | Udaipur Unfolded",
  description:
    "Discover authentic Udaipur experiences: traditional Mewari thalis, evening folk dance at Bagore Ki Haveli, sunset boat rides on Pichola, and hidden photography spots.",
  keywords: [
    "Udaipur local experiences",
    "Best food in Udaipur",
    "Udaipur rooftop restaurants",
    "Dharohar folk dance Udaipur",
    "Hathi Pol market shopping",
    "Lake Pichola sunset boat ride",
  ],
};

const categoryDescriptions = [
  {
    category: "Local Food",
    icon: UtensilsCrossed,
    intro: "Mewari cooking is shaped by heritage spices, slow firewood simmering, and pure desi ghee. From street-side mirchi vadas to hearty thalis.",
  },
  {
    category: "Rooftop Dining",
    icon: Sunset,
    intro: "Unfiltered twilight perspectives of the City Palace and illuminated island palaces with gentle evening breezes.",
  },
  {
    category: "Traditional Markets",
    icon: ShoppingBag,
    intro: "Centuries-old artisan bazaars for authentic vegetable block prints, hand-stitched leather mojris, and intricate Pichwai paintings.",
  },
  {
    category: "Boat Rides",
    icon: Ship,
    intro: "The quintessential City of Lakes journey gliding across Lake Pichola and Fateh Sagar at golden hour.",
  },
  {
    category: "Cultural Experiences",
    icon: Sparkles,
    intro: "Living Rajasthani folk dances, traditional puppetry, and evening temple aartis with deep devotional resonance.",
  },
  {
    category: "Photography",
    icon: Camera,
    intro: "Carefully mapped vantage points for sunrise stillness, palace reflections, and mountain twilight without the crowds.",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E9DFCF] pb-12 sm:pb-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#B56B4B] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B56B4B]" />
              <span>Curated Local Life</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252820] leading-tight">
              Authentic Udaipur Experiences
            </h1>
            <p className="text-base sm:text-lg text-[#252820]/80 font-sans leading-relaxed">
              We share honest, locally tested recommendations so you experience the real flavour of Udaipur. No sponsored placements, no overpriced tourist traps — just genuine Mewari culture, honest food, and unforgettable memories.
            </p>
          </div>
        </div>

        {/* Categories Overview Bar */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categoryDescriptions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#FAF7F2] border border-[#DACBB7] p-3 text-center space-y-1.5">
                <Icon className="w-4 h-4 mx-auto text-[#B56B4B]" />
                <span className="block font-serif text-xs font-bold text-[#252820]">{item.category}</span>
              </div>
            );
          })}
        </div>

        {/* Experiences Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiencesData.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {/* Transparency Box */}
        <div className="mt-16 p-6 sm:p-8 bg-[#FAF7F2] border border-[#DACBB7] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B56B4B]">
              Editorial Transparency Policy
            </span>
            <p className="text-xs sm:text-sm text-[#252820]/80 leading-relaxed">
              Udaipur Unfolded does not sell commercial packages or claim unverified third-party services as our own. All experience guides reflect authentic host research to empower independent travellers.
            </p>
          </div>

          <a
            href={buildWhatsAppGeneralUrl(
              "Local Experience Recommendations",
              "Hi Udaipur Unfolded, I am interested in exploring local experiences during my upcoming stay."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-3 px-5 text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Host Directly</span>
          </a>
        </div>
      </div>
    </div>
  );
}
