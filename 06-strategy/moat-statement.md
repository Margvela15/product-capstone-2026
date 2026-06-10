# Moat Statement — Lab 11 Activity 4

**Team:** KIU Capstone Team  
**Product:** KIU Nexus  
**Date submitted:** May 31, 2026  
**Document version:** 1.0  
**Classification:** Moat Hypothesis (not yet confirmed; hypothesis based on current evidence)

---

## Executive Summary

KIU Nexus's defensible moat will be **Switching Costs (Lock-in through Institutional Integration and Habit Formation)**. Once professors at KIU formally integrate their critical announcements into KIU Nexus, and once students form the daily habit of checking KIU Nexus before checking platforms manually, the cost of switching to an alternative becomes prohibitively high for both students and institutions. We are currently building the foundation for this moat; full moat strength will be realized by Fall 2026 if we execute on the partnership and adoption roadmap outlined below.

---

## 1. The Power Named: Helmer's Switching Costs

**Which of the Seven Powers:** Switching Costs (Lock-in)

**Definition:** A moat based on switching costs exists when the user cost of replacing the product with an alternative is high—either because the product has become embedded in their workflows, their data is locked in, their peers depend on their continued use, or significant retraining is required.

**Why this power for KIU Nexus:** The aggregation problem is solved through integration depth and habit formation. Once a student checks KIU Nexus as their first daily action for academic information, they do not want to revert to the multi-platform sweep. Once a professor broadcasts critical announcements through KIU Nexus, they do not want to maintain that channel *and* keep updating Teams. The switching cost rises because the alternative (breaking the habit, re-training professors, reverting to multi-platform workflows) is now more painful than the status quo.

---

## 2. The Mechanism Explained: How Switching Costs Work for KIU Nexus

**Current stage (May 2026):** We have not yet deployed to live users at scale. The following mechanism describes how switching costs *will* form as we move from prototype to production.

**The three layers of switching cost that will form:**

### Layer 1: Student Habit Formation (Immediate, 4–8 weeks)

**How it works:** Once KIU Nexus is live and students begin using it daily, it becomes the default first action of their morning routine (analogous to checking email or Slack). In our discovery interviews, students described the sweep ritual as so normalized that they do it "like brushing teeth" (affinity cluster A). We are replacing that ritual with a new one: check KIU Nexus first.

**Why it creates switching cost:** Habits are neurologically sticky. Once students have checked KIU Nexus 50+ times and gotten value (i.e., a critical deadline surfaced that they would have missed), breaking that habit is cognitively expensive. Switching to Moodle-only or Calendar-based system feels like *regression*.

**Quantified target:** By end of Fall 2026 semester, 60% of activated users check KIU Nexus 4+ days per week. This is the habit threshold.

### Layer 2: Data and Workflow Dependency (Medium-term, 8–16 weeks)

**How it works:** As KIU Nexus becomes the source of truth, students begin to build workflows around it:
- They set phone reminders based on KIU Nexus critical alerts
- They link KIU Nexus deadlines to their personal task managers (Todoist, Asana)
- They share KIU Nexus links in group chats ("Hey, see the deadline in Nexus?")

Migrating away from KIU Nexus would require re-doing all of these downstream connections.

**Why it creates switching cost:** Data portability is hard. Switching to an alternative means manually exporting all historical deadlines, re-importing into a new system, and re-building all the link-outs. The effort exceeds the perceived benefit.

**Quantified target:** By end of Fall 2026 semester, 40% of active users have linked KIU Nexus to at least one downstream tool (Todoist, Google Calendar, etc.). This indicates behavioral lock-in.

### Layer 3: Institutional Integration (Medium-term, 12–20 weeks)

**How it works:** When professors begin broadcasting critical announcements through KIU Nexus (the faculty integration pilot target), the switching cost moves from individual (student habit) to institutional (professor workflow).

For a professor to switch away from KIU Nexus, they would need to:
1. Notify all their students of the change
2. Rebuild the announcement channel in an alternative system
3. Ensure no critical information is lost during migration
4. Re-train students on the new workflow

This is not a low-friction change. Once three professors are using KIU Nexus as an official channel, switching cost for the *institution* becomes significant.

**Why it creates switching cost:** Institutional switching cost is the highest form of lock-in because it is not just about individual preference—it is about coordination across dozens of professors and hundreds of students. A Moodle update cannot easily add this level of behavioral lock-in because it would require *changing professor behavior*, which is outside Moodle's design scope.

**Quantified target:** By Checkpoint 4 (June 2026), secure 1 faculty integration pilot. By end of Fall 2026, expand to 3+ professors broadcasting through KIU Nexus. This creates institutional switching cost.

