# Ecosystem Map — Lab 11 Activity 3

**Team:** KIU Capstone Team  
**Product:** KIU Nexus  
**Date submitted:** May 31, 2026  
**Document version:** 1.0

---

## Overview

KIU Nexus operates within a complex ecosystem of institutional platforms, student communities, and potential strategic partners. This map identifies every relevant party across four categories: Complements, Partners, Threats, and Complementors. It provides the foundation for partnership strategy and competitive response planning.

---

## 1. Complements: Products That Make KIU Nexus More Valuable

Complements are services or products that increase in value when used alongside KIU Nexus. Using one makes the user more likely to use the other.

### 1.1 **Moodle** (Essential Complement)

**Relationship:** Moodle is not a competitor in our view; it is infrastructure that makes KIU Nexus possible.

**How they complement each other:**
- Moodle is the authoritative source for assignment submissions, grading, and official deadlines
- KIU Nexus reads from Moodle's APIs and surfaces critical information from it
- The better Moodle's API stability and data structure, the more effectively KIU Nexus works

**Current integration status:** Live API integration; we read assignment metadata, due dates, and course enrollment

**Dependency:** High; if Moodle closed its API tomorrow, KIU Nexus would lose one-third of its data source.

**Strategic value:** This is a structural dependency we cannot fully eliminate. Mitigation: maintain version-agnostic API code; keep documentation of Moodle schema; advocate with KIU IT for stable API SLAs.

---

### 1.2 **Microsoft Teams** (Essential Complement)

**Relationship:** Like Moodle, Teams is infrastructure. Professors use it for announcements despite Moodle existing.

**How they complement each other:**
- Teams is where many professors announce deadline changes and clarifications
- KIU Nexus ingests from Teams channels and threads
- The more professors actively use Teams, the more critical the aggregation problem becomes, and the more value KIU Nexus delivers

**Current integration status:** Live API integration; we read channel messages, threaded replies, and pinned announcements

**Dependency:** High; most critical updates in our discovery data came from Teams channels.

**Strategic value:** Similar to Moodle; Teams use is institutional and outside our control. If Teams adoption at KIU decreases (e.g., administration mandates Moodle-only), KIU Nexus value decreases proportionally.

---

### 1.3 **Messenger** (Informal Complement)

**Relationship:** Messenger is where student peer-to-peer coordination happens. It is not official infrastructure, but it is where critical information surfaces first.

**How they complement each other:**
- Group chats in Messenger often contain first warnings about deadline changes or professor clarifications
- KIU Nexus could eventually ingest from Messenger channels (low priority for MVP; technical debt)
- Students use Messenger as a safety net (affinity cluster D: "usually someone says something"); KIU Nexus formalizes and reduces the dependency on this safety net

**Current integration status:** Not yet integrated (MVP limitation); students must currently share screenshots or copy-paste

**Dependency:** Low (MVP works without Messenger); medium (as we scale, adding Messenger would unlock 15–20% more critical updates based on interview data)

**Future roadmap:** Q4 2026 or Q1 2027; requires Messenger API partnership approval and rate-limiting negotiation.

---

### 1.4 **Discord** (Potential Complement)

**Relationship:** Technical CS students coordinate project work in Discord. Complementarity is asymmetric: Discord helps KIU Nexus adoption (students already there), but KIU Nexus provides limited value to Discord users.

**How they complement each other:**
- Developers share project links, deadlines, and resource links in Discord
- KIU Nexus could alert students when project deadlines appear in Discord
- Discord adoption is organic and decentralized (no institutional mandate), so integrating with Discord increases our reach into already-organized student communities

**Current integration status:** No integration; potential for future bot or webhook

**Dependency:** Low; Discord is optional, not institutional

**Strategic value:** Reaching students where they already are reduces acquisition friction. One Discord-connected bot that surfaces "your project deadlines from Discord in KIU Nexus" could drive word-of-mouth.

**Implementation note:** Discord bot would be volunteer-maintained by early users, not core product. We provide the hook; the community maintains the bot.

