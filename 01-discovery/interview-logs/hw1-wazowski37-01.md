# HW1 Individual Interview Log 01 — wazowski37

## Interview Metadata

| Field | Value |
|------|------|
| Pseudonym / ID | LB-3CS |
| Role | Third-year CS student at KIU |
| Interview date | 2026-04-02 |
| Interview duration (minutes) | 32 |
| Interview format | In-person, KIU library group room |
| Interviewer | Giorgi Papidze (wazowski37) |
| How recruited | Approached after our shared Software Engineering lecture; I asked if she had 30 minutes to talk about how she manages coursework, with no mention of any product idea. |

---

## ICP Fit Assessment

Our target ICP is third-year KIU CS students simultaneously enrolled in multiple project-heavy courses, where instructors distribute information across Moodle, MS Teams, and informal chat groups.

LB-3CS is a strong fit:
- Currently enrolled in 5 courses this semester, 3 of which include team projects with weekly deliverables (Software Engineering, Databases, Web Development).
- Confirmed her professors use a mix of Moodle (assignment uploads), MS Teams (announcements and lecture recordings), and Messenger group chats (informal Q&A and last-minute changes). One instructor also occasionally posts in WhatsApp.
- She is not on any student council or special program — she is a typical third-year, which is exactly the segment we want to learn from before we generalize.

**Verdict:** Strong ICP fit. No reason to discount her data.

---

## Verbatim Quotes

### Quote 1
**Context:** I asked her to walk me through what she did the last time she sat down to start an assignment.

> "I open Moodle first to find the file, then I go to Teams to check if the professor said anything about it, and then I scroll up in the group chat to see if anyone is confused, because usually they are."

**What this tells us:** The "checking" is not one place but a sequential ritual across three apps before any actual work begins. She has internalized this as normal.

---

### Quote 2
**Context:** I asked what happens when something goes wrong.

> "Last week I submitted the homework but I missed that the professor changed the format to PDF in a Teams message. He took two points. Two points for a PDF."

**What this tells us:** Concrete, recent, painful — and the loss came from a platform mismatch, not from misunderstanding the actual content. This is the kind of avoidable cost our hypothesis predicted.

---

### Quote 3
**Context:** I asked what she does to prevent this kind of thing from happening again.

> "Honestly nothing. I just hope someone in the group chat will say something."

**What this tells us:** Her workaround is *other people noticing for her*. That is fragile and not a system. It also matches what NG and DK described in earlier team interviews — the dependence on chat groups as a passive safety net.

---

### Quote 4
**Context:** I asked whether she had ever tried any tool to help with this — calendar, sticky notes, anything.

> "I tried Google Calendar at the start of the semester but I stopped because I had to type everything in manually and I was already tired from copying things from Moodle. It felt like extra homework."

**What this tells us:** She has tried solutions and quit. The friction was *manual data entry*, not lack of awareness. Any solution that requires the student to be the data-entry layer will lose to no solution at all.

---

### Quote 5
**Context:** I asked her, near the end, to describe how she felt during the week before the last big deadline.

> "I wasn't worried about the project. I was worried I was missing something I didn't even know existed. That's the worst part."

**What this tells us:** The pain is not the workload itself — it is the *unknown unknown*. The fear of having missed an announcement is its own cognitive cost, separate from the work.

---

### Quote 6
**Context:** I asked whether her classmates have it figured out better than she does.

> "Nobody has it figured out. Some people just stress less."

**What this tells us:** This is not a skill gap she thinks she alone has. She perceives it as a shared, structural problem — which strengthens the case that the ICP is broader than one struggling student.

---

## Problem Exploration Narrative

LB-3CS arrived to the interview already a little tired — she had come from a Databases lab and mentioned that she still had to "figure out what was due next." That offhand comment ended up being more representative of the problem than anything I asked her directly. Throughout the conversation she returned again and again to the same sequence: open Moodle, switch to Teams, scroll the group chat, and only then begin the actual work. She did not present this as a complaint at first. She described it the way someone describes brushing their teeth — as an unavoidable part of the day.

