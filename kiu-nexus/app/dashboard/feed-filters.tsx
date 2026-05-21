import Link from "next/link"

import { cn } from "@/lib/utils"

type FeedFiltersProps = {
  activeSource?: string
  query?: string
}

function qsHref(source: string | undefined, query: string | undefined): string {
  const params = new URLSearchParams()
  if (source) params.set("source", source)
  if (query) params.set("q", query)
  const qs = params.toString()
  return qs ? `/dashboard?${qs}` : "/dashboard"
}

type FilterPillProps = {
  href: string
  active: boolean
  label: string
}

function FilterPill({ href, active, label }: FilterPillProps) {
  return (
    <Link
      href={href}
      className={cn(
        "font-mono-label text-[10px] px-3 py-1 transition-colors",
        active
          ? "bg-[#F98012] text-[#1a0900]"
          : "bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-zinc-200"
      )}
    >
      {label}
    </Link>
  )
}

export function FeedFilters({ activeSource, query }: FeedFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <FilterPill
        href={qsHref(undefined, query)}
        active={!activeSource}
        label="ALL"
      />
      <FilterPill
        href={qsHref("moodle", query)}
        active={activeSource === "moodle"}
        label="MOODLE"
      />
      <FilterPill
        href={qsHref("teams", query)}
        active={activeSource === "teams"}
        label="TEAMS"
      />
      <FilterPill
        href={qsHref("whatsapp", query)}
        active={activeSource === "whatsapp"}
        label="WHATSAPP"
      />
    </div>
  )
}

export default FeedFilters
