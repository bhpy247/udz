export const DEFAULT_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919414000000";

export interface BookingEnquiryParams {
  roomName: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number | string;
  customNotes?: string;
}

/**
 * Builds standard WhatsApp Click-to-Chat URL with formatted enquiry details
 */
export function buildWhatsAppBookingUrl(params: BookingEnquiryParams, phoneNumber: string = DEFAULT_WHATSAPP_NUMBER): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');

  let message = `Hi! I am interested in booking ${params.roomName} at Udaipur Unfolded.\n\n`;
  
  if (params.checkIn) {
    message += `Check-in: ${params.checkIn}\n`;
  }
  if (params.checkOut) {
    message += `Check-out: ${params.checkOut}\n`;
  }
  if (params.guests) {
    message += `Guests: ${params.guests}\n`;
  }
  if (params.customNotes) {
    message += `Notes: ${params.customNotes}\n`;
  }

  message += `\nPlease share availability and pricing.`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * General purpose WhatsApp message builder (e.g. for custom itinerary, partnership, or general enquiries)
 */
export function buildWhatsAppGeneralUrl(subject: string, details?: string, phoneNumber: string = DEFAULT_WHATSAPP_NUMBER): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  let message = `Hi Udaipur Unfolded,\n\nI have an enquiry regarding: ${subject}.\n`;
  if (details) {
    message += `\n${details}\n`;
  }
  message += `\nLooking forward to hearing from you.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
