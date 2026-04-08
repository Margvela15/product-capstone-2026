# Patterns Analysis — Discovery Synthesis

**Team:** KIU Capstone Team
**Date compiled:** 2026-04-08
**Inputs:** `affinity-map.md` and the 8 on-topic interview logs in `01-discovery/interview-logs/`

This document moves from clusters to *patterns*: the recurring causal structures that show up across multiple interviews and that explain why the problem persists. Each pattern is named, supported by evidence from at least two independent interviewees, and translated into a design implication.

---

## Pattern 1 — The Sweep is the Pre-Tax Before Any Real Work

**The pattern:** Before a student can begin an actual academic task, they must perform a sequential check across 2–4 platforms (Moodle → Teams → Messenger/Discord → group chat) to *assemble the requirements* of the task. This sweep is ritualized and treated as unavoidable.

**Evidence (independent interviewees):**
- LB-3CS (hw1-wazowski37-01): Moodle → Teams → group chat sequence described as a normal opening.
- AK (archil-01): "Three places for one homework."
- EM (nikoloz-04): Checks the platform a professor *usually* uses; fails when the professor breaks pattern.
- TS-3CS (hw1-wazowski37-02): Sunday list-making ritual lasting ~1 hour.

**Why it persists:** Each professor independently chooses their preferred channel. There is no institutional standardization. Students adapt by performing the union of all professors' channel choices.

**Cost shape:** Continuous, daily, ~30–60 minutes per day of pure overhead (estimated from TS-3CS Quote 3 and corroborated by behaviors in LB-3CS, AK).

**Design implication:** The minimum viable solution must remove the *sweep itself*, not optimize it. Speeding up the sweep is not enough — students will still perform it because it is the only thing they trust. The solution must produce the equivalent of "you have already swept" with zero student effort.

---

## Pattern 2 — Workarounds Die in the Maintenance Phase

**The pattern:** Every workaround students adopt — Google Calendar, Notion pages, Telegram bots, custom Python scripts, paper lists — fails not at the *moment of adoption* but in the *maintenance phase*, usually within 1–4 weeks. The failure is upstream platform changes (Moodle login flow), social cost (groupmate stops updating shared Notion), or pure data-entry fatigue ("extra homework").

**Evidence (independent interviewees):**
- LB-3CS: Google Calendar abandoned because manual entry was "extra homework."
- VG (kveladze-01): Five separate tools tried, all failed, longest was a self-built Python scraper killed by a Moodle login change.
- TS-3CS: Sunday list "wrong by Tuesday"; groupmate's shared Notion page silently outdated.
- EM (nikoloz-04): "Every system I tried needed me to update it."
- AK (archil-01): Switched to *paper* because every digital tool had notification overhead.

**Why it persists:** Maintenance is invisible work. The cost of *adopting* a tool is felt and accepted; the cost of *sustaining* it accumulates silently and the student abandons the tool without ever consciously deciding to.

**Cost shape:** Repeated cycles of hope-then-abandonment. Over multiple cycles, students develop learned helplessness (VG: "Now I do nothing"; EM: "I am the system now and the system is bad"). The compounding cost is loss of belief that the problem is solvable.

**Design implication:** Two specific constraints fall out of this pattern:

1. **Zero ongoing student input.** If the user has to type, paste, configure, or remember to update anything after onboarding, the solution joins the graveyard.
2. **Survives upstream platform changes.** If the solution depends on scraping Moodle and Moodle changes its login flow, the solution dies on a Tuesday in October (literally what happened to VG). Reliability against upstream change must be designed in, not left to maintenance.

This is the strongest single constraint our discovery surfaced.

---

## Pattern 3 — Muting is Rational and Punished

**The pattern:** Channels that contain critical information are buried in low-value noise. Students mute them as a sanity-preserving move. Then they miss things and get penalized.

**Evidence:**
- TS-3CS: Muted the Teams project subchannel because of noise; missed the deadline change; "There is no in-between."
- AK (archil-01): Joined a nested Teams subchannel, stopped checking it, missed the UML announcement, lost five points.
- (Pattern is implied across multiple interviewees who describe Teams/Messenger noise without naming muting explicitly.)

**Why it persists:** Notification settings are binary — overwhelming or silent — and there is no functional "important things only" mode. The platform punishes *every* user uniformly, so the only way to protect attention is to mute, which then fails on the rare-but-critical message.

**Design implication:** The solution must implement the "important things only" filter that the platforms themselves do not provide. The minimum viable signal is *binary* — TS-3CS explicitly described it: "I would just want to know that nothing important got posted while I was sleeping. Just yes or no." The full content is secondary; the *triage* is the value.

---

## Pattern 4 — The Cost is Three-Dimensional, Not One-Dimensional

**The pattern:** Students experience the cost of this problem on three independent axes. Most discussions of the problem (including our own Lab 2 statement) only counted one of them.

**The three axes, with evidence:**

