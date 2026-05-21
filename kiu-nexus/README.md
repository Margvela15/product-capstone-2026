# KIU Nexus

One inbox for every course — assignments, exams, and announcements from Moodle, Teams, and WhatsApp in one ranked feed. Built as the KIU CS-PD-2026 Product Development capstone Sprint 1 MVP.

## Live URL

<!-- TODO: replace once Vercel deploy is live -->
https://<your-vercel-project>.vercel.app

## Tech stack

- Next.js 16.2.6 (App Router) + React 19.2.4
- Supabase (Postgres + Auth) — `@supabase/ssr`
- Mixpanel (`mixpanel-browser`)
- ShadCN UI + Tailwind CSS v4
- TypeScript

## Local setup

1. `cd kiu-nexus && npm install`
2. Copy `.env.local.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from your Supabase project (Project Settings → API).
   - `NEXT_PUBLIC_MIXPANEL_TOKEN` from your Mixpanel project settings (optional — app runs without it; events are no-ops).
3. `npm run dev` and visit http://localhost:3000.

## Supabase setup

The schema and seed data are applied via the migrations the team ran against the Supabase project. If you spin up a fresh project, re-run the SQL in:
- `migrations/initial_schema.sql` (tables + RLS)
- `migrations/seed_courses_and_updates.sql` (seeded courses + updates)

(If those files don't exist in the repo yet, the schema is reproducible from the Supabase MCP migration logs.)

For the demo flow to work without email verification:
- Supabase Dashboard → Authentication → Providers → Email → **disable** "Confirm email".

## Deployment (Vercel)

1. Push the branch to GitHub.
2. Go to https://vercel.com/new and import the repo. Set the **Root Directory** to `kiu-nexus`.
3. In the import screen, add Environment Variables for `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `NEXT_PUBLIC_MIXPANEL_TOKEN`.
4. Click **Deploy**.
5. Once live, paste the URL above replacing the TODO.

## Analytics

See [`03-build/analytics/dashboard-link.md`](../03-build/analytics/dashboard-link.md) (relative to the repo root) for the Mixpanel dashboard link and event taxonomy.

## Project layout

- `app/` — Next.js App Router pages and server actions
  - `app/page.tsx` — landing
  - `app/(auth)/login` and `(auth)/signup` — auth pages (route group)
  - `app/auth/actions.ts` — server actions for sign in / up / out
  - `app/dashboard` — the academic-updates feed
- `components/ui/` — ShadCN primitives
- `components/mixpanel-provider.tsx` — Mixpanel init + identify on auth
- `lib/supabase/{client,server}.ts` — Supabase clients
- `lib/mixpanel.ts` — Mixpanel helpers
- `middleware.ts` — auth guard
