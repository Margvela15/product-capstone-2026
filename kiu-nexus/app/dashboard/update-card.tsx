"use client"

import { useActionState, useEffect, useRef } from "react"
import { Check, MoreVertical, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { track } from "@/lib/mixpanel"
import type { AcademicUpdate } from "@/lib/types"

import {
  acknowledgeUpdateAction,
  removeAcknowledgmentAction,
  type AckState,
} from "./actions"

type UpdateCardProps = {
  update: AcademicUpdate
  acknowledged: boolean
  userId: string
  // Server-snapshot "now" in epoch ms; keeps render pure and SSR/hydration stable.
  nowMs: number
}

const PLATFORM_BORDER: Record<AcademicUpdate["source"], string> = {
  moodle: "platform-moodle",
  teams: "platform-teams",
  whatsapp: "platform-whatsapp",
  email: "platform-email",
}

const PLATFORM_BADGE: Record<AcademicUpdate["source"], string> = {
  moodle: "bg-[#F98012]/10 text-[#F98012]",
  teams: "bg-[#404283]/10 text-[#bec2ff]",
  whatsapp: "bg-[#10B981]/10 text-[#10B981]",
  email: "bg-[#a68c7c]/10 text-[#a68c7c]",
}

const SOURCE_LABEL: Record<AcademicUpdate["source"], string> = {
  moodle: "KIU MOODLE",
  teams: "MICROSOFT TEAMS",
  whatsapp: "WHATSAPP",
  email: "EMAIL",
}

const HOUR_MS = 1000 * 60 * 60
const DAY_MS = HOUR_MS * 24

function formatTimestamp(dueAt: string | null, nowMs: number): string {
  if (!dueAt) return "NO DEADLINE"
  const due = new Date(dueAt)
  const now = new Date(nowMs)
  const diff = due.getTime() - nowMs

  const timePart = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(due)

  const isSameDay =
    due.getFullYear() === now.getFullYear() &&
    due.getMonth() === now.getMonth() &&
    due.getDate() === now.getDate()

  if (isSameDay) {
    return `TODAY, ${timePart}`
  }

  const tomorrow = new Date(now)
  tomorrow.setDate(now.getDate() + 1)
  const isTomorrow =
    due.getFullYear() === tomorrow.getFullYear() &&
    due.getMonth() === tomorrow.getMonth() &&
    due.getDate() === tomorrow.getDate()

  if (isTomorrow) {
    return `TOMORROW, ${timePart}`
  }

  if (diff < 0) {
    return `OVERDUE, ${timePart}`
  }

  if (diff < DAY_MS * 7) {
    const weekday = new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
    })
      .format(due)
      .toUpperCase()
    return `${weekday}, ${timePart}`
  }

  const datePart = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
  })
    .format(due)
    .toUpperCase()
  return `${datePart}, ${timePart}`
}

export function UpdateCard({
  update,
  acknowledged,
  userId,
  nowMs,
}: UpdateCardProps) {
  void userId
  const initialState: AckState = null
  const [state, formAction, pending] = useActionState(
    acknowledgeUpdateAction,
    initialState
  )
  const [removeState, removeFormAction, removePending] = useActionState(
    removeAcknowledgmentAction,
    initialState
  )

  const trackedRef = useRef<string | null>(null)
  const unacknowledgedRef = useRef<string | null>(null)

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

  useEffect(() => {
    if (
      removeState &&
      "success" in removeState &&
      removeState.success &&
      removeState.success.update_id === update.id &&
      unacknowledgedRef.current !== update.id
    ) {
      unacknowledgedRef.current = update.id
      track("remove_acknowledgment", {
        update_id: update.id,
        course_code: update.courses?.code ?? null,
        type: update.type,
        source: update.source,
      })
    }
  }, [removeState, update.id, update.courses, update.type, update.source])

  const courseCode = update.courses?.code ?? null
  const badgeLabel = courseCode
    ? `${SOURCE_LABEL[update.source]} / ${courseCode.toUpperCase()}`
    : SOURCE_LABEL[update.source]

  const dueDate = update.due_at ? new Date(update.due_at) : null
  const msUntilDue = dueDate ? dueDate.getTime() - nowMs : null
  const isHighUrgency =
    msUntilDue !== null && msUntilDue >= 0 && msUntilDue <= HOUR_MS * 12
  const isOverdue = msUntilDue !== null && msUntilDue < 0
  const timestampLabel = formatTimestamp(update.due_at, nowMs)

  const errorMessage =
    state && "error" in state && state.error ? state.error : null

  return (
    <div
      className={cn(
        "bg-[#161618] border border-[#2D2D30] flex flex-col hover:bg-[#1b1b1d] transition-colors group",
        PLATFORM_BORDER[update.source]
      )}
    >
      <div className="p-4 flex justify-between items-start">
        <div className="flex flex-col">
          <span
            className={cn(
              "px-2 py-0.5 font-mono-label text-[10px] w-fit mb-2",
              PLATFORM_BADGE[update.source]
            )}
          >
            {badgeLabel}
          </span>
          {isHighUrgency || isOverdue ? (
            <span className="text-[#ffb4ab] font-mono-label text-[10px] font-bold">
              HIGH URGENCY
            </span>
          ) : update.due_at ? (
            <span className="text-zinc-500 font-mono-label text-[10px]">
              NORMAL
            </span>
          ) : (
            <span className="text-zinc-600 font-mono-label text-[10px]">
              ANNOUNCEMENT
            </span>
          )}
        </div>
        <MoreVertical className="text-zinc-700 group-hover:text-zinc-400 size-4" />
      </div>

      <div className="px-4 pb-4 flex-grow">
        <h3 className="font-bold text-zinc-200 mb-1 leading-tight">
          {update.title}
        </h3>
        <p className="text-zinc-500 text-[13px] leading-[18px] line-clamp-2">
          {update.description ?? "No description provided."}
        </p>
      </div>

      <div className="mt-auto p-4 border-t border-[#2D2D30] flex justify-between items-center gap-3">
        <span
          className={cn(
            "font-mono-data text-[13px]",
            !update.due_at
              ? "text-zinc-600 font-mono-label"
              : isHighUrgency || isOverdue
                ? "text-[#ffb4ab] font-bold"
                : "text-zinc-400"
          )}
        >
          {timestampLabel}
        </span>
        {acknowledged ? (
          <form action={removeFormAction} className="inline-flex">
            <input type="hidden" name="update_id" value={update.id} />
            <button
              type="submit"
              disabled={removePending}
              title="Remove from plan"
              className="group bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 px-2 py-0.5 font-mono-label flex items-center gap-1 text-[10px] disabled:opacity-60 transition-colors"
            >
              <Check className="size-3" />
              {removePending ? "REMOVING..." : "ADDED TO PLAN"}
              <X className="size-3 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>
        ) : (
          <form action={formAction} className="flex items-center gap-2">
            <input type="hidden" name="update_id" value={update.id} />
            <button
              type="submit"
              disabled={pending}
              className="bg-[#F98012] text-[#1a0900] px-3 py-1 text-[11px] font-bold uppercase font-mono-label hover:bg-[#F98012]/90 active:scale-95 transition-all disabled:opacity-60"
            >
              {pending ? "Adding..." : "Acknowledge"}
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
        )}
      </div>
    </div>
  )
}

export default UpdateCard
