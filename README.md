# Udaipur Unfolded 🏰🌿
### Premium Travel Discovery & Residential Homestay Platform

> **Tagline:** Stay closer. Explore deeper.  
> **Location:** Near Ambamata Temple, Udaipur, Rajasthan 313001

A production-quality, premium editorial travel and hospitality web platform built for **Udaipur Unfolded**. The business begins with two private guest rooms in a peaceful residential house near Ambamata Temple and serves as a curated discovery guide to Udaipur's heritage monuments, freshwater lakes, partner boutique hotels, and authentic local experiences.

---

## 🌟 Highlights

- **Editorial Aesthetic:** Inspired by luxury Rajasthan boutique heritage hotels, with bespoke serif typography (*Playfair Display*) and modern sans-serif body (*Inter*), with warm earthen color tokens (`#F7F4ED`, `#E9DFCF`, `#252820`, `#B56B4B`, `#777C61`).
- **Primary Accommodation:** Dedicated detail pages for **Room 1 (The Courtyard Haven)** and **Room 2 (The Amber Verandah Room)**, with room capacity, bed configuration, verified amenities, house rules, and initial rates below ₹2,000/night.
- **WhatsApp Booking Enquiry Flow:** Dynamic WhatsApp Click-to-Chat builder generating pre-filled booking enquiries with check-in, check-out, guest count, and room selection.
- **Curated Hotel Directory (`/hotels`):** 3-tier clear distinction between *Our Own Accommodation*, *Verified Partner Properties*, and *Recommended Third-Party Stays*, complete with property category filters and a hotel partnership enquiry form.
- **Destination Discovery (`/places-to-visit`):** 15 verified destination pages (City Palace, Lake Pichola, Jagdish Temple, Bagore Ki Haveli, Fateh Sagar, Saheliyon Ki Bari, Sajjangarh, Shilpgram, Lake Badi, etc.) with entry fees, opening hours, nearby spots, and Google Maps links.
- **Curated Multi-Day Itineraries (`/itineraries`):** 1-Day, 2-Day, 3-Day, Couples, and Family travel plans presented in an interactive timeline interface.
- **Authentic Local Experiences (`/experiences`):** Real guides for Mewari food walks, rooftop dining, traditional textile bazaars, and golden hour photography spots.
- **Protected Host Portal (`/admin`):** Secure authenticated dashboard for room pricing, availability toggling, partner hotel management, and WhatsApp enquiry tracking with private internal notes.
- **Production Architecture:** Next.js App Router (TypeScript, Tailwind CSS), Node.js Express REST API, PostgreSQL + Prisma ORM schema with 13 relational models.

---

## 🚀 Quick Start (Local Development)

### 1. Clone & Setup Frontend
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the public platform.

### 2. Setup Backend API
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
Backend runs on [http://localhost:5001](http://localhost:5001).

---

## 🔐 Admin Dashboard Access

- **URL:** [http://localhost:3000/admin](http://localhost:3000/admin)
- **Demo Email:** `admin@udaipurunfolded.com`
- **Demo Password:** `Udaipur@Admin2026`

---

## 📚 Documentation
- [System Architecture & Design Tokens](docs/ARCHITECTURE.md)
- [Database Schema & Migrations](docs/DATABASE_SETUP.md)
- [Production Deployment Guide](docs/DEPLOYMENT.md)

---

## ⚖️ Business & Ethical Integrity
- **No Instant Payment Claim:** The platform explicitly informs guests that enquiries are confirmed manually by the host on WhatsApp.
- **Residential Privacy:** Exact address instructions are shared privately upon confirmation to protect the family neighbourhood.
- **No Fake Content:** No fabricated reviews, artificial ratings, or simulated partners.
