import React from "react";
import { Metadata } from "next";
import {
  MessageCircle,
  Mail,
  MapPin,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import { siteSettings } from "@/lib/data";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact & Location — Ambamata Temple, Udaipur | Udaipur Unfolded",
  description:
    "Get in touch with Udaipur Unfolded. Chat with our local host on WhatsApp, find our location near Ambamata Temple, or email our support desk.",
  keywords: [
    "Contact Udaipur Unfolded",
    "Udaipur homestay location",
    "Ambamata temple homestay",
    "Udaipur WhatsApp enquiry",
  ],
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F7F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E9DFCF] pb-12 sm:pb-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#B56B4B] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B56B4B]" />
              <span>Get in Touch</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#252820] leading-tight">
              Contact & Location Details
            </h1>
            <p className="text-base sm:text-lg text-[#252820]/80 font-sans leading-relaxed">
              We respond promptly to all guest inquiries. Connect with us on WhatsApp for real-time room availability, travel tips, and arrival assistance.
            </p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-6 space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-[#FAF7F2] border border-[#DACBB7] p-7 space-y-4">
              <div className="w-10 h-10 bg-[#B56B4B]/10 flex items-center justify-center text-[#B56B4B]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#252820]">
                Direct WhatsApp Communication
              </h3>
              <p className="text-xs sm:text-sm text-[#252820]/80 leading-relaxed">
                The fastest way to reach our host. Discuss room dates, special requirements, or ask for local navigation tips.
              </p>
              <div className="pt-2">
                <a
                  href={buildWhatsAppGeneralUrl(
                    "General Enquiry & Stay Planning",
                    "Hi Udaipur Unfolded, I am reaching out from your website contact page."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-3 px-6 text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Email & Support */}
            <div className="bg-[#FAF7F2] border border-[#DACBB7] p-7 space-y-4">
              <div className="w-10 h-10 bg-[#777C61]/10 flex items-center justify-center text-[#777C61]">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#252820]">
                Email Correspondence
              </h3>
              <p className="text-xs sm:text-sm text-[#252820]/80 leading-relaxed">
                For hotel partnership discussions, group reservations, or media inquiries:
              </p>
              <p className="font-mono text-sm font-semibold text-[#252820]">
                {siteSettings.businessEmail}
              </p>
            </div>
          </div>

          {/* Right Column: Location & Privacy Policy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Location Overview */}
            <div className="bg-[#FAF7F2] border border-[#DACBB7] p-7 space-y-4">
              <div className="w-10 h-10 bg-[#B56B4B]/10 flex items-center justify-center text-[#B56B4B]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#252820]">
                General Neighbourhood Location
              </h3>
              <p className="text-xs sm:text-sm text-[#252820]/80 leading-relaxed">
                {siteSettings.generalLocation}
              </p>

              <div className="p-4 bg-[#E9DFCF]/60 border-l-2 border-[#B56B4B] text-xs text-[#252820] space-y-1">
                <div className="flex items-center space-x-1.5 font-bold">
                  <ShieldAlert className="w-4 h-4 text-[#B56B4B]" />
                  <span>Residential Privacy Note:</span>
                </div>
                <p className="leading-relaxed">
                  As our homestay is an authentic residential home in a family neighbourhood, our exact building number and private lane directions are shared privately over WhatsApp only with confirmed guests.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={siteSettings.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#252820] hover:bg-[#B56B4B] text-white py-3 px-5 text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Ambamata on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Travel Times from City Landmarks */}
            <div className="p-6 bg-[#FAF7F2] border border-[#DACBB7] space-y-3 text-xs">
              <h4 className="font-serif text-base font-bold text-[#252820]">
                Proximity from Ambamata
              </h4>
              <div className="grid grid-cols-2 gap-3 text-[#252820]">
                <div className="border-b border-[#DACBB7]/50 pb-2">
                  <span className="text-[#777C61] block text-[10px] uppercase">Lake Pichola</span>
                  <span className="font-semibold">5–7 Mins (1.8 km)</span>
                </div>
                <div className="border-b border-[#DACBB7]/50 pb-2">
                  <span className="text-[#777C61] block text-[10px] uppercase">Fateh Sagar Lake</span>
                  <span className="font-semibold">5–7 Mins (2.1 km)</span>
                </div>
                <div className="border-b border-[#DACBB7]/50 pb-2">
                  <span className="text-[#777C61] block text-[10px] uppercase">City Palace</span>
                  <span className="font-semibold">10 Mins (2.6 km)</span>
                </div>
                <div className="border-b border-[#DACBB7]/50 pb-2">
                  <span className="text-[#777C61] block text-[10px] uppercase">Udaipur City Station</span>
                  <span className="font-semibold">15 Mins (5.2 km)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
