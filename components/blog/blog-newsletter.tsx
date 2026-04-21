"use client"

import { useState } from "react"
import { Mail, Send, ShieldCheck } from "lucide-react"
import { DNAHelix, MoleculeIllustration } from "@/components/illustrations"

export function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#b87333]/15 blur-3xl" />
        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#2dd4bf]/10 blur-3xl" />
      </div>

      <DNAHelix className="pointer-events-none absolute left-[4%] top-1/2 hidden h-64 w-20 -translate-y-1/2 text-[#b87333] opacity-20 lg:block" />
      <MoleculeIllustration className="pointer-events-none absolute right-[5%] top-1/2 hidden h-56 w-56 -translate-y-1/2 text-[#2dd4bf] opacity-20 lg:block" />

      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 text-center backdrop-blur-sm md:p-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e8a87c]/30 bg-[#b87333]/10 px-4 py-1.5">
            <Mail className="h-3.5 w-3.5 text-[#e8a87c]" />
            <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#e8a87c]">
              Boletim científico mensal
            </span>
          </div>

          <h2 className="mx-auto mt-6 max-w-[720px] font-serif text-3xl leading-[1.1] tracking-tight text-white md:text-5xl">
            Receba, em primeira mão, os{" "}
            <em className="text-[#e8a87c]">artigos técnicos</em> que viram protocolo no seu balcão.
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-base leading-relaxed text-white/65 md:text-lg">
            Uma carta científica mensal, curada pelo Prof. Samir — sem spam, sem promoção, só
            ciência aplicável. Formulações novas, revisões de literatura, achados de congresso
            e bastidores da pesquisa CNPq-UNICAMP.
          </p>

          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setSubmitted(true)
              }}
              className="mx-auto mt-10 flex max-w-[540px] flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu-email@farmacia.com.br"
                className="flex-1 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-[#e8a87c] focus:bg-white/10"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#b87333] to-[#a0632c] px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(184,115,51,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(184,115,51,0.5)]"
              >
                Assinar boletim
                <Send className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <div className="mx-auto mt-10 inline-flex items-center gap-3 rounded-xl border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-6 py-4">
              <ShieldCheck className="h-5 w-5 text-[#86efd4]" />
              <span className="text-sm font-semibold text-white">
                Inscrição confirmada. Em breve, o próximo artigo chegará à sua caixa.
              </span>
            </div>
          )}

          <p className="mt-6 text-xs tracking-wide text-white/40">
            Sem compartilhamento de dados. Cancelamento em um clique. Conforme LGPD.
          </p>
        </div>
      </div>
    </section>
  )
}
