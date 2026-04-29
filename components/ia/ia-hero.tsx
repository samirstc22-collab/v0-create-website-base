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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050a14] via-[#0a1d36] to-[#0C2340] pt-24 pb-24 md:pt-32 md:pb-32">
      {/* Botao Voltar */}
      <div className="absolute top-24 left-6 lg:left-10 z-30">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15 text-white text-[13px] font-semibold hover:bg-white/[0.12] hover:border-white/25 transition-all"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </Link>
      </div>

      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Neural network effect */}
        <div className="absolute inset-0 opacity-[0.12]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <defs>
              <pattern id="neural" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1.5" fill="#0db5c8">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="25" cy="25" r="1" fill="#d4a574" />
                <circle cx="75" cy="75" r="1" fill="#d4a574" />
                <circle cx="25" cy="75" r="0.8" fill="#0db5c8" opacity="0.6" />
                <circle cx="75" cy="25" r="0.8" fill="#0db5c8" opacity="0.6" />
                <line x1="50" y1="50" x2="25" y2="25" stroke="#0db5c8" strokeWidth="0.4" opacity="0.5" />
                <line x1="50" y1="50" x2="75" y2="75" stroke="#0db5c8" strokeWidth="0.4" opacity="0.5" />
                <line x1="50" y1="50" x2="25" y2="75" stroke="#d4a574" strokeWidth="0.3" opacity="0.4" />
                <line x1="50" y1="50" x2="75" y2="25" stroke="#d4a574" strokeWidth="0.3" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural)" />
          </svg>
        </div>

        {/* Glows */}
        <div className="absolute left-1/4 top-20 h-[500px] w-[500px] rounded-full bg-[#0db5c8]/25 blur-[100px] animate-pulse" />
        <div
          className="absolute right-1/4 bottom-20 h-[400px] w-[400px] rounded-full bg-[#B8783D]/20 blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center mt-12">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-[#0db5c8]/40 bg-[#0db5c8]/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[2.5px] text-[#5eead4] mb-8 backdrop-blur-sm transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#5eead4] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5eead4]" />
          </span>
          Lancamento Em Breve
        </div>

        {/* Headline com mais impacto */}
        <h1
          className={`font-serif text-[clamp(48px,7vw,84px)] leading-[0.96] tracking-[-2.5px] text-white mb-7 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
        >
          IA Lab{" "}
          <span className="relative inline-block">
            <em className="italic bg-gradient-to-r from-[#0db5c8] via-[#5eead4] to-[#0db5c8] bg-clip-text text-transparent">
              Formulador
            </em>
          </span>
        </h1>

        <p
          className={`text-[20px] md:text-[24px] text-white/85 max-w-3xl mx-auto mb-4 leading-[1.4] font-light transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
        >
          A primeira <strong className="text-white font-bold">inteligencia artificial brasileira</strong> treinada exclusivamente em farmacia magistral.
        </p>

        <p
          className={`text-[16px] md:text-[18px] text-white/65 max-w-2xl mx-auto mb-10 leading-[1.6] transition-all duration-700 delay-250 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Pergunte sobre <strong className="text-[#5eead4]">ativos</strong>,{" "}
          <strong className="text-[#5eead4]">veiculos</strong>,{" "}
          <strong className="text-[#5eead4]">incompatibilidades</strong>,{" "}
          <strong className="text-[#5eead4]">protocolos clinicos</strong> e receba respostas tecnicas validadas em segundos.
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
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.12] backdrop-blur-md"
            >
              <item.icon className="w-4 h-4 text-[#5eead4]" />
              <span className="text-[13px] font-semibold text-white/95">{item.text}</span>
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
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0db5c8] via-[#5eead4] to-[#0db5c8] text-[#0C2340] px-10 py-5 rounded-2xl font-bold text-[16px] tracking-wide hover:shadow-[0_0_60px_rgba(13,181,200,0.7)] transition-all shadow-[0_15px_50px_rgba(13,181,200,0.5)] hover:translate-y-[-3px]"
          >
            <Bell className="w-5 h-5" />
            Entrar na Lista de Espera
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
          <Link
            href="#demo"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.05] border border-white/15 text-white px-8 py-5 rounded-2xl font-bold text-[15px] tracking-wide hover:bg-white/[0.1] hover:border-white/25 transition-all backdrop-blur-md"
          >
            Ver Demonstracao Interativa
          </Link>
        </div>

        {/* Social proof */}
        <p
          className={`text-[12px] text-white/50 mt-6 uppercase tracking-[2px] font-semibold transition-all duration-700 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          + 1.247 profissionais ja garantiram acesso antecipado
        </p>
      </div>
    </section>
  )
}
