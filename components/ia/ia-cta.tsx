"use client"

import { useState } from "react"
import { Bell, Check, Sparkles } from "lucide-react"

export function IACta() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="waitlist" className="py-20 md:py-28 bg-gradient-to-br from-[#0C2340] via-[#1a3a5f] to-[#0a1628]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0db5c8] to-[#5eead4] flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(13,181,200,0.3)]">
          <Bell className="w-10 h-10 text-white" />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-6">
          Seja o primeiro a <em className="text-[#5eead4]">experimentar</em>
        </h2>

        <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
          Cadastre seu e-mail e receba acesso antecipado quando a IA Formulador estiver disponivel.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-8 py-5">
            <Check className="w-6 h-6 text-emerald-400" />
            <span className="text-lg font-semibold text-white">Voce esta na lista de espera!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 outline-none focus:border-[#0db5c8] transition-colors"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0db5c8] to-[#5eead4] text-[#0C2340] px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-[0_8px_30px_rgba(13,181,200,0.3)]"
            >
              <Sparkles className="w-5 h-5" />
              Quero acesso
            </button>
          </form>
        )}

        <p className="text-sm text-white/50 mt-6">
          Sem spam. Apenas atualizacoes sobre o lancamento.
        </p>
      </div>
    </section>
  )
}
