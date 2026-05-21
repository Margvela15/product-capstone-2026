"use client"

import { useActionState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

import { signUpAction, type AuthFormState } from "@/app/auth/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const initialState: AuthFormState = null

export function SignupForm() {
  const [state, formAction, pending] = useActionState(signUpAction, initialState)

  if (state?.success) {
    return (
      <div className="w-full max-w-sm bg-[#161618] border border-emerald-500/30 flex flex-col">
        <div className="p-6 border-b border-[#2D2D30]">
          <div className="flex items-center gap-2 mb-3 font-mono-label text-emerald-500">
            <Check className="size-3" />
            ACCOUNT PROVISIONED
          </div>
          <h1 className="text-xl font-semibold text-zinc-100 tracking-tight">
            Check your inbox
          </h1>
          <p className="mt-1 text-sm text-zinc-500">{state.success}</p>
        </div>
        <div className="p-6">
          <p className="text-center text-sm text-zinc-500">
            Confirmed your email?{" "}
            <Link
              href="/login"
              className="font-medium text-[#F98012] hover:text-[#ffb787]"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm bg-[#161618] border border-[#2D2D30] flex flex-col">
      <div className="p-6 border-b border-[#2D2D30]">
        <div className="flex items-center gap-2 mb-3 font-mono-label text-zinc-500">
          <span className="w-1.5 h-1.5 bg-[#F98012] rounded-full animate-pulse" />
          IDENTITY PROVISIONING
        </div>
        <h1 className="text-xl font-semibold text-zinc-100 tracking-tight">
          Create your KIU Nexus account
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          One inbox for all your coursework — Moodle, Teams, and WhatsApp in one
          place.
        </p>
      </div>
      <form action={formAction} className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="full_name"
            className="font-mono-label text-zinc-500"
          >
            FULL NAME
          </Label>
          <Input
            id="full_name"
            name="full_name"
            type="text"
            autoComplete="name"
            required
            disabled={pending}
            className="bg-[#0D0D0E] border-[#2D2D30] rounded-sm focus-visible:ring-[#F98012] focus-visible:border-[#F98012]"
          />
        </div>
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
            autoComplete="new-password"
            minLength={8}
            required
            disabled={pending}
            className="bg-[#0D0D0E] border-[#2D2D30] rounded-sm focus-visible:ring-[#F98012] focus-visible:border-[#F98012]"
          />
          <p className="font-mono-label text-zinc-600">MIN 8 CHARACTERS</p>
        </div>
        {state?.error ? (
          <div
            className="border border-destructive/30 bg-destructive/10 p-3"
            aria-live="polite"
          >
            <p className="font-mono-label text-destructive">
              PROVISIONING FAILED
            </p>
            <p className="text-sm text-zinc-300 mt-1">{state.error}</p>
          </div>
        ) : null}
        <Button
          type="submit"
          className="w-full bg-[#F98012] hover:bg-[#ffb787] text-[#1a0900] font-bold uppercase font-mono-label tracking-wider rounded-sm"
          disabled={pending}
        >
          {pending ? "Provisioning..." : "Create account"}
        </Button>
        <p className="text-center text-sm text-zinc-500 mt-2">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#F98012] hover:text-[#ffb787]"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  )
}
