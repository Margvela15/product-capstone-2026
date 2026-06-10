import Link from "next/link"
import {
  FileText,
  GraduationCap,
  Inbox,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  Terminal,
  Users,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

type AppSidebarProps = {
  activePath: "/dashboard" | "/inbox" | (string & {})
}

type NavItem = {
  href: string
  label: string
  icon: LucideIcon
}

const NAV_ITEMS: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/courses", label: "Course Nerve Centers", icon: GraduationCap },
  { href: "/inbox", label: "Automated Inbox", icon: Inbox },
  { href: "/projects", label: "Project Group Sync", icon: Users },
]

export function AppSidebar({ activePath }: AppSidebarProps) {
  return (
    <aside className="hidden md:flex flex-col h-screen py-6 px-3 fixed left-0 top-0 z-50 bg-[#161618] w-64 border-r border-[#2D2D30]">
      <div className="font-black text-[#F98012] mb-6 text-lg tracking-tighter px-3">
        KIU NEXUS
      </div>

      <div className="flex flex-col gap-1 mb-8">
        <span className="font-mono-label text-zinc-600 text-[10px] mb-2 px-3">
          MAIN TERMINAL
        </span>
        {NAV_ITEMS.map((item) => {
          const isActive = activePath === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 transition-all duration-200 font-mono-label text-[12px]",
                isActive
                  ? "text-[#F98012] bg-[#F98012]/10 border-l-2 border-[#F98012]"
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-[#2D2D30] group"
              )}
            >
              <Icon
                className={cn(
                  "size-[18px]",
                  !isActive && "group-hover:translate-x-1 duration-200"
                )}
              />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>

      <Link
        href="/projects/new"
        className="mx-3 py-2 px-4 bg-[#F98012] text-[#1a0900] font-bold border border-[#F98012]/20 active:scale-95 duration-150 mb-auto text-[13px] inline-block text-center"
      >
        + New Project
      </Link>

      <div className="flex flex-col gap-1 mt-auto">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-200 hover:bg-[#2D2D30] transition-all duration-200 group font-mono-label text-[12px]"
        >
          <Settings className="size-[18px] group-hover:translate-x-1 duration-200" />
          <span>Settings</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-200 hover:bg-[#2D2D30] transition-all duration-200 group border-t border-[#2D2D30] mt-2 pt-4 font-mono-label text-[12px]"
        >
          <FileText className="size-[18px] group-hover:translate-x-1 duration-200" />
          <span>Docs</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-zinc-500 hover:text-zinc-200 hover:bg-[#2D2D30] transition-all duration-200 group font-mono-label text-[12px]"
        >
          <LifeBuoy className="size-[18px] group-hover:translate-x-1 duration-200" />
          <span>Support</span>
        </a>
      </div>

      <div className="mt-6 px-3 pt-4 border-t border-[#2D2D30] flex items-center gap-3">
        <div className="w-8 h-8 bg-zinc-800 rounded-sm flex items-center justify-center">
          <Terminal className="text-zinc-500 size-3.5" />
        </div>
        <div>
          <p className="text-[10px] text-zinc-300 font-bold leading-none font-mono">
            v1.0.4-stable
          </p>
          <p className="text-[9px] text-zinc-600 leading-none mt-1 font-mono uppercase tracking-wider">
            NEXUS CORE ACTIVE
          </p>
        </div>
      </div>
    </aside>
  )
}

export default AppSidebar
