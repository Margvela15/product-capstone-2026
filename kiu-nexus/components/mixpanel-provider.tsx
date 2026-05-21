"use client"

import { useEffect } from "react"

import { identify, initMixpanel } from "@/lib/mixpanel"
import { createClient } from "@/lib/supabase/client"

export function MixpanelProvider() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) return

    initMixpanel()

    const supabase = createClient()
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user
      if (user) {
        identify(user.id, { email: user.email })
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  if (!process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) return null
  return null
}
