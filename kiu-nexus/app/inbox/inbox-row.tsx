"use client"

import { useActionState, useEffect, useRef } from "react"
import { AlertCircle, Check, MoreVertical } from "lucide-react"

import { track } from "@/lib/mixpanel"
import type { AcademicUpdate } from "@/lib/types"

import { acknowledgeUpdateAction, type AckState } from "../dashboard/actions"

type InboxRowProps = {
  update: AcademicUpdate
  acknowledged: boolean
  nowMs: number
}

const PLATFORM_ACCENT: Record<AcademicUpdate["source"], string> = {
  moodle: "bg-[#F98012]",
  teams: "bg-[#404283]",
  whatsapp: "bg-[#10B981]",
  email: "bg-[#a68c7c]",
}

const SOURCE_UPPER: Record<AcademicUpdate["source"], string> = {
  moodle: "MOODLE",
  teams: "TEAMS",
  whatsapp: "WHATSAPP",
  email: "EMAIL",
}

function formatTimestamp(dueAt: string | null): string {
  if (!dueAt) return "—"
  const due = new Date(dueAt)
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(due)
}

export function InboxRow({ update, acknowledged, nowMs }: InboxRowProps) {
  const initialState: AckState = null
  const [state, formAction, pending] = useActionState(
    acknowledgeUpdateAction,
    initialState
  )

  const trackedRef = useRef<string | null>(null)

  useEffect(() => {
    if (
      state &&
      "success" in state &&
      state.success &&
      state.success.update_id === update.id &&
      trackedRef.current !== update.id
    ) {
      trackedRef.current = update.id
      track("acknowledge_update", {
        update_id: update.id,
        course_code: update.courses?.code ?? null,
        type: update.type,
        source: update.source,
      })
    }
  }, [state, update.id, update.courses, update.type, update.source])

  const courseCode = update.courses?.code?.toUpperCase() ?? "GENERAL"
  const timestamp = formatTimestamp(update.due_at)
  const dueMs = update.due_at ? new Date(update.due_at).getTime() : null
  const isOverdue = dueMs !== null && dueMs < nowMs
  const errorMessage =
    state && "error" in state && state.error ? state.error : null

  return (
    <div className="flex items-stretch gap-0 hover:bg-[#1b1b1d] transition-colors group">
      <div className={`w-[3px] flex-shrink-0 ${PLATFORM_ACCENT[update.source]}`} />
      <div className="flex-1 flex items-center gap-4 px-4 py-4 min-w-0">
        <div className="hidden sm:flex flex-col w-24 flex-shrink-0">
          <span className="font-mono-label text-zinc-500">
            {SOURCE_UPPER[update.source]}
          </span>
          <span
            className={`font-mono-data ${
              isOverdue ? "text-[#ffb4ab] font-bold" : "text-zinc-300"
            }`}
          >
            {timestamp}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-mono-label text-zinc-600">{courseCode}</span>
            <span className="font-mono-label text-zinc-600">·</span>
            <span className="font-mono-label text-zinc-600">
              {update.type.toUpperCase()}
            </span>
          </div>
          <h3 className="font-bold text-zinc-200 leading-tight truncate">
            {update.title}
          </h3>
          <p className="text-sm text-zinc-500 line-clamp-1 mt-0.5">
            {update.description ?? "No description provided."}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {acknowledged ? (
            <span className="font-mono-label text-emerald-400 flex items-center gap-1">
              <Check className="size-3" /> ADDED TO PLAN
            </span>
          ) : (
            <>
              <span className="hidden md:flex font-mono-label bg-[#F98012]/10 text-[#F98012] px-2 py-0.5 items-center gap-1">
                <AlertCircle className="size-3" /> ACTION REQUIRED
              </span>
              <form action={formAction} className="flex items-center gap-2">
                <input type="hidden" name="update_id" value={update.id} />
                <button
                  type="submit"
                  disabled={pending}
                  className="bg-[#F98012] hover:bg-[#ffb787] disabled:opacity-50 text-[#1a0900] font-bold font-mono-label px-3 py-1.5"
                >
                  {pending ? "..." : "ACKNOWLEDGE"}
                </button>
                {errorMessage ? (
                  <span
                    role="alert"
                    aria-live="polite"
                    className="text-[10px] text-[#ffb4ab] font-mono-label"
                  >
                    {errorMessage}
                  </span>
                ) : null}
              </form>
            </>
          )}
          <button
            type="button"
            className="text-zinc-700 hover:text-zinc-400"
            aria-label="More options"
          >
            <MoreVertical className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default InboxRow
