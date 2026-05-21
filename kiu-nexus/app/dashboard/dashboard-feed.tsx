"use client"

import { useDeferredValue, useMemo, useState } from "react"

import type { AcademicUpdate } from "@/lib/types"

import { UpdateCard } from "./update-card"

type DashboardFeedProps = {
  updates: AcademicUpdate[]
  acknowledgedIds: string[]
  nowMs: number
}

export function DashboardFeed({
  updates,
  acknowledgedIds,
  nowMs,
}: DashboardFeedProps) {
  const [query, setQuery] = useState("")
  const deferredQuery = useDeferredValue(query)

  const filteredUpdates = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase()
    if (!q) return updates
    return updates.filter((u) => {
      const title = u.title?.toLowerCase() ?? ""
      const description = u.description?.toLowerCase() ?? ""
      const courseCode = u.courses?.code?.toLowerCase() ?? ""
      const courseTitle = u.courses?.title?.toLowerCase() ?? ""
      return (
        title.includes(q) ||
        description.includes(q) ||
        courseCode.includes(q) ||
        courseTitle.includes(q)
      )
    })
  }, [updates, deferredQuery])

  const hasQuery = deferredQuery.trim().length > 0

  return (
    <div className="flex flex-col gap-3">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter feed by title or description..."
        className="bg-[#161618] border border-[#2D2D30] font-mono-data text-zinc-300 placeholder-zinc-600 px-3 py-1.5 w-full md:max-w-md focus:outline-none focus:border-zinc-600"
      />

      {hasQuery ? (
        <span className="font-mono-label text-[10px] text-zinc-500">
          Showing {filteredUpdates.length} of {updates.length} updates
        </span>
      ) : null}

      {filteredUpdates.length === 0 ? (
        hasQuery ? (
          <p className="font-mono-label text-zinc-500 py-8">
            No updates match &ldquo;{deferredQuery}&rdquo;
          </p>
        ) : (
          <div className="flex items-center justify-center py-16 border border-dashed border-[#2D2D30]">
            <p className="text-sm text-zinc-500 font-mono-label">
              FEED EMPTY — NO ADDITIONAL UPDATES
            </p>
          </div>
        )
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredUpdates.map((u) => (
            <UpdateCard
              key={u.id}
              update={u}
              acknowledged={acknowledgedIds.includes(u.id)}
              userId=""
              nowMs={nowMs}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default DashboardFeed
