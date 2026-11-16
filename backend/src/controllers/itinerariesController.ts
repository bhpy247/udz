import { Request, Response } from "express";
import { db } from "../services/dbStore";

export function getItineraries(req: Request, res: Response) {
  return res.json(db.itineraries);
}

export function getItineraryBySlug(req: Request, res: Response) {
  const { slug } = req.params;
  const itinerary = db.itineraries.find((it: any) => it.slug === slug);
  if (!itinerary) {
    return res.status(404).json({ error: "Itinerary not found." });
  }
  return res.json(itinerary);
}

export function updateItinerary(req: Request, res: Response) {
  const { id } = req.params;
  const index = db.itineraries.findIndex((it: any) => it.id === id || it.slug === id);
  if (index === -1) {
    return res.status(404).json({ error: "Itinerary not found." });
  }

  const updated = {
    ...db.itineraries[index],
    ...req.body,
    updatedAt: new Date().toISOString(),
  };

  db.itineraries[index] = updated;
  return res.json(updated);
}

export function createItinerary(req: Request, res: Response) {
  const newItinerary = {
    id: `itinerary-${Date.now()}`,
    ...req.body,
    createdAt: new Date().toISOString(),
  };
  db.itineraries.push(newItinerary);
  return res.status(201).json(newItinerary);
}

export function deleteItinerary(req: Request, res: Response) {
  const { id } = req.params;
  const index = db.itineraries.findIndex((it: any) => it.id === id || it.slug === id);
  if (index === -1) {
    return res.status(404).json({ error: "Itinerary not found." });
  }
  db.itineraries.splice(index, 1);
  return res.json({ success: true, message: "Itinerary deleted." });
}
