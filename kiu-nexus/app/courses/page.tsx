import Link from "next/link"
import { ClipboardList, Flag, GraduationCap, Users } from "lucide-react"

import { AppSidebar } from "@/components/app-sidebar"
import { AppTopbar } from "@/components/app-topbar"

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen">
      <AppSidebar activePath="/courses" />
      <div className="flex-1 md:ml-64 min-h-screen bg-[#0D0D0E] flex flex-col">
        <AppTopbar displayName="Guest" showSignOut={false} />
        <main className="flex-1 px-6 py-10">
          <div className="max-w-6xl mx-auto space-y-8">
            <section className="rounded-2xl border border-[#2D2D30] bg-[#161618] p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#F98012] font-semibold">
                    Course Nerve Centers
                  </p>
                  <h1 className="mt-2 text-3xl font-semibold text-zinc-100">
                    Centralised course dashboards for every subject
                  </h1>
                </div>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-sm bg-[#F98012] px-5 py-3 text-sm font-semibold text-[#1a0900] hover:bg-[#ffb787] transition-colors"
                >
                  Create access
                </Link>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-[#2D2D30] bg-[#0D0D0E] p-5">
                  <GraduationCap className="size-6 text-[#F98012] mb-4" />
                  <h2 className="text-lg font-semibold text-zinc-100">Course hubs</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Track lectures, assignments, and announcements from Moodle, Teams and WhatsApp in one place.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#2D2D30] bg-[#0D0D0E] p-5">
                  <ClipboardList className="size-6 text-[#F98012] mb-4" />
                  <h2 className="text-lg font-semibold text-zinc-100">Assignment feeds</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    See due dates, status, and grading notes for each course without switching apps.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#2D2D30] bg-[#0D0D0E] p-5">
                  <Flag className="size-6 text-[#F98012] mb-4" />
                  <h2 className="text-lg font-semibold text-zinc-100">Priority alerts</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Get the most urgent course items ranked first so you never miss a deadline.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#2D2D30] bg-[#0D0D0E] p-5">
                  <Users className="size-6 text-[#F98012] mb-4" />
                  <h2 className="text-lg font-semibold text-zinc-100">Collaboration</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Sync groups, project squads and study sessions across all your courses.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#2D2D30] bg-[#161618] p-8">
              <h2 className="text-2xl font-semibold text-zinc-100">Guest access</h2>
              <p className="mt-3 text-sm text-zinc-400">
                You can browse the Course Nerve Centers as a guest and explore the interface. Sign in anytime to save profiles, connect your courses, and sync real updates.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[#2D2D30] bg-[#0D0D0E] p-6">
                  <p className="font-mono-label text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Browse
                  </p>
                  <p className="mt-3 text-sm text-zinc-300">
                    View course summaries, due-date conventions and priority workflows.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#2D2D30] bg-[#0D0D0E] p-6">
                  <p className="font-mono-label text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Explore</p>
                  <p className="mt-3 text-sm text-zinc-300">
                    Explore course cards, syllabus snapshots and module overviews without signing in.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
