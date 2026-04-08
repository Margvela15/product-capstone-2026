# HW1 Individual Interview Log 02 — wazowski37

## Interview Metadata

| Field | Value |
|------|------|
| Pseudonym / ID | TS-3CS |
| Role | Third-year CS student at KIU, on a project team for Web Development course |
| Interview date | 2026-04-05 |
| Interview duration (minutes) | 41 |
| Interview format | In-person, KIU cafeteria |
| Interviewer | Giorgi Papidze (wazowski37) |
| How recruited | A classmate from my Databases course introduced me to him as "the guy who almost failed Web because he missed a Teams post." I asked TS directly if he would talk to me about how he keeps track of his courses. I told him I was working on a research project for Product Development class — I did not describe any solution. |

---

## ICP Fit Assessment

ICP: third-year KIU CS students juggling multiple project-heavy courses where instructors split information across Moodle, Teams, and informal chats.

TS-3CS is a strong fit, and arguably a *more* extreme fit than my first interviewee:
- Six courses this semester. Three involve team projects with intermediate deliverables (Web Development, OOP, Software Engineering).
- Confirmed that two of his professors *only* post on Moodle, one *only* in Teams, and the rest mix all three. One professor's Teams channel has subchannels per project group, which TS described as "another platform inside the platform."
- He has actually suffered a documented grade penalty this semester from missing a cross-platform announcement, which is the exact failure mode our problem statement describes. He is not hypothetical — he is the case study.

**Verdict:** Strong ICP fit. He is exactly who we wrote the problem statement for.

---

## Verbatim Quotes

### Quote 1
**Context:** I asked him to tell me about the incident his classmate had mentioned to me.

> "The professor moved the deadline two days earlier and posted it only in the Teams channel for project groups. I'm in that channel but I had muted it because of the noise. I found out the morning after."

**What this tells us:** The information existed, in a place he had access to, in a channel he was a member of. The failure was *attention bandwidth*, not access. Muting was a rational response to noise, and it cost him points. The system punished him for a sensible decision.

---

### Quote 2
**Context:** I asked him what he did about it after.

> "I unmuted everything for like three days and then I muted it again because my phone wouldn't stop. There is no in-between."

**What this tells us:** Notification settings on Teams/Messenger are binary — overwhelming or silent. Students cycle between both extremes within the same week. There is no functional "important things only" mode in their workflow, and they know it.

---

### Quote 3
**Context:** I asked how much time he spends each week just *figuring out what to do*, before doing it.

> "Maybe 40 minutes a day? More on Sundays. Sundays I sit down and try to make a list of what is due, and it takes like an hour, and the list is wrong by Tuesday."

**What this tells us:** This is a quantified, recurring time cost — roughly 4–5 hours per week of pure overhead, plus the cost of the list going stale. The Sunday ritual is a workaround, and he himself describes it as failing within two days.

---

### Quote 4
**Context:** I asked whether anyone in his project group has a better system.

> "My groupmate keeps a Notion page. He shares it with us. Half the time it's not updated and we all pretend it is."

**What this tells us:** Even when *one* person tries to centralize, the burden of maintaining it sinks the system. Everyone defers to the centralizer, the centralizer falls behind, and the social cost of pointing it out is too high to enforce updates. This is the same failure mode I saw with LB-3CS and Google Calendar — manual aggregation does not survive the semester.

---

### Quote 5
**Context:** I asked, near the end, what he would actually pay for. I framed it as "if a magic version existed."

> "I wouldn't pay money. I have no money. I would let it read all my chats and Moodle and everything if it just told me 'these three things are due this week, in this order, with these files.' I wouldn't even check if it was right at first."

**What this tells us:** Two things, both important. First, the willingness to grant *broad data access* in exchange for cognitive offload is high — privacy is not the primary friction we should optimize for in the student segment. Second, his trust ramp ("I wouldn't even check if it was right at first") suggests that the cost of *verifying* a tool is itself a barrier, which means accuracy from day one matters more than features.

---

### Quote 6
**Context:** I asked what he did the night he found out about the missed deadline.

> "I emailed the professor and I lied. I said I had a family thing. He gave me twelve hours. I worked the whole night. I got the points but I felt like a loser."

**What this tells us:** The pain has a *moral* dimension I had not anticipated. It is not only about lost grades and lost time. Students compromise their integrity to recover from these failures, and they remember it. The emotional residue is a hidden cost of the problem we did not capture in the original problem statement.

---

### Quote 7
**Context:** A spontaneous comment, not in response to a direct question. He volunteered it after Quote 6.

> "Honestly the worst part is that this happens to everyone and we all act like it's normal."

**What this tells us:** This is the same observation LB-3CS made independently in my first interview ("nobody has it figured out"). Two students, recruited separately, used nearly the same words. That is the strongest pattern signal I have personally collected.

---

## Problem Exploration Narrative

TS was the most articulate interviewee I have spoken to so far, and the conversation went almost twice as long as I had planned because he kept volunteering specifics without being asked. The interview started off slowly — he was guarded for the first ten minutes, probably because he had been introduced to me with a story about his own failure and was not sure what I was going to do with it. Once I asked about his Sunday ritual instead of about the failure itself, he relaxed, because the Sunday ritual was something he was *proud* of having tried, even if it does not work.

