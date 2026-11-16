"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { siteSettings } from "@/lib/data";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";
import EnquiryModal from "./EnquiryModal";

// Clean inline SVG for Instagram to avoid lucide brand icon discrepancies
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#252820] text-[#F7F4ED] pt-16 pb-12 border-t border-[#3A3F33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#3A3F33]/80">
            {/* Col 1: Brand & Tagline */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block">
                <span className="font-serif text-2xl font-bold tracking-widest text-[#F7F4ED] uppercase">
                  Udaipur Unfolded
                </span>
                <span className="block text-[11px] tracking-[0.25em] text-[#DACBB7] uppercase font-sans mt-0.5">
                  {siteSettings.brandTagline}
                </span>
              </Link>
              <p className="text-sm text-[#DACBB7]/90 leading-relaxed max-w-md pt-2">
                A boutique travel discovery platform and residential homestay near Ambamata Temple. We offer two private guest rooms and curated local guides to help mindful travellers experience Udaipur authentically, beyond standard tourist commercialism.
              </p>
              <div className="pt-2 flex items-center space-x-3">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="inline-flex items-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white text-xs uppercase tracking-wider px-4 py-2.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire on WhatsApp</span>
                </button>
                <a
                  href={siteSettings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#DACBB7] hover:text-[#F7F4ED] px-3 py-2 border border-[#3A3F33] hover:border-[#DACBB7] transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Col 2: Accommodations */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B56B4B]">
                Stay With Us
              </h4>
              <ul className="space-y-2 text-sm text-[#DACBB7]">
                <li>
                  <Link href="/stays/room-1" className="hover:text-white transition-colors">
                    Room 1 — Courtyard Haven
                  </Link>
                </li>
                <li>
                  <Link href="/stays/room-2" className="hover:text-white transition-colors">
                    Room 2 — Amber Verandah
                  </Link>
                </li>
                <li>
                  <Link href="/stays" className="hover:text-white transition-colors text-xs text-[#777C61]">
                    View Both Rooms →
                  </Link>
                </li>
                <li className="pt-2">
                  <Link href="/hotels" className="hover:text-white transition-colors">
                    Curated Partner Hotels
                  </Link>
                </li>
                <li>
                  <Link href="/hotels#partnership" className="hover:text-white transition-colors text-xs text-[#777C61]">
                    Hotel Partnership Enquiry
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Discovery */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B56B4B]">
                Explore Udaipur
              </h4>
              <ul className="space-y-2 text-sm text-[#DACBB7]">
                <li>
                  <Link href="/places-to-visit" className="hover:text-white transition-colors">
                    Tourist Attractions
                  </Link>
                </li>
                <li>
                  <Link href="/itineraries" className="hover:text-white transition-colors">
                    Curated Itineraries
                  </Link>
                </li>
                <li>
                  <Link href="/experiences" className="hover:text-white transition-colors">
                    Local Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/itineraries/one-day-udaipur" className="hover:text-white transition-colors text-xs text-[#777C61]">
                    Udaipur in 1 Day
                  </Link>
                </li>
                <li>
                  <Link href="/itineraries/two-day-udaipur" className="hover:text-white transition-colors text-xs text-[#777C61]">
                    Udaipur in 2 Days
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Location & Host */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B56B4B]">
                Location & Host
              </h4>
              <div className="space-y-2 text-sm text-[#DACBB7]">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#B56B4B] shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <span>{siteSettings.generalLocation}</span>
                    <p className="text-[10px] text-[#777C61] mt-0.5 italic">
                      Residential property. Exact house address provided privately upon confirmed reservation.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-1">
                  <Mail className="w-3.5 h-3.5 text-[#B56B4B]" />
                  <a
                    href={`mailto:${siteSettings.businessEmail}`}
                    className="text-xs hover:text-white transition-colors"
                  >
                    {siteSettings.businessEmail}
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-3.5 h-3.5 text-[#B56B4B]" />
                  <a
                    href={buildWhatsAppGeneralUrl("Homestay Availability & Exploration")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs hover:text-white transition-colors underline underline-offset-2"
                  >
                    Chat directly with Host
                  </a>
                </div>

                <div className="pt-2">
                  <Link
                    href="/admin"
                    className="text-[11px] text-[#777C61] hover:text-[#DACBB7] flex items-center space-x-1"
                  >
                    <span>Host / Admin Portal</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DACBB7]/70 space-y-4 sm:space-y-0">
            <p>© {new Date().getFullYear()} Udaipur Unfolded. Authentic hospitality & travel discovery.</p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Stay
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact & Directions
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
