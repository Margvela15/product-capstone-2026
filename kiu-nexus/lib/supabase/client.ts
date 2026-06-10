import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  return createBrowserClient(
    (process as any).env.NEXT_PUBLIC_SUPABASE_URL!,
    (process as any).env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