| Axis | Evidence | Notes |
|---|---|---|
| **Time** | TS-3CS: ~40 min/day, ~1 hr Sunday list. LB-3CS: continuous platform sweeps. | Easy to count. The axis we already had. |
| **Grades** | LB-3CS: 2 points. AK: 5 points. DK: lost points on wrong-version submission. EM: 9pm-discovered quiz. | Discrete, dated, painful. Also already in our model. |
| **Integrity / Identity** | TS-3CS: lied about a family emergency, "I felt like a loser." EM: "I am the system and the system is bad." BN: absorbs the social meme cost; tried not asking, missed two things, returned to asking. LB-3CS: "background dread of missing something I didn't even know existed." | New axis. Not in Lab 2 statement. The most emotionally weighty in interviews. |

**Why it persists:** The integrity axis is invisible from the outside. Professors see late submissions, not the lying that recovers them. Teammates see asking, not the meme cost paid by the asker. Even the affected students often do not name it until pressed. This invisible axis is the most underweighted dimension of the problem.

**Design implication:** Success metrics for any solution should not be limited to "deadlines tracked" or "minutes saved." The deeper measure is whether a student stops performing the *integrity-costly recovery moves* — the lying, the dread, the self-blame. This is harder to measure but it is the true value proposition.

---

## Pattern 5 — Compensating Roles Within Groups

**The pattern:** In project groups, the platform-fragmentation cost gets absorbed unequally. One person — the "bridge" or the "asker" — pays a disproportionate social and cognitive cost so the others do not have to.

**Evidence:**
- RM (archil-02): Self-described "bridge" between team Discord and professor Teams. "Right now it is me, and I hate it."
- BN (kveladze-02): The "asker" — pays social cost (group meme) so the group does not miss things.
- BN (kveladze-02): Identified the counter-segment — the non-asker who is failing two courses.
- LB-3CS (hw1-wazowski37-01): Implicit non-asker who relies on the asker: "I just hope someone in the group chat will say something."

**Why it persists:** Group projects amplify the cost (more deadlines, more channels) and create social pressure to delegate the bridging work to whoever is willing. Once a bridge or asker exists, the others rationally free-ride, which entrenches the role.

**Design implication:** Two segmentation insights fall out:

1. **First-user segment:** The bridge/asker is the strongest beachhead. They have *already chosen* to pay a cost to solve this problem; lowering that cost has direct, felt value. They will adopt and demonstrate the tool to others.
2. **Hardest segment:** The non-asker is failing silently and is the hardest to reach. They will not seek a tool out. Reaching them depends on the bridge/asker introducing the tool inside the group.

Designing for the bridge/asker first creates a natural distribution channel through their groups.

---

## Pattern 6 — Students Protect Their Informal Channels

**The pattern:** Students *deliberately* keep their informal communication (Discord, Messenger group chats) separate from the professor's channel (Teams). This is not laziness — it is protection of a private social space.

**Evidence:**
- RM (archil-02): "We talked about all using Teams. Nobody wants to. Discord is where we joke and complain. Teams is where the professor lives. We do not want them to be the same place."
- (Implied across other interviews where students describe group chats as venues for venting and humor, not as professional channels.)

**Why it persists:** Social safety. The informal channel is where students speak honestly about coursework, professors, and each other. Merging it with the professor channel destroys that safety.

**Design implication:** Any solution that requires students to *unify* their informal and formal channels will be rejected. The solution must respect the separation. It can *read from* both, but it cannot ask the student to abandon the informal one or merge it with the formal one. This is a hard constraint, not a preference.

---

## Cross-Cutting Observation: The Trust Hole

A theme that does not fit cleanly into any single pattern but recurs across several:

> Students who have been burned by failed tools (kveladze-01: "I would install it. I would also expect it to break in three weeks") will *try* a new solution but will not *trust* it for some weeks. During this trust ramp, they continue to perform the sweep ritual in parallel, doubling their work. If the tool fails even once during this period, the trust is permanently broken.

**Implication:** Whatever the team builds in subsequent labs has to be *correct on the first day*, not iteratively improved by user feedback. The first version that touches a real student's coursework cannot be a prototype tested on classmates. This is a much higher quality bar than a typical capstone MVP, and the team should plan accordingly when choosing scope.

---

## What These Patterns Justify in the Final Problem Statement

The patterns above support the following revisions to the Lab 2 problem statement, all of which appear in `final-problem-statement.md`:

1. **Add the integrity/identity axis to the cost description.** Patterns 4 and 5.
2. **Sharpen the workaround description** from "manual sweeps" to "a succession of abandoned tools and a paper notebook." Pattern 2.
3. **Name the bridge/asker role explicitly** as the most pained and most reachable sub-segment within the ICP. Pattern 5.
4. **Add a constraint about informal-channel protection** to scope-shape any future solution. Pattern 6.
5. **Add the "zero student maintenance" constraint** as the load-bearing constraint on any acceptable solution. Pattern 2.

These are revisions, not pivots. The committed problem from Lab 2 stands. The data sharpened it; it did not refute it.
