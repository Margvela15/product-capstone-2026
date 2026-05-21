"use client"

import { useActionState, useEffect, useRef } from "react"
import { Check } from "lucide-react"

import { track } from "@/lib/mixpanel"
import type { AcademicUpdate } from "@/lib/types"

import { acknowledgeUpdateAction, type AckState } from "./actions"

type CriticalAcknowledgeButtonProps = {
  update: AcademicUpdate
  acknowledged: boolean
}

export function CriticalAcknowledgeButton({
  update,
  acknowledged,
}: CriticalAcknowledgeButtonProps) {
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

  if (acknowledged) {
    return (
      <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono-label text-[12px] px-4 py-2 border border-emerald-500/30 bg-emerald-500/10">
        <Check className="size-4" />
        ADDED TO PLAN
      </span>
    )
  }

  return (
    <form action={formAction} className="inline-flex">
      <input type="hidden" name="update_id" value={update.id} />
      <button
        type="submit"
        disabled={pending}
        className="bg-[#F98012] hover:bg-[#F98012]/90 text-[#1a0900] px-4 py-2 text-[13px] font-bold active:scale-95 transition-all disabled:opacity-60"
      >
        {pending ? "Adding..." : "Acknowledge and Add to Plan"}
      </button>
    </form>
  )
}

export default CriticalAcknowledgeButton
