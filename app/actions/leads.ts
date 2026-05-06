"use server"

import { createClient } from "@supabase/supabase-js"

export type LeadSource =
  | "contato"
  | "consultoria"
  | "newsletter-popup"
  | "lead-magnet-protocolo"
  | "blog-newsletter"
  | "blog-contact"
  | "lead-quiz"
  | "lead-capture-clube"

export type LeadPayload = {
  source: LeadSource
  email: string
  name?: string
  whatsapp?: string
  page_url?: string
  interest?: string
  message?: string
  operation?: string
  pain?: string
  goal?: string
  investment?: string
  quiz_profile?: string
  quiz_need?: string
  quiz_timeline?: string
  metadata?: Record<string, unknown>
}

export type LeadResult =
  | { ok: true }
  | { ok: false; error: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } },
  )
}

function clean(value?: string | null) {
  if (!value) return null
  const trimmed = String(value).trim()
  return trimmed.length ? trimmed : null
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  const email = clean(payload.email)?.toLowerCase()

  if (!email || !EMAIL_RE.test(email)) {
    return { ok: false, error: "E-mail invalido." }
  }

  if (!payload.source) {
    return { ok: false, error: "Origem do lead nao informada." }
  }

  const supabase = getSupabase()

  const { error } = await supabase.from("leads").insert({
    source: payload.source,
    email,
    name: clean(payload.name),
    whatsapp: clean(payload.whatsapp),
    page_url: clean(payload.page_url),
    interest: clean(payload.interest),
    message: clean(payload.message),
    operation: clean(payload.operation),
    pain: clean(payload.pain),
    goal: clean(payload.goal),
    investment: clean(payload.investment),
    quiz_profile: clean(payload.quiz_profile),
    quiz_need: clean(payload.quiz_need),
    quiz_timeline: clean(payload.quiz_timeline),
    metadata: payload.metadata ?? {},
  })

  if (error) {
    console.log("[v0] submitLead error:", error.message)
    return { ok: false, error: "Nao foi possivel registrar agora. Tente novamente." }
  }

  return { ok: true }
}
