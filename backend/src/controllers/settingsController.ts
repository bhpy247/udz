import { Request, Response } from "express";
import { db } from "../services/dbStore";

export function getSettings(req: Request, res: Response) {
  return res.json(db.settings);
}

export function updateSettings(req: Request, res: Response) {
  const updated = {
    ...db.settings,
    ...req.body,
  };
  db.settings = updated;
  return res.json(updated);
}

export function getDashboardOverview(req: Request, res: Response) {
  const totalRooms = db.rooms.length;
  const newEnquiries = db.enquiries.filter((e) => e.status === "New").length;
  const confirmedBookings = db.enquiries.filter((e) => e.status === "Confirmed").length;
  const partnerHotels = db.hotels.length;
  const totalDestinations = db.attractions.length;
  const totalItineraries = db.itineraries.length;

  return res.json({
    totalRooms,
    newEnquiries,
    confirmedBookings,
    partnerHotels,
    totalDestinations,
    totalItineraries,
    recentEnquiries: db.enquiries.slice(0, 5),
  });
}
