# Sprint 1 Plan

**Team:** KIU Capstone Team  
**Product:** KIU Nexus  
**Sprint:** 1 of 4  
**Dates:** April 24 to May 7 2026  
**Product Owner:** Giorgi Papidze  
**Scrum Master:** Giorgi Kveladze  
**Version:** 1.0

---

## Sprint Goal

A third-year KIU CS student can onboard, view a prioritized critical academic update, acknowledge it, and see it added to a weekly plan in a deployed web application.

---

## Sprint Ceremonies

| Ceremony | When | Where | Who Facilitates |
|----------|------|-------|----------------|
| Sprint Planning | Lab 8, Apr 24/25 | In person | Giorgi Kveladze |
| Daily Standup | 21:00 every Mon/Wed/Fri | GitHub Issues sprint board comments | Async -- each member posts |
| Sprint Review | Week 10, May 7 (Google Meet) | Google Meet | Giorgi Papidze |
| Retrospective | May 7 or 8 | Google Meet / campus room | Giorgi Kveladze |

**Async standup format:**
```text
Yesterday: [what I completed]
Today: [what I am working on]
Blocker: [anything stopping me -- or "none"]
AI note: [what AI generated yesterday and whether it was accepted/modified/discarded]
```

**Blocker escalation:** If a blocker is not resolved within 24 hours, Giorgi Kveladze pings the team in Messenger and opens a GitHub issue with `blocked` label.

---

## Definition of Done

A story is Done when all of the following are true:

- [ ] Code reviewed by at least one other team member who is not the original author
- [ ] Pull request merged to `main` via GitHub PR -- no direct pushes to main for sprint code
- [ ] Acceptance criteria confirmed as met by the Product Owner
- [ ] If AI-generated: code is annotated with comments explaining non-obvious logic
- [ ] If AI-generated: entry added to `docs/ai-usage-log.md` with tool, task, files changed, and review notes
- [ ] Feature works in the deployed environment, not just locally
- [ ] Analytics event behavior matches `03-build/analytics/event-schema.md` where applicable
- [ ] No known bugs introduced into the main branch

---

## Calibration Anchors

| Points | What It Looks Like for Our Team |
|--------|--------------------------------|
| 1 | One documentation or UI copy change, or one small static screen adjustment with no new logic. |
| 3 | A clear feature with UI, state, and validation, such as account setup or the prioritized dashboard. |
| 5 | Multi-step logic or AI-assisted behavior with uncertainty, such as parsing messy update text into action cards. |
| 8 | Too large for Sprint 1 unless split; likely includes external platform integration or multiple services. |

The team estimates full delivery, not just AI generation time. Review, testing, and Product Owner acceptance are included in every point estimate.

---

## Sprint 1 Backlog

### Story S1-01

**User Story:**  
As a bridge/asker student, I want to create an account so that my acknowledged updates are saved to my own workspace.

**Interview Evidence:**  
Source: Pattern 2 and final problem statement -- students abandon tools when they require repeated setup or maintenance; personal workspace persistence prevents the app from becoming another disposable checklist.

**Story Points:** 3  
**Assignee:** Nikoloz Jvebenava  
**AI Tool:** Claude Code  
**AI Tool Rationale:** Account setup and persistence may touch multiple files, so a context-aware coding assistant is useful for generating and reviewing the flow.

**Acceptance Criteria:**

```text
AC1:
Given a first-time user is on the KIU Nexus landing page,
When they choose a supported signup method and complete required fields,
Then an authenticated workspace is created for that user.

AC2:
Given a user has completed signup,
When they reload the application,
Then they remain associated with the same saved workspace.

AC3:
Given signup fails because required information is missing,
When the user submits the form,
Then the app shows a clear validation message and does not create a partial workspace.
```

**Notes:** MVP may use a simple auth setup, but `user_id` must be system-generated and never based on email in analytics payloads.

---

### Story S1-02

**User Story:**  
As a bridge/asker student, I want to add or simulate my active courses so that KIU Nexus can show relevant updates.

**Interview Evidence:**  
Source: Final problem statement -- primary ICP is enrolled in three or more project-based courses and receives information across at least two platforms.

**Story Points:** 2  
**Assignee:** Giorgi Papidze  
**AI Tool:** Cursor  
**AI Tool Rationale:** This is a small product-flow feature that can be implemented from existing prototype content with focused code generation and human review.

