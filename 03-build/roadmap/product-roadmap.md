# Product Roadmap

**Team:** KIU Capstone Team  
**Product:** KIU Nexus  
**Date:** 2026-05-04  
**Version:** 1.1  
**Sprint Arc:** April 24 to June 11 2026 (4 sprints, 8 weeks)

---

# MVP Scope

## What We Are Building

KIU Nexus is a unified academic command center for third-year KIU Computer Science students who lose time, grades, and confidence because course updates are scattered across Moodle, MS Teams, Messenger, Discord, and WhatsApp.

The MVP focuses on the smallest flow that proves value:

A student connects or simulates their course sources, sees a prioritized digest of critical academic updates, opens one critical item, and acknowledges it into a weekly action plan.

---

## North Star Metric

> Weekly critical academic updates acknowledged per active user

---

## Activation Moment

The activation moment is when a user taps **Acknowledge and Add to Plan** on a critical academic update.

This maps to the analytics event:

`critical_update_acknowledged`

---

## Story Writing Standard

All stories in this roadmap were reviewed against INVEST criteria:

- Independent
- Negotiable
- Valuable
- Estimable
- Small
- Testable

Stories estimated above 8 points were split before sprint allocation.

---

## Capacity Planning Approach

Theoretical sprint capacity assumes full availability, but the team commits to approximately 60% of maximum capacity to account for:

- AI-generated code review time
- Midterm overlap during Sprint 1
- Debugging and integration overhead
- Team coordination and blockers
- Prototype iteration and usability fixes

This buffer helps maintain predictable delivery and prevents sprint overcommitment.

---

# In Scope (Sprints 1 to 4)

| Feature | Sprint | Interview Evidence |
|---------|--------|--------------------|
| Account setup and basic onboarding | Sprint 1 | Users need zero-maintenance setup; Pattern 2 shows tools fail when setup becomes extra homework. |
| Manual or seeded course-source setup for MVP testing | Sprint 1 | VG and LB-3CS tried tools that failed during maintenance; Sprint 1 needs controlled inputs before real integrations. |
| Nexus Dashboard with prioritized updates | Sprint 1 | Pattern 1: students perform a daily sweep across 2-4 platforms before starting work. |
| Critical update detail view | Sprint 1 | LB-3CS and AK lost points from missed formatting or hidden requirements. |
| Acknowledge and Add to Plan action | Sprint 1 | NSM requires a measurable value action tied to reduced missed information. |
| Weekly plan board for acknowledged critical items | Sprint 2 | TS-3CS described Sunday planning that becomes wrong by Tuesday. |
| Mixpanel event instrumentation for activation and retention | Sprint 2 | Lab 5 schema requires `critical_update_acknowledged` and `weekly_review_completed`. |
| AI-assisted parsing of messy update text into action cards | Sprint 2 | Pattern 3 shows users need "important things only" filtering, not another raw feed. |
| Project Group Sync seen/acknowledged status | Sprint 3 | Pattern 5 shows bridge/asker students absorb group coordination cost. |
| Integration & Bot Management screen for platform connection flow | Sprint 3 | Pattern 6 requires respecting informal/formal channel separation instead of forcing one merged workspace. |
| Usability fixes and demo polish | Sprint 4 | Trust hole observation: users will not forgive first-day failures in coursework tooling. |
| Demo-ready analytics dashboard and story evidence | Sprint 4 | Checkpoint 3 and Demo Day require product progress plus measurement evidence. |

---

# Out of Scope (MVP Phase)

| Feature | Reason Out of Scope |
|---------|---------------------|
| Full live Moodle scraping | High technical and policy risk; Sprint 1 can use seeded/manual data to test activation first. |
| Full live Teams/Discord/Messenger automation | Requires permissions and platform-specific work that is too large before activation is validated. |
| Mobile native apps | Web MVP is enough for Sprint 1 and Vercel deployment; native apps do not change activation. |
| Professor-facing admin portal | Our ICP is the student bridge/asker, not professors. |
| Paid subscription and billing | Revenue is not required to prove the academic update acknowledgement loop. |
| Automatic grade impact prediction | Interesting but not required for the core acknowledgement flow. |

---

# Explicitly Rejected

| Feature | Why Rejected |
|---------|-------------|
| Force all group communication into KIU Nexus | Pattern 6 shows students protect informal channels; forced migration would be rejected. |
| Generic calendar replacement | Interviewees already abandoned calendar-style tools because manual upkeep feels like extra homework. |
| Notification-only product | Pattern 3 shows the problem is signal quality, not lack of notifications. |
| Social chat clone | Does not solve the formal/informal fragmentation problem and risks adding more noise. |

---

# Sprint Overview

