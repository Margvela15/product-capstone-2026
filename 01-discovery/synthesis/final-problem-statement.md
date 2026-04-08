# Final Problem Statement — Checkpoint 1

**Team:** KIU Capstone Team
**Members:** Archil Margvelashvili, Nikoloz Jvebenava, Giorgi Papidze, Giorgi Kveladze
**Date committed:** 2026-04-08
**Supersedes:** `00-foundation/team-problem-statement.md` (Lab 2 hypothesis)
**Evidence base:** 10 on-topic interviews in `01-discovery/interview-logs/`, synthesized in `affinity-map.md` and `patterns-analysis.md`

---

## The Problem Statement

> Third-year Computer Science students at KIU enrolled in multiple project-based courses lose grade points, hours of weekly time, and personal integrity recovering from missed academic information that was distributed across Moodle, MS Teams, and informal chat groups (Messenger, Discord) without consolidation. They cope today by performing a daily sweep ritual across all platforms, by stratifying their project groups so that one "bridge" or "asker" absorbs the coordination cost on behalf of the others, and by cycling through a succession of self-built tools (calendars, Notion pages, bots, paper notebooks) that all fail in the maintenance phase within four weeks. None of these workarounds are sustainable, because every digital workaround requires manual upkeep that becomes "extra homework," and the social workaround (asking in the group chat) imposes a continuous reputational and emotional cost on the asker.

---

## Specific ICP

**Primary segment:** Third-year CS students at KIU who are simultaneously enrolled in **three or more project-based courses** in the same semester, and whose professors split assignment information across **at least two of {Moodle, MS Teams, Messenger, Discord, WhatsApp}**.

**High-pain sub-segment (beachhead):** The "bridge" or "asker" within a project group — the student who has self-appointed (or been informally appointed) as the person who keeps the rest of the group informed. This person is *already paying a cost* to solve the problem and is therefore the most reachable first user.

**Counter-segment we are *not* targeting first:** The non-asker who is failing silently. They need to be reached through the bridge/asker, not directly.

**Why this segment specifically:**
- Third-year is the year when project-based courses concentrate (confirmed in 8/8 on-topic interviews).
- CS students are technical enough to have *tried* tools (Cluster C in `affinity-map.md`), which means the failure of those tools is informative — it is not a skill issue.
- KIU is the team's accessible recruiting environment for the rest of the capstone.

---

## Evidence from Interviews

### Evidence the problem is real and frequent

> "Three places for one homework." — AK (archil-01), describing the path to start a single assignment.

> "I open Moodle first to find the file, then I go to Teams to check if the professor said anything about it, and then I scroll up in the group chat to see if anyone is confused, because usually they are." — LB-3CS (hw1-wazowski37-01)

> "I had not opened that course on Moodle in those three days because the professor usually announces things in Teams." — EM (nikoloz-04), on finding out at 9pm about a 9am quiz.

**Frequency assessment:** The sweep behavior was described as **daily** by every on-topic interviewee (8/8). The acute-failure incidents (point losses, missed deadlines) were described at a rate of **at least one per interviewee per semester**, with several reporting multiple events.

### Evidence the cost is significant and three-dimensional

**Time:**
> "Maybe 40 minutes a day? More on Sundays. Sundays I sit down and try to make a list of what is due, and it takes like an hour, and the list is wrong by Tuesday." — TS-3CS (hw1-wazowski37-02)

**Grades:**
> "He took two points. Two points for a PDF." — LB-3CS

> "I lost five points on the Software Engineering project because the professor wrote in the Teams project channel that we needed a UML diagram. I never opened that subchannel that week. Five points." — AK

> "Last month. The OS professor changed the submission format to a single zip file in a Moodle update. I had not opened that course on Moodle for two days because I was working on Web Dev. He took three points and the comment was 'see Moodle announcement.' I saw it three days later." — DT (archil-03)

**Integrity / identity:**
> "I emailed the professor and I lied. I said I had a family thing. He gave me twelve hours. I worked the whole night. I got the points but I felt like a loser." — TS-3CS

> "I am the system now and the system is bad." — EM

> "I would rather be the annoying one than the one who fails." — BN (kveladze-02)

> "Yes. I mean, the information is there if I look. I just do not look. So it is on me. I am bad at this. Some people are good at it and I am bad at it." — SH (kveladze-03), the most extreme version of structural failure internalized as personal inadequacy. SH failed an entire course last semester and could not tell us how many of those lost points came from missed platform announcements.

The integrity/identity axis was not in our Lab 2 hypothesis. It surfaced from the interviews and is now treated as **the most weighty cost dimension** because it is the one students remember longest and feel most ashamed of.

### Evidence the workarounds fail

> "I tried a Telegram bot that scraped Moodle. I tried IFTTT. I tried a Notion template. I tried a calendar with reminders. I tried writing my own Python script. None of them lasted more than three weeks." — VG (kveladze-01)

> "I tried Google Calendar at the start of the semester but I stopped because I had to type everything in manually... It felt like extra homework." — LB-3CS

> "I have a notebook now. A real paper notebook. I write down everything I see. It is stupid but it works better than my phone." — AK

> "I gave up trying to have a system. Every system I tried needed me to update it." — EM

