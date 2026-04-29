"use client"

import { useState } from "react"
import { Send, Check, Loader2, Mail, MessageCircle, ArrowUpRight } from "lucide-react"

export function LPContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    interest: "industrial",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const formatPhone = (v: string) => {
    const digits = v.replace(/\D/g, "").slice(0, 11)
    if (digits.length <= 2) return digits
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    if (digits.length <= 10)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    await new Promise((r) => setTimeout(r, 1400))
    setStatus("success")
  }

  const interests = [
    { value: "industrial", label: "Consultoria Industrial" },
    { value: "magistral", label: "Consultoria Magistral" },
    { value: "labpro", label: "Formulator AI Lab Pro" },
    { value: "palestra", label: "Palestra / Aula" },
  ]

  return (
    <section id="contato" className="relative overflow-hidden bg-[#070A11] py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(196,210,230,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(196,210,230,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Left — Editorial */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[3px] text-[#4a9eff]">
                § 05
              </span>
              <span className="h-px w-12 bg-[#4a9eff]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[3px] text-white/40">
                Contato Direto
              </span>
            </div>

            <h2 className="font-serif text-[clamp(36px,5vw,58px)] leading-[1] tracking-[-1.5px] text-white">
              Um diálogo{" "}
              <span className="italic text-[#c9a961]">de bancada.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-[1.7] text-white/60">
              Todo contato é respondido pessoalmente pela equipe técnica em até{" "}
              <span className="text-white">24 horas úteis</span>. Sem bots, sem atendimento
              terceirizado, sem intermediários.
            </p>

            {/* Quick channels */}
            <div className="mt-10 space-y-3">
              <a
                href="https://wa.me/5511981403000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all hover:border-[#4a9eff]/30 hover:bg-white/[0.04]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-all group-hover:border-[#4a9eff]/40 group-hover:bg-[#4a9eff]/[0.08]">
                  <MessageCircle className="h-5 w-5 text-white/70 group-hover:text-[#4a9eff]" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#4a9eff]">
                    WhatsApp · Canal direto
                  </div>
                  <div className="mt-0.5 text-[14px] text-white/85">+55 62 9 9999-9999</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#4a9eff]" />
              </a>

              <a
                href="mailto:contato@stfarma.com.br"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all hover:border-[#c9a961]/30 hover:bg-white/[0.04]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-all group-hover:border-[#c9a961]/40 group-hover:bg-[#c9a961]/[0.08]">
                  <Mail className="h-5 w-5 text-white/70 group-hover:text-[#c9a961]" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#c9a961]">
                    E-mail corporativo
                  </div>
                  <div className="mt-0.5 text-[14px] text-white/85">
                    contato@stfarma.com.br
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#c9a961]" />
              </a>
            </div>

            {/* Footnote */}
            <div className="mt-10 border-t border-white/[0.06] pt-6">
              <div className="font-mono text-[10px] uppercase tracking-[2.5px] text-white/35">
                Metapharma · CNPJ 00.246.124/0001-51
              </div>
              <div className="mt-1 text-[12px] text-white/40">
                Campinas — SP · Brasil · Atendimento nacional
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm lg:p-10"
          >
            {status === "success" ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#4a9eff]/30 bg-[#4a9eff]/[0.08]">
                  <Check className="h-8 w-8 text-[#4a9eff]" />
                </div>
                <h3 className="mt-6 font-serif text-3xl text-white">Recebido.</h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/55">
                  Sua solicitação foi registrada. Retornaremos pessoalmente em até 24 horas úteis.
                </p>
                <div className="mt-6 font-mono text-[10px] uppercase tracking-[2.5px] text-white/30">
                  Referência · SMT-{Date.now().toString().slice(-6)}
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8 flex items-center justify-between border-b border-white/[0.06] pb-5">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[2.5px] text-white/35">
                      Formulário · Secure
                    </div>
                    <h3 className="mt-2 font-serif text-2xl text-white">Solicitar contato</h3>
                  </div>
                  <span className="rounded-md border border-[#4a9eff]/25 bg-[#4a9eff]/[0.08] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[#7eb8ff]">
                    24h reply
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-[14px] text-white outline-none transition-all focus:border-[#4a9eff]/50 focus:bg-white/[0.04] placeholder:text-white/25"
                      placeholder="Ana Lima"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={(e) =>
                        setForm({ ...form, whatsapp: formatPhone(e.target.value) })
                      }
                      className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-[14px] text-white outline-none transition-all focus:border-[#4a9eff]/50 focus:bg-white/[0.04] placeholder:text-white/25"
                      placeholder="(62) 9 9999-9999"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                    E-mail profissional
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-[14px] text-white outline-none transition-all focus:border-[#4a9eff]/50 focus:bg-white/[0.04] placeholder:text-white/25"
                    placeholder="ana@farmacia.com.br"
                  />
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                    Interesse principal
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {interests.map((i) => (
                      <button
                        key={i.value}
                        type="button"
                        onClick={() => setForm({ ...form, interest: i.value })}
                        className={`rounded-lg border px-3 py-2.5 text-[12px] font-semibold transition-all ${
                          form.interest === i.value
                            ? "border-[#4a9eff]/50 bg-[#4a9eff]/[0.08] text-[#7eb8ff]"
                            : "border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white/80"
                        }`}
                      >
                        {i.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-[14px] text-white outline-none transition-all focus:border-[#4a9eff]/50 focus:bg-white/[0.04] placeholder:text-white/25"
                    placeholder="Conte-nos brevemente sobre sua operação, desafio atual e escopo esperado."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#c9a961] px-6 py-4 text-[12px] font-bold uppercase tracking-[2px] text-[#070A11] shadow-[0_12px_40px_rgba(201,169,97,0.2)] transition-all hover:bg-[#d4b673] hover:shadow-[0_16px_50px_rgba(201,169,97,0.35)] disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar solicitação
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[2px] text-white/30">
                  Dados tratados conforme LGPD · Sem spam
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
