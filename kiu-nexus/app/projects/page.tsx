import Link from "next/link"
import { Briefcase, Layers, MessageSquare, Users } from "lucide-react"

import { AppSidebar } from "@/components/app-sidebar"
import { AppTopbar } from "@/components/app-topbar"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen">
      <AppSidebar activePath="/projects" />
      <div className="flex-1 md:ml-64 min-h-screen bg-[#0D0D0E] flex flex-col">
        <AppTopbar displayName="Guest" showSignOut={false} />
        <main className="flex-1 px-6 py-10">
          <div className="max-w-6xl mx-auto space-y-8">
            <section className="rounded-2xl border border-[#2D2D30] bg-[#161618] p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#F98012] font-semibold">
                    Project Group Sync
                  </p>
                  <h1 className="mt-2 text-3xl font-semibold text-zinc-100">
                    Keep group work and project tasks aligned
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
                  <Users className="size-6 text-[#F98012] mb-4" />
                  <h2 className="text-lg font-semibold text-zinc-100">Team sync</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Align teammates, deadlines and roles from all your course group projects.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#2D2D30] bg-[#0D0D0E] p-5">
                  <Briefcase className="size-6 text-[#F98012] mb-4" />
                  <h2 className="text-lg font-semibold text-zinc-100">Task boards</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Monitor deliverables, progress, and blockers in a single project sync view.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#2D2D30] bg-[#0D0D0E] p-5">
                  <Layers className="size-6 text-[#F98012] mb-4" />
                  <h2 className="text-lg font-semibold text-zinc-100">Integrated tools</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Link your group chat, assignment tracker, and course workspace without switching apps.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#2D2D30] bg-[#0D0D0E] p-5">
                  <MessageSquare className="size-6 text-[#F98012] mb-4" />
                  <h2 className="text-lg font-semibold text-zinc-100">Group notes</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Capture meeting notes, action items, and decision logs for every project team.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#2D2D30] bg-[#161618] p-8">
              <h2 className="text-2xl font-semibold text-zinc-100">Guest functionality</h2>
              <p className="mt-3 text-sm text-zinc-400">
                You can explore Project Group Sync as a guest and see how the workflow works. Sign in anytime to save project boards, join teams, and sync real updates.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[#2D2D30] bg-[#0D0D0E] p-6">
                  <p className="font-mono-label text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Explore
                  </p>
                  <p className="mt-3 text-sm text-zinc-300">
                    Browse the project-sync interface and see how group tasks are organized.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#2D2D30] bg-[#0D0D0E] p-6">
                  <p className="font-mono-label text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Connect
                  </p>
                  <p className="mt-3 text-sm text-zinc-300">
                    Understand team coordination, shared deadlines, and collaboration status without signing in.
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
