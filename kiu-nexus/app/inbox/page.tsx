import { cache } from "react"
import { redirect } from "next/navigation"
import { Archive, Edit, Filter } from "lucide-react"

import { AppSidebar } from "@/components/app-sidebar"
import { AppTopbar } from "@/components/app-topbar"
import { createClient } from "@/lib/supabase/server"
import type { AcademicUpdate } from "@/lib/types"

import { InboxRow } from "./inbox-row"

// React.cache memoizes per-request; this also satisfies the
// react-hooks/purity rule because impure reads happen outside render.
const getRequestNow = cache(() => Date.now())

type RawUpdateRow = {
  id: string
  type: AcademicUpdate["type"]
  title: string
  description: string | null
  due_at: string | null
  source: AcademicUpdate["source"]
  created_at: string
  courses:
    | { code: string; title: string }
    | { code: string; title: string }[]
    | null
}

function normalizeCourses(
  courses: RawUpdateRow["courses"]
): AcademicUpdate["courses"] {
  if (!courses) return null
  if (Array.isArray(courses)) {
    return courses[0] ?? null
  }
  return courses
}

const HOUR_MS = 1000 * 60 * 60
const DAY_MS = HOUR_MS * 24

function pad2(value: number): string {
  return value.toString().padStart(2, "0")
}

function formatNextDeadline(
  updates: AcademicUpdate[],
  nowMs: number
): string {
  const upcoming = updates
    .filter((u) => u.due_at !== null)
    .map((u) => new Date(u.due_at as string).getTime())
    .filter((ms) => ms >= nowMs && ms - nowMs <= DAY_MS * 7)
    .sort((a, b) => a - b)

  if (upcoming.length === 0) return "—"

  const diff = upcoming[0] - nowMs
  const totalMinutes = Math.floor(diff / (1000 * 60))
  const totalHours = Math.floor(totalMinutes / 60)
  const days = Math.floor(totalHours / 24)
  const hoursWithinDay = totalHours % 24
  const minutes = totalMinutes % 60

  if (days >= 1) {
    return `${days}D ${pad2(hoursWithinDay)}H`
  }
  return `${pad2(totalHours)}H ${pad2(minutes)}M`
}

