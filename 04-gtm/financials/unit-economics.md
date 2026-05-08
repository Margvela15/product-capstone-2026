# DormSync Unit Economics Analysis

**Product:** DormSync  
**Date:** May 2026  
**Owner:** Nikoloz Jvebenava

---

## 1. Lifetime Value (LTV)

DormSync is currently a free MVP, so we use a value proxy instead of direct revenue. The LTV estimate is based on the per-user value of time saved, conflict reduction, and productivity gains from shared chore coordination.

- Proxy metric: value of time saved + avoided conflict cost
- Value estimate per activated user per month: $7.00
- Expected active lifetime for early KIU dorm users: 4 months

> Proxy LTV = monthly value proxy × expected lifetime


## 2. Inputs

The model uses realistic student startup assumptions for early-stage campus growth.

| Input | Value | Notes |
|------|-------|-------|
| Monthly value proxy per activated user | $7.00 | Equivalent to ~30 minutes of student time saved at $14/hour, plus conflict reduction value |
| Gross margin assumption | 85% | High margin because product is digital and free to use with low variable costs |
| Average lifetime | 4 months | Early-stage dorm cohort engagement window |
| Hosting cost per active user per month | $0.30 | Shared Firebase / Vercel / low-code backend expenses |
| Support and ops cost per active user per month | $0.25 | Student labor for onboarding, bug triage, and message handling |
| Total variable cost per active user per month | $0.55 | Infrastructure + support |
| Value-adjusted gross profit per user per month | $6.45 | $7.00 - $0.55 |


## 3. Gross margin calculation

Gross margin is measured on the value proxy because DormSync is free.

| Item | Value |
|------|-------|
| Value proxy per active user per month | $7.00 |
| Variable cost per active user per month | $0.55 |
| Gross margin | 92.1% |

**Calculation:** 1 - ($0.55 / $7.00) = 0.921 or 92.1%

This is consistent with an early-stage digital campus tool: once users activate, the marginal cost to serve them is very low.


## 4. Average lifetime estimate

DormSync lifetime is based on dorm residents using the product through a single semester habit window.

- Active engagement horizon: 4 months
- Retention assumptions: 60% month 1, 45% month 2, 35% month 3, 25% month 4
- Weighted active lifetime: 4 months for early cohort planning

This estimate matches an MVP where users are tested during one academic term and the product is not yet deeply embedded.


## 5. Full LTV calculation

| Item | Value |
|------|-------|
| Value proxy per month | $7.00 |
| Average lifetime (months) | 4 |
| Total value proxy per user | $28.00 |
| Variable cost per user over lifetime | $2.20 |
| LTV (value proxy net of variable costs) | $25.80 |

**Calculation:** ($7.00 - $0.55) × 4 = $25.80

This represents the expected value DormSync delivers to one active dorm resident over the MVP lifetime.


## 6. CAC per channel

DormSync uses low-cost campus channels to acquire students. The model tracks three early channels.

| Channel | Spend | Estimated signups | Estimated activated users | CAC per activated user |
|---------|-------|-------------------|--------------------------|-------------------------|
| Instagram / WhatsApp promotion | $180 | 120 | 30 | $6.00 |
| Resident assistant referrals | $120 | 40 | 20 | $6.00 |
| Dorm posters with QR codes | $80 | 30 | 10 | $8.00 |

### Channel assumptions

- Instagram/WhatsApp promotion: targeted KIU dorm student outreach, small paid ad budget and organic shares.
- Resident assistant referrals: incentives for RAs to recommend DormSync in dorm meetings and group chats.
- Dorm posters with QR codes: low-cost print materials and dorm hallway visibility.

**Notes:** Activation rate is lower on physical posters, so CAC is higher in that channel.


## 7. Blended CAC

| Channel | Spend | Activated users | CAC |
|---------|-------|-----------------|-----|
| Instagram / WhatsApp | $180 | 30 | $6.00 |
| RA referrals | $120 | 20 | $6.00 |
| Dorm posters | $80 | 10 | $8.00 |
| **Total** | $380 | 60 | **$6.33** |

**Blended CAC calculation:** $380 / 60 = $6.33 per activated user.

This is an early-stage campus acquisition mix with mostly digital and referral-driven channels.


## 8. LTV:CAC ratio

| Metric | Value |
|--------|-------|
| LTV | $25.80 |
| Blended CAC | $6.33 |
| LTV:CAC ratio | 4.1 : 1 |

**Interpretation:** A 4.1:1 ratio is strong for an early-stage MVP because it shows value proxy significantly exceeds acquisition cost. This suggests the product can scale acquisition before monetization if engagement is maintained.


## 9. Payback period

The payback period measures how long it takes value proxy to cover acquisition cost.

- Monthly net value per user: $6.45
- Blended CAC: $6.33
- Payback period: $6.33 / $6.45 = 0.98 months

**Result:** Approximately 1 month to pay back the CAC in value proxy terms.

This is favorable for an early-stage freemium/campus product because the acquisition investment is recovered within the first month of active use.


## 10. Assumptions and sources

| Assumption | Source / Rationale |
|-----------|--------------------|
| $7.00 monthly value proxy | 30 minutes saved × $14/hour + low conflict reduction value; conservative for student time savings |
| $0.30 hosting cost | Student-scale backend on Vercel / Firebase / Supabase, low per-user cost |
| $0.25 support cost | One part-time student operator for early MVP support and coordination |
| 4-month lifetime | One-semester dorm cohort, early engagement window for testing adoption |
| Instagram/WhatsApp CAC | Paid social reach + organic dorm sharing with targeted campus messaging |
| RA referral CAC | Small incentive budget and high-trust referral source among dorm residents |
| Poster CAC | Printing and design cost spread over low conversion volume |

These assumptions are appropriate for a capstone lab model where value is approximated from student behavior and infrastructure is lightweight.


## 11. Sensitivity analysis

### Scenario table

| Scenario | Monthly value proxy | Lifetime | LTV | CAC | LTV:CAC |
|----------|---------------------|----------|-----|-----|---------|
| Base case | $7.00 | 4 months | $25.80 | $6.33 | 4.1 |
| Conservative | $5.00 | 3 months | $12.90 | $6.33 | 2.0 |
| Optimistic | $10.00 | 5 months | $48.25 | $6.33 | 7.6 |

### Key sensitivities

- If monthly value proxy falls to $5.00, the LTV:CAC ratio drops to roughly 2.0, which is still borderline acceptable for an experiment-stage campus product.
- If average lifetime falls to 3 months, payback remains under 2 months, but long-term scale becomes riskier.
- If dorm poster activation is worse than expected, blended CAC may rise above $7.00; the model should prioritize digital and RA referral channels.

### Stress case

| Input change | Result |
|--------------|--------|
| 50% lower poster activation | Poster CAC rises to $15.00 | Blended CAC increases to $7.60 |
| 20% lower RA referral activation | Blended CAC increases to $6.83 | LTV:CAC drops to 3.8 |
| 30% lower value proxy | LTV falls to $18.06 | LTV:CAC drops to 2.9 |


## 12. Future refinements

- Add actual usage data from early dorm pilots to replace the value proxy with measured engagement outcomes.
- Track retention cohorts by dorm building and channel to refine lifetime and activation assumptions.
- Introduce nominal paid upsell or premium coordination features if the free value proxy remains strong.
- Refine channel CAC with real ad impressions, QR-scan analytics, and RA referral conversion tracking.
- Add a churn model for month-by-month retention instead of a fixed 4-month lifetime.

---

**DormSync Unit Economics | Early-stage MVP financial model | May 2026**