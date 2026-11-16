"use client";

import React, { useState } from "react";
import { MessageCircle, AlertCircle } from "lucide-react";
import { buildWhatsAppBookingUrl } from "@/lib/whatsapp";
import { roomsData } from "@/lib/data";

export default function StaysEnquiryForm() {
  const [selectedRoomSlug, setSelectedRoomSlug] = useState<string>("room-1");
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [guestCount, setGuestCount] = useState<number>(2);
  const [customNotes, setCustomNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const currentRoom = roomsData.find((r) => r.slug === selectedRoomSlug) || roomsData[0];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const roomTitle =
      selectedRoomSlug === "both-rooms"
        ? "Both Private Rooms (Entire Guest Wing)"
        : currentRoom?.name || "Room";

    const url = buildWhatsAppBookingUrl({
      roomName: roomTitle,
      checkIn: checkInDate || "Flexible / To be confirmed",
      checkOut: checkOutDate || "Flexible / To be confirmed",
      guests: guestCount,
      customNotes: customNotes.trim() ? customNotes : undefined,
    });

    window.open(url, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1.5">
          Choose Room or Wing
        </label>
        <select
          value={selectedRoomSlug}
          onChange={(e) => setSelectedRoomSlug(e.target.value)}
          className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2.5 text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
        >
          <option value="room-1">Room 1 — The Courtyard Haven (From ₹1,650 / night)</option>
          <option value="room-2">Room 2 — The Amber Verandah Room (From ₹1,850 / night)</option>
          <option value="both-rooms">Both Rooms — Entire Private Wing (From ~₹3,300 / night)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1.5">
            Check-in Date
          </label>
          <input
            type="date"
            required
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2 text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1.5">
            Check-out Date
          </label>
          <input
            type="date"
            required
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2 text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1.5">
          Number of Guests
        </label>
        <select
          value={guestCount}
          onChange={(e) => setGuestCount(Number(e.target.value))}
          className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2.5 text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
        >
          <option value={1}>1 Guest (Solo)</option>
          <option value={2}>2 Guests (Couple / Friends)</option>
          <option value={3}>3 Guests (Both rooms recommended)</option>
          <option value={4}>4 Guests (Both rooms required)</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1.5">
          Special Notes or Approximate Arrival Time (Optional)
        </label>
        <textarea
          rows={3}
          value={customNotes}
          onChange={(e) => setCustomNotes(e.target.value)}
          placeholder="e.g. Visiting for 2 nights, arriving by Udaipur City railway station around 2 PM."
          className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2 text-sm text-[#252820] placeholder-[#777C61]/70 focus:outline-none focus:border-[#B56B4B] resize-none"
        />
      </div>

      <div className="bg-[#E9DFCF]/50 p-3.5 border-l-2 border-[#B56B4B] text-xs text-[#252820] flex items-start space-x-2">
        <AlertCircle className="w-4 h-4 text-[#B56B4B] shrink-0 mt-0.5" />
        <p>
          <strong>Direct Enquiry Only:</strong> This sends a message on WhatsApp. Availability and pricing are confirmed manually by our host. No payment is taken online.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-3.5 px-6 font-medium tracking-widest uppercase text-xs transition-colors shadow-sm disabled:opacity-70"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Enquire on WhatsApp</span>
      </button>
    </form>
  );
}
