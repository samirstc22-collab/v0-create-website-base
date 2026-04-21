"use client"

import { useState } from "react"
import { User, Mail, Phone, Send, ShieldCheck, FileText } from "lucide-react"
import { DNAHelix, MoleculeIllustration } from "@/components/illustrations"

export function BlogContactForm() {
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "" })
  const [submitted, setSubmitted] = useState(false)

  function formatWhatsApp(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11)
    if (digits.length <= 2) return digits
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#b87333]/15 blur-3xl" />
        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#2dd4bf]/10 blur-3xl" />
      </div>

      <DNAHelix className="pointer-events-none absolute left-[3%] top-1/2 hidden h-64 w-20 -translate-y-1/2 text-[#b87333] opacity-20 lg:block" />
      <MoleculeIllustration className="pointer-events-none absolute right-[4%] top-1/2 hidden h-56 w-56 -translate-y-1/2 text-[#2dd4bf] opacity-20 lg:block" />

      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="grid gap-0 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm lg:grid-cols-5">
          {/* Left: copy */}
          <div className="relative flex flex-col justify-between gap-10 border-b border-white/10 p-10 md:p-14 lg:col-span-2 lg:border-b-0 lg:border-r">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e8a87c]/30 bg-[#b87333]/10 px-4 py-1.5">
                <FileText className="h-3.5 w-3.5 text-[#e8a87c]" />
                <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#e8a87c]">
                  Fale com o autor
                </span>
              </div>
              <h2 className="mt-6 font-serif text-3xl leading-[1.05] tracking-tight text-white md:text-[44px]">
                Gostou do artigo?{" "}
                <em className="text-[#e8a87c]">Converse diretamente</em> com o Prof. Samir.
              </h2>
              <p className="mt-5 text-base leading-[1.7] text-white/70 md:text-lg">
                Dúvidas clínicas, sugestões de pauta, pedidos de parecer técnico ou convites para
                congressos — envie sua mensagem abaixo e nossa equipe retorna em até{" "}
                <strong className="text-white">48 horas úteis</strong> pelo WhatsApp.
              </p>
            </div>

            <ul className="space-y-3 text-sm text-white/75">
              {[
                "Resposta personalizada — não automática",
                "Canal direto com o time científico",
                "Atendimento em português, inglês e espanhol",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8a87c]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="p-10 md:p-14 lg:col-span-3">
            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (form.nome && form.email && form.whatsapp) setSubmitted(true)
                }}
                className="space-y-5"
              >
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[1.5px] text-white/60">
                    Nome completo
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    <input
                      required
                      type="text"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      placeholder="Como você gostaria de ser chamado(a)"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.06] py-4 pl-11 pr-5 text-base text-white placeholder:text-white/35 outline-none transition focus:border-[#e8a87c] focus:bg-white/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[1.5px] text-white/60">
                    E-mail profissional
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="seu-email@farmacia.com.br"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.06] py-4 pl-11 pr-5 text-base text-white placeholder:text-white/35 outline-none transition focus:border-[#e8a87c] focus:bg-white/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[1.5px] text-white/60">
                    WhatsApp com DDD
                  </label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    <input
                      required
                      type="tel"
                      inputMode="numeric"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: formatWhatsApp(e.target.value) })}
                      placeholder="(62) 90000-0000"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.06] py-4 pl-11 pr-5 text-base text-white placeholder:text-white/35 outline-none transition focus:border-[#e8a87c] focus:bg-white/10"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#b87333] to-[#a0632c] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(184,115,51,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(184,115,51,0.5)]"
                >
                  Enviar mensagem ao Prof. Samir
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <p className="pt-2 text-center text-xs tracking-wide text-white/40">
                  Seus dados são protegidos. Usamos apenas para retornar seu contato. Conforme LGPD.
                </p>
              </form>
            ) : (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10">
                  <ShieldCheck className="h-8 w-8 text-[#86efd4]" />
                </div>
                <h3 className="font-serif text-2xl text-white md:text-3xl">
                  Mensagem recebida.
                </h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-white/65">
                  Nossa equipe entrará em contato pelo WhatsApp informado em até 48 horas úteis.
                  Enquanto isso, que tal entrar na nossa comunidade gratuita logo abaixo?
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
