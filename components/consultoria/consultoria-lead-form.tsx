"use client"

import { useState } from "react"
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Phone,
  User,
  Building2,
  Target,
  Lock,
  Sparkles,
  Calendar,
  ShieldCheck,
} from "lucide-react"

const operationTypes = [
  "Farmacia magistral · 1 unidade",
  "Farmacia magistral · 2+ unidades",
  "Industria cosmetica / farmaceutica",
  "Marca propria / cosmetica",
  "Clinica com manipulacao",
  "Pesquisador / consultor independente",
  "Outro",
]

const mainPains = [
  "Disputa por preco com concorrentes",
  "Portfolio sem diferenciacao tecnica",
  "Pipeline de lancamentos travado",
  "Time sem direcao tecnica",
  "Falta de relacionamento com prescritores",
  "Margem espremida / ticket baixo",
]

const investmentRanges = [
  "Ate R$ 5.000/mes",
  "R$ 5.000 a R$ 12.000/mes",
  "R$ 12.000 a R$ 25.000/mes",
  "Acima de R$ 25.000/mes",
  "Ainda preciso entender",
]

export function ConsultoriaLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    operation: "",
    pain: "",
    goal: "",
    investment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission - in production, replace with real endpoint
    await new Promise((r) => setTimeout(r, 1200))
    console.log("[v0] consultoria lead:", formData)
    setIsSuccess(true)
    setIsSubmitting(false)
  }

  return (
    <section
      id="consultoria-lead"
      className="relative overflow-hidden bg-[#0a1628] py-20 md:py-28"
    >
      {/* Background flourish */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#b87333]/10 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-[#2dd4bf]/8 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden>
          <defs>
            <pattern id="leadGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leadGrid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:gap-14">
          {/* LEFT — Pitch */}
          <div className="flex flex-col">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#b87333]/30 bg-[#b87333]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8a87c]">
              <Sparkles className="h-3.5 w-3.5" />
              Diagnostico gratuito · 30 min
            </div>

            <h2 className="mt-6 font-serif text-3xl leading-[1.05] tracking-tight text-white md:text-5xl">
              O proximo passo da sua operacao{" "}
              <em className="text-[#e8a87c]">comeca com 30 minutos.</em>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              Voce preenche o formulario com 7 perguntas, eu analiso sua resposta antes da call e
              chego com 3 hipoteses de diagnostico. Voce sai dessa conversa com clareza —
              independente de fechar consultoria ou nao.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Sigilo total",
                  desc: "NDA assinado antes de qualquer informacao sensivel ser compartilhada.",
                },
                {
                  icon: Calendar,
                  title: "Resposta em ate 24h",
                  desc: "Recebe um link para agendar a call no melhor horario, em ate um dia util.",
                },
                {
                  icon: Lock,
                  title: "Sem empurrar pacote",
                  desc: "Se a sua operacao nao precisa de consultoria agora, eu te digo na hora.",
                },
              ].map((b, i) => {
                const Icon = b.icon
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b87333]/12 text-[#e8a87c] ring-1 ring-[#b87333]/25">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{b.title}</div>
                      <div className="mt-0.5 text-sm leading-relaxed text-white/60">{b.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Trust strip */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["SM", "AR", "LC", "PF"].map((init, i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#b87333] to-[#7a4a20] text-[11px] font-bold text-white ring-2 ring-[#0a1628]"
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-white/70">
                  <strong className="text-white">+500 operacoes</strong> ja passaram por esse
                  diagnostico
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:p-9">
              {isSuccess ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
                    <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#0a1628] md:text-3xl">
                    Solicitacao recebida.
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#0a1628]/65">
                    Em ate 24h voce recebe no e-mail um link para agendar a call de diagnostico no
                    melhor horario.
                  </p>
                  <a
                    href="https://wa.me/5511981403000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#1eb858]"
                  >
                    Quero antecipar pelo WhatsApp
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-2 flex items-center gap-2 border-b border-[#0a1628]/10 pb-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b87333]">
                      Solicitar diagnostico
                    </span>
                    <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0a1628]/50">
                      7 perguntas · 90s
                    </span>
                  </div>

                  {/* Name */}
                  <Field
                    icon={User}
                    label="Seu nome"
                    placeholder="Como voce gosta de ser chamado"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(v) => setFormData({ ...formData, name: v })}
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <Field
                      icon={Mail}
                      label="E-mail profissional"
                      placeholder="seu@email.com"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(v) => setFormData({ ...formData, email: v })}
                    />
                    <Field
                      icon={Phone}
                      label="WhatsApp (com DDD)"
                      placeholder="(11) 9 0000-0000"
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(v) => setFormData({ ...formData, whatsapp: v })}
                    />
                  </div>

                  {/* Operation type */}
                  <SelectField
                    icon={Building2}
                    label="Tipo de operacao"
                    required
                    value={formData.operation}
                    onChange={(v) => setFormData({ ...formData, operation: v })}
                    options={operationTypes}
                  />

                  {/* Main pain */}
                  <SelectField
                    icon={Target}
                    label="Maior dor da operacao hoje"
                    required
                    value={formData.pain}
                    onChange={(v) => setFormData({ ...formData, pain: v })}
                    options={mainPains}
                  />

                  {/* Goal textarea */}
                  <div>
                    <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-[#0a1628]">
                      <Sparkles className="h-4 w-4 text-[#b87333]" />
                      O que voce quer ter resolvido em 90 dias?
                    </label>
                    <textarea
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      placeholder="Ex: lancar 6 protocolos autorais, treinar minha equipe, dobrar ticket medio..."
                      rows={3}
                      className="w-full resize-none rounded-xl border border-[#0a1628]/12 bg-[#fbf7f1] px-4 py-3 text-[15px] text-[#0a1628] outline-none transition-all placeholder:text-[#0a1628]/35 focus:border-[#b87333] focus:bg-white focus:ring-4 focus:ring-[#b87333]/10"
                    />
                  </div>

                  {/* Investment */}
                  <SelectField
                    label="Faixa de investimento estudada"
                    value={formData.investment}
                    onChange={(v) => setFormData({ ...formData, investment: v })}
                    options={investmentRanges}
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-between gap-3 rounded-2xl bg-gradient-to-br from-[#c98a4b] to-[#a96a2f] px-6 py-5 text-base font-bold text-white shadow-[0_12px_40px_rgba(184,115,51,0.45)] transition-all hover:translate-y-[-2px] hover:shadow-[0_16px_50px_rgba(184,115,51,0.6)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span className="tracking-wide">
                      {isSubmitting ? "Enviando..." : "Solicitar diagnostico gratuito"}
                    </span>
                    {isSubmitting ? (
                      <span className="h-9 w-9 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                      </span>
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-[12px] text-[#0a1628]/50">
                    <Lock className="h-3 w-3" />
                    Seus dados ficam comigo. Nada de spam, sem compartilhamento.
                  </p>
                </form>
              )}
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 right-6 rounded-full bg-emerald-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg">
              100% gratuito
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- field helpers ---------- */

type FieldProps = {
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  placeholder?: string
  type?: string
  required?: boolean
  value: string
  onChange: (v: string) => void
}

function Field({ icon: Icon, label, placeholder, type = "text", required, value, onChange }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-[#0a1628]">
        {Icon && <Icon className="h-4 w-4 text-[#b87333]" strokeWidth={1.8} />}
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-[#0a1628]/12 bg-[#fbf7f1] px-4 py-3 text-[15px] text-[#0a1628] outline-none transition-all placeholder:text-[#0a1628]/35 focus:border-[#b87333] focus:bg-white focus:ring-4 focus:ring-[#b87333]/10"
      />
    </div>
  )
}

type SelectProps = {
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  required?: boolean
  value: string
  onChange: (v: string) => void
  options: string[]
}

function SelectField({ icon: Icon, label, required, value, onChange, options }: SelectProps) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-[#0a1628]">
        {Icon && <Icon className="h-4 w-4 text-[#b87333]" strokeWidth={1.8} />}
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full appearance-none rounded-xl border border-[#0a1628]/12 bg-[#fbf7f1] px-4 py-3 text-[15px] text-[#0a1628] outline-none transition-all focus:border-[#b87333] focus:bg-white focus:ring-4 focus:ring-[#b87333]/10"
      >
        <option value="">Selecione uma opcao</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