---

## 2. Partners: Organizations That Give Us Access, Distribution, Credibility, or Data

Partners are organizations with whom we have (or could establish) formal relationships to advance mutual goals.

### 2.1 **KIU Information Technology Services** (Confirmed Partner, Active)

**Status:** ✅ Confirmed partnership in progress

**Organization:** The university IT department that maintains Moodle, Teams deployment, student directory, and course schedule systems.

**Relationship:**
- KIU IT gave us API access to Moodle and Teams in March 2026 (for testing purposes)
- We have regular contact with the IT Lead (Dr. Giorgi Beridze, head of Learning Technology)
- IT sees KIU Nexus as a potential solution to the fragmentation problem they cannot solve themselves (their mandate is to maintain systems, not to build workflows across systems)

**What they give us:**
- Stable API access and SLAs
- Student directory data (needed for course enrollment sync)
- Credibility through institutional backing (students are more likely to trust a tool that the university IT team endorses)
- Potential co-marketing in IT communications

**What we give them:**
- Data on platform usage patterns (which announcements are getting missed)
- A case study for KIU's "Academic Technology Excellence" initiative
- Feedback on Moodle/Teams integration pain points

**Formalization status:** Informal MOU (email agreement); should formalize with written SLA before Checkpoint 4

**Next steps before Demo Day:**
- [ ] Schedule follow-up meeting with Dr. Beridze to discuss formal API SLAs
- [ ] Propose a single-semester pilot: "Run KIU Nexus for all 3rd-year CS students this Fall; we report usage metrics back to IT"
- [ ] Offer to present findings at KIU IT monthly meeting (visibility + institutional buy-in)

---

### 2.2 **KIU Faculty (CS Department, Specifically)** (Identified, Not Yet Approached)

**Status:** ⚠️ Identified but not yet approached for formal partnership

**Organizations:** 
- 4–5 professors teaching project-based CS courses (Software Engineering, Databases, Web Development, OS, Capstone)
- Prof. Lasha Devdariani (Software Engineering lead)
- Prof. Marina Giorgadze (Web Development lead)
- Others identified through course schedule review

**Relationship (target):**
- Direct integration: Professors would be able to create "critical announcements" within KIU Nexus itself, so updates do not get buried in Teams general chat
- Feedback: Professors would share pain points about student readiness and missed requirements; we incorporate into product roadmap
- Credibility: Faculty endorsement of a tool increases adoption dramatically among students

**What they give us:**
- Direct access to student cohorts (they can mandate KIU Nexus usage as part of course onboarding)
- Feedback on content requirements and pain points
- A publication/case study: "How we improved assignment clarity through aggregation"

**What we give them:**
- Analytics on which announcements are being missed most frequently (helps them redesign communication)
- Reduced email/Messenger traffic from students asking "when is this due?"
- Proof that their students are engaging with critical information

**Formalization status:** Not yet approached; currently ad-hoc conversations

**Next steps before Demo Day:**
- [ ] Schedule meetings with Prof. Devdariani and Prof. Giorgadze (2 prioritized meetings; aim for 1 pilot commitment)
- [ ] Propose a specific integration: "We'll add a 'Critical Announcement' feature to KIU Nexus; you use it for one assignment; we measure if students miss fewer requirements"
- [ ] Success criterion: 1 professor willing to pilot for Fall 2026 semester start (September 2026)

---

### 2.3 **KIU Student Council** (Identified, Not Yet Approached)

**Status:** ⚠️ Identified but not yet approached

**Organization:** KIU Student Government / Student Affairs office

**Relationship (target):**
- Endorsement and amplification through official channels (student email, announcements)
- Potential co-promotion: "Student Council recommends KIU Nexus to help manage coursework"
- Access to student organization leaders (club presidents, project team coordinators)

**What they give us:**
- Marketing reach to student population
- Credibility through institutional endorsement
- Organizer networks (student leaders can distribute in their own groups)

