# Strategy Canvas — Lab 11 Activity 2

**Team:** KIU Capstone Team  
**Product:** KIU Nexus  
**Date submitted:** May 31, 2026  
**Document version:** 1.0

---

## Overview

The Strategy Canvas visualizes how KIU Nexus competes on different dimensions compared to the industry standard established by incumbent platforms. We apply the ERRC framework (Eliminate, Reduce, Raise, Create) to articulate our Blue Ocean position: a focused aggregation and triage service purpose-built for students managing fragmented institutional platforms.

---

## Strategy Canvas Factors (Industry Dimensions)

The following ten factors represent how platforms in the academic communication and task management space currently compete:

1. **Institutional Integration** — How closely tied is the platform to the university's official infrastructure?
2. **Platform Aggregation** — Does the solution pull information from multiple sources (Moodle, Teams, email, etc.) or just one?
3. **Notification Volume** — How many notifications/alerts reach the user weekly?
4. **Triage Intelligence** — Does the platform distinguish critical deadlines from routine announcements?
5. **Mobile Experience** — Quality and speed of mobile app or responsive web interface.
6. **Data Entry Burden** — Does the user have to manually create or update entries?
7. **Context & Customization** — Does the system understand course-specific requirements and user preferences?
8. **Real-Time Collaboration** — Support for team communication and group problem-solving within the platform.
9. **Archival & History** — How well does the platform preserve historical records for reference?
10. **Ease of Navigation** — How quickly can a student find what they need without scrolling or searching?

---

## Competitive Baselines (Industry Standard)

Based on the competitive matrix, we averaged the scores of incumbent platforms (Moodle, Microsoft Teams, Google Calendar, Notion, Discord) to establish the industry standard for each factor:

| Factor | Industry Avg | Incumbent Approach |
|--------|--------------|-------------------|
| Institutional Integration | 4.0 | Moodle and Teams are institution-owned; high integration by default |
| Platform Aggregation | 1.4 | Each platform handles one or two data sources; no aggregation across five |
| Notification Volume | 2.4 | High noise because channels are unmuted but not triaged; students mute everything |
| Triage Intelligence | 1.2 | None; platforms surface all information equally |
| Mobile Experience | 3.6 | Adequate for general use; slow for power users checking multiple platforms |
| Data Entry Burden | 3.2 | Google Calendar and Notion require manual entry; Moodle/Teams auto-populate but user must check |
| Context & Customization | 1.8 | Minimal per-student customization; designed for broad institution, not specific segment |
| Real-Time Collaboration | 4.0 | Teams and Discord excel here; it is their core use case |
| Archival & History | 4.4 | Moodle especially strong for grade history and record-keeping |
| Ease of Navigation | 2.6 | Finding critical information across platforms is the core pain; requires sweep ritual |

---

## KIU Nexus Strategy Canvas Positions

| Factor | Industry Avg | KIU Nexus | ERRC Category |
|--------|--------------|-----------|----------------|
| Institutional Integration | 4.0 | 2 | REDUCE |
| Platform Aggregation | 1.4 | 5 | RAISE |
| Notification Volume | 2.4 | 1 | ELIMINATE |
| Triage Intelligence | 1.2 | 5 | CREATE |
| Mobile Experience | 3.6 | 4 | MAINTAIN |
| Data Entry Burden | 3.2 | 1 | ELIMINATE |
| Context & Customization | 1.8 | 5 | RAISE |
| Real-Time Collaboration | 4.0 | 1 | ELIMINATE |
| Archival & History | 4.4 | 1 | ELIMINATE |
| Ease of Navigation | 2.6 | 5 | CREATE |

---

## ERRC Framework Detailed Application

### ELIMINATE: Four Dimensions We Stopped Competing On

#### 1. **Notification Volume**
- **What we eliminated:** The default-on notification firehose
- **Why:** Students are drowning in notifications. Every platform sends everything. Our interviews confirmed that students *mute notifications* (the rational response) and then *miss deadlines* (the costly consequence). We eliminate noise by not being a chat platform.
- **Trade-off:** We do not support real-time group discussion within KIU Nexus. That job is Messenger, Teams, and Discord's job. We are not trying to replace it.