---

## 3. Evidence Provided (Current Evidence + Roadmap Evidence)

**Current Stage:** We are pre-launch as of the writing of this document (May 31, 2026). Full moat evidence will materialize once we deploy to live students. The evidence below includes (A) current evidence that switching cost moat is *probable*, and (B) specific KPIs we will track to confirm it.

### Current Evidence (Probability the Moat is Real)

#### Evidence 1: Discovery Data Shows Strong Habit-Formation Potential

**Source:** Interview logs `archil-01`, `hw1-wazowski37-01`, `nikoloz-04`

**Quote from LB-3CS (hw1-wazowski37-01):**
> "I open Moodle first to find the file, then I go to Teams to check if the professor said anything about it, and then I scroll up in the group chat to see if anyone is confused, because usually they are."

**Why this is evidence:** The sweep ritual is *already habituated*. Students already perform a multi-step routine to gather information. They have demonstrated they *will* develop habits around academic information gathering. Once KIU Nexus replaces that ritual and proves faster/better, the habit will transfer. This shows the neurobehavioral precondition for switching cost exists.

**Strength:** Strong. Habit formation is not hypothetical; it is already happening, just in a fragmented way.

---

#### Evidence 2: Failed Workarounds Demonstrate Switching Cost Sensitivity

**Source:** Interview logs; affinity cluster C ("Failed Workarounds")

**Quotes:**
- "I tried Google Calendar at the start of the semester but I stopped because I had to type everything in manually and I was already tired from copying things from Moodle. It felt like extra homework." (LB-3CS, hw1-wazowski37-01)
- "I gave up trying to have a system. Every system I tried needed me to update it." (EM, nikoloz-04)

**Why this is evidence:** Students have specifically tried *switching to calendar and task management systems*. They found the switching cost (manual maintenance) to be *higher than the benefit*. This proves they are sensitive to switching costs and will stick with systems that minimize friction. KIU Nexus minimizes friction (zero manual data entry) compared to Calendar/Notion, so switching cost in the reverse direction (away from KIU Nexus) should be even higher.

**Strength:** Strong. This is not hypothetical preference; it is revealed behavior (students chose not to switch despite trying).

---

#### Evidence 3: Institutional Complexity Creates Switching Cost Naturally

**Source:** Team problem statement and competitive analysis

**Evidence:** At KIU, information is scattered across Moodle, Teams, Messenger, Discord, and WhatsApp deliberately (not by accident). Each platform owner (professors, IT, departments) has chosen that platform for specific reasons. This institutional fragmentation is *structural*, not a bug. Any alternative to KIU Nexus must still deal with the same fragmentation, meaning it must solve the same hard integration problem. This is a switching cost barrier: any competitor would need to reverse-engineer five separate platform integrations, not just one.

**Strength:** Very strong. This is not about customer preference; it is about structural market conditions that create lock-in for any solution in this space.

---

### Roadmap Evidence (What We Will Measure to Confirm the Moat)

These are the specific KPIs we will track post-launch to measure whether switching cost moat is forming as predicted.

#### KPI 1: Daily Active User Consistency (Measure of Habit Formation)

**Metric:** Percent of users who check KIU Nexus 4+ days per week

**Target by end of Fall 2026:** 60% of activated users

**Why this matters:** If students do not use KIU Nexus consistently, habit formation is not happening, and there is no moat. If 60%+ check regularly, the habit is sticky.

**Data source:** Analytics dashboard; event `session_started` per user per week

**How we will track it:** Weekly cohort report; filter for users activated in Sept 2026; track weekly active user percentage across the semester

---

#### KPI 2: Downstream Integration Dependency (Measure of Workflow Lock-in)

**Metric:** Percent of active users who link KIU Nexus to downstream tools (Todoist, Google Calendar, personal task manager, etc.)

**Target by end of Fall 2026:** 40% of active users have created at least one downstream link

**Why this matters:** Downstream integrations indicate students are building workflows around KIU Nexus. Each downstream link creates switching cost (migrating that link elsewhere is friction).

**Data source:** Product usage logs; event `external_integration_created` per user

**How we will track it:** Monthly integration report; segment by user cohort; look for correlation between downstream integrations and retention (hypothesis: users with more integrations have lower churn)

---

#### KPI 3: Faculty Adoption and Integration Depth (Measure of Institutional Lock-in)

**Metric:** Number of professors broadcasting critical announcements through KIU Nexus; number of courses using it officially

**Target by end of Fall 2026:** 3+ professors; 6+ courses

