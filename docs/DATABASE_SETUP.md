# Database Setup & Migrations (PostgreSQL + Prisma)

## 1. Prerequisites
- PostgreSQL 14+ running locally or on managed provider (Neon, Supabase, Railway, AWS RDS)
- Node.js 18+

## 2. Configuration
Set the database connection string in your `.env` or `backend/.env`:
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/udaipur_unfolded?schema=public"
```

## 3. Generate Prisma Client & Run Migrations
From the `backend` or `database` directory:
```bash
# Generate Prisma Client
npx prisma generate --schema=../database/prisma/schema.prisma

# Push schema to PostgreSQL database
npx prisma db push --schema=../database/prisma/schema.prisma

# Alternatively, create a formal migration
npx prisma migrate dev --name init --schema=../database/prisma/schema.prisma
```

## 4. Seed Database
Run the seed script to populate default admin credentials, property details, the two Ambamata rooms, all 15 destinations, 5 itineraries, partner hotels, and site settings:
```bash
cd backend
npm run prisma:seed
```

### Default Seed Credentials
- **Admin Email:** `admin@udaipurunfolded.com`
- **Default Password:** `Udaipur@Admin2026`
- **Initial Inventory:** Room 1 (Courtyard Haven) & Room 2 (Amber Verandah)
- **Initial Tariffs:** ₹1,650 and ₹1,850 per night (configurable in admin portal)
