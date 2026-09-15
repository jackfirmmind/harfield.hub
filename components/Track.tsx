"use client";
import { createClient } from "@supabase/supabase-js";

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  { auth: { persistSession: false } }
);

export type TrackType = "view" | "whatsapp_tap" | "call_tap" | "save" | "page_view";

/** Fire and forget. Never block the user on analytics. */
export function track(businessId: string, type: TrackType) {
  try {
    void sb.from("activity").insert({ business_id: businessId, type });
  } catch {
    /* ignore */
  }
}