**Why this matters:** Faculty adoption is the highest-level switching cost. Once professors are using KIU Nexus as an official channel, students and institution are locked in.

**Data source:** Manual tracking + product logs; event `faculty_announcement_posted` per professor per semester

**How we will track it:** Quarterly faculty engagement report; document each professor's level of integration (pilot, active, deep); track announcement volume over time

---

#### KPI 4: Churn Rate and Re-activation (Inverse Measure of Switching Cost)

**Metric:** Monthly churn rate for activated users (% who stop checking KIU Nexus after 2+ weeks of inactivity); re-activation rate for churned users

**Target:** Churn rate below 15% per month among activated users; re-activation rate above 40% for churned users

**Why this matters:** If switching cost moat is real, churn should be low (students do not leave) and re-activation should be high (students come back because the habit and lock-in are strong). High churn would indicate the moat is not forming.

**Data source:** Analytics dashboard; event `session_started` per user per day

**How we will track it:** Bi-weekly retention cohort analysis; segment by activation month; look for stabilization of churn rates post-activation

---

### Timeline for Moat Confirmation

| Phase | Timeline | Evidence Type | KPIs to Validate |
|-------|----------|---------------|-----------------|
| **Alpha (now – June)** | May 31 – June 30 | Probability evidence | Secure 1 faculty pilot agreement |
| **Beta (Summer 2026)** | July – Aug | Precursor evidence | Begin tracking daily active user %; test downstream integrations |
| **Live (Fall 2026)** | Sept – Dec | Full confirmation evidence | Validate all four KPIs above |
| **Mature (Spring 2027)** | Jan – May | Competitive resilience test | Measure churn if competitor enters; measure professor switching cost |

---

## 4. Path Forward: Strengthening the Moat (Next 60 Days)

The moat will be strengthened only through execution. Here are the specific actions to take between now (May 31) and the end of Checkpoint 4 (June 30).

### Action 1: Secure Faculty Integration Pilot (CRITICAL)

**What:** Get one professor committed to using KIU Nexus as an official broadcast channel for critical announcements starting Fall 2026.

**Target professor:** Prof. Lasha Devdariani (Software Engineering)

**Timeline:** Meeting by June 15; commitment letter by June 30

**Specific ask:** "Use KIU Nexus to broadcast one critical announcement (deadline, format change, clarification) per week for Fall 2026 semester. We will measure how many students see it, acknowledge it, and submit correctly. If the data shows it works, you can use it again next year."

**Why this is critical:** This one commitment creates the institutional switching cost layer. It says "a professor has chosen KIU Nexus as part of their official workflow." That is not easily reversed.

**Success criterion:** Written pilot agreement signed by both parties by June 30.

---

### Action 2: Formalize KIU IT Partnership

**What:** Convert the informal API access agreement with KIU IT into a formal SLA (Service Level Agreement).

**Target contact:** Dr. Giorgi Beridze, IT Lead

**Timeline:** SLA draft by June 20; signed by June 30

**Specific SLA terms:**
- Moodle API uptime: 99.5%
- Teams API uptime: 99.5%
- Response time for API issues: 24 hours
- Rate limits: [specify current limits]
- Escalation procedure: [specify who to contact if API breaks]

**Why this strengthens the moat:** A formal SLA makes API access *institutional* rather than personal. If a specific IT staff member leaves, the relationship continues. It also signals to students that KIU Nexus is officially backed by university IT, increasing trust and adoption.

**Success criterion:** Signed SLA on file by June 30.

---

### Action 3: Document Triage Logic as Proprietary IP

**What:** Write a detailed specification of how KIU Nexus determines if an update is "critical."

**Specifics:**
- Rule-based logic (v1): What types of content count as critical? (deadlines, format changes, instructor communication, etc.)
- Decision trees: How do we weight different types of announcements?
- Future ML roadmap: How will we learn from this student's behavior to personalize triage?

**Timeline:** Document by June 20; review with team by June 25

**Why this strengthens the moat:** If a competitor enters (Moodle adds aggregation, Notion adds academic templates, etc.), they will have generic triage logic. We will have proprietary, CS-curriculum-specific triage logic learned from KIU data. This is hard to copy quickly.

**Success criterion:** Specification document finalized and committed to repository by June 25.

---

### Action 4: Begin Second Institution Scoping

**What:** Identify one partner institution and begin discovery to validate the job-to-be-done exists elsewhere.

**Target institution:** Tbilisi State University (TSU) or Georgian Technical University

**Timeline:** Initial contact by June 20; discovery call by July 15

