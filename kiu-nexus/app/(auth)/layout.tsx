import Link from "next/link"
import type { ReactNode } from "react"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#0D0D0E]">
      <header className="border-b border-[#2D2D30]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-[#F98012] font-black tracking-tighter uppercase"
          >
            KIU NEXUS
          </Link>
          <span className="font-mono-label text-zinc-600 hidden sm:inline">
            v1.0.4-stable · CAPSTONE 2026
          </span>
        </div>
      </header>
      <div className="flex-1 flex w-full items-center justify-center px-4 py-12">
        <div className="flex w-full max-w-sm flex-col items-center gap-6">
          {children}
        </div>
      </div>
    </main>
  )
}
