import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Udaipur Unfolded",
  description: "Privacy policy and data handling practices of Udaipur Unfolded.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-[#F7F4ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E9DFCF] pb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B56B4B]">
            Legal Information
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#252820] mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#777C61] mt-2">Last updated: November 2026</p>
        </div>

        <div className="space-y-6 text-sm text-[#252820]/85 font-sans leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#252820]">1. Introduction</h2>
            <p>
              Udaipur Unfolded respects your privacy. This policy outlines how guest contact details and enquiry information are handled when using our discovery platform and homestay reservation features.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#252820]">2. Data Collected for Enquiries</h2>
            <p>
              When initiating an accommodation enquiry, details such as desired check-in/out dates, guest counts, and special notes are encoded into a WhatsApp Click-to-Chat URL. We do not store or sell your contact information to third-party telemarketers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#252820]">3. Government ID Verification</h2>
            <p>
              Under local hospitality and police regulations in Rajasthan, all checked-in guests must present a valid government-issued photographic ID (Aadhaar, Passport, Voter ID, or Driving License) upon arrival at our residential property.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#252820]">4. Residential Address Privacy</h2>
            <p>
              To protect the quiet residential nature of our neighbourhood, our exact physical building number is not publicly indexed on web search engines and is only shared with confirmed guests.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
