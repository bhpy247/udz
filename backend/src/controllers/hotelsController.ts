import { Request, Response } from "express";
import { db } from "../services/dbStore";

export function getHotels(req: Request, res: Response) {
  const { category, partnership } = req.query;
  let results = [...db.hotels];

  if (category && category !== "All") {
    results = results.filter((h) => h.category === category);
  }
  if (partnership && partnership !== "All") {
    results = results.filter((h) => h.partnershipType === partnership);
  }

  return res.json(results);
}

export function createHotel(req: Request, res: Response) {
  const newHotel = {
    id: `hotel-${Date.now()}`,
    ...req.body,
    createdAt: new Date().toISOString(),
  };
  db.hotels.push(newHotel);
  return res.status(201).json(newHotel);
}

export function updateHotel(req: Request, res: Response) {
  const { id } = req.params;
  const index = db.hotels.findIndex((h: any) => h.id === id || h.slug === id);
  if (index === -1) {
    return res.status(404).json({ error: "Hotel not found." });
  }

  const updated = {
    ...db.hotels[index],
    ...req.body,
    updatedAt: new Date().toISOString(),
  };

  db.hotels[index] = updated;
  return res.json(updated);
}

export function deleteHotel(req: Request, res: Response) {
  const { id } = req.params;
  const index = db.hotels.findIndex((h: any) => h.id === id || h.slug === id);
  if (index === -1) {
    return res.status(404).json({ error: "Hotel not found." });
  }
  db.hotels.splice(index, 1);
  return res.json({ success: true, message: "Hotel listing deleted." });
}
