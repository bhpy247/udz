import { Request, Response } from "express";
import { db } from "../services/dbStore";

export function getRooms(req: Request, res: Response) {
  return res.json(db.rooms);
}

export function getRoomBySlug(req: Request, res: Response) {
  const { slug } = req.params;
  const room = db.rooms.find((r: any) => r.slug === slug);
  if (!room) {
    return res.status(404).json({ error: "Room not found." });
  }
  return res.json(room);
}

export function updateRoom(req: Request, res: Response) {
  const { id } = req.params;
  const index = db.rooms.findIndex((r: any) => r.id === id || r.slug === id);
  if (index === -1) {
    return res.status(404).json({ error: "Room not found." });
  }

  const updated = {
    ...db.rooms[index],
    ...req.body,
    updatedAt: new Date().toISOString(),
  };

  db.rooms[index] = updated;
  return res.json(updated);
}

export function createRoom(req: Request, res: Response) {
  const newRoom = {
    id: `room-${Date.now()}`,
    ...req.body,
    createdAt: new Date().toISOString(),
  };
  db.rooms.push(newRoom);
  return res.status(201).json(newRoom);
}

export function deleteRoom(req: Request, res: Response) {
  const { id } = req.params;
  const index = db.rooms.findIndex((r: any) => r.id === id || r.slug === id);
  if (index === -1) {
    return res.status(404).json({ error: "Room not found." });
  }
  db.rooms.splice(index, 1);
  return res.json({ success: true, message: "Room deleted successfully." });
}
