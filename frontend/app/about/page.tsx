import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Compass, Heart, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Locally Rooted Mewari Hospitality | Udaipur Unfolded",
  description:
    "The story behind Udaipur Unfolded. From two private rooms in our peaceful Ambamata residential home to a trusted boutique travel discovery platform.",
  keywords: [
    "About Udaipur Unfolded",
    "Udaipur homestay story",
    "Ambamata homestay Udaipur",
    "Responsible tourism Rajasthan",
  ],
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E9DFCF] pb-12 sm:pb-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#B56B4B] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B56B4B]" />
              <span>Our Story</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252820] leading-tight">
              Hospitality Rooted in the Living Spirit of Mewar
            </h1>
            <p className="text-base sm:text-lg text-[#252820]/80 font-sans leading-relaxed">
              &ldquo;Stay closer. Explore deeper.&rdquo; That isn&apos;t just our tagline — it is our personal philosophy of how travel in Udaipur should feel.
            </p>
          </div>
        </div>

        {/* Narrative & Visual Section */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#252820]/85 font-sans leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#252820]">
              From a Quiet Residential Home to a Trusted Travel Brand
            </h2>
            <p>
              Udaipur Unfolded began with two private rooms in our family residential home near <strong>Ambamata Temple</strong>. As long-time residents, we watched the City of Lakes transform with mass tourism — commercial travel portals prioritizing generic hotel blocks, tourist touts crowding the lake entrances, and guests leaving with superficial impressions of a city that holds centuries of intimate poetry.
            </p>
            <p>
              We wanted to offer something quietly different: an authentic home base where travellers could sleep peacefully without traffic honking, walk 5 minutes to reach the tranquil waters of Pichola and Fateh Sagar, and receive honest, unhurried advice about where to eat authentic Dal Baati, which ghats are quietest at dawn, and which master artisans preserve true heritage arts.
            </p>
            <p>
              Today, Udaipur Unfolded serves as both a primary homestay accommodation and a curated discovery portal, featuring verified partner stays, comprehensive destination guides, and realistic day-wise itineraries.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[380px] sm:h-[460px] w-full bg-[#E9DFCF] border border-[#DACBB7] overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
                alt="Udaipur heritage view across Lake Pichola"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#252820]/80 backdrop-blur-sm p-4 text-white text-xs space-y-1">
                <span className="font-serif font-bold block text-sm">Ambamata Residential Homestay</span>
                <p className="text-[#DACBB7]">Near Ambamata Temple, Udaipur, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20 pt-16 border-t border-[#E9DFCF]">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#B56B4B] uppercase">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#252820]">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF7F2] border border-[#DACBB7] p-7 space-y-3">
              <div className="w-10 h-10 bg-[#B56B4B]/10 flex items-center justify-center text-[#B56B4B]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#252820]">
                Authentic Mewari Warmth
              </h3>
              <p className="text-xs text-[#252820]/80 leading-relaxed">
                We treat every guest as personal company in our city. We take pride in clean rooms, honest advice, and direct host availability.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#DACBB7] p-7 space-y-3">
              <div className="w-10 h-10 bg-[#777C61]/10 flex items-center justify-center text-[#777C61]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#252820]">
                Editorial Integrity
              </h3>
              <p className="text-xs text-[#252820]/80 leading-relaxed">
                We never invent fake reviews, artificial discounts, or unverified hotel partnerships. What you read is what we genuinely experience.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#DACBB7] p-7 space-y-3">
              <div className="w-10 h-10 bg-[#B56B4B]/10 flex items-center justify-center text-[#B56B4B]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#252820]">
                Mindful Discovery
              </h3>
              <p className="text-xs text-[#252820]/80 leading-relaxed">
                We encourage slow exploration, supporting local family kitchens, master craftsmen, and respecting residential community quietude.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#FAF7F2] border border-[#DACBB7] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-[#252820]">
              Planning Your Visit to Udaipur?
            </h3>
            <p className="text-xs text-[#777C61]">
              Explore our two private rooms or reach out directly to check availability.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/stays"
              className="inline-flex items-center space-x-1.5 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-3 px-6 text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              <span>Explore Stays</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
