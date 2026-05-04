# High-Fidelity Prototype: Stitch

**Team:** KIU Capstone Team  
**Product:** KIU Nexus  
**Tool:** Google Stitch (https://stitch.withgoogle.com)  
**Created:** 2026-05-04  
**Status:** Draft (Lab 5) / Final (by April 23)

---

## Prototype Link

**Stitch shareable link:**  
[https://stitch.withgoogle.com/projects/11165901128751396753](https://stitch.withgoogle.com/projects/11165901128751396753)

**Tested in incognito window:** ☑ Yes ☐ No

---

## What This Prototype Covers

**Core user flow prototyped:**  
A KIU student consolidates fragmented updates into one command center, reviews a critical item, and acknowledges it to avoid missed requirements.

**Screens included:**

| Screen | Purpose | Activation Event Fired |
|--------|---------|----------------------|
| Nexus Dashboard | Single source of truth feed with prioritized updates from Moodle, Teams, and Discord | None |
| Course Nerve Centers | Per-course view of deliverables, team status, and source context links | None |
| Automated Inbox | AI-parsed action items extracted from noisy updates and chats | None |
| Project Group Sync | Team visibility into who has seen/acknowledged critical updates | None |
| Integration & Bot Management | Setup for connecting external platforms with low-maintenance automation | None |
| Critical Update Detail | Action view with "Acknowledge and Add to Plan" CTA | `critical_update_acknowledged` |

**Activation moment screen:** Critical Update Detail  
**What the user does at activation:** Taps "Acknowledge and Add to Plan" for a critical update  
**NSM connection:** Each acknowledgement records one successful value moment and increments the NSM count per active user.

---

## Stitch Brief Used

Paste the exact brief you used to generate this prototype:

```
Product name:
KIU Nexus

Primary user:
Third-year KIU Computer Science student handling 3+ project courses with fragmented communication channels

Most important flow:
Aggregate fragmented academic updates, prioritize what matters, and acknowledge critical actions in one place

Screens required:
1. Nexus Dashboard with urgency labels and source indicators
2. Course Nerve Centers with deliverables and relevant context links
3. Automated Inbox with extracted action items
4. Project Group Sync with seen/acknowledged visibility
5. Integration & Bot Management for platform connections
6. Critical Update Detail with "Acknowledge and Add to Plan"

Activation moment:
User acknowledges a critical update they would likely have missed in fragmented platforms

Visual style:
Productive Dark Mode / Academic Terminal, high contrast, data dense, clean typography
```

---

## Key Prompts Used

List the main prompts you used during the session. This helps your team iterate in Lab 6 and helps the instructor understand your design decisions.

**Initial prompt:**
```
Design a high-fidelity web app called KIU Nexus for KIU students who miss assignment details because professors post updates across Moodle, MS Teams, and group chats. Build these screens: (1) Nexus Dashboard, (2) Course Nerve Centers, (3) Automated Inbox, (4) Project Group Sync, (5) Integration & Bot Management, and (6) Critical Update Detail with an "Acknowledge and Add to Plan" action. Activation event is critical_update_acknowledged. Use Productive Dark Mode / Academic Terminal style.
```

**Iteration prompts (if any):**
```
Iteration 1: Increase contrast for urgency labels and make critical items impossible to miss.
Iteration 2: Add platform badges and show time-to-deadline indicators.
Iteration 3: Keep setup simple in Integration & Bot Management and highlight low-maintenance automation.
```

---

## Design Decisions

Document 2 to 3 decisions you made about the UI that connect to your synthesis findings:

**Decision 1:**  
Prioritized digest with clear urgency labels because interviews showed students are overwhelmed by noisy channels and need "important things only" triage first.

**Decision 2:**  
Source platform badges on every critical item because students reported failures when professors switch posting channels unexpectedly.

**Decision 3 (optional):**  
One-tap acknowledgement and automatic addition to weekly plan because discovery showed manual maintenance workflows get abandoned quickly.

---

## What Lab 6 Will Add

This prototype is the design blueprint. Lab 6 adds:

- Backend logic (user authentication, data storage)
- Event schema instrumentation (actual tracking code)
- Real data persistence (acknowledged updates actually save)
- Vercel deployment (public URL for real user testing)

**Live app URL (completed after Lab 6):**  
Pending (to be added in Lab 6)

---

## Export (if available)

If Stitch offered a code export option, note it here:

**Export format:** Pending  
**Export file location in repo:** `02-design/prototypes/high-fidelity/stitch-export/`

---

*Stitch Prototype | KIU Capstone Team | CS-PD-2026 | Spring 2026*
