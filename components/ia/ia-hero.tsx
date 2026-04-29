"use client"

import { useState, useEffect } from "react"
import { Sparkles, Brain, Zap, MessageSquare } from "lucide-react"

export function IAHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0C2340] via-[#1a3a5f] to-[#0a1628] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Neural network effect */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#0db5c8" className="animate-pulse" />
                <circle cx="25" cy="25" r="0.5" fill="#B8783D" />
                <circle cx="75" cy="75" r="0.5" fill="#B8783D" />
                <line x1="50" y1="50" x2="25" y2="25" stroke="#0db5c8" strokeWidth="0.3" opacity="0.5" />
                <line x1="50" y1="50" x2="75" y2="75" stroke="#0db5c8" strokeWidth="0.3" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural)" />
          </svg>
        </div>
        
        {/* Glows */}
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-[#0db5c8]/20 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-[#B8783D]/15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-[#0db5c8]/40 bg-[#0db5c8]/10 px-5 py-2 text-xs font-bold uppercase tracking-[2px] text-[#5eead4] mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Brain className="h-4 w-4 animate-pulse" />
          Em Breve
        </div>

        {/* Headline */}
        <h1
          className={`font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-white mb-6 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Conheca o{" "}
          <span className="relative inline-block">
            <em className="italic bg-gradient-to-r from-[#0db5c8] to-[#5eead4] bg-clip-text text-transparent">IA Formulador</em>
            <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-[#B8783D] animate-pulse" />
          </span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-white/75 max-w-3xl mx-auto mb-10 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Seu assistente inteligente treinado com anos de conhecimento em formulacao magistral. 
          Pergunte sobre <strong className="text-white">ativos</strong>, <strong className="text-white">veiculos</strong>, 
          <strong className="text-white"> incompatibilidades</strong> e muito mais.
        </p>

        {/* Feature pills */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { icon: MessageSquare, text: "Respostas instantaneas" },
            { icon: Brain, text: "Base de conhecimento exclusiva" },
            { icon: Zap, text: "Sugestoes de formulacao" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <item.icon className="w-5 h-5 text-[#0db5c8]" />
              <span className="text-sm font-medium text-white/90">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Coming soon badge */}
        <div
          className={`transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#B8783D]/20 to-[#0db5c8]/20 border border-[#B8783D]/30 rounded-2xl px-8 py-4">
            <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-lg font-semibold text-white">Lancamento em breve</span>
          </div>
        </div>
      </div>
    </section>
  )
}
