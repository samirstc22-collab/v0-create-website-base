"use client"

import { useState } from "react"
import { Send, MessageCircle, Mail, CheckCircle2, Loader2 } from "lucide-react"

export function LPContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    interest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const interests = [
    "Consultoria Industrial",
    "Consultoria Magistral",
    "Formulator AI Lab Pro",
    "Palestras e Cursos",
    "Outro",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    if (numbers.length <= 11)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  if (isSubmitted) {
    return (
      <section id="contato" className="relative overflow-hidden bg-[#08080c] py-32">
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
            <CheckCircle2 className="h-10 w-10 text-green-500" />
          </div>
          <h2 className="font-serif text-4xl text-white">Mensagem enviada!</h2>
          <p className="mt-4 text-lg text-white/60">
            Obrigado pelo contato. Retornaremos em até 24 horas.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({ name: "", email: "", whatsapp: "", interest: "", message: "" })
            }}
            className="mt-8 rounded-xl border border-white/20 px-6 py-3 text-white transition-colors hover:bg-white/5"
          >
            Enviar nova mensagem
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-[#08080c] py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#c9a227]/10 blur-[120px]" />
        <div className="absolute right-1/4 top-0 h-[300px] w-[300px] rounded-full bg-[#4a9eff]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-4 py-1.5">
              <Mail className="h-4 w-4 text-[#c9a227]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#c9a227]">
                Contato
              </span>
            </div>

            <h2 className="font-serif text-4xl text-white md:text-5xl">
              Vamos conversar sobre o{" "}
              <span className="bg-gradient-to-r from-[#c9a227] to-[#e8c547] bg-clip-text text-transparent">
                seu projeto
              </span>
            </h2>

            <p className="mt-6 text-lg text-white/60">
              Preencha o formulário ao lado e receba uma proposta personalizada para a sua
              necessidade. Resposta garantida em até 24 horas.
            </p>

            {/* Quick contact */}
            <div className="mt-10 space-y-4">
              <a
                href="https://wa.me/5562999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-green-500/30 hover:bg-green-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <div className="font-semibold text-white">WhatsApp Direto</div>
                  <div className="text-sm text-white/50">Resposta rápida para urgências</div>
                </div>
              </a>

              <a
                href="mailto:contato@clubedeformulas.com.br"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-[#4a9eff]/30 hover:bg-[#4a9eff]/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9eff]/20">
                  <Mail className="h-6 w-6 text-[#4a9eff]" />
                </div>
                <div>
                  <div className="font-semibold text-white">contato@clubedeformulas.com.br</div>
                  <div className="text-sm text-white/50">Para propostas e parcerias</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Nome completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all placeholder:text-white/30 focus:border-[#c9a227]/50 focus:bg-white/[0.08]"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">E-mail</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all placeholder:text-white/30 focus:border-[#c9a227]/50 focus:bg-white/[0.08]"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: formatWhatsApp(e.target.value) })
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all placeholder:text-white/30 focus:border-[#c9a227]/50 focus:bg-white/[0.08]"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Interesse</label>
                <select
                  required
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all focus:border-[#c9a227]/50 focus:bg-white/[0.08]"
                >
                  <option value="" className="bg-[#08080c]">
                    Selecione uma opção
                  </option>
                  {interests.map((interest) => (
                    <option key={interest} value={interest} className="bg-[#08080c]">
                      {interest}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Mensagem</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all placeholder:text-white/30 focus:border-[#c9a227]/50 focus:bg-white/[0.08]"
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#c9a227] to-[#b8941f] px-8 py-4 font-bold text-[#08080c] shadow-[0_10px_40px_rgba(201,162,39,0.3)] transition-all hover:shadow-[0_15px_50px_rgba(201,162,39,0.4)] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-white/40">
                Suas informações estao seguras e nao serao compartilhadas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