**Acceptance Criteria:**

```text
AC1:
Given an authenticated user has no courses,
When they add a course name and source platforms,
Then the course appears in their workspace list.

AC2:
Given the MVP is using seeded test data,
When the user selects "Use sample KIU courses",
Then at least three project-course entries appear with source platform labels.

AC3:
Given a course is saved,
When the dashboard loads,
Then updates for that course can appear in the prioritized feed.
```

**Notes:** This story intentionally avoids live Moodle/Teams automation in Sprint 1.

---

### Story S1-03

**User Story:**  
As a bridge/asker student, I want to see a prioritized dashboard so that I can skip the daily manual sweep across platforms.

**Interview Evidence:**  
Source: Pattern 1 -- students perform a daily sweep across Moodle, Teams, Messenger/Discord, and group chat before starting actual work.

**Story Points:** 3  
**Assignee:** Archil Margvelashvili  
**AI Tool:** Stitch + Cursor  
**AI Tool Rationale:** Stitch provides a high-fidelity dashboard starting point, and Cursor can convert the selected layout into project code.

**Acceptance Criteria:**

```text
AC1:
Given the user has seeded course updates,
When they open the Nexus Dashboard,
Then updates are grouped or ordered by priority with Critical items first.

AC2:
Given an update appears in the dashboard,
When the user scans the card,
Then they can see source platform, course, update type, and time-to-deadline if known.

AC3:
Given the dashboard contains no critical updates,
When the user opens it,
Then the app shows a calm empty state confirming there is nothing critical to handle.
```

**Notes:** This story supports the event `updates_digest_viewed` once instrumentation is added.

---

### Story S1-04

**User Story:**  
As a bridge/asker student, I want to acknowledge a critical update so that it is added to my weekly plan and counted as handled.

**Interview Evidence:**  
Source: Pattern 3 and Lab 5 NSM -- users need "important things only" triage, and the activation event is `critical_update_acknowledged`.

**Story Points:** 2  
**Assignee:** Giorgi Kveladze  
**AI Tool:** Cursor  
**AI Tool Rationale:** The feature is a focused UI/state update with analytics-ready behavior and testable acceptance criteria.

**Acceptance Criteria:**

```text
AC1:
Given a critical update is open in detail view,
When the user taps "Acknowledge and Add to Plan",
Then the update is marked acknowledged and appears in the weekly plan list.

AC2:
Given the acknowledgement succeeds,
When the action completes,
Then the user sees a confirmation state explaining what was added to the plan.

AC3:
Given analytics instrumentation is available,
When acknowledgement succeeds,
Then the app fires `critical_update_acknowledged` with `update_id`, `source_platform`, `update_type`, and `hours_before_due` when known.
```

**Notes:** This is the Sprint 1 activation story and must be reviewed by the Product Owner before Sprint Review.

---

## Sprint 1 Commitment Summary

| Story ID | Points | Assignee |
|----------|--------|----------|
| S1-01 | 3 | Nikoloz Jvebenava |
| S1-02 | 2 | Giorgi Papidze |
| S1-03 | 3 | Archil Margvelashvili |
| S1-04 | 2 | Giorgi Kveladze |
| **Total** | **10** | |

**Maximum estimated capacity:** 18 points  
**Committed capacity:** 10 points  
**Commitment ratio:** 56%

The commitment is intentionally below 60% because Sprint 1 overlaps with midterm preparation and first-time deployment setup.

---

## Sprint 1 Dependencies

| Dependency | Needed By | Owner | Fallback |
|------------|-----------|-------|----------|
| Stitch prototype screens | S1-03, S1-04 | Giorgi Papidze | Build minimal dashboard/detail screens manually from documented prototype flow |
| Seed update data | S1-02, S1-03, S1-04 | Giorgi Kveladze | Use static JSON with 3 sample KIU updates |
| Event schema | S1-04 | Giorgi Papidze | Use existing Lab 5 schema and defer live Mixpanel until Sprint 2 |
| Deployment target | All Sprint 1 stories | Archil Margvelashvili | Local demo plus Vercel deployment spike if blocked |

---

## Change Log

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-05-04 | 1.0 | Initial Sprint 1 plan | Giorgi Kveladze |

---

*Sprint 1 Plan | KIU Capstone Team | CS-PD-2026 | Spring 2026*
