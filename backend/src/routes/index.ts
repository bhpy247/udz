import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import * as authController from "../controllers/authController";
import * as roomsController from "../controllers/roomsController";
import * as hotelsController from "../controllers/hotelsController";
import * as attractionsController from "../controllers/attractionsController";
import * as itinerariesController from "../controllers/itinerariesController";
import * as enquiriesController from "../controllers/enquiriesController";
import * as settingsController from "../controllers/settingsController";

const router = Router();

// --- Auth Routes ---
router.post("/auth/login", authController.login);
router.get("/auth/me", requireAuth, authController.getMe);

// --- Public Discovery Routes ---
router.get("/rooms", roomsController.getRooms);
router.get("/rooms/:slug", roomsController.getRoomBySlug);

router.get("/hotels", hotelsController.getHotels);
router.get("/attractions", attractionsController.getAttractions);
router.get("/attractions/:slug", attractionsController.getAttractionBySlug);

router.get("/itineraries", itinerariesController.getItineraries);
router.get("/itineraries/:slug", itinerariesController.getItineraryBySlug);

router.get("/settings", settingsController.getSettings);

// Public Enquiry Submission
router.post("/enquiries", enquiriesController.createEnquiry);

// --- Protected Admin Routes ---
router.get("/admin/overview", requireAuth, settingsController.getDashboardOverview);

// Protected Rooms Management
router.post("/admin/rooms", requireAuth, roomsController.createRoom);
router.put("/admin/rooms/:id", requireAuth, roomsController.updateRoom);
router.delete("/admin/rooms/:id", requireAuth, roomsController.deleteRoom);

// Protected Hotels Management
router.post("/admin/hotels", requireAuth, hotelsController.createHotel);
router.put("/admin/hotels/:id", requireAuth, hotelsController.updateHotel);
router.delete("/admin/hotels/:id", requireAuth, hotelsController.deleteHotel);

// Protected Destinations Management
router.post("/admin/attractions", requireAuth, attractionsController.createAttraction);
router.put("/admin/attractions/:id", requireAuth, attractionsController.updateAttraction);
router.delete("/admin/attractions/:id", requireAuth, attractionsController.deleteAttraction);

// Protected Itineraries Management
router.post("/admin/itineraries", requireAuth, itinerariesController.createItinerary);
router.put("/admin/itineraries/:id", requireAuth, itinerariesController.updateItinerary);
router.delete("/admin/itineraries/:id", requireAuth, itinerariesController.deleteItinerary);

// Protected Enquiries Management
router.get("/admin/enquiries", requireAuth, enquiriesController.getEnquiries);
router.patch("/admin/enquiries/:id/status", requireAuth, enquiriesController.updateEnquiryStatus);
router.post("/admin/enquiries/:id/notes", requireAuth, enquiriesController.addEnquiryNote);

// Protected Settings Management
router.put("/admin/settings", requireAuth, settingsController.updateSettings);

export default router;