#### 2. **Data Entry Burden**
- **What we eliminated:** The requirement that students transcribe deadlines and requirements into a separate system
- **Why:** Google Calendar users quit within two weeks citing "extra homework." Notion pages become stale. The problem is not that students are disorganized; it is that they are asked to be data-entry clerks *on top* of being students. We ingest data directly from Moodle and Teams APIs.
- **Trade-off:** We depend on institutional API stability. If Moodle's API changes, we must update. We do not offer unlimited customization because we are opinionated about what data matters.

#### 3. **Real-Time Collaboration**
- **What we eliminated:** The attempt to be a chat or meeting platform
- **Why:** We are competing against Teams and Discord at their core strength, which is unwinnable. They will always be better at chat because it is their core product. We do not try.
- **Trade-off:** Our platform is *solo-optimized*. A student sees *their* aggregated feed; they do not see their groupmates' feeds or have shared workspaces. For group coordination, they still use Teams or Discord (and that is fine).

#### 4. **Archival & History**
- **What we eliminated:** Long-term history and grade record keeping
- **Why:** Moodle is already excellent at this. We do not try to compete. Our job is to surface *current actionable information*, not to be the permanent institutional record.
- **Trade-off:** KIU Nexus is built for the semester-long sprint. Information older than four weeks gradually de-prioritizes. Students who need historical grade records go to Moodle directly.

### RAISE: Three Dimensions We Elevated

#### 1. **Platform Aggregation**
- **What we raised:** The ability to ingest data from five separate platforms and present them in one unified feed
- **Industry standard:** 1.4 out of 5; no incumbent does this well
- **KIU Nexus:** 5 out of 5; this is our core product
- **Why:** This directly solves the pain discovered in the sweep ritual. Every interviewee described checking Moodle → Teams → Messenger in sequence. We collapsed this into one view.
- **Evidence:** Affinity cluster A documents this ritual as universal behavior (8/8 on-topic interviewees).

#### 2. **Context & Customization**
- **What we raised:** Per-student, per-course customization of what information surfaces as critical
- **Industry standard:** 1.8 out of 5; platforms designed for general use cannot assume what matters to a specific student's workflow
- **KIU Nexus:** 5 out of 5; we learn over time which types of updates this student cares about and prioritize accordingly
- **Why:** Not all announcements are equal. A format change is critical; a professor's lunch announcement is noise. We distinguish.
- **Evidence:** Affinity cluster D shows the signal-to-noise problem in existing platforms; students mute channels rationally and suffer irrational consequences.

#### 3. **Institutional Integration**
- **What we raised:** The depth of integration with KIU's official systems (deeper than competitors who have *general* institutional access)
- **Industry standard:** 4.0 out of 5; Teams and Moodle are institution-owned
- **KIU Nexus:** 4.0 out of 5; we have the same institutional access *plus* custom relationships with IT and faculty
- **Trade-off:** This is geographically limited; we cannot easily move to another institution without rebuilding these relationships.

### MAINTAIN: One Dimension We Competed On Without Significant Advantage

#### 1. **Mobile Experience**
- **What we maintained:** A fast, responsive mobile interface (not dramatically better than competitors, but not worse)
- **Industry standard:** 3.6 out of 5; Teams and Google Calendar are good on mobile
- **KIU Nexus:** 4.0 out of 5; we optimized for mobile-first browsing of a feed, not general collaboration
- **Why:** Students check updates on the bus, in the library, between classes. The interface must not frustrate them. But this is table-stakes, not a differentiator.

### CREATE: Two New Dimensions We Introduced

