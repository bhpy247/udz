"use client";

import React, { useState } from "react";
import { X, MessageCircle, AlertCircle } from "lucide-react";
import { buildWhatsAppBookingUrl } from "@/lib/whatsapp";
import { roomsData } from "@/lib/data";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRoomSlug?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultRoomSlug = "room-1",
}: EnquiryModalProps) {
  const [selectedRoomSlug, setSelectedRoomSlug] = useState<string>(defaultRoomSlug);
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [guestCount, setGuestCount] = useState<number>(2);
  const [customNotes, setCustomNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

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
      checkIn: checkInDate || "Flexible / To be discussed",
      checkOut: checkOutDate || "Flexible / To be discussed",
      guests: guestCount,
      customNotes: customNotes.trim() ? customNotes : undefined,
    });

    window.open(url, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden bg-[#F7F4ED] border border-[#E9DFCF] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-6 sm:p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#252820] hover:text-[#B56B4B] p-1 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <span className="text-[11px] font-sans font-semibold tracking-widest text-[#B56B4B] uppercase">
              Accommodation Enquiry
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#252820] mt-1">
              Check Room Availability
            </h3>
            <p className="text-xs text-[#777C61] mt-1">
              Residential homestay near Ambamata Temple, Udaipur
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleWhatsAppSubmit} className="space-y-4 text-left">
            {/* Room Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1.5">
                Select Accommodation
              </label>
              <select
                value={selectedRoomSlug}
                onChange={(e) => setSelectedRoomSlug(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2.5 text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
              >
                <option value="room-1">Room 1 — The Courtyard Haven (Max 2 Guests)</option>
                <option value="room-2">Room 2 — The Amber Verandah Room (Max 2 Guests)</option>
                <option value="both-rooms">Both Rooms — Complete Residential Wing (Up to 4 Guests)</option>
              </select>
            </div>

            {/* Dates Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1.5">
                  Check-in Date
                </label>
                <input
                  type="date"
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
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2 text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1.5">
                Number of Guests
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2.5 text-sm text-[#252820] focus:outline-none focus:border-[#B56B4B]"
              >
                <option value={1}>1 Guest (Solo Traveller)</option>
                <option value={2}>2 Guests (Couple / Pair)</option>
                <option value={3}>3 Guests (Requires Both Rooms or Extra Mattress discussion)</option>
                <option value={4}>4 Guests (Both Rooms Recommended)</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#252820] mb-1.5">
                Special Requests or Estimated Arrival Time (Optional)
              </label>
              <textarea
                rows={2}
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="e.g., Arriving by train around 3 PM, need quiet workspace"
                className="w-full bg-[#FAF7F2] border border-[#DACBB7] px-3.5 py-2 text-sm text-[#252820] placeholder-[#777C61]/70 focus:outline-none focus:border-[#B56B4B] resize-none"
              />
            </div>

            {/* Transparent Business Notice */}
            <div className="bg-[#E9DFCF]/60 border-l-2 border-[#B56B4B] p-3 text-[11px] leading-relaxed text-[#252820]">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-[#B56B4B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Direct Host Enquiry:</span> This generates a WhatsApp enquiry with all details. We will personally check our calendar and confirm room availability and exact pricing directly with you. No advance online payment is charged on this website.
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-3 px-6 font-medium tracking-wider uppercase text-xs transition-colors shadow-sm disabled:opacity-70"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
