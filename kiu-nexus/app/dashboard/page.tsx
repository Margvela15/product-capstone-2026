import { cache } from "react"
import Link from "next/link"
import { Activity, Sparkles } from "lucide-react"

import { AppSidebar } from "@/components/app-sidebar"
import { AppTopbar } from "@/components/app-topbar"
import { createClient } from "@/lib/supabase/server"
import type { AcademicUpdate } from "@/lib/types"

import { CriticalAcknowledgeButton } from "./critical-acknowledge-button"
import { UpdateCard } from "./update-card"

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

function formatDueProximity(dueAt: string, nowMs: number): string {
  const due = new Date(dueAt).getTime()
  const diff = due - nowMs

  if (diff < 0) {
    const overdueHours = Math.floor(-diff / HOUR_MS)
    if (overdueHours < 24) return `${overdueHours}H OVERDUE`
    return `${Math.floor(overdueHours / 24)}D OVERDUE`
  }

  const totalMinutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (hours < 1) return `${minutes}M REMAINING`
  if (hours < 48) return `${hours}H ${minutes}M REMAINING`
  return `${Math.floor(hours / 24)}D ${hours % 24}H REMAINING`
}

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    const demoUpdates = [
      {
        id: "1",
        title: "Assignment: Data Structures Problem Set",
        description: "Submit solutions for linked lists and hash tables",
        due_at: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        source: "MOODLE",
        courses: { code: "CS3102", title: "Data Structures" },
      },
      {
        id: "2",
        title: "Project milestone review",
        description: "Present progress on capstone project to supervisors",
        due_at: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        source: "TEAMS",
        courses: { code: "CS4061", title: "Capstone Project" },
      },
      {
        id: "3",
        title: "Quiz: Software Engineering principles",
        description: "40-minute multiple choice quiz on SDLC methodologies",
        due_at: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
        source: "MOODLE",
        courses: { code: "CS3101", title: "Software Engineering" },
      },
    ]

    return (
      <div className="flex min-h-screen">
        <AppSidebar activePath="/dashboard" />
        <div className="flex-1 md:ml-64 min-h-screen bg-[#0D0D0E] flex flex-col">
          <AppTopbar displayName="Guest" showSignOut={false} />
          <main className="p-6 max-w-[1400px] mx-auto w-full flex flex-col gap-6 grow">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
                  Dashboard (Demo)
                </h1>
                <p className="font-mono-label text-zinc-500 mt-1">
                  SAMPLE ACADEMIC UPDATES - SIGN IN TO SEE YOUR PERSONAL ITEMS
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  href="/login"
                  className="font-mono-label text-[12px] bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-zinc-200 px-3 py-1.5"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="font-mono-label text-[12px] bg-[#F98012] text-[#1a0900] hover:bg-[#ffb787] px-3 py-1.5 font-bold"
                >
                  Create access
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {demoUpdates.map((update) => {
                const due = new Date(update.due_at).getTime()
                const now = Date.now()
                const diff = due - now
                const hours = Math.floor(diff / (1000 * 60 * 60))
                const days = Math.floor(hours / 24)
                const hoursInDay = hours % 24
                
                let dueSoon = ""
                if (days > 0) {
                  dueSoon = `${days}D ${hoursInDay}H REMAINING`
                } else {
                  dueSoon = `${hours}H REMAINING`
                }

                return (
                  <div
                    key={update.id}
                    className="bg-[#161618] border border-[#2D2D30] p-4 hover:border-[#F98012]/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono-label text-[10px] text-zinc-500">
                            {update.courses?.code} • {update.source}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-100 mb-1">
                          {update.title}
                        </h3>
                        <p className="text-sm text-zinc-400">
                          {update.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono-label text-[10px] text-zinc-600 mb-1">
                          DUE IN
                        </p>
                        <p className="font-mono-data font-bold text-[#F98012]">
                          {dueSoon}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-auto rounded-lg border border-[#2D2D30] bg-[#0D0D0E] p-6">
              <p className="font-mono-label text-xs uppercase text-zinc-600 mb-2">
                Demo mode
              </p>
              <p className="text-sm text-zinc-400">
                This is a preview of the dashboard with sample updates. Sign in to see your personalized academic feed.
              </p>
            </div>
          </main>
        </div>
      </div>
    )
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

  // Pick the critical alert: the update with the soonest non-null due_at.
  const updatesWithDue = updates.filter((u) => u.due_at !== null)
  const criticalUpdate: AcademicUpdate | null =
    updatesWithDue.length > 0 ? updatesWithDue[0] : null

  const now = getRequestNow()
  const criticalDueMs = criticalUpdate?.due_at
    ? new Date(criticalUpdate.due_at).getTime()
    : null
  const isCriticalAlert =
    criticalDueMs !== null &&
    criticalDueMs - now <= HOUR_MS * 6 &&
    criticalDueMs - now >= 0

  const feedUpdates = criticalUpdate
    ? updates.filter((u) => u.id !== criticalUpdate.id)
    : updates

  const deadlinesWithin24h = updates.filter((u) => {
    if (!u.due_at) return false
    const diff = new Date(u.due_at).getTime() - now
    return diff >= 0 && diff <= DAY_MS
  }).length

  const insightText =
    deadlinesWithin24h > 0
      ? `${deadlinesWithin24h} ${
          deadlinesWithin24h === 1 ? "deadline clusters" : "deadlines cluster"
        } tomorrow. Recommend pre-emptive focus block.`
      : "No deadlines tomorrow. Use the window for deep work."

  const lastSync = new Date(now).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })

  return (
    <div className="flex min-h-screen">
      <AppSidebar activePath="/dashboard" />
      <div className="flex-1 md:ml-64 min-h-screen bg-[#0D0D0E] flex flex-col">
        <AppTopbar displayName={displayName} />

        <main className="p-6 max-w-[1400px] mx-auto w-full flex flex-col gap-6 flex-grow">
          {/* Bento Hero */}
          <div className="grid grid-cols-12 gap-4">
            {/* Critical Alert */}
            <div className="col-span-12 lg:col-span-8 bg-[#161618] border border-[#2D2D30] p-6 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
              {isCriticalAlert ? (
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-[#93000a]/20 text-[#ffb4ab] px-2 py-0.5 font-mono-label text-[10px] border border-[#ffb4ab]/30 inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#ffb4ab] rounded-full" />
                    CRITICAL SYSTEM ALERT
                  </span>
                </div>
              ) : null}

              {criticalUpdate ? (
                <>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isCriticalAlert
                            ? "bg-[#ffb4ab] animate-pulse"
                            : "bg-[#F98012]"
                        }`}
                      />
                      <span className="font-mono-label text-zinc-500">
                        SOURCE:{" "}
                        {(
                          criticalUpdate.courses?.code ?? "GENERAL"
                        ).toUpperCase()}
                        -{criticalUpdate.source.toUpperCase()}
                      </span>
                    </div>
                    <h1 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#e4e2e4] mb-2 max-w-2xl">
                      {criticalUpdate.title}
                    </h1>
                    <p className="text-zinc-400 text-[14px] leading-[20px] max-w-xl mb-6">
                      {criticalUpdate.description ??
                        "No description provided for this update."}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 border-t border-[#2D2D30] pt-6 mt-6">
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="font-mono-label text-zinc-600 mb-1">
                          DUE PROXIMITY
                        </p>
                        <p
                          className={`font-mono-data font-bold ${
                            isCriticalAlert
                              ? "text-[#ffb4ab]"
                              : "text-[#F98012]"
                          }`}
                        >
                          {criticalUpdate.due_at
                            ? formatDueProximity(criticalUpdate.due_at, now)
                            : "NO DEADLINE"}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono-label text-zinc-600 mb-1">
                          CATEGORY
                        </p>
                        <p className="font-mono-data text-zinc-300">
                          {criticalUpdate.type.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <div className="ml-auto flex items-center gap-3">
                      <button
                        type="button"
                        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 text-[13px] font-bold border border-zinc-700 transition-all active:scale-95"
                      >
                        View Full Specs
                      </button>
                      <CriticalAcknowledgeButton
                        update={criticalUpdate}
                        acknowledged={acknowledgedIds.has(criticalUpdate.id)}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-start justify-center h-full">
                  <span className="font-mono-label text-zinc-500 mb-2">
                    NEXUS STATUS
                  </span>
                  <h1 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#e4e2e4] mb-2">
                    You&apos;re all caught up.
                  </h1>
                  <p className="text-zinc-400 text-[14px] leading-[20px]">
                    No upcoming deadlines detected across connected platforms.
                  </p>
                </div>
              )}
            </div>

            {/* Right column: Platform Sync + Nexus Insight */}
            <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-4">
              <div className="bg-[#161618] border border-[#2D2D30] p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-mono-label text-zinc-500">
                    PLATFORM SYNC
                  </span>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="flex-1">
                    <div className="h-1 bg-zinc-800 w-full mb-1">
                      <div className="h-1 bg-[#F98012] w-[88%]" />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-600 uppercase">
                      MOODLE: 88%
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="h-1 bg-zinc-800 w-full mb-1">
                      <div className="h-1 bg-[#404283] w-[65%]" />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-600 uppercase">
                      TEAMS: 65%
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="h-1 bg-zinc-800 w-full mb-1">
                      <div className="h-1 bg-[#10B981] w-[42%]" />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-600 uppercase">
                      WHATSAPP: 42%
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F98012]/5 border border-[#F98012]/20 p-4 flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-[#F98012] flex items-center justify-center">
                  <Sparkles className="text-[#1a0900] size-6" />
                </div>
                <div>
                  <p className="font-mono-label text-[#F98012]">
                    NEXUS INSIGHT
                  </p>
                  <p className="text-[13px] leading-[18px] text-zinc-300">
                    {insightText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nexus Feed */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[18px] leading-[24px] tracking-[-0.01em] font-semibold text-[#e4e2e4] flex items-center gap-2">
                <Activity className="text-zinc-500 size-4" />
                Nexus Feed
              </h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono-label text-[10px]"
                >
                  ALL
                </button>
                <button
                  type="button"
                  className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-400 font-mono-label text-[10px] hover:text-zinc-200"
                >
                  MOODLE
                </button>
                <button
                  type="button"
                  className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-400 font-mono-label text-[10px] hover:text-zinc-200"
                >
                  TEAMS
                </button>
                <button
                  type="button"
                  className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-400 font-mono-label text-[10px] hover:text-zinc-200"
                >
                  WHATSAPP
                </button>
              </div>
            </div>

            {feedUpdates.length === 0 ? (
              <div className="flex items-center justify-center py-16 border border-dashed border-[#2D2D30]">
                <p className="text-sm text-zinc-500 font-mono-label">
                  FEED EMPTY — NO ADDITIONAL UPDATES
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {feedUpdates.map((update) => (
                  <UpdateCard
                    key={update.id}
                    update={update}
                    acknowledged={acknowledgedIds.has(update.id)}
                    userId={user.id}
                    nowMs={now}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer status row */}
          <footer className="border-t border-[#2D2D30] py-8 mt-auto flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
            <div className="flex flex-wrap items-center gap-4 text-zinc-600 font-mono-data text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                MOODLE CONNECTED
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                TEAMS ACTIVE
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                WHATSAPP SYNCED
              </div>
            </div>
            <div className="text-zinc-600 font-mono-label text-[10px]">
              LAST GLOBAL SYNC: {lastSync} GMT+4
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
