# Product Roadmap

**Team:** KIU Capstone Team  
**Product:** KIU Nexus  
<<<<<<< HEAD
**Date:** 2026-05-08  
**Version:** 1.0  
=======
**Date:** 2026-05-04  
**Version:** 1.1  
>>>>>>> 63155d00958b78cb0e9a130a74fc95a6be9eac93
**Sprint Arc:** April 24 to June 11 2026 (4 sprints, 8 weeks)

---

# MVP Scope

## What We Are Building

<<<<<<< HEAD
KIU Nexus is a Unified Academic Command Center designed for university students who struggle with fragmented academic communication spread across multiple platforms such as LMS systems, Facebook groups, email, messaging applications, and class chats. The product aggregates academic updates into a single dashboard, prioritizes critical announcements, and helps students acknowledge and plan around important academic tasks and deadlines. The product directly addresses the repeated discovery insight that students perform a daily "sweep ritual" across multiple channels because they fear missing critical academic information.
=======
KIU Nexus is a unified academic command center for third-year KIU Computer Science students who lose time, grades, and confidence because course updates are scattered across Moodle, MS Teams, Messenger, Discord, and WhatsApp.
>>>>>>> 63155d00958b78cb0e9a130a74fc95a6be9eac93

The MVP focuses on the smallest flow that proves value:

A student connects or simulates their course sources, sees a prioritized digest of critical academic updates, opens one critical item, and acknowledges it into a weekly action plan.

---

## North Star Metric

> Weekly critical academic updates acknowledged per active user

<<<<<<< HEAD
### In Scope (Sprints 1 to 4)
=======
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
>>>>>>> 63155d00958b78cb0e9a130a74fc95a6be9eac93

| Feature | Sprint | Interview Evidence |
|---------|--------|--------------------|
| Unified academic dashboard | Sprint 1 | Interview 2 — student described checking multiple platforms every morning to avoid missing updates |
| User authentication | Sprint 1 | Interview 5 — students wanted personalized academic feeds |
| Critical update prioritization | Sprint 1 | Interview 4 — "I missed a deadline change because it got buried in messages." |
| Critical update detail screen | Sprint 1 | Interview 1 — students wanted one clear source of truth for urgent items |
| Acknowledge and Add to Plan flow | Sprint 1 | Interview 3 — students wanted a way to immediately act on updates |
| Event tracking and analytics | Sprint 2 | Needed to measure activation and retention behavior |
| Reminder and notification system | Sprint 2 | Interview 6 — users often forget updates after initially seeing them |
| Calendar and study planning integration | Sprint 3 | Interview 7 — students manually transfer updates into planners |
| Improved prioritization and filtering | Sprint 3 | Interview 8 — students complained about noisy announcement streams |
| Demo-ready deployment and polish | Sprint 4 | Required for Demo Day and real user testing |

---

# Out of Scope (MVP Phase)

| Feature | Reason Out of Scope |
|---------|---------------------|
| Native Android and iOS apps | Web-first MVP is sufficient for activation moment |
| AI-generated study summaries | Useful but not necessary for core activation |
| Parent or instructor dashboards | Does not directly support student activation moment |
| Cross-university support | Product is validated only for KIU users |
| Social discussion boards | Outside core problem of fragmented academic updates |
| Grade prediction system | Requires additional data and validation |

---

# Explicitly Rejected

| Feature | Why Rejected |
|---------|-------------|
| General-purpose messaging platform | Product solves academic coordination, not social communication |
| Full LMS replacement | Discovery showed the issue is fragmented updates, not the LMS itself |
| Anonymous posting system | Introduces moderation complexity unrelated to activation |
| Cryptocurrency or gamification rewards | No interview evidence supporting value |

---

# Sprint Overview

| Sprint | Dates | Theme | Key Deliverable | Checkpoint |
|--------|-------|-------|-----------------|-----------|
| Sprint 1 | Apr 24 to May 7 | Foundation | Core update flow working end to end | Midterm Apr 30 — dev continues async |
| Sprint 2 | May 8 to May 21 | Instrumentation | Analytics and notifications live | Checkpoint 3 May 21 |
| Sprint 3 | May 22 to Jun 4 | Optimization | Smarter prioritization and planning features | Peer Assessment Jun 4 |
| Sprint 4 | Jun 5 to Jun 11 | Demo | Stable demo-ready deployed MVP | Demo Day Jun 11 |

---

<<<<<<< HEAD
## Sprint 1: Foundation

**Dates:** April 24 to May 7 2026  
**Sprint Goal:** A user can sign up, view prioritized academic updates, open a critical update, and acknowledge it inside a deployed application.  
**Demo:** Live walkthrough of the KIU Nexus dashboard, critical update flow, and acknowledgement interaction.
=======
# Sprint 1: Activation

**Dates:** April 24 to May 7 2026
>>>>>>> 63155d00958b78cb0e9a130a74fc95a6be9eac93

## Sprint Goal

<<<<<<< HEAD
| Team Member | Available Hours (excl. midterm prep) | Story Points Max |
|-------------|--------------------------------------|-----------------|
| Archil Margvelashvili | 18 | 5 |
| Nikoloz Jvebenava | 18 | 5 |
| Giorgi Papidze | 20 | 6 |
| Giorgi Kveladze | 16 | 4 |
| **Total** | | **20** |
=======
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
>>>>>>> 63155d00958b78cb0e9a130a74fc95a6be9eac93

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
<<<<<<< HEAD
| 2026-05-04 | 1.0 | Initial roadmap and MVP scope | Giorgi Papidze |
| 2026-05-08 | 1.0 | Initial roadmap | Nikoloz Jvebenava |
=======
| 2026-05-04 | 1.1 | Updated roadmap with INVEST validation and sprint capability statements | Giorgi Papidze |
>>>>>>> 63155d00958b78cb0e9a130a74fc95a6be9eac93

---

*Product Roadmap | KIU Capstone Team | CS-PD-2026 | Spring 2026*