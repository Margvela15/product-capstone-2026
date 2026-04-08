# Affinity Map — Discovery Synthesis

**Team:** KIU Capstone Team
**Date compiled:** 2026-04-08
**Source data:** 12 interview logs in `01-discovery/interview-logs/` (10 on-topic, 2 off-topic adjacent-space exploration)
**Method:** Each verbatim quote and observation from every interview was extracted onto a virtual sticky note, then grouped by emerging theme. Themes were named after the conversation, not before. Quotes were not forced into themes — two interviews (nikoloz-02, nikoloz-03) explored an adjacent problem space (dorm/roommate coordination) and are clustered separately.

---

## Note on the Two Off-Topic Interviews

In Lab 3, two early interviews (`nikoloz-interview-02`, `nikoloz-interview-03`) drifted from the team's committed problem (course platform fragmentation) into a related but distinct space (dorm and roommate coordination). The team caught this in Lab 4 synthesis and re-grounded subsequent interviews on the committed ICP. We have kept these two logs in the repository because (a) they are real evidence of real conversations, (b) the course-correction itself is part of our discovery story, and (c) some of the meta-themes they surface (informal agreements decay; tracking systems require maintenance) are echoed in the on-topic interviews. They are clustered as **Cluster G — Adjacent Space** below and are *not* used as evidence for the final problem statement.

---

## Cluster A — The Sweep Ritual

**Theme:** Students perform a sequential, multi-platform check before they can begin any piece of coursework. This is so normalized that they describe it like brushing teeth.

