import mixpanel from "mixpanel-browser"

let initialized = false

export function initMixpanel() {
  if (initialized || typeof window === "undefined") return
  mixpanel.init((process as any).env.NEXT_PUBLIC_MIXPANEL_TOKEN!, {
    api_host: "https://api-eu.mixpanel.com",
    track_pageview: true,
    persistence: "localStorage",
  })
  initialized = true
}

export function track(event: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return
  initMixpanel()
  mixpanel.track(event, properties)
}

export function identify(userId: string, traits?: Record<string, unknown>) {
  if (typeof window === "undefined") return
  initMixpanel()
  mixpanel.identify(userId)
  if (traits) mixpanel.people.set(traits)
}
