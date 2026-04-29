"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sparkles, Brain, Zap, MessageSquare, ArrowLeft, Bell, FlaskConical } from "lucide-react"

export function IAHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-[#0A1628] pt-24 pb-24 md:pt-32 md:pb-32">
      {/* Background ESTATICO - sem canvas/animacoes pesadas que travam */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 30% 20%, rgba(157, 190, 177, 0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 70% 80%, rgba(212, 185, 140, 0.14) 0%, transparent 60%),
            linear-gradient(135deg, #0A1628 0%, #0F1F38 50%, #152544 100%)
          `,
        }}
      />

      {/* Grid pattern fino - sem animacao */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(157, 190, 177, 0.6) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Botao Voltar - elegante e claro */}
      <div className="absolute top-24 left-6 lg:left-10 z-30">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0A1628]/70 backdrop-blur-md border border-[#D4B98C]/30 text-[#F4EDE0] text-[13px] font-semibold hover:bg-[#0A1628]/90 hover:border-[#D4B98C]/55 transition-all"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </Link>
      </div>

      <div className="relative z-[10] mx-auto max-w-5xl px-6 lg:px-8 text-center mt-12">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-[#9DBEB1]/40 bg-[#9DBEB1]/12 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[2.5px] text-[#9DBEB1] mb-8 backdrop-blur-sm transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#9DBEB1] opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9DBEB1]" />
          </span>
          iA Labs · Lancamento Em Breve
        </div>

        {/* Headline com mais impacto */}
        <h1
          className={`font-serif text-[clamp(48px,7vw,84px)] leading-[0.96] tracking-[-2.5px] text-[#F4EDE0] mb-7 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ textShadow: "0 2px 30px rgba(0,0,0,0.6)" }}
        >
          iA Labs{" "}
          <em className="italic bg-gradient-to-r from-[#9DBEB1] via-[#c9e0d6] to-[#9DBEB1] bg-clip-text text-transparent">
            Formulador
          </em>
        </h1>

        <p
          className={`text-[20px] md:text-[24px] text-[#F4EDE0]/90 max-w-3xl mx-auto mb-4 leading-[1.4] font-light transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
        >
          A primeira <strong className="text-[#F4EDE0] font-bold">inteligencia cientifica brasileira</strong> treinada
          em base autoral de pesquisa em formulas.
        </p>

        <p
          className={`text-[16px] md:text-[18px] text-[#F4EDE0]/65 max-w-2xl mx-auto mb-10 leading-[1.6] transition-all duration-700 delay-250 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Pergunte sobre <strong className="text-[#9DBEB1]">ativos</strong>,{" "}
          <strong className="text-[#9DBEB1]">veiculos</strong>,{" "}
          <strong className="text-[#9DBEB1]">incompatibilidades</strong>,{" "}
          <strong className="text-[#9DBEB1]">protocolos clinicos</strong> e receba respostas tecnicas validadas em
          segundos.
        </p>

        {/* Feature pills */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { icon: MessageSquare, text: "Respostas instantaneas" },
            { icon: Brain, text: "Conhecimento exclusivo" },
            { icon: FlaskConical, text: "Sugestoes de formulacao" },
            { icon: Zap, text: "24/7 disponivel" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F4EDE0]/[0.06] border border-[#F4EDE0]/[0.14] backdrop-blur-md"
            >
              <item.icon className="w-4 h-4 text-[#9DBEB1]" />
              <span className="text-[13px] font-semibold text-[#F4EDE0]/95">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA principal grande e em destaque */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={scrollToWaitlist}
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#a68449] via-[#D4B98C] to-[#a68449] text-[#0A1628] px-10 py-5 rounded-2xl font-bold text-[16px] tracking-wide hover:shadow-[0_0_60px_rgba(212,185,140,0.7)] transition-all shadow-[0_15px_50px_rgba(212,185,140,0.45)] hover:translate-y-[-3px]"
          >
            <Bell className="w-5 h-5" />
            Entrar na Lista de Espera
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
          <Link
            href="#demo"
            className="inline-flex items-center justify-center gap-2 bg-[#F4EDE0]/[0.05] border border-[#F4EDE0]/15 text-[#F4EDE0] px-8 py-5 rounded-2xl font-bold text-[15px] tracking-wide hover:bg-[#F4EDE0]/[0.1] hover:border-[#F4EDE0]/25 transition-all backdrop-blur-md"
          >
            Ver Demonstracao
          </Link>
        </div>

        {/* Social proof */}
        <p
          className={`text-[12px] text-[#F4EDE0]/50 mt-6 uppercase tracking-[2px] font-semibold transition-all duration-700 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          + 1.247 profissionais ja garantiram acesso antecipado
        </p>
      </div>
    </section>
  )
}
