import { Bell, Command, Search } from "lucide-react"

import { SignOutButton } from "@/app/auth/sign-out-button"

type AppTopbarProps = {
  displayName: string
  showSignOut?: boolean
}

export function AppTopbar({ displayName, showSignOut = true }: AppTopbarProps) {
  return (
    <header className="flex justify-between items-center h-14 px-4 w-full z-40 sticky top-0 bg-[#0D0D0E] border-b border-[#2D2D30] tracking-tight">
      <div className="flex items-center gap-4">
        <div className="md:hidden text-[#F98012] font-black tracking-tighter uppercase">
          KIU NEXUS
        </div>
        <div className="hidden md:flex items-center bg-[#161618] border border-[#2D2D30] px-3 py-1 gap-2 min-w-[320px]">
          <Search className="text-zinc-500 size-3.5" />
          <input
            type="text"
            placeholder="CMD+K to search Nexus..."
            className="bg-transparent border-none focus:ring-0 focus:outline-none font-mono-data text-[13px] text-zinc-300 w-full p-0 placeholder:text-zinc-600"
          />
          <span className="text-[10px] text-zinc-600 font-mono border border-zinc-700 px-1">
            /
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="p-2 text-zinc-400 hover:bg-zinc-800/50 transition-colors active:scale-95 duration-150 relative"
          aria-label="Notifications"
        >
          <Bell className="size-5" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#F98012] rounded-full" />
        </button>
        <button
          type="button"
          className="p-2 text-zinc-400 hover:bg-zinc-800/50 transition-colors active:scale-95 duration-150"
          aria-label="Command palette"
        >
          <Command className="size-5" />
        </button>
        <span className="font-mono-label text-zinc-400 ml-2 hidden sm:inline">
          {displayName}
        </span>
        {showSignOut ? <SignOutButton /> : null}
      </div>
    </header>
  )
}

export default AppTopbar
