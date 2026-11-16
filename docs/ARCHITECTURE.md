# Udaipur Unfolded — System Architecture & Design System

## 1. Overview
**Udaipur Unfolded** is a boutique hospitality and travel discovery platform designed for a real business starting with two private rooms in a residential home near Ambamata Temple, Udaipur, Rajasthan.

- **Brand Tagline:** Stay closer. Explore deeper.
- **Primary Business Goal:** Generate genuine accommodation enquiries through WhatsApp.
- **Secondary Objective:** Establish a trusted Udaipur travel discovery brand and generate organic traffic through SEO.

---

## 2. Design System & Visual Language

### Color Tokens
- **Background:** `#F7F4ED` (`bg-sand-100`)
- **Secondary Background:** `#E9DFCF` (`bg-sand-200`)
- **Primary Text:** `#252820` (`text-charcoal`)
- **Terracotta Accent:** `#B56B4B` (`text-terracotta`, `bg-terracotta`)
- **Muted Olive:** `#777C61` (`text-olive`, `bg-olive`)
- **Pure White:** `#FFFFFF`

### Typography Hierarchy
- **Headings & Display:** `Playfair Display`, serif (editorial, heritage feel)
- **Body & Captions:** `Inter`, sans-serif (clean, legible, modern)

---

## 3. Directory Structure
```
udz/
├── frontend/                     # Next.js App Router (TypeScript, Tailwind CSS)
│   ├── app/                      # Public routes, dynamic routes, and /admin
│   │   ├── page.tsx              # Editorial Homepage (Hero, Rooms, Places, Itineraries, Experiences, Footer)
│   │   ├── stays/                # Accommodation discovery & /stays/[slug] (Room 1 & Room 2)
│   │   ├── hotels/               # 3-Tier Curated Hotel Directory & Partnership form
│   │   ├── places-to-visit/      # 15 destination detail pages with dynamic slugs
│   │   ├── itineraries/          # 5 curated multi-day timelines
│   │   ├── experiences/          # Local Mewari food, rooftops, boat rides & markets
│   │   ├── about/                # Brand heritage story
│   │   ├── contact/              # Host contact, maps, and residential privacy notes
│   │   ├── admin/                # Authenticated host portal
│   │   ├── sitemap.ts            # Dynamic XML sitemap
│   │   └── robots.ts             # SEO robots rules
│   ├── components/               # Modular UI components (Header, Footer, EnquiryModal, Cards)
│   ├── lib/                      # WhatsApp URL generator, types, and authentic seed data
│   └── public/                   # Static icons and assets
├── backend/                      # Node.js + Express.js REST API
│   ├── src/
│   │   ├── config/               # JWT, ports, environment settings
│   │   ├── controllers/          # Rooms, Hotels, Attractions, Itineraries, Enquiries, Settings, Auth
│   │   ├── middlewares/          # JWT auth check, error handler
│   │   ├── routes/               # Express router
│   │   └── services/             # In-memory and Prisma store
├── database/                     # Relational schema & Prisma
│   └── prisma/
│       ├── schema.prisma         # 13 relational models (PostgreSQL)
│       └── seed.ts               # Migration & seed script
└── docs/                         # Architecture, Database, and Deployment guides
```

---

## 4. Business Integrity & Privacy Standards
1. **Enquiry vs Instant Booking:** The platform clearly marks bookings as manual host enquiries. No automated fake checkout or credit card charges.
2. **Residential Privacy:** The exact residential building number is protected and communicated privately to confirmed guests over WhatsApp.
3. **Transparent Classification:** Hotels are strictly differentiated into:
   - Our Own Accommodation (Ambamata Homestay)
   - Verified Partner Properties
   - Recommended Third-Party Stays