**What we give them:**
- A free tool that improves student academic outcomes (aligns with their mission)
- Potential feature for organizing club events and deadlines
- A case study to include in their annual report

**Formalization status:** Not approached; low priority for MVP phase

**Next steps before Demo Day:**
- [ ] Attend a Student Council meeting and present KIU Nexus as a student problem-solving initiative
- [ ] Target: Get Student Council's official endorsement or co-marketing agreement by Checkpoint 4

---

## 3. Threats: Parties Who Could Decide to Enter and Compete

Threats are organizations (existing competitors, platforms, or institutions) that could enter the market and disrupt KIU Nexus's value proposition.

### 3.1 **Moodle (Direct Threat, High Capability, Medium Likelihood)**

**Threat description:** Moodle could add a built-in aggregation feature that pulls announcements from Teams, Messenger, and other platforms directly into the Moodle dashboard.

| Dimension | Assessment |
|-----------|------------|
| **Likelihood** | Medium (12–24 months; depends on Moodle roadmap prioritization) |
| **Impact** | High (would directly subsume KIU Nexus value prop) |
| **Time-to-impact** | Medium (if it happens, it would take 6–12 months to roll out at KIU) |
| **Our defensibility** | Low (we cannot prevent this; we can only adapt) |

**Counter-strategy:**
1. **Become a Moodle integration partner** (not a competitor): Position KIU Nexus as a mobile "triage layer" on top of Moodle. If Moodle adds aggregation, we become complementary rather than redundant. Propose to Moodle's product team: "You aggregate; we triage and prioritize."

2. **Build institutional lock-in before Moodle moves:** Secure professor integrations with KIU Nexus by Demo Day. If 2–3 professors are broadcasting announcements through KIU Nexus and their students depend on it, then a Moodle feature would be too late—the behavior is already established.

3. **Differentiate on student focus vs. institution focus:** Moodle will prioritize broad institution use. We can remain narrowly focused on student experience and make different trade-offs (e.g., we can afford to show only critical information; Moodle must show everything to serve instructors).

---

### 3.2 **Microsoft Teams (Indirect Threat, High Capability, Low Likelihood in 12 months)**

**Threat description:** Microsoft could add a "Student Dashboard" feature to Teams that aggregates academic information and learning platform data.

