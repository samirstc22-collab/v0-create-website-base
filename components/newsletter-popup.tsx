"use client"

import { useState, useEffect } from "react"
import { X, Mail, Phone, Sparkles, Gift, BookOpen, FlaskConical } from "lucide-react"

const STORAGE_KEY = "stfarma_newsletter_dismissed"

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    // Check if user has already dismissed
    const isDismissed = localStorage.getItem(STORAGE_KEY)
    if (isDismissed) return

    let hasTriggered = false

    // Trigger por tempo (30 segundos)
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        hasTriggered = true
        setIsOpen(true)
      }
    }, 30000)

    // Trigger por scroll (50% da pagina)
    const handleScroll = () => {
      if (hasTriggered) return
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrollPercentage >= 50) {
        hasTriggered = true
        setIsOpen(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem(STORAGE_KEY, "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSuccess(true)
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-400">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#0C2340]/5 hover:bg-[#0C2340]/10 flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5 text-[#0C2340]" />
        </button>

        {/* Header with gradient */}
        <div className="relative bg-gradient-to-br from-[#0C2340] via-[#1a3a5c] to-[#0C2340] px-8 pt-10 pb-8 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8783D]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0096B4]/20 rounded-full blur-2xl" />

          {/* Badge */}
          <div className="relative inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-5">
            <Gift className="w-4 h-4 text-[#e8a87c]" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-white/90">
              100% Gratuito
            </span>
          </div>

          {/* Title */}
          <h2 className="relative font-serif text-3xl md:text-4xl text-white leading-tight mb-3">
            Clube da <em className="text-[#e8a87c]">Formula</em>
          </h2>
          <p className="relative text-white/70 text-base max-w-sm mx-auto">
            Receba semanalmente artigos, formulas exclusivas e lancamentos direto no seu WhatsApp.
          </p>
        </div>

        {/* Content */}
        <div className="px-8 py-8">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-[#0096B4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#0096B4]" />
              </div>
              <h3 className="font-serif text-2xl text-[#0C2340] mb-2">Bem-vindo ao Clube!</h3>
              <p className="text-[#64748b]">Voce recebera nosso conteudo em breve.</p>
            </div>
          ) : (
            <>
              {/* Benefits */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { icon: BookOpen, label: "Artigos Semanais" },
                  { icon: FlaskConical, label: "Formulas Exclusivas" },
                  { icon: Sparkles, label: "Lancamentos" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#0C2340]/[0.03] border border-[#0C2340]/10"
                  >
                    <item.icon className="w-5 h-5 text-[#B8783D]" />
                    <span className="text-[10px] font-semibold text-[#0C2340] text-center leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#0C2340]/15 bg-[#0C2340]/[0.02] text-[#0C2340] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#B8783D]/30 focus:border-[#B8783D] transition-all"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="WhatsApp (com DDD)"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#0C2340]/15 bg-[#0C2340]/[0.02] text-[#0C2340] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#B8783D]/30 focus:border-[#B8783D] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#B8783D] to-[#9a6530] text-white font-bold py-4 rounded-xl hover:shadow-[0_8px_24px_rgba(184,120,61,0.35)] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Entrando no Clube...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Quero receber conteudo gratuito
                    </>
                  )}
                </button>
              </form>

              {/* Privacy note */}
              <p className="text-center text-xs text-[#94a3b8] mt-5 leading-relaxed">
                Seus dados estao seguros. Nao enviamos spam.
                <br />
                Cancele quando quiser.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