**Specific discovery questions:**
- What platforms do your professors use to distribute assignments? (Goal: identify if fragmentation exists)
- Do students report missing deadlines? (Goal: validate the pain)
- Would a unified aggregator solve this? (Goal: validate willingness to adopt)

**Why this strengthens the moat:** If the job-to-be-done only exists at KIU, the moat is weak (dependent on one institution). If it exists at multiple institutions, switching cost becomes more defensible (it is a structural problem, not a KIU quirk). It also prepares us for the scenario where KIU standardizes on a single platform.

**Success criterion:** Completed discovery call with one other institution; documented findings in repository by July 15.

---

### Action 5: Design "Lock-In Moments" in Onboarding

**What:** Build specific UX patterns that make it harder for students to leave the habit once formed.

**Examples of lock-in moments:**
- First critical deadline caught: Celebratory notification ("You saw this announcement 3 hours before anyone in your group noticed on Teams!")
- Streak tracking: "23-day checking streak" (gamification of habit)
- Personalization milestone: "KIU Nexus learned your preferences; now 92% of what you see is personalized for you" (social proof of value)
- Comparison moment: "Without KIU Nexus, you would have checked 7 apps today. Today you checked 1."

**Timeline:** Design 2–3 lock-in moments by June 25; implement by Launch (July 1)

**Why this strengthens the moat:** Lock-in moments are psychological anchors. They make the switching cost *feel* high even before it is structurally high. Once students feel they have missed something without KIU Nexus, they are emotionally invested in the habit.

**Success criterion:** 2–3 lock-in moments live in product by July 1 launch.

---

## Risk: What Could Prevent the Moat from Forming

| Risk | Probability | Mitigation |
|------|-------------|-----------|
| **KIU standardizes on single platform** | Medium (2–5 year horizon) | Expand to other institutions; position as acquisition target for education platforms |
| **Moodle adds aggregation feature** | Low–Medium (12–24 months) | Secure professor integrations before Moodle moves; become complementary rather than competitive |
| **Students do not form daily habit** | Low (discovery evidence strong) | Implement lock-in moments; gamify streaks; celebrate wins |
| **Faculty integration fails** | Low (Prof. Devdariani is engaged) | Identify backup faculty; offer more value (analytics on student engagement) |
| **API access is revoked** | Very Low (formal SLA mitigates) | Formalize partnership; maintain good relationship with KIU IT |

---

## Moat Classification

| Dimension | Assessment |
|-----------|-----------|
| **Current strength** | Hypothesis (pre-launch; 0 live users) |
| **Expected strength at Demo Day** | Medium (with 1 faculty pilot + 100–200 users) |
| **Expected strength at Checkpoint 4** | Medium-to-Strong (with 3+ faculty + 500+ active users) |
| **Durability** | 18–36 months without competitive response; longer if faculty integrations mature |
| **Defensibility against known threats** | Medium (Moodle aggregation could copy; institutional switching cost would slow them) |

---

## Why This Is Not Overclaimed

We could have claimed:
- **Network Effects** (No: value does not increase with each new user directly; it increases when *professors* join, not when students join)
- **Brand Loyalty** (Too early: brand is not established; students are rational and will switch if something better appears)
- **Proprietary Technology** (Yes, but secondary: triage logic is proprietary but can be reverse-engineered; switching costs are more defensible)
- **Scale Economies** (No: hosting costs are fixed; not capital-intensive)

**We chose Switching Costs because:**
1. It is supported by behavioral evidence (students already have habits; they have tried switching and rejected alternatives)
2. It is within our control (we can build institutional integration; we can design lock-in moments)
3. It is realistic (we do not claim network effects that require critical mass; we claim lock-in through habit and integration)
4. It is measurable (we can track daily active user %, downstream integrations, faculty adoption, churn rate)

---

## Sign-Off

All team members reviewed this moat statement and agree that:
1. The switching cost power is the most defensible moat available to KIU Nexus
2. The evidence presented is honest and not overclaimed (currently a hypothesis; will be confirmed through execution)
3. The roadmap and KPIs above are specific and measurable
4. The team is committed to executing on the four actions outlined in Section 4

| Name | Agreement | Date |
|------|-----------|------|
| Archil Margvelashvili | ✅ | May 31, 2026 |
| Nikoloz Jvebenava | ✅ | May 31, 2026 |
| Giorgi Papidze | ✅ | May 31, 2026 |
| Giorgi Kveladze | ✅ | May 31, 2026 |

---

**Prepared by:** Archil Margvelashvili, Nikoloz Jvebenava, Giorgi Papidze, Giorgi Kveladze  
**Reviewed by:** [Instructor]  
**Date:** May 31, 2026