The Sunday ritual story (Quote 3) is, I think, the most analytically valuable thing in this entire log. He sits down once a week and spends an hour assembling a list of his obligations. By Tuesday morning the list is wrong, because professors have posted updates in three different places that the list-making process did not capture. He knows the list goes stale. He makes it anyway, because the alternative is starting the week blind. This is a person performing a workaround that he himself does not believe in, week after week, because no better option exists. From a problem-validation standpoint, that is gold. People do not maintain rituals they think are useless — they maintain them because the absence of the ritual is even worse. The pain has to be enormous to sustain a behavior the person knows is failing.

The notification story (Quote 1, Quote 2) opened up something the team had not fully appreciated in our Lab 2 problem statement. We had framed the problem as *information is scattered across platforms*. TS reframed it for me: the information is not just scattered, it is *drowning in low-value noise within each platform*. Even if you are subscribed to the right channel, the signal-to-noise ratio is so bad that muting is rational, and muting is what gets you in trouble. The problem is not really discovery — it is *triage*. The student does not need to know that 200 things were posted today. The student needs to know which 3 of those 200 things will affect their grade in the next 7 days.

The most uncomfortable moment of the interview was the email-the-professor story (Quote 6). I almost did not include it, because TS clearly regretted telling me, and I spent a minute reassuring him about pseudonymization. But it belongs here because it changes what we are actually optimizing against. Up to this point, I had been quietly modeling the cost of the problem as *lost grade points + lost time*. TS revealed a third axis: *integrity cost*. Students lie to recover from these failures, and the lying weighs on them. If our solution prevents even one of those moments per semester, the value is not just in grades — it is in not having to be a person who emails a professor with a fake family emergency. That is a stronger story than "our app saves you 4 hours a week," and it came directly from a real interview, not from our team's imagination.

Finally, the willingness-to-pay question (Quote 5) was the only place where I let myself drift toward solution-talk, and even then I tried to keep the framing on his behavior rather than on a feature list. His answer surprised me on two fronts. He has no money — fine, expected for a student. But he was willing to surrender broad data access (Moodle, chats, "everything") with almost no negotiation, and his framing of trust ("I wouldn't even check if it was right at first") suggested he is so exhausted by the current situation that he is ready to outsource verification to anything that looks competent. That is a dangerous level of trust to be granted, and it tells me the *responsibility* on whatever we build is high — being wrong even once early on would burn the trust permanently, because students are pre-conditioned to expect tools to fail them.

---

## Mom Test Compliance Check

### Moment 1 — A failure
Quote 5 is the moment I broke Mom Test discipline. I asked him what he would "pay for" in a "magic version" of a solution. I knew while the words were leaving my mouth that I was asking a hypothetical-future question, and the Mom Test is explicit that hypothetical-future answers are unreliable. The reason I asked anyway was that I felt the conversation winding down and I wanted "something concrete on willingness to pay." That was a bad reason. His answer turned out to be useful in spite of the question, but only because he immediately grounded it in concrete behavior ("let it read all my chats"). **What I would do differently:** instead of "what would you pay for," I should have asked, "have you ever paid for or installed any tool to help with this, and what happened?" That converts the question from a hypothetical into a behavioral history, which is much harder to fake and much more diagnostic.

### Moment 2 — A success (worth keeping)
After Quote 1, when he told me about the muted Teams channel, my instinct was to say "yeah that's a notification-overload problem, totally." I caught myself and instead asked, completely neutrally, "Walk me through what you did the next morning when you found out." That single question is what produced Quote 6 — the email-the-professor story. If I had jumped to interpretation, I would have closed the door on the most important moment of the entire interview. **What I would do more of:** when an interviewee tells me what went wrong, never react with a label or a theory. Just ask what happened *next*. The next-step question is almost free to ask, and it consistently produces the most valuable material in the conversation.

---

## Personal Reflection

Two interviews in, the thing that has surprised me the most is how *similar* people sound when you talk to them in private. LB-3CS told me "nobody has it figured out, some people just stress less." TS-3CS told me "this happens to everyone and we all act like it's normal." Two students, no contact between them, recruited through different channels, using almost the same sentence to describe the same thing. That is the moment I stopped thinking of our team's problem statement as a guess and started thinking of it as a description.

What changed in my thinking after this specific interview is the dimensionality of the pain. I came in modeling cost as time + grade points. I am leaving with three axes: time, grades, and integrity. The integrity cost is the one I cannot stop thinking about, because it is the cost we cannot fix retroactively. You can earn back two grade points in the next assignment. You cannot un-lie to your professor. If our team's eventual solution prevents even a small number of those panic-moment lies per semester, that is a real and quotable user benefit, and it is one I would never have predicted from inside our team meetings.

The other thing this interview taught me, less comfortably, is how much trust students are willing to extend out of pure exhaustion. TS told me he would let a tool read everything he has access to, and he would not even verify the output at first. As the Tech Lead on this team, I have to take that seriously in the opposite direction: that level of trust is a responsibility, not a permission. If we build something and ship it half-broken, we are not just disappointing users — we are exploiting the desperation of people who have given up on verifying. That changes how I think about quality bars for whatever the v0 of our product turns out to be. It cannot be a prototype that we test on classmates and then iterate on. The first version that touches a real student's real coursework needs to work, because the user will not catch our mistakes for us.

I think the next interview I do, I want to deliberately recruit someone who does *not* fit the ICP perfectly — maybe a second-year, or a CS student who only takes lecture-based courses this semester — to see whether the pattern still appears. If it does, our ICP is too narrow. If it does not, our ICP is exactly right and the team can stop second-guessing it.

---

**Committed by:** Giorgi Papidze (wazowski37)
**Date:** 2026-04-05