#### 1. **Triage Intelligence**
- **What we created:** Automated classification of academic information into priority buckets: [Critical Deadline], [Format Change], [Clarification], [Optional Resource], [Instructor Communication]
- **Industry baseline:** 1.2 out of 5; this dimension barely existed; no platform attempted automatic triage
- **KIU Nexus:** 5 out of 5; we built proprietary triage logic specific to CS coursework
- **Why:** Students fear missing unknown information. Explicit triage (showing them what they *could* miss, what's urgent, what's optional) reduces anxiety and improves decision-making.
- **How it works:** Triage is initially rule-based (deadline in Moodle assignment object = Critical), then machine-learning-driven (over time, learn patterns in *this student's* behavior: if you always act on Intro-to-AI announcements but ignore Operating Systems announcements, de-prioritize OS noise).
- **Evidence:** Affinity cluster E describes the emotional cost: "I wasn't worried about the project. I was worried I was missing something I didn't even know existed." Triage directly addresses this.

#### 2. **Ease of Navigation**
- **What we created:** A task-specific interface optimized for the single question: "What do I need to do this week?"
- **Industry baseline:** 2.6 out of 5; answering this question currently requires visiting multiple apps and scrolling through noise
- **KIU Nexus:** 5 out of 5; this is the default view; the dashboard is the answer to that question
- **Why:** The job-to-be-done is not "manage my academics" (too broad). It is "know what I need to do this week without missing something." This is narrow enough to solve well.

---

## Blue Ocean Position Summary

**What we stopped doing:** Competing as a general platform. We eliminated notifications, collaboration, history-keeping, and manual customization.

**What we introduced:** Triage intelligence and a laser-focused navigation interface. These two dimensions were completely absent from the industry before.

**Why this matters:** A student choosing between Moodle, Teams, or KIU Nexus is not comparing like-for-like features. Moodle is an LMS. Teams is a workplace communication tool. KIU Nexus is a *deadline aggregation and triage system for fragmented institutions*. It solves a job that the incumbents handle as a side effect of solving broader jobs. By being focused, we can be excellent.

**Segment fit:** This position is specifically defensible for students in fragmented institutional environments (like KIU). A student at an institution with a single unified LMS would not need triage intelligence because there is nothing to triage across. A professional using Teams would not benefit from deadline aggregation because professional communication is not fragmented across five platforms by design. KIU Nexus is positioned for a specific structure: multiple incompatible platforms, each owning part of the information flow.

---

## Narrative: Blue Ocean Strategy

KIU Nexus redefines what "academic communication management" means for the third-year CS student at KIU.

The industry standard plays a game with ten dimensions. Our competitors invest in institutional integration (you must use us because the university requires it), real-time collaboration (chat with your team), and permanent archival (we are the source of truth). They compete on breadth. In doing so, they create noise, burden, and fragmentation.

We do not play that game.

Instead, we play a different game with three dimensions: aggregation, triage, and simplicity. We do not try to be the institutional system of record (Moodle is already winning that). We do not try to be the fastest chat platform (Teams is winning that). We do not try to be the most flexible workspace (Notion is winning that).

We instead ask a different question: "If a student could see one unified, prioritized list of everything they need to do this week across all five platforms, what would change?"

The answer, from our interviews, is everything. They would stop the daily sweep ritual (affinity cluster A). They would stop missing deadlines (cluster B). They would stop trying workarounds that fail (cluster C). They would stop muting notifications and then missing things (cluster D). They would feel in control instead of feeling like "the system is bad" (cluster E).

Our Blue Ocean move is to stop competing on the dimensions the industry cares about and start competing on the dimension the *student* actually needs: being able to answer the question "what do I need to do?" without anxiety or ceremony.

---

## Strategic Implications

1. **Product roadmap** should be defensive around aggregation and triage, not generalist features like chat or calendar.

2. **Marketing message** should be laser-focused: "See all your critical academic updates from every platform in one place. That's it. That's the product." Not: "Become a more organized person" or "Collaborate better." The value prop is specific and narrow.

3. **Pricing and monetization** should reflect segment focus. Charge institutions (KIU buys a site license for all CS third-year students). Do not try to sell to individuals or to workplaces, where the value prop is weaker.

4. **Defensibility** comes from (1) being focused (competitors cannot copy this without losing focus on their core business), (2) being proprietary in triage logic (the rules for what counts as a critical deadline in a CS curriculum are not obvious), and (3) being locked-in at the institution (if multiple professors integrate directly, switching cost rises).

---

**Prepared by:** Archil Margvelashvili, Nikoloz Jvebenava, Giorgi Papidze, Giorgi Kveladze  
**Reviewed by:** [Instructor]  
**Date:** May 31, 2026
