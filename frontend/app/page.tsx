import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  HeartHandshake,
  Coffee,
  CheckCircle2,
} from "lucide-react";
import { roomsData, attractionsData, itinerariesData, experiencesData } from "@/lib/data";
import RoomCard from "@/components/RoomCard";
import DestinationCard from "@/components/DestinationCard";
import ItineraryCard from "@/components/ItineraryCard";
import ExperienceCard from "@/components/ExperienceCard";

export default function HomePage() {
  // Select top 6-7 attractions for homepage editorial showcase
  const featuredAttractions = attractionsData.slice(0, 7);
  // 3 Curated itineraries
  const featuredItineraries = itinerariesData.slice(0, 3);
  // 4 Featured experiences
  const featuredExperiences = experiencesData.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          B. HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#252820]">
        {/* Cinematic Backdrop Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-udaipur.jpg"
            alt="Udaipur City Palace and Lake Pichola at sunset"
            fill
            priority
            className="object-cover object-center opacity-60 brightness-95 filter contrast-105"
          />
          {/* Top & bottom gradient overlays to guarantee perfect navigation & text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#181A14]/75 via-transparent to-[#252820]/90 pointer-events-none" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Tagline Pill */}
          <div className="inline-flex items-center space-x-2 bg-[#F7F4ED]/15 backdrop-blur-md border border-[#F7F4ED]/30 px-4 py-1.5 text-xs text-[#F7F4ED] tracking-[0.25em] uppercase font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B56B4B]" />
            <span>Stay closer. Explore deeper.</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F7F4ED] leading-[1.12]">
            Discover Udaipur, <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#DACBB7]">beyond the ordinary.</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#F7F4ED]/85 font-sans font-light leading-relaxed">
            Find your stay. Discover hidden gems. Experience the City of Lakes like a true local.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              href="#featured-stays"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-200 shadow-md active:scale-95"
            >
              <span>Explore Stays</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/itineraries"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#F7F4ED]/10 border border-[#F7F4ED]/50 text-[#F7F4ED] px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-200"
            >
              <span>Plan Your Trip</span>
            </Link>
          </div>

          {/* Quick Context Pill */}
          <div className="pt-8 sm:pt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#DACBB7]/90 border-t border-[#DACBB7]/20 max-w-2xl mx-auto">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#B56B4B]" />
              <span>Near Ambamata Temple</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#B56B4B]" />
              <span>7 Mins to Pichola & Fateh Sagar</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#B56B4B]" />
              <span>Direct WhatsApp Booking</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          C. INTRODUCTION SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F4ED]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#B56B4B] uppercase">
            Rooted in Mewari Hospitality
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#252820] leading-tight">
            Your gateway to the City of Lakes.
          </h2>

          <div className="w-16 h-0.5 bg-[#B56B4B] mx-auto my-6" />

          <p className="text-base sm:text-lg text-[#252820]/80 font-sans leading-relaxed text-justify sm:text-center">
            Udaipur Unfolded was founded to bring back honest, unhurried hospitality. In an era of generic booking platforms and tourist traps, we offer travellers an authentic residential base in the quiet leafy lanes near <strong>Ambamata Temple</strong>. Whether you stay in one of our two dedicated private rooms, choose one of our verified partner properties, or simply follow our hand-curated itineraries, you will experience the living culture, architecture, and spirit of Udaipur as our personal guests.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-8 text-xs font-medium uppercase tracking-wider text-[#777C61]">
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#B56B4B]" />
              <span>Private Homestay Rooms</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#B56B4B]" />
              <span>Verified Partner Hotels</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#B56B4B]" />
              <span>Curated City Itineraries</span>
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          D. FEATURED ACCOMMODATION
          ========================================================================= */}
      <section id="featured-stays" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#E9DFCF]/40 border-y border-[#E9DFCF]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#B56B4B] uppercase">
                Primary Accommodation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252820]">
                Our Private Guest Rooms
              </h2>
              <p className="text-sm text-[#777C61] max-w-xl">
                Located in a peaceful residential home near Ambamata Temple. Two thoughtfully furnished rooms, each with private washroom, fast Wi-Fi, and serene surroundings.
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <span className="text-xs text-[#777C61] hidden sm:inline">
                Initial rates kept under ₹2,000 / night
              </span>
              <Link
                href="/stays"
                className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-wider uppercase text-[#B56B4B] hover:text-[#9E593A] transition-colors"
              >
                <span>View Full Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* The Two Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {roomsData.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          {/* Homestay Feature Highlight Banner */}
          <div className="mt-12 bg-[#FAF7F2] border border-[#DACBB7] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#777C61]" />
                <h3 className="font-serif text-lg font-bold text-[#252820]">
                  Travelling with Family or a Small Group?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#777C61] max-w-2xl">
                You can reserve both Room 1 and Room 2 together to have the entire guest wing of our residential property for up to 4 guests with full privacy.
              </p>
            </div>

            <Link
              href="/stays"
              className="inline-flex items-center space-x-2 bg-[#777C61] hover:bg-[#646950] text-white text-xs font-medium uppercase tracking-wider px-5 py-2.5 transition-colors shrink-0"
            >
              <span>Explore Homestay Wing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          E. EXPLORE UDAIPUR (DESTINATIONS)
          ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F4ED]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B56B4B] uppercase">
              Curated Destination Guide
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#252820]">
              Explore Udaipur
            </h2>
            <p className="text-sm sm:text-base text-[#777C61] leading-relaxed">
              From the 400-year-old marble corridors of the City Palace to quiet sunset ghats on Lake Pichola, discover verified timings, fees, and insider tips.
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredAttractions.map((attraction) => (
              <DestinationCard key={attraction.id} attraction={attraction} />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-14 text-center">
            <Link
              href="/places-to-visit"
              className="inline-flex items-center space-x-2 bg-[#252820] hover:bg-[#B56B4B] text-white px-8 py-3.5 text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              <span>View All 15 Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          F. CURATED ITINERARIES
          ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#E9DFCF]/30 border-y border-[#E9DFCF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#B56B4B] uppercase">
                Thoughtfully Sequenced Travel
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252820]">
                Curated Udaipur Itineraries
              </h2>
              <p className="text-sm text-[#777C61] max-w-xl">
                Time-optimised routes that balance landmark monuments with peaceful breaks and golden hour viewpoints.
              </p>
            </div>

            <Link
              href="/itineraries"
              className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-xs font-bold tracking-wider uppercase text-[#B56B4B] hover:text-[#9E593A] transition-colors"
            >
              <span>See All Travel Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItineraries.map((itinerary) => (
              <ItineraryCard key={itinerary.id} itinerary={itinerary} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          G. LOCAL EXPERIENCES
          ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F4ED]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B56B4B] uppercase">
              Authentic Mewar Culture
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#252820]">
              Immersive Local Experiences
            </h2>
            <p className="text-sm sm:text-base text-[#777C61]">
              Culinary walks, rooftop dinners, evening folk dances, and secret photography vantage points.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/experiences"
              className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-[#B56B4B] hover:text-[#9E593A] transition-colors"
            >
              <span>Explore All Experiences</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          H. WHY CHOOSE US?
          ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-t border-[#E9DFCF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B56B4B] uppercase">
              The Udaipur Unfolded Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#252820]">
              Why Stay & Travel With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* 1. Local Perspective */}
            <div className="bg-[#F7F4ED] border border-[#E9DFCF] p-6 space-y-3">
              <div className="w-10 h-10 bg-[#B56B4B]/10 flex items-center justify-center text-[#B56B4B]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#252820]">
                Local Perspective
              </h3>
              <p className="text-xs text-[#252820]/75 leading-relaxed">
                Genuine insider advice on uncrowded hours, authentic dining, and true Mewari craftsmanship without tourist commissions.
              </p>
            </div>

            {/* 2. Ambamata Location */}
            <div className="bg-[#F7F4ED] border border-[#E9DFCF] p-6 space-y-3">
              <div className="w-10 h-10 bg-[#777C61]/10 flex items-center justify-center text-[#777C61]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#252820]">
                Convenient Neighbourhood
              </h3>
              <p className="text-xs text-[#252820]/75 leading-relaxed">
                Situated in peaceful Ambamata. Enjoy quiet nights while remaining just 5–7 minutes from Lake Pichola and Fateh Sagar.
              </p>
            </div>

            {/* 3. Comfortable Rooms */}
            <div className="bg-[#F7F4ED] border border-[#E9DFCF] p-6 space-y-3">
              <div className="w-10 h-10 bg-[#B56B4B]/10 flex items-center justify-center text-[#B56B4B]">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#252820]">
                Comfortable Private Rooms
              </h3>
              <p className="text-xs text-[#252820]/75 leading-relaxed">
                High-speed Wi-Fi (100 Mbps), 24/7 hot geyser water, plush mattresses, and dedicated workspaces for restful stays.
              </p>
            </div>

            {/* 4. Curated Suggestions */}
            <div className="bg-[#F7F4ED] border border-[#E9DFCF] p-6 space-y-3">
              <div className="w-10 h-10 bg-[#777C61]/10 flex items-center justify-center text-[#777C61]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#252820]">
                Curated Suggestions
              </h3>
              <p className="text-xs text-[#252820]/75 leading-relaxed">
                Tried-and-tested itineraries and hidden ghat locations designed to save you time, energy, and guesswork.
              </p>
            </div>

            {/* 5. Personalised Assistance */}
            <div className="bg-[#F7F4ED] border border-[#E9DFCF] p-6 space-y-3">
              <div className="w-10 h-10 bg-[#B56B4B]/10 flex items-center justify-center text-[#B56B4B]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#252820]">
                Personalised Assistance
              </h3>
              <p className="text-xs text-[#252820]/75 leading-relaxed">
                Direct WhatsApp contact with your local host. Quick responses for directions, auto-rickshaw fares, and itinerary queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HERITAGE QUOTE / BRAND STATEMENT
          ========================================================================= */}
      <section className="py-16 px-4 bg-[#252820] text-[#F7F4ED] text-center border-t border-[#3A3F33]">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="font-serif text-xl sm:text-2xl italic text-[#DACBB7]">
            &ldquo;In Udaipur, every stone tells a story of valor, and every ripple on the lake reflects the serenity of time.&rdquo;
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-[#777C61]">
            Experience Rajasthan with genuine local roots
          </p>
        </div>
      </section>
    </div>
  );
}