| Dimension | Assessment |
|-----------|------------|
| **Likelihood** | Low in 12 months (not on Microsoft's current roadmap for higher education); Medium in 24+ months |
| **Impact** | High (Teams already has professor distribution; aggregation + triage would be immediate competition) |
| **Time-to-impact** | Long (24+ months if it happens) |
| **Our defensibility** | Low |

**Counter-strategy:**
1. **Focus on depth before Microsoft has breadth:** By the time Microsoft enters, KIU Nexus should be so embedded in KIU's workflows (professor integrations, student habits) that switching would be painful.

2. **Do not fight Microsoft on their turf:** Microsoft is a 2 trillion-dollar company. We will not outbuild them on a general platform. Instead, stay narrow and specialized. If they enter, we become the specialized vertical solution (like Slack has Salesforce integration specialists).

3. **Prepare acquisition narrative:** If Microsoft builds this feature, we become an acquisition target or a consulting partner ("We've solved this problem for KIU; help us solve it for 500 universities").

---

### 3.3 **KIU Administration (Regulatory Threat, High Likelihood in 3–5 years, Medium in 2–3 years)**

**Threat description:** University leadership decides to standardize on a single platform and discontinues support for Moodle OR discontinues support for Teams, or mandates that all professors use Moodle only.

| Dimension | Assessment |
|-----------|------------|
| **Likelihood** | High in 3–5 years (institutional IT standardization is common as IT matures); Medium in 2–3 years; Low in 12 months |
| **Impact** | Very High (eliminates the problem we solve; fragmentation disappears) |
| **Time-to-impact** | Long-term (likely not before Checkpoint 4 or even Demo Day) |
| **Our defensibility** | None (regulatory decisions are not market-based) |

**Counter-strategy:**
1. **This is a risk we mitigate, not defend against:** Build relationships with KIU IT leadership now. Position KIU Nexus as part of the *solution* to fragmentation. If administration is considering standardization, be in the room saying "We've already solved the interim fragmentation problem; let us help you think about it."

2. **Diversify beyond KIU:** Start scoping partnership with other Georgian universities (TSU, GTU, TSEU) now. If KIU standardizes, we have two other institutions ready to pilot. Reduce concentration risk.

3. **Prepare the acquisition+pivot narrative:** If KIU standardizes and our local problem disappears, we have evidence that (1) the problem exists at multiple institutions, (2) KIU IT values our solution, (3) we can be acquired by an education platform company or become a consulting firm for multi-university deployments.

---

### 3.4 **A Student-Built Competitor (Low Capability Today, Increasing Likelihood)**

**Threat description:** Another team of students (at KIU or elsewhere) could build a similar aggregation tool and release it as open-source or free.

| Dimension | Assessment |
|-----------|------------|
| **Likelihood** | Low today (high barrier to entry: requires API integrations, data schema understanding); Medium in 12 months if our traction attracts attention |
| **Impact** | Medium (open-source competitors would reduce our ability to charge; would not hurt unit economics if our unit economics come from institutional licensing, not per-student pricing) |
| **Time-to-impact** | Long (requires 2–3 months of development) |
| **Our defensibility** | Medium (proprietary triage logic, institutional relationships, first-mover at KIU) |

**Counter-strategy:**
1. **Move fast:** The main defense against competitor entry is speed. If we have 300 active students at KIU and clear retention before anyone else enters, we win by default (switching cost increases with usage).

2. **Open-source the infrastructure, proprietary the intelligence:** Consider open-sourcing the Moodle API connector by Q1 2027. Keep proprietary the triage ML and the institutional relationships. This prevents the "why not just use open-source" objection while protecting our core IP.

3. **Build community:** If we open-source connectors, invite other teams to contribute. This grows the ecosystem and makes competitors help us rather than replace us.

---

## 4. Complementors: Parties Who Increase Demand for KIU Nexus Without Direct Relationship

Complementors are often overlooked but strategically valuable. They create demand for our product by increasing the underlying pain (fragmentation) or increasing the value of our solution.

### 4.1 **Other Academic Management Tools Used by Students** (Complementors)

**Examples:** Productivity tools (Todoist, Asana, Monday.com), note-taking (OneNote, Obsidian), time-blocking apps (Toggl, RescueTime)

**How they complement us:**
- As students adopt productivity tools, they get more frustrated with the fragmentation problem (they want to move things from KIU Nexus to their task management tool, but the data is spread across five platforms)
- The better students' individual productivity stacks become, the more they value having a single, trustworthy source of truth for academic deadlines (i.e., KIU Nexus)

**Strategic implication:** Our product roadmap should include lightweight integrations with popular student tools (Todoist, Notion, Google Calendar). If a student can say "add this KIU Nexus deadline to my Todoist," they are more likely to use KIU Nexus.

---

### 4.2 **Institutional Pressure for Academic Excellence** (Complementor)

**Source:** KIU's institutional priorities around student success, retention, and academic achievement

**How it complements:**
- The more KIU administration emphasizes academic outcomes and student time-to-degree, the more valuable a tool like KIU Nexus becomes to them
- If KIU runs a student success initiative ("Improve semester-to-semester retention"), KIU Nexus aligns perfectly with that goal (reducing missed deadlines = better grades = higher retention)

**Strategic implication:** Partner with KIU's Student Success office. Help them measure whether KIU Nexus users have higher retention and GPA. Co-market on this basis: "KIU Nexus improves academic outcomes."

---

### 4.3 **Increasing Platform Diversity at KIU** (Complementor)**

**Phenomenon:** If more professors start using Discord, Slack, or other channels in addition to Teams and Moodle, the fragmentation problem intensifies, and the value of KIU Nexus increases.

**Strategic implication:** Our long-term success *depends* on platform diversity persisting. If KIU standardizes on a single platform, we become irrelevant. We should subtly advocate (through IT partnerships) for *controlled diversity* — i.e., KIU should maintain both Moodle and Teams as official channels, but discourage random professors from creating new platforms. This keeps the fragmentation problem real without letting it become unmanageable.

---

### 4.4 **Growth in Project-Based Learning at KIU** (Complementor)

**Trend:** CS curricula increasingly emphasize project-based learning (team projects, capstone projects, open-source contributions)

**How it complements:**
- More projects = more platforms (students use GitHub, Figma, Jira, Teams, email, Messenger)
- More platforms = more fragmentation = higher value for KIU Nexus
- KIU Nexus becomes not just about course deadlines, but about project-wide deadlines, code review dates, design sign-off dates

**Strategic implication:** Expand roadmap to include non-academic deadline sources (GitHub milestones, project management tools). This keeps KIU Nexus relevant as student workflows evolve.

---

## Strategic Priorities

Based on this ecosystem analysis, here are our three highest-impact partnership and complementor actions for the next 90 days (through Demo Day):

### Priority 1: Secure One Faculty Integration Pilot

**Goal:** Get 1 professor (Prof. Devdariani, target) to agree to broadcast a critical announcement through KIU Nexus for Fall 2026.

**Why this matters:** If a professor is using KIU Nexus as an official channel, switching cost rises for students. Institutional lock-in begins.

**Specific action:** Schedule meeting with Prof. Devdariani by June 15; propose the integration; aim for verbal commitment by June 30.

**Success metric:** One signed pilot agreement with a professor by Checkpoint 4 deadline (June 30).

---

### Priority 2: Formalize KIU IT Partnership SLA

**Goal:** Move the KIU IT relationship from informal agreement (email-based) to formal MOU with API SLAs.

**Why this matters:** Removes regulatory risk (IT could revoke API access anytime); signals institutional commitment; strengthens our position if Moodle or Teams changes.

**Specific action:** Draft SLA with Dr. Beridze; target signing by Checkpoint 4.

**Success metric:** Written MOU signed with KIU IT specifying API stability, uptime, response time, and escalation process.

---

### Priority 3: Begin Conversations with Second Institution

**Goal:** Identify one partner institution (Tbilisi State University or similar) and begin scoping their platform fragmentation problem.

**Why this matters:** De-risks the regulatory threat (if KIU standardizes); proves the job-to-be-done is not unique to KIU; prepares for scale beyond KIU.

**Specific action:** Identify IT contact and one interested faculty member at TSU; schedule initial discovery call by July 15.

**Success metric:** Completed 30-minute discovery call with TSU IT or faculty; documented that their platform fragmentation problem is similar to KIU's.

---

## Ecosystem Summary Table

| Category | Key Player | Status | Strategic Value | Timeline |
|----------|-----------|--------|-----------------|----------|
| **Complements** | Moodle | Essential | Infrastructure | N/A (external) |
| | Teams | Essential | Infrastructure | N/A (external) |
| | Messenger | Important | Distribution of critical info | Q4 2026 (integration roadmap) |
| **Partners** | KIU IT | Active | API access, credibility | ✅ Ongoing |
| | Faculty (target) | Identified | Direct distribution, adoption | ⚠️ Q2 2026 |
| | Student Council | Identified | Amplification | ⚠️ Q3 2026 |
| **Threats** | Moodle aggregation | Medium | Direct competition | 12–24 months |
| | Teams dashboard | Low | Potential competition | 24+ months |
| | KIU standardization | High | Eliminates problem | 3–5 years |
| **Complementors** | Student productivity tools | Indirect | Increases value of unified source | Ongoing |
| | Institutional success initiatives | Indirect | Alignment with KIU priorities | Ongoing |

---

**Prepared by:** Archil Margvelashvili, Nikoloz Jvebenava, Giorgi Papidze, Giorgi Kveladze  
**Reviewed by:** [Instructor]  
**Date:** May 31, 2026
