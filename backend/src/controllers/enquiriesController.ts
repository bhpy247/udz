import { Request, Response } from "express";
import { db } from "../services/dbStore";

export function getEnquiries(req: Request, res: Response) {
  const { status, room } = req.query;
  let results = [...db.enquiries];

  if (status && status !== "All") {
    results = results.filter((e) => e.status === status);
  }
  if (room && room !== "All") {
    results = results.filter((e) => e.roomSlug === room);
  }

  // Sort newest first
  results.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return res.json(results);
}

export function createEnquiry(req: Request, res: Response) {
  const {
    guestName,
    guestPhone,
    guestEmail,
    roomSlug,
    roomName,
    checkInDate,
    checkOutDate,
    guestCount,
    notes,
  } = req.body;

  if (!guestName || !guestPhone) {
    return res.status(400).json({ error: "Guest name and phone/WhatsApp number are required." });
  }

  const newEnquiry = {
    id: `enq-${Date.now()}`,
    createdAt: new Date().toISOString(),
    guestName,
    guestPhone,
    guestEmail: guestEmail || undefined,
    roomSlug: roomSlug || "room-1",
    roomName: roomName || "Room 1",
    checkInDate: checkInDate || "Flexible",
    checkOutDate: checkOutDate || "Flexible",
    guestCount: Number(guestCount) || 2,
    status: "New" as const,
    notes: notes || undefined,
    internalNotes: [],
  };

  db.enquiries.unshift(newEnquiry);
  return res.status(201).json(newEnquiry);
}

export function updateEnquiryStatus(req: Request, res: Response) {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ["New", "Contacted", "Confirmed", "Cancelled", "Completed"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: `Invalid status. Must be one of: ${validStatuses.join(", ")}` });
  }

  const enquiry = db.enquiries.find((e) => e.id === id);
  if (!enquiry) {
    return res.status(404).json({ error: "Enquiry not found." });
  }

  enquiry.status = status;
  return res.json(enquiry);
}

export function addEnquiryNote(req: Request, res: Response) {
  const { id } = req.params;
  const { text, author } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Note text is required." });
  }

  const enquiry = db.enquiries.find((e) => e.id === id);
  if (!enquiry) {
    return res.status(404).json({ error: "Enquiry not found." });
  }

  const newNote = {
    id: `note-${Date.now()}`,
    author: author || "Host",
    text,
    date: new Date().toISOString(),
  };

  enquiry.internalNotes.push(newNote);
  return res.status(201).json(enquiry);
}