The full list of failed workarounds named by interviewees: Google Calendar, Notion templates, IFTTT recipes, Telegram bots, custom Python scrapers, group-shared Notion pages, paper notebooks, asking in the group chat, designating a "bridge person." The *only* workaround that survives the semester is the one with zero notification overhead (paper) — and even paper is a sad workaround the user themselves describes as "stupid."

---

## Pain Intensity and Frequency

| Dimension | Assessment | Source |
|---|---|---|
| **Frequency of low-grade pain (sweeps, dread)** | Daily | 10/10 on-topic interviewees |
| **Frequency of acute pain (point loss, missed deadline)** | At least 1× per semester per student; SH lost an entire course | 8/10 named a recent specific event |
| **Time cost** | 30–60 min/day, plus 1 hr/week ritual planning | TS-3CS quantified directly; corroborated by behavior in 5 others |
| **Grade cost** | 2–5 points per incident, multiple incidents per semester; up to a full course failure in the most extreme observed case | LB-3CS, AK, DK, TS-3CS, EM, DT, SH |
| **Emotional intensity** | Tears, lost sleep, family phone calls, lying to professors, internalized self-blame | EM, TS-3CS, BN, LB-3CS |
| **Awareness across the ICP** | Universal | "Everyone in my year complains about it. Nobody does anything." — RM (archil-02) |

**Pain rating:** **High intensity, high frequency, universally recognized, and currently unaddressed.** This is the profile of a problem worth solving.

---

## Why Existing Solutions Are Insufficient

We have direct evidence — not speculation — that the following do **not** work:

1. **Each individual platform's notification system.** Binary mute-or-overwhelm with no triage layer. Muting is rational; muting causes failures. (Pattern 3 in `patterns-analysis.md`.)

2. **Manual aggregation tools** (Google Calendar, Notion, paper lists). All require ongoing student input. All are abandoned in the maintenance phase, typically within 4 weeks. (Pattern 2.)

3. **Self-built automation** (Python scrapers, Telegram bots, IFTTT). Break when upstream platforms change. Even technical CS students cannot sustain them. (Pattern 2 + VG's specific story.)

4. **Designated group bridges/askers.** Functional but socially costly to the bridge/asker, and fragile (they get tired, sick, or graduate). (Pattern 5.)

5. **Asking the professor to standardize.** Students do not feel they have the standing to ask, and professors are perceived as believing they have already "done their job" by posting once. (AK Quote 4, EM Quote 4.)

**The gap nothing is filling:** A *zero-maintenance, triage-aware* aggregation layer that reads from all the platforms a student already uses, surfaces only what matters in the next 7 days, and requires no student input after onboarding. Nothing in the interviewees' tool history matches this description, which is why every existing workaround has failed.

---

## Constraints on Any Future Solution (Derived from Evidence)

These are not requirements of our team's eventual solution — that comes in later labs. They are *constraints* the data has already imposed on what an acceptable solution can look like.

1. **Zero ongoing student input after onboarding.** (Pattern 2.) Anything else dies in the maintenance phase.
2. **Survives upstream platform changes.** (VG's Python-script story.) Cannot rely on a single brittle scrape.
3. **Respects the separation between informal channels (Discord, Messenger) and formal channels (Teams, Moodle).** (Pattern 6.) Students will reject any solution that asks them to merge these.
4. **Provides triage, not just aggregation.** (Pattern 3.) The minimum value is "what matters this week," not "everything that was posted."
5. **Correct on day one.** (Cross-cutting "trust hole" observation.) The first version cannot be a prototype that fails and gets fixed — students will not give it a second chance.

---

## What This Statement Does *Not* Claim

- We do not claim we have a solution.
- We do not claim this is the only problem in the academic-tooling space at KIU.
- We do not claim our 8 on-topic interviews are representative of all KIU CS students. They are a meaningful sample, not a statistical one.
- We do not claim the bridge/asker beachhead is the only viable entry point — it is the one we have evidence for.

---

## What Changed From the Lab 2 Hypothesis

The Lab 2 problem statement (`00-foundation/team-problem-statement.md`) was directionally correct. The interviews validated it but sharpened it in three specific ways:

| Lab 2 said... | Evidence revised it to... |
|---|---|
| "Manually checking all three platforms" as the workaround | A *succession* of failed tools, ending in either paper notebooks or learned helplessness |
| Cost = lost points + wasted time | Cost = points + time + **integrity/identity** |
| Implicitly individual problem | Partially distributed across groups via the bridge/asker role |

The revision direction is *deeper, not different*. We are not pivoting. We are committing harder, with evidence.

---

## Sign-Off

| Name | Role | Date |
|---|---|---|
| Archil Margvelashvili | Program Lead | 2026-04-08 |
| Nikoloz Jvebenava | Discovery Lead | 2026-04-08 |
| Giorgi Papidze | Tech Lead | 2026-04-08 |
| Giorgi Kveladze | Support | 2026-04-08 |

---

## Revision History

| Version | Date | What changed | Reason |
|---|---|---|---|
| v1.0 | 2026-03-24 | Initial commitment in `00-foundation/team-problem-statement.md` | Lab 2 pre-interview hypothesis |
| v2.0 | 2026-04-08 | This document | Checkpoint 1: revised after 10 interviews and synthesis |
