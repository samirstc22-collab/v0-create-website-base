"use client"

import { useState } from "react"
import { ArrowRight, Mail, Phone, User, CheckCircle2, Gift, BookOpen, FlaskConical, Sparkles } from "lucide-react"

export function LeadCaptureSection() {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Lead capturado:", formData)
    setIsSuccess(true)
  }

  const benefits = [
    { icon: BookOpen, title: "Artigos exclusivos", desc: "Conteudo tecnico semanal" },
    { icon: FlaskConical, title: "Formulas autorais", desc: "Receitas testadas em bancada" },
    { icon: Gift, title: "Lancamentos antecipados", desc: "Acesso antes de todo mundo" },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#faf6ef] relative overflow-hidden">
      {/* Pattern decorativo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8783D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna esquerda - Conteudo */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-[#B8783D]" />
              <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#B8783D]">
                Conteudo gratuito
              </span>
            </div>

            <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#0C2340] leading-[1.1] tracking-[-0.02em] mb-6">
              Entre para o <em className="italic text-[#B8783D]">Clube da Formula</em>
            </h2>

            <p className="text-[18px] text-[#4b5563] leading-relaxed mb-10">
              Receba semanalmente conteudo tecnico exclusivo, formulas testadas em bancada e novidades sobre cosmetologia diretamente no seu WhatsApp.
            </p>

            {/* Beneficios */}
            <div className="space-y-5">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B8783D]/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-[#B8783D]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] text-[16px] mb-0.5">{benefit.title}</h4>
                    <p className="text-[14px] text-[#6b7280]">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B8783D] to-[#d4a574] border-2 border-white flex items-center justify-center text-white font-semibold text-[12px]"
                  >
                    {["SM", "AR", "LC", "PF"][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-[#0C2340] text-[15px]">+2.500 membros</div>
                <div className="text-[12px] text-[#6b7280]">ja fazem parte do clube</div>
              </div>
            </div>
          </div>

          {/* Coluna direita - Formulario */}
          <div className="relative">
            {/* Card do formulario */}
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-8 lg:p-10 relative overflow-hidden">
              {/* Glow decorativo */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#B8783D]/10 rounded-full blur-3xl" />

              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-[#10b981]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#10b981]" />
                  </div>
                  <h3 className="font-serif text-[28px] text-[#0C2340] mb-3">Bem-vindo ao Clube!</h3>
                  <p className="text-[#6b7280] text-[16px]">
                    Voce recebera nosso conteudo exclusivo em breve.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981]/10 text-[#10b981] text-[12px] font-bold uppercase tracking-wider mb-4">
                      <Gift className="w-4 h-4" />
                      100% Gratuito
                    </div>
                    <h3 className="font-serif text-[24px] text-[#0C2340]">Cadastre-se agora</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#e5e7eb] bg-[#f9fafb] text-[#0C2340] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#B8783D]/30 focus:border-[#B8783D] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Seu melhor e-mail"
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#e5e7eb] bg-[#f9fafb] text-[#0C2340] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#B8783D]/30 focus:border-[#B8783D] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="WhatsApp (com DDD)"
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#e5e7eb] bg-[#f9fafb] text-[#0C2340] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#B8783D]/30 focus:border-[#B8783D] focus:bg-white transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#B8783D] text-white font-bold py-4 rounded-xl hover:bg-[#a66a32] transition-all shadow-[0_8px_24px_rgba(184,120,61,0.35)] hover:shadow-[0_12px_32px_rgba(184,120,61,0.45)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Cadastrando...
                        </>
                      ) : (
                        <>
                          Quero entrar no clube
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-center text-[12px] text-[#9ca3af] mt-5">
                    Seus dados estao protegidos. Voce pode cancelar a qualquer momento.
                  </p>
                </>
              )}
            </div>

            {/* Badge flutuante */}
            <div className="absolute -top-4 -right-4 bg-[#0C2340] text-white px-4 py-2 rounded-xl font-bold text-[12px] tracking-wide shadow-lg">
              Exclusivo
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
