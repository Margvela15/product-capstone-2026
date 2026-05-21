import Link from "next/link"
import { Activity, Inbox, Sparkles, Terminal } from "lucide-react"

export default function Home() {
  const time = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0E] text-on-surface">
      <header className="border-b border-[#2D2D30] bg-[#0D0D0E]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-[#F98012] font-black tracking-tighter uppercase">
              KIU NEXUS
            </span>
            <span className="hidden sm:inline font-mono-label text-zinc-600">
              v1.0.4-stable
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="font-mono-label text-zinc-400 hover:text-zinc-100 px-3 py-2 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="font-mono-label bg-[#F98012] text-[#1a0900] hover:bg-[#ffb787] px-4 py-2 font-bold transition-colors"
            >
              Create access
            </Link>
          </div>
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl w-full">
          <div className="flex items-center gap-2 mb-6 font-mono-label text-zinc-500">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            SYSTEM ONLINE · {time} GMT+4
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100">
            One terminal for every course.
          </h1>
          <p className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl">
            KIU Nexus pulls assignments, exams, lectures, and announcements out
            of Moodle, Teams, and WhatsApp into one ranked feed — so nothing
            slips between platforms.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="font-mono-label bg-[#F98012] text-[#1a0900] hover:bg-[#ffb787] px-6 py-3 font-bold transition-colors active:scale-95 duration-150"
            >
              Provision your account
            </Link>
            <Link
              href="/login"
              className="font-mono-label bg-zinc-800 text-zinc-200 hover:bg-zinc-700 border border-zinc-700 px-6 py-3 font-bold transition-colors active:scale-95 duration-150"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 w-full">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="size-4 text-zinc-500" />
          <span className="font-mono-label text-zinc-500">CORE MODULES</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#161618] border border-[#2D2D30] p-6 hover:bg-[#1b1b1d] transition-colors">
            <Inbox className="size-5 text-[#F98012] mb-4" />
            <h3 className="text-lg font-semibold text-zinc-100 mb-2">
              Unified feed
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Moodle + Teams + WhatsApp surfaced in one place, ranked by what&apos;s
              due next.
            </p>
          </div>
          <div className="bg-[#161618] border border-[#2D2D30] p-6 hover:bg-[#1b1b1d] transition-colors">
            <Sparkles className="size-5 text-[#F98012] mb-4" />
            <h3 className="text-lg font-semibold text-zinc-100 mb-2">
              Acknowledge & plan
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              One tap to log an item into your plan — never lose track again.
            </p>
          </div>
          <div className="bg-[#161618] border border-[#2D2D30] p-6 hover:bg-[#1b1b1d] transition-colors">
            <Terminal className="size-5 text-[#F98012] mb-4" />
            <h3 className="text-lg font-semibold text-zinc-100 mb-2">
              Built for KIU CS
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Designed for 3rd-year computer-science students juggling six
              courses across three platforms.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2D2D30] mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-3 font-mono-label text-zinc-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              NEXUS CORE ACTIVE
            </span>
            <span>KIU CS-PD-2026 · CAPSTONE</span>
          </div>
          <div>SYSTEM TIME {time} GMT+4</div>
        </div>
      </footer>
    </div>
  )
}
