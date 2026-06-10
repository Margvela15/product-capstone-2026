"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export type AuthFormState = { error?: string; success?: string } | null

function humanizeAuthError(message: string): string {
  const normalized = message.toLowerCase()
  if (normalized.includes("invalid login credentials")) {
    return "Email or password is incorrect."
  }
  if (normalized.includes("email not confirmed")) {
    return "Please confirm your email before signing in."
  }
  if (normalized.includes("user already registered")) {
    return "An account with that email already exists. Please sign in instead."
  }
  if (normalized.includes("email rate limit")) {
    return "Signup is temporarily blocked because too many verification emails were sent. Wait a few minutes and try again."
  }
  if (normalized.includes("rate limit")) {
    return "Too many attempts — please wait a moment and try again."
  }
  return message
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function signInAction(
  _prev: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const email = String(formData.get("email") ?? "").trim()
  const password = String(formData.get("password") ?? "")

  if (!email) {
    return { error: "Please enter your email." }
  }
  if (!isValidEmail(email)) {
    return { error: "Please enter a valid email address." }
  }
  if (!password) {
    return { error: "Please enter your password." }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { error: humanizeAuthError(error.message) }
  }

  revalidatePath("/", "layout")
  redirect("/dashboard")
}

export async function signUpAction(
  _prev: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const fullName = String(formData.get("full_name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const password = String(formData.get("password") ?? "")

  if (!fullName) {
    return { error: "Please enter your full name." }
  }
  if (!email) {
    return { error: "Please enter your email." }
  }
  if (!isValidEmail(email)) {
    return { error: "Please enter a valid email address." }
  }
  if (!password || password.length < 8) {
    return { error: "Password must be at least 8 characters long." }
  }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  })

  if (error) {
    return { error: humanizeAuthError(error.message) }
  }

  if (!data.session) {
    return {
      success: "Check your email to confirm your account, then sign in.",
    }
  }

  revalidatePath("/", "layout")
  redirect("/dashboard")
}

export async function signOutAction(): Promise<void> {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/login")
}
