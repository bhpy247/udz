import { Request, Response } from "express";
import { db } from "../services/dbStore";

export function getAttractions(req: Request, res: Response) {
  return res.json(db.attractions);
}

export function getAttractionBySlug(req: Request, res: Response) {
  const { slug } = req.params;
  const attraction = db.attractions.find((a: any) => a.slug === slug);
  if (!attraction) {
    return res.status(404).json({ error: "Destination not found." });
  }
  return res.json(attraction);
}

export function updateAttraction(req: Request, res: Response) {
  const { id } = req.params;
  const index = db.attractions.findIndex((a: any) => a.id === id || a.slug === id);
  if (index === -1) {
    return res.status(404).json({ error: "Destination not found." });
  }

  const updated = {
    ...db.attractions[index],
    ...req.body,
    updatedAt: new Date().toISOString(),
  };

  db.attractions[index] = updated;
  return res.json(updated);
}

export function createAttraction(req: Request, res: Response) {
  const newAttraction = {
    id: `attr-${Date.now()}`,
    ...req.body,
    createdAt: new Date().toISOString(),
  };
  db.attractions.push(newAttraction);
  return res.status(201).json(newAttraction);
}

export function deleteAttraction(req: Request, res: Response) {
  const { id } = req.params;
  const index = db.attractions.findIndex((a: any) => a.id === id || a.slug === id);
  if (index === -1) {
    return res.status(404).json({ error: "Destination not found." });
  }
  db.attractions.splice(index, 1);
  return res.json({ success: true, message: "Destination deleted." });
}
