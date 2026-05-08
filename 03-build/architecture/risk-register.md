# Risk Register

**File path:** `03-build/architecture/risk-register.md`

**Team:** Undefined Behaviour  
**Product:** KIU Nexus  
**Date:** 2026-05-04

---

## Top Technical Risks

| Risk ID | Risk statement | Likelihood, Low Medium High | Impact, Low Medium High | Earliest detection point | Mitigation or spike | Owner | Status |
|--------|----------------|-----------------------------|-------------------------|--------------------------|--------------------|-------|--------|
| R1 | Live Moodle, Teams, Discord, Messenger, or WhatsApp integrations may be blocked by permissions, API limits, or setup complexity. | High | High | During Sprint 1 setup when attempting real platform connections. | Use seeded/manual course updates for Sprint 1 and defer live integrations until activation is validated. | Giorgi Papidze | Open |
| R2 | Authentication setup may slow onboarding or create broken login/session flows. | Medium | High | When users first attempt signup, login, logout, or dashboard access. | Run a Supabase Auth spike before full dashboard integration. | Giorgi Papidze | Open |
| R3 | Mixpanel analytics events may not fire correctly, making the activation moment impossible to measure. | Medium | High | During testing of `critical_update_acknowledged` event tracking. | Build a small event tracking spike and manually verify payloads inside Mixpanel. | Archil Margvelashvili | Open |
| R4 | AI-generated UI or backend code may introduce inconsistent behavior or bugs. | Medium | Medium | During implementation and code review. | Require manual teammate review and Definition of Done validation before merge. | Archil Margvelashvili | Open |

---

## Notes on the Top 3

### R1
- Why this matters to Sprint 1:
Sprint 1 depends on proving the activation flow works. If live platform integrations block development, the team could fail to deliver a demoable product.

- What evidence would show the risk is real:
API permissions fail, integrations require unexpected setup work, or external platforms cannot be accessed quickly enough.

- What you will do first:
Use manually seeded course updates and simulated course-source setup during Sprint 1 so the activation flow can still be tested.

---

### R2
- Why this matters to Sprint 1:
Users must have their own saved dashboard and acknowledged updates, which requires stable authentication and session management.

- What evidence would show the risk is real:
Users cannot stay logged in, protected routes fail, or onboarding breaks after authentication.

- What you will do first:
Implement the simplest Supabase Auth flow using email/password login and manually test signup, login, logout, and session persistence.

---

### R3
- Why this matters to Sprint 1:
The activation moment is `critical_update_acknowledged`. If Mixpanel events fail, the team cannot measure whether users reach activation.

- What evidence would show the risk is real:
Events do not appear in Mixpanel, event names are inconsistent, or important event properties are missing.

- What you will do first:
Create a small event test flow and verify all Sprint 1 analytics events manually before deployment.

---

## Spike Plan

| Spike | Question to answer | Timebox | Owner | Output |
|------|--------------------|---------|-------|--------|
| Spike 1 | Can Supabase Auth reliably support signup, login, logout, and protected dashboard routes? | 2 hours | Giorgi Papidze | Working auth prototype and documented setup steps. |
| Spike 2 | Can Mixpanel correctly capture `critical_update_acknowledged` and related activation events? | 1 hour | Archil Margvelashvili | Verified event tracking with screenshots or test notes. |

A spike should answer one question quickly. Do not let it turn into open ended research.