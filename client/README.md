# Client

This is the Next.js frontend for the project. It uses Clerk for authentication and demonstrates calling protected FastAPI backend endpoints with Clerk JWTs.

## Framework

- Next.js (React, TypeScript)

## Authentication

- Clerk

## Main Dashboard

- `src/app/dashboard/page.tsx`
  - Fetches Clerk JWT
  - Calls public and protected backend endpoints
  - Displays personalized content from backend

## Scripts

Run these commands in the `client/` directory:

- `npm install` — Install dependencies
- `npm run dev` — Start Next.js in development mode
- `npm run build` — Build for production
- `npm run start` — Start production server

The frontend will be available at [http://localhost:3000](http://localhost:3000) when running.