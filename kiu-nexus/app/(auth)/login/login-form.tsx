"use client"

import { useActionState } from "react"
import Link from "next/link"

import { signInAction, type AuthFormState } from "@/app/auth/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const initialState: AuthFormState = null

export function LoginForm() {
  const [state, formAction, pending] = useActionState(signInAction, initialState)

  return (
    <div className="w-full max-w-sm bg-[#161618] border border-[#2D2D30] flex flex-col">
      <div className="p-6 border-b border-[#2D2D30]">
        <div className="flex items-center gap-2 mb-3 font-mono-label text-zinc-500">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          TERMINAL ACCESS
        </div>
        <h1 className="text-xl font-semibold text-zinc-100 tracking-tight">
          Welcome back to KIU Nexus
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Sign in to see today&apos;s updates across all your courses.
        </p>
      </div>
      <form action={formAction} className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="email"
            className="font-mono-label text-zinc-500"
          >
            EMAIL
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={pending}
            className="bg-[#0D0D0E] border-[#2D2D30] rounded-sm focus-visible:ring-[#F98012] focus-visible:border-[#F98012]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="password"
            className="font-mono-label text-zinc-500"
          >
            PASSWORD
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            disabled={pending}
            className="bg-[#0D0D0E] border-[#2D2D30] rounded-sm focus-visible:ring-[#F98012] focus-visible:border-[#F98012]"
          />
        </div>
        {state?.error ? (
          <div
            className="border border-destructive/30 bg-destructive/10 p-3"
            aria-live="polite"
          >
            <p className="font-mono-label text-destructive">ACCESS DENIED</p>
            <p className="text-sm text-zinc-300 mt-1">{state.error}</p>
          </div>
        ) : null}
        <Button
          type="submit"
          className="w-full bg-[#F98012] hover:bg-[#ffb787] text-[#1a0900] font-bold uppercase font-mono-label tracking-wider rounded-sm"
          disabled={pending}
        >
          {pending ? "Authenticating..." : "Sign in"}
        </Button>
        <p className="text-center text-sm text-zinc-500 mt-2">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-[#F98012] hover:text-[#ffb787]"
          >
            Provision one
          </Link>
        </p>
      </form>
    </div>
  )
}
