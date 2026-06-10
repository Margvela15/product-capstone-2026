# KIU Nexus Pitch Deck Draft

## Slide 1: Problem

ICP: A third-year KIU CS student enrolled in 3+ project-based courses who must monitor Moodle, MS Teams, Messenger, Discord, and WhatsApp to avoid missed deadlines.

Problem statement: They spend 30–40 minutes daily sweeping five platforms and still miss professor announcements that cost grades and force panic recovery.

Pain intensity evidence: Discovery interviews show daily sweep rituals, at least one missed deadline per semester, and repeated time wasted on manual platform checks.

Real interview quote:
"I emailed the professor and I lied. I said I had a family thing. He gave me twelve hours. I worked the whole night. I got the points but I felt like a loser."
Source: `01-discovery/interview-logs/hw1-wazowski37-02.md`, Quote 6, 2026-04-05.

---

## Slide 2: Solution

KIU Nexus gives that student one prioritized academic feed so they can see the few deadlines that matter and add them to their weekly plan instantly.

Core user action: The student opens KIU Nexus, sees prioritized critical updates, taps one urgent item, and acknowledges it into a weekly plan.

---

## Slide 3: Why Now

Specific change: KIU professors now publish critical course updates across Moodle, Microsoft Teams, and informal chat groups, making multi-platform academic communication the default at KIU.

Why it matters: This fragmentation is solvable today because the platforms already exist and our product can ingest and triage the exact channels students are already using. The manual sweep is now the failure mode, and KIU Nexus replaces it with a single automated view.

---

## Slide 4: Market Size

SOM: 200 KIU third-year CS students × 8 GEL per month × 12 months = 19,200 GEL ARR.

SAM: 2,000 Georgian CS students in project-heavy programmes × 8 GEL per month × 12 months = 192,000 GEL ARR.

TAM: 300,000 Georgian university students at similar fragmented institutions × 8 GEL per month × 12 months = 28.8 million GEL ARR.

---

## Slide 5: Product

Caption: The KIU Nexus dashboard is designed to surface urgent course announcements from all platforms in one prioritized view with a single "Acknowledge and Add to Plan" action.

Live URL: Pending deployment; internal preview available from the `kiu-nexus` staging branch.

Presenter notes: Show the dashboard wireframe or staging preview. Emphasize that the product is already built in the `kiu-nexus` app, the analytics board is configured, and the core value is replacing the daily manual sweep with one trusted feed.

---

## Slide 6: Traction

Primary traction metric: Pre-launch with Mixpanel dashboard configured; first live user metrics are pending deployment.

Supporting evidence:
- Discovery evidence: 8 on-topic interviews with third-year KIU CS students.
- Product readiness: MVP activation flow and `acknowledge_update` event tracking are implemented in the app.
- GTM plan: messenger group and bridge/student referral channels are defined and ready to launch.

---

## Slide 7: Business Model

We will initially launch KIU Nexus as a free student-facing MVP, then move to a KIU institutional site license for third-year CS cohorts after we prove retention and faculty integration.

Unit economics:
- CAC: $6.33
- LTV: $25.80
- LTV:CAC: 4.1 : 1
- Payback: ~1 month

---

## Slide 8: Competitive Advantage

Moodle: necessary but not sufficient; does not aggregate Teams, Messenger, Discord, and WhatsApp.

Microsoft Teams: noisy collaboration channel, not a deadline triage solution.

Google Calendar / Notion: require manual maintenance and become "extra homework."

Discord: informal coordination only; no institutional announcements.

Defensibility: switching costs from student habit formation plus planned faculty broadcast integrations, supported by the moat hypothesis in `06-strategy/moat-statement.md`.

---

## Slide 9: Go-to-Market

Channel 1: KIU Messenger groups. Immediate organic fit; share onboarding demos and ask bridge students to invite teammates.

Channel 2: Bridge / asker student referrals. Early users are natural coordinators who can spread the product within project groups.

Channel 3: Discord and student communities. Complementary reach into active technical student networks.

4-week goals: 100 visitors, 40 signups, 20 activations, and 30% of active users inviting a teammate.

---

## Slide 10: Ask

Raising 60,000 GEL at 250,000 GEL pre-money to deploy KIU Nexus to 200 students, validate retention, and secure the first faculty announcement pilot.

We also need support from KIU IT and a professor partner willing to broadcast one critical announcement through KIU Nexus for Fall 2026.