The cracks showed up when I asked her to tell me about a specific recent incident. The PDF/format story (Quote 2) was the moment her tone shifted from procedural to frustrated. She had done the assignment, she had submitted it on time, and she still lost points because a single message in a single channel had reformatted the requirements. What struck me is that she did not blame the professor and she did not blame herself. She blamed the *fact that the message was in Teams*. That framing — blaming the channel rather than the people — was the first real signal to me that the problem we framed in Lab 2 might actually map to lived experience.

I pushed on workarounds, because in our team discussion we suspected that students must have built something to cope. Her answer was discouraging in a useful way: she had tried Google Calendar, and quit, because the cost of *transcribing* deadlines from Moodle into the calendar exceeded the value of having them there. She used an interesting phrase — "extra homework" — to describe the calendar. That phrase reframed the problem for me. It is not that students need a tool. It is that students need a tool that does not feel like more work than the work it is supposed to organize. Any solution that demands the user become a data-entry clerk will be abandoned within two weeks of the semester starting. LB-3CS proved that with her own behavior.

The most important thing she said came near the end, almost as an aside, about being afraid she was missing something she did not know existed. That single sentence reframed pain intensity for me. I had been mentally measuring pain in lost grade points. She measures it in *background anxiety that runs all semester*. The grade penalty is a discrete event; the anxiety is continuous. Continuous pain is what makes a problem worth solving, because it is what people would actually pay (in money, in attention, in habit change) to make stop. This is the strongest evidence I have personally collected so far that our problem statement is pointing at something real and not just convenient.

---

## Mom Test Compliance Check

### Moment 1 — A failure
About fifteen minutes in, I caught myself asking: *"Wouldn't it be useful if there was one place where all the assignments showed up automatically?"* She nodded and said yes, it would be great. I knew immediately that I had broken Mom Test rule #1 — I had pitched an idea and asked her to validate it. Her "yes" is worthless to me. People say yes to hypothetical things to be polite, especially when the interviewer is a fellow student they will see again next week. **What I would do differently:** instead of describing a hypothetical product, I should have asked her, "When was the last time you wished for something like that, and what did you actually do in that moment?" That keeps the question anchored in her past behavior, where lying is much harder.

### Moment 2 — A success (worth keeping)
When she said her workaround was "honestly nothing, I just hope someone in the group chat will say something" (Quote 3), I resisted the urge to react sympathetically or to suggest a fix. Instead I just asked, "When was the last time someone *did* say something that saved you?" She paused, thought about it, and gave me a concrete story from two weeks ago about a classmate flagging a deadline shift at 11pm. That follow-up turned a vague workaround into a dated, specific event with named people involved — which is exactly the kind of evidence the Mom Test says to hunt for. **What I would do more of:** when an interviewee describes a habit, immediately ask for the most recent specific instance. It costs nothing and it converts opinions into facts.

---

## Personal Reflection

Going into this interview I expected to hear confirmation of what our team had already written in the problem statement — that students lose points because information is scattered. I got that confirmation, but it was not the part of the conversation that changed my thinking. What changed my thinking was the "extra homework" comment about Google Calendar.

Before this interview, I was implicitly assuming that the bottleneck was *awareness* — students do not know what is due, so a tool that shows them what is due solves the problem. After this interview I think the bottleneck is *effort asymmetry*. Students will not invest effort upfront to save effort later, because the upfront effort is concrete and the saved effort is hypothetical. This means our solution space is much narrower than I thought: any solution that requires a student to set it up, configure it, or feed it data is going to lose to the status quo of doing nothing. The product, whatever it ends up being, has to do the ingestion itself, with zero student effort, or it will join Google Calendar in the graveyard of tools KIU students tried for two weeks and abandoned.

The other thing that surprised me was the framing of pain as "background anxiety." As the Tech Lead I had been thinking about this problem in terms of features and integrations. LB-3CS made me realize that the success metric for whatever we build is not "number of deadlines tracked" — it is whether a third-year student stops feeling the low-grade dread of *not knowing what they do not know*. That is a much harder thing to measure, and a much more honest goal.

---

**Committed by:** Giorgi Papidze (wazowski37)
**Date:** 2026-04-02
