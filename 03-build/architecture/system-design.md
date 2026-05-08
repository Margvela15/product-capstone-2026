System Design

File path: 03-build/architecture/system-design.md

Team: Undefined Behaviour
Product: KIU Nexus
Date: 2026-05-04
Version: 1.0
Primary author: Giorgi Papidze

1. Core Sprint 1 Request
A third-year KIU Computer Science student signs up, views prioritized academic updates, acknowledges a critical update, and receives confirmation that it was added to their weekly plan.
Current Sprint 1 boundary:
In scope:
User signup and login
Simulated or seeded course setup
Dashboard with prioritized academic updates
Critical update detail page
Acknowledge and Add to Plan action
Weekly plan item creation
Mixpanel analytics events
Deployment to Vercel
Out of scope:
Live Moodle scraping
Live Teams/Discord/Messenger integrations
Native mobile applications
Billing or subscriptions
AI-generated academic parsing
Professor/admin portal
2. System Goal

By Sprint 1 review, KIU Nexus must allow a student to complete the full activation flow from onboarding to update acknowledgement. The system should provide a centralized dashboard showing critical academic updates using seeded or manually created course data. The product must track whether users reach the activation moment through Mixpanel analytics events. The architecture must remain lightweight, deployable, and realistic for a four-person student team working through the course sprint schedule. Sprint 1 focuses on validating user value before investing in risky live integrations.

3. Component Breakdown
Component	Layer	Responsibility	Owner	Technology	AI touchpoint, if any
Frontend web app	Client	Display onboarding, dashboard, update views, and weekly plan flow	Archil Margvelashvili	Next.js, React, TypeScript, Tailwind CSS	Stitch for UI prototyping
Application logic	Server	Handle user actions, acknowledgements, validation, and data flow	Giorgi Papidze	Next.js Server Actions / API Routes	Claude Code, Cursor
Database	Data	Store users, updates, acknowledgements, and plans	Giorgi Papidze	Supabase PostgreSQL	None
Authentication	Auth	Signup, login, logout, session persistence	Giorgi Papidze	Supabase Auth	Copilot for boilerplate
Analytics	Measurement	Track activation and user behavior events	Archil Margvelashvili	Mixpanel	Cursor for event instrumentation
External services	Integration	Seeded or simulated course updates for Sprint 1	Nikoloz Jvebenava	JSON seed data / Supabase	None
Deployment	Infrastructure	Deploy and maintain live demo environment	Giorgi Kveladze	Vercel	None
4. Key Data Objects
Entity	What it represents	Created by	Read by	Stored where
User	Student account and profile	Authentication flow	Dashboard and backend	Supabase
Course	Academic course selected by user	User onboarding	Dashboard	Supabase
Update	Academic announcement or task	Seed data or admin entry	Dashboard	Supabase
Acknowledgement	Record that user handled an update	User action	Weekly plan	Supabase
Weekly Plan Item	Planned academic task from acknowledgement	Backend action	Weekly plan UI	Supabase
Analytics Event	User behavior tracking data	Frontend actions	Mixpanel dashboard	Mixpanel
5. User Request Lifecycle
User opens the KIU Nexus web app.
Frontend sends signup or login credentials to Supabase Auth.
Backend validates the user session and redirects to onboarding.
User selects or simulates active courses.
Frontend sends selected courses to backend server actions.
Database stores selected course relationships.
Frontend requests academic updates related to selected courses.
Backend queries Supabase for matching updates.
Frontend displays prioritized critical updates on the dashboard.
User opens a critical update detail page.
Frontend logs critical_update_opened to Mixpanel.
User clicks Acknowledge and Add to Plan.
Backend validates the action and creates:
acknowledgement record
weekly plan item
Database stores acknowledgement and weekly plan item.
Frontend fires critical_update_acknowledged analytics event.
User sees confirmation that the update was added to the weekly plan.
6. Data Flow Notes
What data enters from the user?
Email and password
Selected courses
Acknowledgement actions
What data is validated?
Authentication credentials
User session
Valid course selection
Valid update acknowledgement request
What data is stored permanently?
User accounts
Selected courses
Academic updates
Acknowledgement records
Weekly plan items
Analytics event metadata
What data is temporary or computed?
Dashboard sorting and prioritization
Session tokens
UI loading states
What data should never be stored?
Plain-text passwords
External platform credentials
Sensitive personal messages from third-party apps
7. APIs and Integrations
Service or API	Why it exists	Request direction	Risk	Fallback plan
Supabase Auth	User authentication	Frontend ↔ Supabase	Auth flow complexity	Use simple email/password auth only
Supabase Database	Persistent storage	Backend ↔ Database	Schema issues	Use minimal Sprint 1 schema
Mixpanel	Product analytics	Frontend → Mixpanel	Events not firing correctly	Manual event QA
Vercel	Hosting and deployment	GitHub → Vercel	Environment variable misconfiguration	Local fallback deployment
Seeded Course Updates	Simulated academic updates	Backend → Database	Unrealistic test data	Use interview-based examples
8. Deployment Topology
Frontend hosted on: Vercel
Backend hosted on: Vercel Server Functions
Database hosted on: Supabase
Domain or public URL: Vercel deployment URL
Analytics platform: Mixpanel
Auth provider: Supabase Auth
File storage, if any: Supabase Storage (optional future use)
9. AI in the Build and AI in the Product
AI in the build workflow
Tool	Used for what	Owner	Review rule
Stitch	UI prototype generation	Archil Margvelashvili	Screens reviewed before implementation
Claude Code	Backend logic and architecture support	Giorgi Papidze	Human review before merge
AI Studio	Planned future parsing experiments	Nikoloz Jvebenava	Experimental only
Copilot / Cursor	Boilerplate, refactoring, instrumentation	Entire team	Acceptance criteria must pass
AI in the product, if applicable

Sprint 1 does not include live AI functionality inside the product. AI-assisted parsing of messy academic updates is planned for Sprint 2 after the activation flow is validated.

10. Security, Privacy, and Reliability Basics
Auth risks:
Broken session persistence
Route protection failures
Invalid login states
Sensitive data handled:
User email addresses
User authentication sessions
Academic planning information
Failure mode if main service goes down:

The dashboard and authentication become unavailable until services recover.

Logging and monitoring plan for Sprint 1:
Mixpanel event monitoring
Console and deployment logs
Manual testing before Sprint Review
One thing you will not promise yet:

Real-time synchronization across all academic platforms.

11. Technical Risks and Spikes
1. Risk:

Live platform integrations may take too long or fail.

Why it matters:
Sprint 1 depends on validating the activation flow quickly.
Mitigation or spike:
Use seeded course updates and delay live integrations.
Owner:
Giorgi Papidze
2. Risk:

Analytics events may not fire correctly.

Why it matters:
The team cannot measure activation without working analytics.
Mitigation or spike:
Create a Mixpanel testing spike and manually verify event payloads.
Owner:
Archil Margvelashvili
3. Risk:

Authentication flow may break onboarding.

Why it matters:
Users must reach the dashboard reliably.
Mitigation or spike:
Implement minimal email/password auth first and test all flows manually.
Owner:
Giorgi Papidze
12. Open Questions
Should weekly plan items support completion states during Sprint 1?
Should update prioritization remain static or become dynamic later?
When should live platform integrations begin after Sprint 1?
Will students prefer “Acknowledge” or simpler wording like “Mark as Handled”?
13. Final Readiness Check
 Every component has one clear job
 Core request lifecycle is written end to end
 Stack in this file matches tech-stack.md
 Top technical risks are named
 Out of scope items are explicit
 Another developer could start work from this document now