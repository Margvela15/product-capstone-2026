# Event Schema

**Team:** KIU Capstone Team  
**Product:** KIU Nexus  
**Date:** 2026-05-04  
**Version:** 1.0  
**Status:** Blueprint (instrumentation code written in Lab 6)

---

## Naming Convention

All events follow this rule without exception:

```
object_action (snake_case, past tense)
```

---

## North Star Metric

> Weekly critical academic updates acknowledged per active user

**Activation event that drives NSM:** `critical_update_acknowledged`

---

## Universal Properties

Every event automatically includes these properties. Do not repeat them in individual event definitions.

| Property | Type | Description |
|----------|------|-------------|
| `user_id` | string (UUID) | System-generated user identifier. Never an email address. |
| `timestamp` | ISO 8601 datetime | When the event fired. Always include timezone (Z for UTC). |
| `session_id` | string (UUID) | The session in which the event occurred. |
| `platform` | enum: web | MVP is web only in Lab 6. |

---

## Event Definitions

### ACQUISITION

---

#### `user_signup_started`

**AARRR Stage:** Acquisition  
**Description:** User starts account creation flow.  
**Fires when:** User opens the signup screen from landing page CTA.  
**NSM connection:** None -- acquisition only.

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `signup_method` | enum: email, google | Yes | Selected registration method | `"google"` |
| `referral_source` | string | No | Source campaign if present | `"class_group_link"` |

---

#### `user_signup_completed`

**AARRR Stage:** Acquisition  
**Description:** User creates account successfully.  
**Fires when:** Authentication succeeds and dashboard loads.  
**NSM connection:** Indirect -- user can only acknowledge updates after signup.

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `signup_method` | enum: email, google | Yes | Registration method used | `"email"` |
| `time_to_complete_seconds` | integer | Yes | Time from signup start to completion | `52` |

---

### ACTIVATION

---

#### `updates_digest_viewed`

**AARRR Stage:** Activation  
**Description:** User opens prioritized weekly digest of academic updates.  
**Fires when:** Digest screen renders with at least one triaged item.  
**NSM connection:** Indirect -- this is the step before acknowledgement.

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `critical_items_count` | integer | Yes | Number of critical updates shown | `3` |
| `high_items_count` | integer | Yes | Number of high-priority updates shown | `4` |
| `digest_window_days` | integer | Yes | Forecast window size used | `7` |

---

#### `critical_update_acknowledged`

**AARRR Stage:** Activation  
**Description:** User confirms they understood and accepted a critical update. This is the first clear value moment.  
**Fires when:** User taps "Acknowledge and Add to Plan" on critical update detail.  
**NSM connection:** This event directly drives the NSM. Each firing increments weekly acknowledged critical updates for the user.

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `update_id` | string (UUID) | Yes | Canonical update identifier | `"upd_9f2a11"` |
| `source_platform` | enum: moodle, teams, messenger, discord, whatsapp | Yes | Platform where the update originated | `"teams"` |
| `update_type` | enum: deadline, format_change, quiz_announcement, file_update | Yes | Classified critical update category | `"format_change"` |
| `hours_before_due` | integer | No | Hours remaining until due time, if known | `31` |
| `is_first_acknowledgement` | boolean | Yes | True when this is the user's first acknowledgement event | `true` |

**Example payload:**
```json
{
  "event_name": "critical_update_acknowledged",
  "user_id": "user_abc123",
  "timestamp": "2026-05-04T17:05:12Z",
  "session_id": "sess_912dd1",
  "platform": "web",
  "update_id": "upd_9f2a11",
  "source_platform": "teams",
  "update_type": "format_change",
  "hours_before_due": 31,
  "is_first_acknowledgement": true
}
```

---

### RETENTION

---

#### `weekly_review_completed`

**AARRR Stage:** Retention  
**Description:** Returning user completes weekly triage review session.  
**Fires when:** User finishes digest review and clears all critical cards for that week.  
**NSM connection:** Indirect -- sustained review frequency supports sustained NSM performance.

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `critical_items_cleared` | integer | Yes | Number of critical items acknowledged in session | `2` |
| `review_duration_seconds` | integer | Yes | Time spent in weekly review | `428` |
| `days_since_last_review` | integer | Yes | Gap from prior weekly review | `7` |

---

### REFERRAL

---

#### `invite_sent`

**AARRR Stage:** Referral  
**Description:** User sends invitation to teammate.  
**Fires when:** Invite link is generated and send action confirmed.  
**NSM connection:** None -- referral only.

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `invite_method` | enum: link_copy, messenger, whatsapp, discord | Yes | How invite is shared | `"messenger"` |
| `course_count_selected` | integer | No | Number of courses selected for shared setup | `3` |

---

### REVENUE (if applicable)

---

#### `subscription_started`

**AARRR Stage:** Revenue  
**Description:** User starts paid subscription plan.  
**Fires when:** Payment confirmation succeeds and premium features unlock.  
**NSM connection:** Not applicable for MVP -- no paid tier required in Lab 5/6.

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `plan_name` | string | Yes | Activated pricing plan | `"pro_monthly"` |
| `amount_usd` | float | Yes | Charged amount in USD | `4.99` |

---

## Event Summary Table

| Event Name | AARRR Stage | Priority | NSM Driver |
|-----------|-------------|----------|-----------|
| `user_signup_started` | Acquisition | Must | No |
| `user_signup_completed` | Acquisition | Must | No |
| `updates_digest_viewed` | Activation | Must | Indirect |
| `critical_update_acknowledged` | Activation | Must | Yes |
| `weekly_review_completed` | Retention | Must | Indirect |
| `invite_sent` | Referral | Should | No |
| `subscription_started` | Revenue | If applicable | No |

**Total events:** 7  
**Must-have events:** 5  
**Should-have events:** 1

---

## Privacy Confirmation

Confirm that no event in this schema captures PII:

- [x] No email addresses in any event property
- [x] No user names or display names in any event property
- [x] No phone numbers in any event property
- [x] No physical addresses in any event property
- [x] No payment card details in any event property
- [x] All user identification uses system-generated UUIDs only

**Schema reviewed by:** Giorgi Papidze on 2026-05-04

---

## Instrumentation Notes for Lab 6

This is the blueprint only. In Lab 6, you will write the actual code to fire these events in your Google AI Studio app.

For each event, note where in the application flow it fires:

| Event Name | Where in Code | Frontend or Backend |
|-----------|--------------|-------------------|
| `user_signup_started` | Signup route mount in onboarding page | Frontend |
| `user_signup_completed` | Auth success callback after account creation | Backend |
| `updates_digest_viewed` | Digest page initial render after data load | Frontend |
| `critical_update_acknowledged` | Acknowledge button handler after write success | Backend |
| `weekly_review_completed` | Weekly review completion action handler | Frontend |
| `invite_sent` | Invite dispatch endpoint success callback | Backend |
| `subscription_started` | Payment webhook success handler | Backend |

---

## Analytics Tool Selection

Which tool will you use to receive and store your events?

- [x] Mixpanel (best for funnel analysis)
- [ ] Amplitude (best for retention curves)
- [ ] PostHog (best for self-hosted, privacy-conscious products)
- [ ] Google Analytics 4 (best for web-only MVPs)

**Our choice:** Mixpanel  
**Reason:** It provides clear funnel and conversion tracking for digest view to critical acknowledgement, which is central to our NSM.  
**Free tier limit:** 20M events per month

---

## Change Log

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-05-04 | 1.0 | Initial schema blueprint | KIU Capstone Team |

---

*Event Schema | KIU Capstone Team | CS-PD-2026 | Spring 2026*
