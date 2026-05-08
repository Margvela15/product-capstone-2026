# Tech Stack Selection

**File path:** `03-build/architecture/tech-stack.md`

**Team:** Undefined Behaviour  
**Product:** KIU Nexus  
**Date:** 2026-05-04  
**Version:** 1.0  

---

## 1. Decision Summary

For Sprint 1, the most important factors are speed, reliability, and team familiarity. KIU Nexus needs to prove the activation flow quickly: a student signs up, views critical academic updates, acknowledges one, and sees it added to a weekly plan. The team is optimizing for a small working system that can be deployed and tested before investing in complex integrations. We are willing to defer live Moodle, Teams, Discord, Messenger, and WhatsApp integrations until after the activation flow is validated. We are also deferring in-product AI parsing until Sprint 2 because Sprint 1 should focus on the core user flow and analytics measurement.

---

## 2. Stack by Layer

| Layer | Selected technology | Why this fits | Alternative considered | Why rejected | Owner |
|------|---------------------|---------------|------------------------|--------------|-------|
| Frontend | Next.js + React + TypeScript | Supports fast web MVP development, routing, reusable components, and strong TypeScript safety | Vite + React | Good for frontend-only apps, but less complete for integrated full-stack deployment | Archil Margvelashvili |
| Backend | Next.js Server Actions / API Routes | Keeps backend logic inside the same app and reduces infrastructure overhead | Express.js backend | Adds extra setup, hosting, and API coordination that Sprint 1 does not need | Giorgi Papidze |
| Database | Supabase PostgreSQL | Relational model fits users, courses, updates, acknowledgements, and weekly plan items | MongoDB | Less ideal for structured relational data and joins between users/courses/updates | Giorgi Papidze |
| Authentication | Supabase Auth | Integrates directly with Supabase database and supports simple email/password auth | NextAuth.js | More flexible, but more configuration than needed for Sprint 1 | Giorgi Papidze |
| Analytics | Mixpanel | Fits event-based product analytics and matches Lab 5 activation event schema | Google Analytics | Better for traffic/page views than product behavior events | Archil Margvelashvili |
| Hosting | Vercel | Optimized for Next.js deployment with preview and production builds | Render | Useful for separate backend services, but less direct for this Next.js app | Giorgi Kveladze |
| Testing | Manual acceptance testing + basic component checks | Sprint 1 needs fast validation against acceptance criteria | Full automated E2E suite | Useful later, but too heavy before the core flow is stable | Nikoloz Jvebenava |
| Diagramming | diagrams.net / Excalidraw | Easy to create and export architecture diagram as PNG | Figma | More design-focused and slower for simple architecture diagrams | Archil Margvelashvili |
| UI Components | Tailwind CSS + ShadCN UI | Helps build a consistent dashboard quickly using reusable components | Plain CSS | Slower and less consistent for Sprint 1 UI work | Archil Margvelashvili |

---

## 3. Approved AI Tools for Sprint 1

| Tool | Approved use | Not for | Review rule | Owner |
|------|--------------|---------|-------------|-------|
| Stitch | Prototype screens, dashboard layout ideas, onboarding UI exploration | Final code, database logic, security decisions | Screens must be reviewed against acceptance criteria before implementation | Archil Margvelashvili |
| Claude Code | Backend logic planning, server actions, schema suggestions, debugging support | Direct unreviewed commits or security-sensitive code without review | Giorgi Papidze reviews before merge | Giorgi Papidze |
| AI Studio | Future AI parsing experiments and prompt exploration for Sprint 2 | Live Sprint 1 product functionality | Any output must be treated as experimental and not merged without validation | Nikoloz Jvebenava |
| Copilot or Cursor | Boilerplate, refactoring, UI logic, event instrumentation, repetitive code | Final decisions on architecture, auth rules, or analytics naming | Code must pass acceptance criteria and teammate review | Entire team |

No AI tool is approved for direct commits to `main` without human review.

---

## 4. Deployment Target

**Public deployment target:** Vercel production deployment  
**Database region or environment:** Supabase project environment  
**How local and production differ:** Local development uses `.env.local` and local test data; production uses Vercel environment variables and Supabase production project keys.  
**What gets deployed first:** The Sprint 1 activation flow: signup/login, onboarding, dashboard, update detail, acknowledgement action, and Mixpanel event tracking.  
**What will stay local for now, if anything:** Experimental AI parsing, live platform integrations, and any unfinished admin/testing tools will stay local or out of the production flow.

---

## 5. Rejected Architecture Paths

### Rejected Option 1

**Option:** Build a separate Express.js backend with a separate hosted API.

**Why it was attractive:**  
It gives more backend control and could scale into a larger service architecture later.

**Why it was rejected now:**  
Sprint 1 does not need a separate backend. It would increase setup time, deployment work, and coordination complexity. Next.js Server Actions and API Routes are enough for the current activation flow.

---

### Rejected Option 2

**Option:** Build live Moodle, Teams, Discord, Messenger, or WhatsApp integrations immediately.

**Why it was attractive:**  
Live integrations would make the product feel more realistic and closer to the final vision.

**Why it was rejected now:**  
The technical and permission risks are too high for Sprint 1. The team first needs to validate whether students value the prioritized update and acknowledgement loop. Seeded/manual data is enough to test that assumption.

---

### Rejected Option 3

**Option:** Use MongoDB instead of Supabase PostgreSQL.

**Why it was attractive:**  
MongoDB can be flexible for unstructured data and fast prototyping.

**Why it was rejected now:**  
KIU Nexus has relational data: users, courses, updates, acknowledgements, and weekly plans. PostgreSQL is a clearer fit and integrates directly with Supabase Auth.

---

## 6. Technical Debt You Are Accepting on Purpose

| Shortcut | Why accepted now | Risk created | When to revisit |
|----------|------------------|--------------|-----------------|
| Seeded/manual course updates instead of live integrations | Allows Sprint 1 activation flow to be built without external blockers | Product may feel less automated in early tests | Sprint 2 or Sprint 3 |
| Simple priority labels instead of advanced ranking algorithm | Critical/important/normal labels are enough for MVP validation | Prioritization may feel basic | After usability testing |
| Manual acceptance testing instead of full automated test suite | Saves time while the UI and flow are still changing | More regression risk | After Sprint 1 review |
| Minimal email/password auth only | Reduces auth complexity | Users may prefer Google or Microsoft login later | Sprint 2 or Sprint 3 |
| No in-product AI parsing in Sprint 1 | Keeps activation flow focused and stable | Product does not yet handle messy real update text automatically | Sprint 2 |
| Basic Mixpanel instrumentation only | Enough to track activation | Less detailed behavioral analysis | After activation events are verified |

---

## 7. Final Stack Lock

**Frontend:** The frontend will use Next.js, React, TypeScript, Tailwind CSS, and ShadCN UI.

**Backend:** The backend will use Next.js Server Actions and API Routes.

**Database:** The database will use Supabase PostgreSQL.

**Auth:** Authentication will use Supabase Auth with simple email/password login for Sprint 1.

**Analytics:** Analytics will use Mixpanel with event names aligned to the Lab 5 event schema.

**Hosting:** Hosting will use Vercel for public deployment.

No TBD entries remain.