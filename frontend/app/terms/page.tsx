import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Stay | Udaipur Unfolded",
  description: "Terms and conditions for staying at Udaipur Unfolded Homestay.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#F7F4ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#E9DFCF] pb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B56B4B]">
            Guest Policies
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#252820] mt-1">
            Terms of Stay & House Rules
          </h1>
          <p className="text-xs text-[#777C61] mt-2">Effective: November 2026</p>
        </div>

        <div className="space-y-6 text-sm text-[#252820]/85 font-sans leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#252820]">1. Booking Nature</h2>
            <p>
              Enquiries submitted through this platform are requests for reservation. A booking is formally confirmed only when the host confirms dates and terms via WhatsApp or formal communication. No instant online credit card charges are processed directly on this website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#252820]">2. Residential Neighbourhood Quiet Hours</h2>
            <p>
              Our property is situated in an authentic residential neighbourhood near Ambamata Temple. Out of respect for families and senior residents, quiet hours are observed between 10:00 PM and 7:00 AM. Loud parties, external sound systems, and disruptive behavior are strictly prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#252820]">3. Check-in and Check-out</h2>
            <p>
              Standard check-in begins at 1:00 PM. Check-out time is by 11:00 AM. Early arrivals or delayed departures must be coordinated with the host in advance and depend on existing room turnover.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#252820]">4. Cancellation Policy</h2>
            <p>
              Free cancellation is honored up to 48 hours prior to your scheduled check-in date. Cancellations within 48 hours are subject to discussion with the host based on circumstances.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