| Source | Quote / Observation |
|---|---|
| hw1-wazowski37-01 (LB-3CS) | "I open Moodle first to find the file, then I go to Teams to check if the professor said anything about it, and then I scroll up in the group chat to see if anyone is confused, because usually they are." |
| archil-01 (AK) | "Three places for one homework." (Messenger → Moodle → Teams) |
| archil-01 (observation) | Browser had Moodle and Teams open in parallel before the interview started — steady state. |
| archil-03 (DT) | "I check Moodle every day because of him, even on weekends." (One professor's Moodle-only choice forces daily polling for an entire course.) |
| hw1-wazowski37-02 (TS-3CS) | Sunday-ritual "list-making" that takes ~1 hour and is wrong by Tuesday. |
| nikoloz-04 (EM) | "I had not opened that course on Moodle in those three days because the professor usually announces things in Teams." |

**What this cluster tells us:** Discovery is not free. Students pay a daily cognitive tax just to know what they are supposed to do. The tax is structural — it does not go away with experience or seniority.

---

## Cluster B — Concrete, Quantified Penalties

**Theme:** Students lose grade points from platform mismatches in ways they can name precisely. Recent, specific, dated.

| Source | Quote / Observation |
|---|---|
| hw1-wazowski37-01 (LB-3CS) | "He took two points. Two points for a PDF." (Format change posted only in Teams.) |
| archil-01 (AK) | "I lost five points on the Software Engineering project because the professor wrote in the Teams project channel that we needed a UML diagram." |
| nikoloz-01 (DK) | "I once submitted the wrong version and lost points because of it." |
| hw1-wazowski37-02 (TS-3CS) | Deadline moved two days earlier in a muted Teams subchannel; missed entirely; recovered only by lying to the professor about a family emergency. |
| nikoloz-04 (EM) | Found out at 9pm about a 9am quiz posted three days earlier in Moodle. |
| archil-03 (DT) | Lost three points last month: OS professor changed submission format to a single zip file in a Moodle update; she had not opened that course's Moodle for two days because she was working on Web Dev. |
| kveladze-03 (SH) | Failed an entire course last semester. "I think two of those points were from missed assignments. I am not sure exactly. I do not keep track of why I lose points." Most extreme cost outcome in the dataset. |

**What this cluster tells us:** The pain is not hypothetical. Every interviewee on the committed problem could name a recent, dated, point-quantified loss. The problem produces measurable academic damage.

---

## Cluster C — Failed Workarounds

**Theme:** Students have tried — often *many* — solutions. They have all failed. Maintenance cost is the killer.

| Source | Quote / Observation |
|---|---|
| hw1-wazowski37-01 (LB-3CS) | Tried Google Calendar; quit because manual entry "felt like extra homework." |
| hw1-wazowski37-02 (TS-3CS) | Sunday list ritual; "the list is wrong by Tuesday." |
| hw1-wazowski37-02 (TS-3CS) | Groupmate's Notion page; "half the time it's not updated and we all pretend it is." |
| kveladze-01 (VG) | Tried Telegram bot, IFTTT, Notion template, calendar reminders, custom Python script. All failed. |
| kveladze-01 (VG) | Self-built Python scraper broke when Moodle changed its login flow; never fixed. |
| archil-01 (AK) | Has switched to a *paper* notebook because every digital tool has notification overhead. |
| archil-03 (DT) | Prints assignment pages on first sight. "It is wasteful and I know it is wasteful. I do it anyway." Same analog-distrust pattern as AK, independently arrived at. |
| kveladze-03 (SH) | The *absence* of workarounds. Tried a calendar once in first year, prompted by his mother, abandoned within a week, never tried again. Currently does nothing — the most extreme version of learned helplessness in the dataset. |
| nikoloz-04 (EM) | "I gave up trying to have a system. Every system I tried needed me to update it." |
| nikoloz-03 (TM) | "We tried making a list, but we stopped checking it after a week." (originally about chores; pattern still relevant) |

**What this cluster tells us:** Any solution that requires student maintenance — entering deadlines, updating files, configuring rules — will be abandoned within weeks. The winning workarounds (paper, asking a friend) succeed because they have *zero ongoing maintenance overhead*.

---

## Cluster D — Notification Triage Failure

**Theme:** Channels exist that contain the right information, but the signal-to-noise ratio is so bad that students mute them and then miss things.

| Source | Quote / Observation |
|---|---|
| hw1-wazowski37-02 (TS-3CS) | "I'm in that channel but I had muted it because of the noise." |
| hw1-wazowski37-02 (TS-3CS) | "I unmuted everything for like three days and then I muted it again because my phone wouldn't stop. There is no in-between." |
| archil-01 (AK) | Joined nested Teams subchannel; stopped checking it; missed the UML announcement. |
| archil-02 (RM) | Self-appointed "bridge" between Discord (team) and Teams (professor). |

**What this cluster tells us:** The problem is not just that information is *scattered*. Within each platform, the information is *buried in low-value noise*. Muting is rational. Muting causes failures. The student is punished for a sensible decision.

---

## Cluster E — Social and Emotional Cost

**Theme:** The pain is not only academic. There is a continuous emotional weight, and discrete moments of acute social/integrity cost.

| Source | Quote / Observation |
|---|---|
| hw1-wazowski37-01 (LB-3CS) | "I wasn't worried about the project. I was worried I was missing something I didn't even know existed. That's the worst part." |
| hw1-wazowski37-02 (TS-3CS) | Lied to professor (fake family emergency) to recover; "I felt like a loser." |
| kveladze-02 (BN) | Group meme about her constant asking; absorbs the social cost because the alternative is failing. |
| nikoloz-04 (EM) | Cried for 20 minutes; called her mother; lost a night of sleep. |
| nikoloz-04 (EM) | "I am the system now and the system is bad." (Internalized self-blame for a structural problem.) |
| kveladze-03 (SH) | "Yes. I mean, the information is there if I look. I just do not look. So it is on me. I am bad at this. Some people are good at it and I am bad at it." (Total internalization of structural failure as personal inadequacy — even more flat than EM.) |

**What this cluster tells us:** The cost has at least three axes: time, grades, and *integrity/identity*. Students lie, cry, accept being the "annoying one," and internalize structural failure as personal failure. This dimension was not in the original Lab 2 problem statement and emerged only from the interviews.

---

## Cluster F — Group Roles and Distributed Coping

**Theme:** Project groups stratify into roles. Someone absorbs the platform-bridging cost on behalf of the others.

| Source | Quote / Observation |
|---|---|
| archil-02 (RM) | "Somebody has to be the bridge. Right now it is me, and I hate it." |
| archil-03 (DT) | "Screenshot relay" — one teammate sees a Teams post, screenshots it, pastes into Discord; the rest of the team learns from the screenshot. The bridge function performed by *image artifact* rather than verbal updates. |
| kveladze-02 (BN) | The "asker" — pays social cost so the group does not miss things. |
| kveladze-02 (BN) | "There is one guy. He never asks. He also never knows what is going on. He is failing two courses I think." (Non-asker counter-segment.) |
| kveladze-03 (SH) | The non-asker himself, in his own words. "My friends. Or nobody. Sometimes I find out the day of." Confirms BN's counter-segment exists and what it looks like from inside. |
| hw1-wazowski37-01 (LB-3CS) | "Honestly nothing. I just hope someone in the group chat will say something." (The asker as safety net for non-askers.) |

**What this cluster tells us:** The problem is not strictly individual. It is distributed across groups, with one or two people absorbing the bridging/asking work for everyone else. These compensating individuals (bridges, askers) are the cleanest first-user segment because they have *already* chosen to pay a cost to solve this — a tool that lowers their cost has direct, felt value.

---

## Cluster G — Adjacent Space (Off-Topic, Not Used as Evidence)

**Theme:** Two early interviews explored dorm/roommate coordination instead of the committed course-platform problem. Kept for transparency and meta-pattern observation.

| Source | Quote / Observation |
|---|---|
| nikoloz-02 (NG) | "At the beginning we agreed on everything, but after a few weeks no one follows it." |
| nikoloz-02 (NG) | "I don't want to argue, so I just do things myself sometimes." |
| nikoloz-03 (TM) | "It's not like big fights, but it's always annoying in the background." |
| nikoloz-03 (TM) | "We tried making a list, but we stopped checking it after a week." |

**Meta-pattern observation:** The decay of informal agreements and the failure of unmaintained lists shows up in *both* the dorm space and the coursework space. This is a hint that the underlying failure mode — humans cannot sustain manual systems — is broader than our chosen problem. We are not pivoting; we are noting the parallel.

---

## Aggregate Counts

| Cluster | # of supporting quotes | # of distinct interviewees |
|---|---|---|
| A — Sweep Ritual | 6 | 6 |
| B — Quantified Penalties | 7 | 7 |
| C — Failed Workarounds | 10 | 9 |
| D — Notification Triage | 4 | 3 |
| E — Social/Emotional Cost | 6 | 5 |
| F — Group Roles | 6 | 5 |
| G — Adjacent Space (excluded) | 4 | 2 |

**On-topic interviews (used as evidence):** 10 of 12
- nikoloz-01, nikoloz-04
- archil-01, archil-02, archil-03
- kveladze-01, kveladze-02, kveladze-03
- hw1-wazowski37-01, hw1-wazowski37-02

**Off-topic interviews (excluded from evidence base):** nikoloz-02, nikoloz-03

---

## What This Affinity Map Changes About Our Original Problem Statement

The Lab 2 problem statement was directionally correct but missed three things the data made obvious:

1. **The pain has an integrity/identity dimension**, not just a time-and-grades dimension. (Cluster E.)
2. **The "workaround" is not a single thing** — it is a *succession* of failed tools that grinds students into learned helplessness. (Cluster C.)
3. **The problem is partly distributed across groups**, with one person absorbing the coordination cost for everyone. (Cluster F.)

These findings are carried into `patterns-analysis.md` and `final-problem-statement.md`.