| Sprint | Dates | Theme | Key Deliverable | Checkpoint |
|--------|-------|-------|-----------------|-----------|
| Sprint 1 | Apr 24 to May 7 | Activation | User can complete onboarding, view seeded critical updates, and acknowledge one into a plan | Midterm Apr 30 -- dev continues async |
| Sprint 2 | May 8 to May 21 | Measurement | User can review a weekly plan and activation/retention events are live in Mixpanel | Checkpoint 3 May 21 |
| Sprint 3 | May 22 to Jun 4 | Collaboration | Bridge/asker can see group acknowledgement status and reduce repeated reminder messages | Peer Assessment Jun 4 |
| Sprint 4 | Jun 5 to Jun 11 | Demo | Product is stable, polished, deployed, and ready for Demo Day story | Demo Day Jun 11 |

---

# Sprint 1: Activation

**Dates:** April 24 to May 7 2026

## Sprint Goal

By the end of Sprint 1, a student can onboard, see important academic updates in one place, and acknowledge a critical update into a weekly plan without checking multiple platforms manually.

## Demo

Live deployed flow from signup/onboarding through `critical_update_acknowledged` and confirmation.

---

## Capacity

| Team Member | Available Hours (excluding midterm prep) | Story Points Max |
|-------------|-------------------------------------------|-----------------|
| Giorgi Papidze | 8 | 5 |
| Nikoloz Jvebenava | 8 | 5 |
| Archil Margvelashvili | 8 | 5 |
| Giorgi Kveladze | 6 | 3 |
| **Total** | **30** | **18** |

**Sprint 1 commitment:** 10 story points (56% of maximum capacity)

### Rationale

Sprint 1 overlaps with the midterm and first build setup, so the team commits only to the end-to-end activation path and defers risky live integrations.

---

## Stories Allocated to Sprint 1

| Story ID | Story (summary) | Points | Assignee | AI Tool |
|----------|----------------|--------|----------|---------|
| S1-01 | As a bridge/asker student, I want to create an account so that my acknowledged updates are saved to my own workspace. | 3 | Nikoloz Jvebenava | Claude Code |
| S1-02 | As a bridge/asker student, I want to add or simulate my active courses so that KIU Nexus can show relevant updates. | 2 | Giorgi Papidze | Cursor |
| S1-03 | As a bridge/asker student, I want to see a prioritized dashboard so that I can skip the daily manual sweep. | 3 | Archil Margvelashvili | Stitch + Cursor |
| S1-04 | As a bridge/asker student, I want to acknowledge a critical update so that it is added to my weekly plan and counted as handled. | 2 | Giorgi Kveladze | Cursor |

| **Sprint 1 Total** |  | **10** |  |  |

---

## Sprint 1 Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Real platform integrations take longer than expected | High | High | Use seeded or manually pasted updates for Sprint 1; validate activation before automation. |
| Dashboard becomes too broad and loses activation focus | Medium | High | PO rejects screens that do not lead to `critical_update_acknowledged`. |
| AI-generated UI misses accessibility or clarity | Medium | Medium | Human review against acceptance criteria and prototype before merge. |

---

# Sprint 2: Measurement

**Dates:** May 8 to May 21 2026

## Sprint Goal

By the end of Sprint 2, a returning student can manage acknowledged updates through a weekly review flow while the product team measures activation and retention behavior through live analytics.

## Demo

Mixpanel shows:

- `updates_digest_viewed`
- `critical_update_acknowledged`
- `weekly_review_completed`

from the deployed app.

---

## Capacity

**Sprint 2 commitment:** 12 story points

---

## Stories Allocated to Sprint 2

| Story ID | Story (summary) | Points | Assignee | AI Tool |
|----------|----------------|--------|----------|---------|
| S2-01 | As a returning student, I want a weekly plan board so that acknowledged updates stay visible until completed. | 3 | Giorgi Papidze | Stitch + Cursor |
| S2-02 | As a product team, we want Mixpanel tracking so that we can measure activation and retention. | 3 | Archil Margvelashvili | Cursor |
| S2-03 | As a student, I want messy update text parsed into action cards so that I do not read long noisy threads. | 5 | Nikoloz Jvebenava | Google AI Studio |
| S2-04 | As a tester, I want basic usability session notes so that the team can fix the highest-friction points before Checkpoint 3. | 1 | Giorgi Kveladze | None |

| **Sprint 2 Total** |  | **12** |  |  |

---

## Sprint 2 Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Analytics events fire inconsistently | Medium | High | Add manual event QA checklist and compare payloads to Lab 5 schema. |
| AI parser produces hallucinated tasks | Medium | High | Label AI output as suggested action and require source excerpt display. |

---

# Sprint 3: Collaboration

**Dates:** May 22 to June 4 2026

## Sprint Goal

By the end of Sprint 3, a bridge/asker student can see whether teammates acknowledged important academic updates without repeatedly sending reminder messages.

## Demo

Team sync view shows acknowledged/unacknowledged status for a shared critical update.

---

## Capacity

**Sprint 3 commitment:** 13 story points

---

## Stories Allocated to Sprint 3

