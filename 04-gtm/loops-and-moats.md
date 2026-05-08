# Loops and Moats Narrative

**Team:** Undefined Behaviour  
**Product:** KIU Nexus  
**Document version:** 1.0  
**Last updated:** 2026-05-08

---

## 1. Viral Loop Analysis

### Does your product have a viral loop?

**Answer:** Partial

KIU Nexus has an early-stage collaboration loop because bridge/asker students naturally invite teammates into shared academic workflows. The product is not fully viral yet, but coordination behavior creates opportunities for referral-driven growth.

### If yes -- Loop Diagram

```mermaid
graph LR
  A[Student signs up] --> B[Student sees prioritized academic updates]
  B --> C[Student acknowledges update and shares with teammates]
  C --> D[Teammates join KIU Nexus]
  D --> A


K-Factor Calculation
K = invitations sent per user × conversion rate of invitations

Invitations per user (i): 0.8

Source: Early interview evidence suggested that bridge/asker students frequently coordinate updates with at least one teammate.

Conversion rate of invitations (c): 35%

Source: Estimated based on small internal prototype tests and expected conversion inside trusted student groups.

K-factor: K = 0.8 × 0.35 = 0.28

Interpretation
K value	Meaning
K < 1	Loop reduces effective CAC but does not generate compounding growth on its own
K = 1	Steady-state replacement; loop sustains user count
K > 1	Compounding viral growth

Our K is 0.28, which means:
The referral loop lowers acquisition cost but is not strong enough to create self-sustaining viral growth yet. Sprint 2 focuses on improving invite behavior and collaboration features to increase this value.

2. Network Effects Analysis
Does your product have network effects?

Answer: Yes

If yes -- What type?

Our type: Local + Data network effects

Why this type fits:

KIU Nexus becomes more useful when more students from the same academic environment use it because coordination, shared updates, and acknowledgement visibility improve. Over time, aggregated update and prioritization data can also improve filtering and workflow relevance for future students.

Threshold
Critical mass:

50 active KIU Computer Science students.

Reasoning:

Below that level, students may not see shared collaboration activity or enough relevant academic coordination. Once enough classmates use the system, users consistently benefit from shared update awareness and reduced manual communication overhead.

Strategy to reach the threshold

The team will focus on one concentrated user segment first: third-year KIU Computer Science students. Messenger groups and bridge/asker students will be used to onboard tightly connected academic clusters rather than spreading acquisition too broadly.

3. Defensibility Analysis

What protects you against a copycat with 10x your resources?

Possible moats
Brand: Weak for now
Data: Weak but growing
Switching costs: Weak
Network effects: Weak to moderate
Distribution lock-in: Weak
Regulatory: None
Speed of iteration: Strong
Our actual moat (today)

The current moat is speed and focus. KIU Nexus is built specifically around the fragmented workflow problems of KIU students rather than trying to be a generic productivity platform.

Our planned moat (12 months out)

The planned moat is a combination of:

academic coordination network density
workflow-specific behavioral data
strong positioning inside KIU student communities
integration convenience across fragmented academic platforms
4. Riskiest Assumption

If you had to bet your team's grade on one number being wrong, which one would you pick, and why?

Riskiest assumption:

Students will consistently acknowledge critical updates instead of continuing manual platform checking.

Current value in our model:

60% activation rate.

Why it is the riskiest:

The entire growth and retention strategy depends on students trusting KIU Nexus enough to replace part of their existing manual workflow. If activation is significantly lower, the product may not provide enough perceived value to sustain retention or referral growth.

How we will validate it in Sprint 2:

The team will run usability tests and track Mixpanel activation events between May 8 and May 21 to measure whether students complete the acknowledgement flow during onboarding and early use.

5. Summary Statement

KIU Nexus acquires users through the same academic communities where fragmented coordination already happens: Messenger groups, Discord communities, and bridge/asker student networks. The product has an early-stage collaboration loop because students naturally invite teammates into shared academic workflows. Our current moat is speed, focus, and workflow-specific understanding of KIU student pain points, while long-term defensibility comes from network density and academic coordination data. Our riskiest assumption is whether students will trust the acknowledgement workflow enough to replace manual checking behavior, and Sprint 2 analytics will directly validate that assumption.

Filed by:
Archil Margvelashvili
Giorgi Papidze
Nikoloz Jvebenava
Giorgi Kveladze