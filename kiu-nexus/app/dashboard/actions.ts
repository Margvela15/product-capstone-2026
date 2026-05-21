"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export type AckState =
  | { error?: string; success?: { update_id: string } }
  | null

export async function acknowledgeUpdateAction(
  _prev: AckState,
  formData: FormData
): Promise<AckState> {
  const updateId = formData.get("update_id")
  if (typeof updateId !== "string" || !updateId) {
    return { error: "Missing update id." }
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { error: "Not signed in." }

  const { error } = await supabase
    .from("acknowledgments")
    .insert({ user_id: user.id, update_id: updateId })

  if (error) {
    // 23505 = unique violation -> already acknowledged, treat as success
    if (error.code === "23505") {
      return { success: { update_id: updateId } }
    }
    return { error: error.message }
  }

  revalidatePath("/dashboard")
  return { success: { update_id: updateId } }
}

export async function removeAcknowledgmentAction(
  _prev: AckState,
  formData: FormData
): Promise<AckState> {
  const updateId = formData.get("update_id")
  if (typeof updateId !== "string" || !updateId) {
    return { error: "Missing update id." }
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { error: "Not signed in." }

  const { error } = await supabase
    .from("acknowledgments")
    .delete()
    .eq("user_id", user.id)
    .eq("update_id", updateId)

  if (error) {
    return { error: error.message }
  }

  revalidatePath("/dashboard")
  return { success: { update_id: updateId } }
}