| Story ID | Story (summary) | Points | Assignee | AI Tool |
|----------|----------------|--------|----------|---------|
| S3-01 | As a bridge student, I want to invite teammates to a course workspace so that update visibility is shared. | 3 | Giorgi Kveladze | Cursor |
| S3-02 | As a bridge student, I want to see who acknowledged an update so that I stop paying the reputational cost of asking repeatedly. | 5 | Archil Margvelashvili | Cursor |
| S3-03 | As a student, I want to manage source connections from one setup screen so that the system feels low-maintenance. | 3 | Nikoloz Jvebenava | Stitch + Cursor |
| S3-04 | As a team, we want referral/invite events tracked so that we can measure whether bridge users bring teammates in. | 2 | Giorgi Papidze | Cursor |

| **Sprint 3 Total** |  | **13** |  |  |

---

## Sprint 3 Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Collaboration scope grows into full task management | Medium | High | Keep only seen/acknowledged status in MVP; defer comments, chat, and assignment workflows. |
| Users dislike exposing read status | Medium | Medium | Make visibility course-workspace scoped and explain that it only applies to critical update acknowledgement. |

---

# Sprint 4: Demo

**Dates:** June 5 to June 11 2026

## Sprint Goal

By the end of Sprint 4, KIU Nexus is stable, polished, deployed, and supported by analytics and usability evidence for Demo Day presentation.

## Demo Day

June 11 2026

---

## Capacity

**Sprint 4 commitment:** 8 story points

---

## Stories Allocated to Sprint 4

| Story ID | Story (summary) | Points | Assignee | AI Tool |
|----------|----------------|--------|----------|---------|
| S4-01 | As a first-time demo user, I want polished empty/loading/error states so that the product feels reliable. | 3 | Archil Margvelashvili | Cursor |
| S4-02 | As a team, we want a clean analytics summary so that Demo Day claims are backed by evidence. | 2 | Giorgi Papidze | Cursor |
| S4-03 | As a target student, I want the critical update flow to be clear without explanation so that I can trust it quickly. | 3 | Nikoloz Jvebenava | Stitch + Cursor |

| **Sprint 4 Total** |  | **8** |  |  |

---

# Full Backlog (All Stories)

| Story ID | Story (summary) | Sprint | Points | Interview Evidence |
|----------|----------------|--------|--------|--------------------|
| S1-01 | Create account and save personal workspace | 1 | 3 | Pattern 2: tools fail when setup/maintenance is fragile. |
| S1-02 | Add or simulate active courses | 1 | 2 | Final problem statement: users span 3+ project courses and multiple platforms. |
| S1-03 | View prioritized dashboard | 1 | 3 | Pattern 1: daily sweep across platforms costs 30-60 minutes. |
| S1-04 | Acknowledge critical update into weekly plan | 1 | 2 | NSM and Pattern 3: users need important-things-only triage. |
| S2-01 | Weekly plan board | 2 | 3 | TS-3CS: Sunday list-making becomes wrong by Tuesday. |
| S2-02 | Activation and retention analytics | 2 | 3 | Lab 5 event schema requires activation and retention measurement. |
| S2-03 | AI parsing into action cards | 2 | 5 | Pattern 3: noisy channels need triage, not more raw messages. |
| S2-04 | Usability session notes | 2 | 1 | Trust hole: first version cannot fail visibly. |
| S3-01 | Invite teammates to course workspace | 3 | 3 | Pattern 5: bridge/asker is first-user beachhead. |
| S3-02 | Seen/acknowledged status | 3 | 5 | BN and RM evidence: asking repeatedly creates social cost. |
| S3-03 | Integration management screen | 3 | 3 | Pattern 6: respect source separation while reading from multiple channels. |
| S3-04 | Referral/invite event tracking | 3 | 2 | Event schema includes `invite_sent`. |
| S4-01 | Reliability polish states | 4 | 3 | Trust hole: failed tools are abandoned quickly. |
| S4-02 | Analytics summary for Demo Day | 4 | 2 | Checkpoint 3 and Demo Day require evidence-backed claims. |
| S4-03 | Activation clarity polish | 4 | 3 | Lab 5 rubric emphasizes visible activation moment. |

---

## Total Story Points

**Total story points across all sprints:** 43

**Unallocated backlog points:** 0

---

# Milestone Alignment

| Milestone | Date | Expected Capability |
|-----------|------|---------------------|
| Checkpoint 2 | Wed 22 Apr | Prototype testable, Lab 5 analytics docs committed, roadmap submitted |
| Sprint 1 Review | Week 10 (May 7) | Core activation flow working end to end, deployed URL available |
| Checkpoint 3 | Thu 21 May | MVP functional, analytics live, usability evidence gathered |
| Sprint 3 Review | Week 14 (Jun 4) | Collaboration loop and experiment results ready for pitch narrative |
| Demo Day | Thu 11 Jun | 7-minute pitch, 5-minute live demo, Q&A ready |

---

# Change Log

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-05-04 | 1.1 | Updated roadmap with INVEST validation and sprint capability statements | Giorgi Papidze |

---

*Product Roadmap | KIU Capstone Team | CS-PD-2026 | Spring 2026*