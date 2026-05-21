# Mixpanel Analytics — KIU Nexus

## Project

- Project name: KIU Nexus (Capstone 2026)
- Project token: stored in `kiu-nexus/.env.local` as `NEXT_PUBLIC_MIXPANEL_TOKEN` (gitignored)

## Dashboard URL

<!-- TODO: replace with the actual Mixpanel dashboard URL once it's created. -->
https://mixpanel.com/project/<YOUR_PROJECT_ID>/view/<YOUR_BOARD_ID>

## Events emitted by the app

| Event              | Fired from              | Properties                                              |
| ------------------ | ----------------------- | ------------------------------------------------------- |
| `$pageview`        | All pages (autotrack)   | url, referrer, title                                    |
| `acknowledge_update` | `/dashboard` (client) | `update_id`, `course_code`, `type`, `source`            |

`identify(user.id)` is called from `MixpanelProvider` on Supabase auth state change so all subsequent events are attributed to the signed-in user.

## How to set this up

1. Log in to https://mixpanel.com (create a free account if you haven't).
2. Create a new project named **KIU Nexus**.
3. Open Project Settings → Project Token. Copy it.
4. Paste it into `kiu-nexus/.env.local` as `NEXT_PUBLIC_MIXPANEL_TOKEN=...`.
5. Restart the dev server (`npm run dev`) or re-deploy on Vercel.
6. Visit `/dashboard` and click "Acknowledge and Add to Plan" on any card.
7. In Mixpanel, go to **Events** → live view. You should see `acknowledge_update` appear within a few seconds.
8. Create a board with at least one chart (e.g. "acknowledge_update over time"). Copy that board's URL and paste it above replacing the TODO line.
