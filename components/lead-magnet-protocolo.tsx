"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Download,
  Sparkles,
  Mail,
  Phone,
  Check,
  ShieldCheck,
  Lock,
  FileText,
  Clock,
  ArrowRight,
} from "lucide-react"

const formulas = [
  "Serum despigmentante com Tranexamico 5%",
  "Locao calmante pos-laser com Centella + Bisabolol",
  "Mascara reparadora com Niacinamida + Alfa-Arbutina",
  "Locao tonica com Acido Tranexamico + Acido Azelaico",
  "Creme noturno com Hidroquinona estabilizada",
  "Solucao reparadora pos-peeling profundo",
  "Serum antioxidante com Vitamina C + Ferulico",
  "Locao clareadora com Alfa-Arbutina + Resorcinol",
  "Mascara recuperadora pos-microagulhamento",
  "Protocolo de manutencao 30 dias",
]

export function LeadMagnetProtocolo() {
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulacao de envio - integrar com API real
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#050a14] via-[#0C2340] to-[#0a1a33] overflow-hidden">
      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,165,116,0.6) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glows decorativos */}
      <div
        aria-hidden
        className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184,120,61,0.25), transparent 60%)",
          filter: "blur(100px)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(13,181,200,0.18), transparent 60%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Badge superior */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B8783D]/30 to-[#d4a574]/30 border border-[#d4a574]/50 text-[#d4a574] text-[11px] font-bold uppercase tracking-[2.5px] backdrop-blur-md shadow-[0_0_30px_rgba(184,120,61,0.3)]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Material Inedito · 100% Gratuito
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Coluna esquerda - Capa do e-book */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-[440px] mx-auto">
              {/* Glow atras */}
              <div
                className="absolute -inset-12 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(184,120,61,0.4), transparent 60%)",
                  filter: "blur(60px)",
                }}
              />

              {/* Capa do livro */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10 transform hover:rotate-[-2deg] transition-transform duration-500">
                {/* Imagem de fundo */}
                <Image
                  src="/protocolo-hiperpigmentacao.jpg"
                  alt="Protocolo Hiperpigmentacao Pos-Inflamatoria"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />

                {/* Overlay escuro para legibilidade */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/40 via-[#050a14]/70 to-[#050a14]/95" />

                {/* Conteudo da capa */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                  {/* Topo */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4a574]/20 border border-[#d4a574]/40 text-[#d4a574] text-[9px] font-bold uppercase tracking-[2px] mb-4">
                      <FileText className="w-3 h-3" />
                      Protocolo Inedito
                    </div>
                    <div className="text-[#d4a574] text-[10px] font-bold uppercase tracking-[3px] mb-2">
                      ST Farma · Edicao Tecnica
                    </div>
                  </div>

                  {/* Titulo central - LETRAS GRANDES E CHAMATIVAS */}
                  <div className="flex-1 flex flex-col justify-center py-4">
                    <div className="text-[#d4a574] text-[11px] font-bold uppercase tracking-[3px] mb-3">
                      10 Formulas Exclusivas
                    </div>
                    <h3 className="font-serif text-white text-[34px] lg:text-[42px] leading-[0.95] tracking-[-1.5px] mb-4">
                      Protocolo Pos-Procedimento
                    </h3>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-[#B8783D] to-[#d4a574] mb-4" />
                    <p className="text-white/85 text-[14px] lg:text-[15px] leading-[1.4] font-light">
                      Como evitar a hiperpigmentacao pos-inflamatoria com formulacoes magistrais validadas.
                    </p>
                  </div>

                  {/* Base */}
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-white/50 text-[9px] uppercase tracking-[2px] mb-1">Por</div>
                      <div className="text-white text-[14px] font-bold">Samir Tannuri</div>
                      <div className="text-[#d4a574] text-[10px] font-medium">
                        Farmaceutico Pesquisador
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/50 text-[9px] uppercase tracking-[2px] mb-1">Formato</div>
                      <div className="text-white text-[12px] font-bold">PDF · 28 paginas</div>
                    </div>
                  </div>
                </div>

                {/* Sombra de profundidade do livro */}
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-black/40 to-transparent" />
              </div>

              {/* Badge "GRATIS" flutuante */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-[#B8783D] to-[#d4a574] rounded-full flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(184,120,61,0.5)] rotate-12 border-4 border-white/20">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider">
                  100%
                </span>
                <span className="text-white text-[22px] font-bold leading-none mt-1">
                  GRATIS
                </span>
              </div>
            </div>
          </div>

          {/* Coluna direita - Formulario */}
          <div className="order-1 lg:order-2">
            {/* Headline impactante */}
            <h2
              className="font-serif text-[clamp(34px,5vw,56px)] leading-[1.0] tracking-[-1.5px] text-white mb-5"
              style={{ textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
            >
              Receba <em className="italic bg-gradient-to-r from-[#d4a574] via-[#B8783D] to-[#d4a574] bg-clip-text text-transparent">10 formulas</em> que protegem a pele apos procedimentos
            </h2>

            <p className="text-[18px] md:text-[20px] text-white/85 leading-[1.55] mb-7 font-light">
              Protocolo completo com formulacoes magistrais que <strong className="text-white font-semibold">previnem a hiperpigmentacao pos-inflamatoria</strong> e aceleram a recuperacao apos peelings, laser, microagulhamento e outros procedimentos dermatologicos.
            </p>

            {/* O que inclui */}
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-7">
              <div className="text-[11px] font-bold uppercase tracking-[2px] text-[#d4a574] mb-3 flex items-center gap-2">
                <Check className="w-4 h-4" />
                O que voce vai receber
              </div>
              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {formulas.slice(0, 6).map((formula, i) => (
                  <div key={i} className="flex items-start gap-2 text-[13px] text-white/90">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#d4a574] flex-shrink-0" />
                    <span className="leading-snug">{formula}</span>
                  </div>
                ))}
              </div>
              <div className="text-[12px] text-[#d4a574] font-semibold mt-3 pt-3 border-t border-white/10">
                + 4 formulas exclusivas + protocolo de aplicacao 30 dias
              </div>
            </div>

            {/* Formulario */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4a574] focus:bg-white/[0.1] transition-all text-[15px]"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-xl pl-12 pr-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4a574] focus:bg-white/[0.1] transition-all text-[15px]"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                    className="w-full bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-xl pl-12 pr-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4a574] focus:bg-white/[0.1] transition-all text-[15px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#B8783D] via-[#d4a574] to-[#B8783D] text-white px-8 py-5 rounded-xl font-bold text-[16px] tracking-wide hover:shadow-[0_0_50px_rgba(184,120,61,0.7)] transition-all shadow-[0_10px_40px_rgba(184,120,61,0.5)] hover:translate-y-[-2px] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  <Download className="w-5 h-5" />
                  {loading ? "Enviando..." : "Quero Receber o Protocolo Agora"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Trust signals */}
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-white/60 pt-3">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Dados protegidos</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Entrega imediata</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Sem spam</span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-2xl p-8 text-center backdrop-blur-md">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-emerald-400" strokeWidth={3} />
                </div>
                <h3 className="text-white text-[24px] font-bold mb-2">Protocolo enviado!</h3>
                <p className="text-white/80 text-[15px]">
                  Verifique seu e-mail e WhatsApp. Em instantes voce recebera o protocolo completo.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
