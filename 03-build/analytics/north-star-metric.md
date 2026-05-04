# North Star Metric

**Team:** KIU Capstone Team  
**Product:** KIU Nexus  
**Date:** 2026-05-04  
**Version:** 1.0

---

## Our North Star Metric

```
Weekly critical academic updates acknowledged per active user
```

**Written out:**

> Weekly critical academic updates acknowledged per active user

---

## Why This Metric

**Question 1: What is the core action a user takes that proves they got value from our product?**

The core value action is not simply opening the app or viewing a feed. The user gets value when they explicitly acknowledge a critical academic update after it has been triaged and surfaced from fragmented channels. This action proves the Unified Academic Command Center prevented a hidden requirement from being missed and reduced the daily sweep ritual described in discovery.

**Question 2: Can we measure it? Is it a discrete, countable event?**

Yes. The event `critical_update_acknowledged` fires once when a user marks a surfaced critical item as read and understood. It is a discrete event with a clear trigger and can be counted by `user_id` per 7-day window.

**Question 3: Does it change when our product gets better or worse?**

Yes. If triage quality improves and critical items are surfaced clearly, acknowledgements per active user increase. If a bad release introduces noisy or missing prioritization, users will trust the system less and acknowledgement volume will drop because users return to manual sweeps.

---

## What Our NSM Is Not

| Alternative Metric | Why We Rejected It |
|-------------------|--------------------|
| Total signups | Measures acquisition, not delivered value. |
| Daily active users | Too broad; does not confirm students handled critical updates. |
| Notifications sent | Activity metric; a high number can indicate noise, not value. |
| Platform sync jobs completed | Internal system metric, not user outcome. |
| Time spent in app | More time may mean confusion and does not represent success. |

---

## Connection to AARRR

- [ ] Acquisition
- [x] Activation (most NSMs live here)
- [ ] Retention
- [ ] Referral
- [ ] Revenue

**Stage:** Activation

**Why:** Acknowledging a surfaced critical update is the first moment users experience real relief from fragmented communication.

---

## Connection to Prototype

**Screen name:** Critical Update Detail

**What the user does on that screen:** Taps "Acknowledge and Add to Plan"

**Event that fires:** `critical_update_acknowledged`

**How that event feeds the NSM:** Each `critical_update_acknowledged` event increments the weekly count for the related `user_id`; dashboard aggregation computes acknowledged updates per active user.

---

## Team Sign-Off

All team members reviewed and agreed on this NSM:

| Name | Role | Agreement |
|------|------|-----------|
| Archil Margvelashvili | Program Lead | ☑ Agreed |
| Nikoloz Jvebenava | Discovery Lead | ☑ Agreed |
| Giorgi Papidze | Tech Lead | ☑ Agreed |
| Giorgi Kveladze | Support | ☑ Agreed |

**Date agreed:** 2026-05-04

---

## Change Log

| Date | Change | Reason |
|------|--------|--------|
| 2026-05-04 | Initial definition | Lab 5 |

---

*North Star Metric | KIU Capstone Team | CS-PD-2026 | Spring 2026*