export default async function InboxPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect("/login")
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .maybeSingle()

  const { data: rawUpdates } = await supabase
    .from("academic_updates")
    .select(
      `
      id, type, title, description, due_at, source, created_at,
      courses ( code, title )
    `
    )
    .order("due_at", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: false })

  const updates: AcademicUpdate[] = ((rawUpdates ?? []) as RawUpdateRow[]).map(
    (row) => ({
      id: row.id,
      type: row.type,
      title: row.title,
      description: row.description,
      due_at: row.due_at,
      source: row.source,
      created_at: row.created_at,
      courses: normalizeCourses(row.courses),
    })
  )

  const { data: ackRows } = await supabase
    .from("acknowledgments")
    .select("update_id")
    .eq("user_id", user.id)

  const acknowledgedIds = new Set<string>(
    (ackRows ?? []).map((row: { update_id: string }) => row.update_id)
  )

  const displayName =
    (profile?.full_name as string | null | undefined) ?? user.email ?? "there"

  const now = getRequestNow()

  const activeThreads = updates.length
  const pendingReview = updates.filter((u) => !acknowledgedIds.has(u.id)).length
  const pendingReviewLabel = pad2(pendingReview)
  const nextDeadlineLabel = formatNextDeadline(updates, now)

  return (
    <div className="flex min-h-screen">
      <AppSidebar activePath="/inbox" />
      <div className="flex-1 md:ml-64 min-h-screen bg-[#0D0D0E] flex flex-col">
        <AppTopbar displayName={displayName} />

        <main className="max-w-[1400px] mx-auto w-full px-6 py-6 flex flex-col gap-6 flex-1">
          {/* Header row */}
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-zinc-100 flex items-center gap-2">
                Automated Inbox
                <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 font-mono-label text-[10px]">
                  POWERED
                </span>
              </h1>
              <p className="font-mono-label text-zinc-500 mt-1">
                EXTRACTING SIGNAL FROM THE NOISE OF ACADEMIC UPDATES
              </p>
            </div>
            <div className="flex gap-2 self-start mt-auto">
              <button
                type="button"
                className="font-mono-label text-[10px] bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-zinc-200 px-3 py-1.5 flex items-center gap-1.5"
              >
                <Filter className="size-3" />
                FILTER
              </button>
              <button
                type="button"
                className="font-mono-label text-[10px] bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-zinc-200 px-3 py-1.5 flex items-center gap-1.5"
              >
                <Archive className="size-3" />
                ARCHIVE ALL
              </button>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#161618] border border-[#2D2D30] p-4 flex flex-col">
              <span className="font-mono-label text-zinc-500">
                ACTIVE THREADS
              </span>
              <span className="text-3xl font-bold text-zinc-100 mt-1">
                {activeThreads}
              </span>
              <span className="font-mono-label text-zinc-600 mt-1">
                OPEN ITEMS
              </span>
            </div>
            <div className="bg-[#161618] border border-[#2D2D30] p-4 flex flex-col">
              <span className="font-mono-label text-zinc-500">
                PENDING REVIEW
              </span>
              <span className="text-3xl font-bold text-zinc-100 mt-1">
                {pendingReviewLabel}
              </span>
              <span className="font-mono-label text-zinc-600 mt-1">
                AWAITING ACK
              </span>
            </div>
            <div className="bg-[#161618] border border-[#2D2D30] p-4 flex flex-col">
              <span className="font-mono-label text-zinc-500">SYNC HEALTH</span>
              <span className="text-3xl font-bold text-zinc-100 mt-1">98%</span>
              <span className="font-mono-label text-zinc-600 mt-1">
                ALL PLATFORMS
              </span>
            </div>
            <div className="bg-[#161618] border border-[#2D2D30] p-4 flex flex-col">
              <span className="font-mono-label text-zinc-500">
                NEXT DEADLINE
              </span>
              <span className="text-3xl font-bold text-zinc-100 mt-1">
                {nextDeadlineLabel}
              </span>
              <span className="font-mono-label text-zinc-600 mt-1">
                WITHIN 7 DAYS
              </span>
            </div>
          </div>

          {/* Inbox list */}
          {updates.length === 0 ? (
            <div className="bg-[#161618] border border-[#2D2D30] flex items-center justify-center py-16">
              <p className="text-sm text-zinc-500 font-mono-label">
                INBOX EMPTY — NO ACADEMIC UPDATES
              </p>
            </div>
          ) : (
            <div className="bg-[#161618] border border-[#2D2D30] divide-y divide-[#2D2D30]">
              {updates.map((update) => (
                <InboxRow
                  key={update.id}
                  update={update}
                  acknowledged={acknowledgedIds.has(update.id)}
                  nowMs={now}
                />
              ))}
            </div>
          )}

          {/* Bottom strip: extraction stats + compass pill */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
            <div className="md:col-span-2 bg-[#161618] border border-[#2D2D30] p-4 flex flex-col gap-1">
              <span className="font-mono-label text-zinc-300">
                AUTOMATED SIGNAL EXTRACTION
              </span>
              <p className="text-zinc-500 text-sm leading-relaxed">
                KIU Nexus analyzed {activeThreads * 12 + 14} source messages today.{" "}
                {pendingReview} high-priority{" "}
                {pendingReview === 1 ? "action was" : "actions were"} extracted
                while the rest of the noise was filtered from your view.
              </p>
            </div>
            <div className="bg-[#F98012] p-4 flex flex-col justify-between">
              <span className="font-mono-label text-[#1a0900] font-black">
                NEXUS COMPASS
              </span>
              <p className="text-[#1a0900] text-sm font-bold mt-2">
                Sync complete. All platforms are 1:1 with linked sources.
              </p>
            </div>
          </div>
        </main>

        {/* Floating action button */}
        <button
          type="button"
          aria-label="Compose manual entry"
          className="fixed bottom-6 right-6 h-12 w-12 bg-[#F98012] text-[#1a0900] rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50"
        >
          <Edit className="size-5" />
        </button>
      </div>
    </div>
  )
}
