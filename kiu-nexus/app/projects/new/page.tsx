import Link from "next/link"
import { ArrowLeft, Plus } from "lucide-react"

import { AppSidebar } from "@/components/app-sidebar"
import { AppTopbar } from "@/components/app-topbar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function NewProjectPage() {
  return (
    <div className="flex min-h-screen">
      <AppSidebar activePath="/projects" />
      <div className="flex-1 md:ml-64 min-h-screen bg-[#0D0D0E] flex flex-col">
        <AppTopbar displayName="Guest" showSignOut={false} />
        <main className="flex-1 px-6 py-10">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 flex items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <ArrowLeft className="size-5" />
              </Link>
              <h1 className="text-3xl font-semibold text-zinc-100">Create a new project</h1>
            </div>

            <form className="space-y-6 rounded-lg border border-[#2D2D30] bg-[#161618] p-8">
              <div className="space-y-2">
                <Label htmlFor="project_name" className="font-mono-label text-zinc-400">
                  PROJECT NAME
                </Label>
                <Input
                  id="project_name"
                  name="project_name"
                  type="text"
                  placeholder="e.g., Mobile App UI Redesign"
                  className="bg-[#0D0D0E] border-[#2D2D30] text-zinc-100 placeholder:text-zinc-600"
                  required
                />
                <p className="text-xs text-zinc-500">
                  Give your project a descriptive name that your team will recognize.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="project_description" className="font-mono-label text-zinc-400">
                  DESCRIPTION
                </Label>
                <textarea
                  id="project_description"
                  name="project_description"
                  placeholder="What is this project about? What are the key goals?"
                  rows={4}
                  className="w-full rounded-sm border border-[#2D2D30] bg-[#0D0D0E] px-3 py-2 text-zinc-100 placeholder:text-zinc-600 focus:border-[#F98012] focus:outline-none focus:ring-1 focus:ring-[#F98012]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="course" className="font-mono-label text-zinc-400">
                  COURSE (OPTIONAL)
                </Label>
                <Input
                  id="course"
                  name="course"
                  type="text"
                  placeholder="e.g., CS3102 - Software Engineering"
                  className="bg-[#0D0D0E] border-[#2D2D30] text-zinc-100 placeholder:text-zinc-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="due_date" className="font-mono-label text-zinc-400">
                  DUE DATE (OPTIONAL)
                </Label>
                <Input
                  id="due_date"
                  name="due_date"
                  type="date"
                  className="bg-[#0D0D0E] border-[#2D2D30] text-zinc-100"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="team_members" className="font-mono-label text-zinc-400">
                  TEAM MEMBERS (OPTIONAL)
                </Label>
                <Input
                  id="team_members"
                  name="team_members"
                  type="text"
                  placeholder="Enter email addresses separated by commas"
                  className="bg-[#0D0D0E] border-[#2D2D30] text-zinc-100 placeholder:text-zinc-600"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  className="flex items-center gap-2 bg-[#F98012] hover:bg-[#ffb787] text-[#1a0900] font-bold"
                >
                  <Plus className="size-4" />
                  Create project
                </Button>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-sm border border-[#2D2D30] bg-[#0D0D0E] px-4 py-2 text-sm font-semibold text-zinc-300 hover:bg-[#1a1a1c] transition-colors"
                >
                  Cancel
                </Link>
              </div>
            </form>

            <div className="mt-8 rounded-lg border border-[#2D2D30] bg-[#0D0D0E] p-6">
              <p className="font-mono-label text-xs uppercase text-zinc-600 mb-2">
                Guest tip
              </p>
              <p className="text-sm text-zinc-400">
                As a guest, you can preview the project creation form. Sign in to save your project and invite team members.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
