# Team Development Process Map

**Team:** KIU Capstone Team  
**Product:** KIU Nexus  
**Last Updated:** 2026-05-04  
**Version:** 1.0  
**Primary Author:** Giorgi Kveladze

---

## Overview

This document describes how KIU Nexus work moves from idea to deployed increment during the sprint arc. It is the operating agreement for Lab 6 onward: every story must be refined, assigned, reviewed, and accepted through this process before it is considered done.

---

## Scrum Roles

| Role | Name | Responsibilities |
|------|------|-----------------|
| Product Owner | Giorgi Papidze | Owns and orders the backlog. Accepts or rejects sprint increments. Confirms each story maps to interview evidence and the activation goal. |
| Scrum Master (Sprint 1) | Giorgi Kveladze | Facilitates standups, planning, review, and retrospective. Tracks blockers and keeps AI usage documentation current. |
| Technical Architecture Owner | Archil Margvelashvili | Owns architecture package, implementation tradeoffs, and technical readiness for Sprint 1. |
| Risk and Experiment Owner | Nikoloz Jvebenava | Owns risk register, experiment plan, and evidence collection for early validation. |

---

## Story Lifecycle

A story moves through these states. A story cannot skip states.

```text
Backlog -> Refined -> Sprint Backlog -> In Progress -> In Review -> Done
```

| State | Meaning | Who Sets It |
|-------|---------|------------|
| Backlog | Story idea exists but may not have AC, points, or evidence yet | Product Owner |
| Refined | Story has user story, evidence, points, AC, assignee candidate, and AI tool note | Product Owner after team review |
| Sprint Backlog | Story is committed to current sprint and assigned to a developer | Scrum Master after Sprint Planning |
| In Progress | Developer has started implementation | Assigned developer |
| In Review | PR or review artifact is ready for human review | Assigned developer |
| Done | DoD is complete, Product Owner has accepted AC, and code/docs are merged | Product Owner |

---

## Definition of Done

A story is Done when every item below is confirmed:

- [ ] Acceptance criteria are demonstrably met
- [ ] Product Owner confirms the story still supports the activation path or sprint goal
- [ ] Code reviewed by at least one team member who is not the original author
- [ ] Pull request merged to `main` via GitHub PR for sprint code
- [ ] If AI-generated: non-obvious AI-generated logic is annotated with comments
- [ ] If AI-generated: `docs/ai-usage-log.md` entry records tool, task, files changed, accepted/modified/discarded output, and human review notes
- [ ] Feature works in deployed environment, not only locally
- [ ] Analytics behavior matches `03-build/analytics/event-schema.md` when the story touches tracked events
- [ ] No known new bug remains open against the story

A story that is "done except deployment," "done except review," or "done except analytics" is not Done.

---

## AI Review Process

All AI-generated output must pass human review before it is committed.

### Review Steps

1. **Generate:** Developer uses the AI tool assigned in `03-build/roadmap/sprint-1-plan.md`.
2. **Read every line:** Developer reads all generated code or text before accepting it.
3. **Check against AC:** Developer verifies each acceptance criterion can pass with the generated output.
4. **Check evidence fit:** Product Owner confirms the feature is still tied to discovery evidence, not invented scope.
5. **Security and privacy check:** Reviewer confirms no PII is logged, stored, or sent to analytics.
6. **Annotate:** Developer adds comments for non-obvious generated logic.
7. **Log:** Developer adds a `docs/ai-usage-log.md` entry before review.
8. **Review:** Human reviewer checks functionality, readability, analytics behavior, and the AI log.

### AI Tool Assignment

| Story Type | Default AI Tool | Why | Review Owner |
|-----------|----------------|-----|--------------|
| UI screens and dashboard components | Google Stitch + Cursor | Stitch gives high-fidelity UI direction; Cursor adapts it into project files | Product Owner + technical reviewer |
| Multi-file app logic | Claude Code | Useful for coordinated changes across auth, state, and routing | Technical Architecture Owner |
| AI parsing or classification behavior | Google AI Studio | Best place to prototype prompts before integration | Risk and Experiment Owner |
| Boilerplate, repetitive patterns, small edits | Cursor | Fast for local edits with human oversight | Assigned developer |

Tool changes are allowed, but the developer must document the change in the AI usage log.

---

## Branching and Pull Request Process

### Branch Naming

```text
feature/[story-id]-[short-description]
fix/[story-id]-[short-description]
docs/[lab-or-story]-[short-description]
```

Examples:

```text
feature/s1-03-prioritized-dashboard
feature/s1-04-acknowledge-update
docs/lab-6-process-map
```

### PR Process

1. Developer opens a PR to `main` when the story reaches In Review.
2. PR title format: `[Story ID] Short description`.
3. PR description must include:
   - Story ID and full user story
   - AC checklist with pass/fail evidence
   - AI tool used, or "No AI used"
   - Screenshots or short demo notes for UI changes
   - Analytics event notes if tracked events changed
4. One team member reviews and approves.
5. Product Owner confirms AC are met.
6. Reviewer merges after approval.

### Direct Push Exception

Lab documentation commits may be pushed directly only when the team is intentionally separating ownership commits for a lab submission. Sprint implementation code should use PR review.

---

## Standup and Blocker Process

**Cadence:** Monday, Wednesday, Friday at 21:00 asynchronously in GitHub Issues sprint board comments.

**Standup format:**

```text
Yesterday:
Today:
Blocker:
AI note:
```

**Blocker rule:** If a blocker lasts more than 24 hours, Giorgi Kveladze labels the story `blocked`, pings the team in Messenger, and asks the Product Owner whether to reduce scope or reassign the story.

---

## Artifact Ownership

| Artifact | Owner | Review Required |
|----------|-------|-----------------|
| Product roadmap | Giorgi Papidze | Team read-through before Lab 6 submission |
| Sprint 1 plan | Giorgi Kveladze | Product Owner confirms AC and assignments |
| Process map | Giorgi Kveladze | Team confirms workflow is realistic |
| System design | Archil Margvelashvili | Technical reviewer + Product Owner |
| Tech stack | Archil Margvelashvili | Team confirms no TBD choices remain |
| Risk register | Nikoloz Jvebenava | Technical Architecture Owner checks mitigations |
| Experiment plan | Nikoloz Jvebenava | Product Owner confirms real user channel |

---

## How Work Gets Accepted

1. Developer marks story In Review.
2. Reviewer checks implementation against AC.
3. Product Owner checks user value and activation alignment.
4. Scrum Master checks process items: AI log, review notes, no blockers.
5. Story moves to Done only after all DoD items are complete.

---

## Change Log

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-05-04 | 1.0 | Initial process map | Giorgi Kveladze |

---

*Process Map | KIU Capstone Team | CS-PD-2026 | Spring 2026*
