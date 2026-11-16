# Deployment Guide — Udaipur Unfolded

## 1. Frontend Deployment (Vercel)
The Next.js App Router frontend is pre-configured for zero-config deployment on Vercel:

1. Import the repository on [Vercel](https://vercel.com).
2. Set **Root Directory** to `frontend`.
3. Framework Preset: **Next.js**.
4. Configure Environment Variables:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Host WhatsApp number (e.g. `919414000000`).
   - `NEXT_PUBLIC_API_URL`: Backend API URL (e.g. `https://api.udaipurunfolded.com/api`).
5. Deploy.

---

## 2. Backend Deployment (Render / Railway / Fly.io / VPS)
The Express backend can be deployed as a standard Node.js service:

1. Root directory: `backend`.
2. Build Command:
   ```bash
   npm install && npm run build
   ```
3. Start Command:
   ```bash
   npm start
   ```
4. Environment Variables:
   - `PORT`: `5001` (or provider assigned `$PORT`)
   - `NODE_ENV`: `production`
   - `DATABASE_URL`: PostgreSQL connection URI
   - `JWT_SECRET`: High-entropy 64+ char secret
   - `CORS_ORIGIN`: Your production frontend domain (`https://udaipurunfolded.com`)

---

## 3. SEO & Domain Verification
1. Verify sitemap accessibility at: `https://udaipurunfolded.com/sitemap.xml`.
2. Verify robots policy at: `https://udaipurunfolded.com/robots.txt`.
3. Submit sitemap to Google Search Console.
4. Verify WhatsApp Click-to-Chat link formats on mobile devices:
   `https://wa.me/919414000000?text=...`
