"use client"

import { useState, useEffect } from "react"
import { X, Mail, Phone, User, Sparkles, FlaskConical, ShieldCheck, FileDown, Download } from "lucide-react"

const STORAGE_KEY = "stfarma_protocol_dismissed"

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const isDismissed = localStorage.getItem(STORAGE_KEY)
    if (isDismissed) return

    // Aparece logo ao abrir o site (4 segundos para o usuário se ambientar)
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  // Bloqueia scroll do body quando aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem(STORAGE_KEY, "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSuccess(true)
    setTimeout(() => {
      handleClose()
    }, 3500)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="protocol-popup-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#04101e]/80 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[920px] overflow-hidden rounded-[28px] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.55)] animate-in zoom-in-95 slide-in-from-bottom-6 duration-500">
        {/* Botão fechar — sempre visível, elegante */}
        <button
          onClick={handleClose}
          className="group absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#0a1628] shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all hover:scale-105 hover:bg-white md:right-5 md:top-5"
          aria-label="Fechar"
        >
          <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
        </button>

        <div className="grid md:grid-cols-[42%_58%]">
          {/* Coluna esquerda — capa editorial do protocolo */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#152544] md:block">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 70% 50% at 30% 20%, rgba(212, 185, 140, 0.22) 0%, transparent 60%),
                  radial-gradient(ellipse 60% 50% at 80% 90%, rgba(46, 212, 191, 0.10) 0%, transparent 60%)
                `,
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(212,185,140,0.7) 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Capa do "livro" — protocolo */}
            <div className="relative flex h-full flex-col justify-between p-8 lg:p-10">
              <div>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D4B98C]/40 bg-[#D4B98C]/10 px-3.5 py-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#D4B98C]" />
                  <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#D4B98C]">
                    Material gratuito · PDF
                  </span>
                </div>

                {/* Mock do "livro" / capa do protocolo */}
                <div className="relative mx-auto w-full max-w-[260px]">
                  <div
                    aria-hidden
                    className="absolute -inset-4 rounded-[18px] bg-gradient-to-br from-[#D4B98C]/30 to-transparent blur-2xl"
                  />
                  <div className="relative overflow-hidden rounded-[14px] border border-white/15 bg-gradient-to-br from-[#fbf8f3] to-[#f0e9da] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.5)] aspect-[3/4]">
                    {/* Topo capa */}
                    <div className="text-[8px] font-bold uppercase tracking-[2px] text-[#b87333]">
                      ST Farma
                    </div>
                    <div className="mt-1 text-[8px] font-semibold uppercase tracking-[1.5px] text-[#0a1628]/55">
                      Protocolo Técnico
                    </div>

                    <div className="mt-6">
                      <h3 className="font-serif text-[22px] leading-[1.05] text-[#0a1628]">
                        Pós-Procedimentos{" "}
                        <em className="text-[#b87333]">Estéticos</em>
                      </h3>
                      <p className="mt-2 text-[10px] leading-snug text-[#0a1628]/60">
                        Fórmulas para reparação cutânea, regeneração e
                        anti-inflamatório tópico.
                      </p>
                    </div>

                    {/* Hexágonos moleculares */}
                    <svg
                      viewBox="0 0 100 60"
                      className="mt-5 h-12 w-full text-[#b87333]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    >
                      <polygon points="20,15 32,10 44,15 44,30 32,35 20,30" />
                      <polygon points="44,30 56,25 68,30 68,45 56,50 44,45" />
                      <polygon points="68,15 80,10 92,15 92,30 80,35 68,30" />
                      <line x1="32" y1="10" x2="32" y2="3" />
                      <line x1="56" y1="25" x2="56" y2="18" />
                      <line x1="80" y1="10" x2="80" y2="3" />
                      <circle cx="32" cy="3" r="1.5" fill="currentColor" />
                      <circle cx="56" cy="18" r="1.5" fill="currentColor" />
                      <circle cx="80" cy="3" r="1.5" fill="currentColor" />
                    </svg>

                    <div className="mt-5 border-t border-[#0a1628]/10 pt-3">
                      <div className="text-[8px] font-semibold uppercase tracking-[1.5px] text-[#0a1628]/45">
                        Por
                      </div>
                      <div className="font-serif text-[13px] text-[#0a1628]">
                        Samir Tannuri
                      </div>
                    </div>

                    {/* Selo lateral */}
                    <div className="absolute right-3 top-3 rotate-12 rounded border border-[#b87333]/40 bg-[#b87333]/10 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-[1px] text-[#b87333]">
                      Edição 2026
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-6 grid grid-cols-2 gap-2 lg:gap-3">
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                  <ShieldCheck className="h-3.5 w-3.5 flex-shrink-0 text-[#5eead4]" />
                  <span className="text-[10px] font-semibold leading-tight text-white/85">
                    Base científica
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                  <FlaskConical className="h-3.5 w-3.5 flex-shrink-0 text-[#D4B98C]" />
                  <span className="text-[10px] font-semibold leading-tight text-white/85">
                    Pronto para usar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita — formulário */}
          <div className="relative px-6 py-10 sm:px-10 md:py-12">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#D4B98C] to-[#b87333] text-white shadow-[0_12px_30px_rgba(184,115,51,0.4)]">
                  <Download className="h-9 w-9" strokeWidth={2.2} />
                  <span
                    aria-hidden
                    className="absolute inset-0 animate-ping rounded-full bg-[#D4B98C]/40"
                  />
                </div>
                <h3 className="font-serif text-[28px] leading-tight text-[#0a1628]">
                  Protocolo a caminho!
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#0a1628]/70">
                  Em instantes você receberá o PDF no seu e-mail e uma mensagem no WhatsApp para
                  confirmar a entrega.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#5eead4]/30 bg-[#5eead4]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[1.5px] text-[#0d8a7f]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Seus dados estão seguros
                </div>
              </div>
            ) : (
              <>
                {/* Eyebrow + Título — visível em mobile sem a capa */}
                <div className="mb-7">
                  <div className="mb-3 inline-flex items-center gap-2 md:hidden">
                    <Sparkles className="h-3.5 w-3.5 text-[#b87333]" />
                    <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#b87333]">
                      Material gratuito · PDF
                    </span>
                  </div>
                  <h2
                    id="protocol-popup-title"
                    className="font-serif text-[28px] leading-[1.05] tracking-[-0.01em] text-[#0a1628] sm:text-[34px] md:text-[36px]"
                  >
                    Ganhe o{" "}
                    <em className="text-[#b87333]">Protocolo de Fórmulas</em>{" "}
                    Pós-Procedimentos Estéticos
                  </h2>
                  <p className="mt-3 text-justify text-[15px] leading-relaxed text-[#0a1628]/70">
                    Um guia técnico autoral com as melhores fórmulas para reparação cutânea,
                    regeneração e cuidado pós peeling, laser e procedimentos injetáveis. Receba
                    direto no seu e-mail e WhatsApp.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#94a3b8]" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome completo"
                      required
                      className="w-full rounded-xl border border-[#0a1628]/15 bg-[#0a1628]/[0.02] py-3.5 pl-11 pr-4 text-[15px] text-[#0a1628] placeholder:text-[#94a3b8] transition-all focus:border-[#b87333] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b87333]/20"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#94a3b8]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail"
                      required
                      className="w-full rounded-xl border border-[#0a1628]/15 bg-[#0a1628]/[0.02] py-3.5 pl-11 pr-4 text-[15px] text-[#0a1628] placeholder:text-[#94a3b8] transition-all focus:border-[#b87333] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b87333]/20"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#94a3b8]" />
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="WhatsApp com DDD"
                      required
                      className="w-full rounded-xl border border-[#0a1628]/15 bg-[#0a1628]/[0.02] py-3.5 pl-11 pr-4 text-[15px] text-[#0a1628] placeholder:text-[#94a3b8] transition-all focus:border-[#b87333] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b87333]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#b87333] to-[#9a6530] py-4 text-[15px] font-bold tracking-wide text-white shadow-[0_10px_30px_-10px_rgba(184,115,51,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(184,115,51,0.7)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Enviando o protocolo...
                      </>
                    ) : (
                      <>
                        <FileDown className="h-5 w-5" />
                        Quero receber o protocolo agora
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-[#0a1628]/50">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>
                    Seus dados são confidenciais — sem spam, cancele quando quiser.
                  </span>
                </div>

                <button
                  onClick={handleClose}
                  className="mx-auto mt-4 block text-[12px] text-[#0a1628]/40 underline-offset-2 transition-colors hover:text-[#0a1628]/60 hover:underline"
                >
                  Não quero o material agora
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
