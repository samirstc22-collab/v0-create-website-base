"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, Zap, Brain, FlaskConical, Home } from "lucide-react"

export function AIHero() {
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [currentPrompt, setCurrentPrompt] = useState(0)

  const prompts = [
    "Formule um sérum anti-idade com peptídeos...",
    "Calcule a estabilidade de uma emulsão O/A...",
    "Sugira veículos para retinol 0,5%...",
    "Otimize o pH para ácido glicólico 10%...",
  ]

  useEffect(() => {
    const prompt = prompts[currentPrompt]
    let i = 0
    setTypedText("")

    const typeInterval = setInterval(() => {
      if (i < prompt.length) {
        setTypedText(prompt.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentPrompt((prev) => (prev + 1) % prompts.length)
        }, 2000)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [currentPrompt])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050a12]">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Neural network grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, #4a9eff 1px, transparent 0)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#4a9eff]/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/6 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#06b6d4]/5 rounded-full blur-[150px]" />

        {/* Scan lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #4a9eff 2px, #4a9eff 3px)",
            backgroundSize: "100% 4px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#4a9eff]/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Home Button - Fixed top left */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/70 hover:text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Voltar ao Inicio</span>
        </Link>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#4a9eff]/10 border border-[#4a9eff]/20 rounded-full px-4 py-2 mb-8">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4a9eff] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4a9eff]" />
              </div>
              <span className="text-[#7eb8ff] text-xs font-bold tracking-[2px] uppercase">
                Inteligência Formulatória
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.02] tracking-[-2px] mb-6">
              Formulator
              <br />
              <span className="bg-gradient-to-r from-[#4a9eff] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                AI Lab Pro
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-8 max-w-lg">
              A primeira IA de formulação cosmética do Brasil.{" "}
              <span className="text-white/90">
                Treinada com +4.000 fórmulas validadas, literatura peer-reviewed e 24 anos de bancada real.
              </span>
            </p>

            {/* Key benefits */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: Brain, text: "IA treinada com dados reais" },
                { icon: FlaskConical, text: "4.000+ fórmulas validadas" },
                { icon: Zap, text: "Respostas em segundos" },
                { icon: Sparkles, text: "Referências PubMed" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4a9eff]/10 border border-[#4a9eff]/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#4a9eff]" />
                  </div>
                  <span className="text-sm text-white/70">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#demo"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#4a9eff] to-[#8b5cf6] text-white px-8 py-4 rounded-xl font-bold text-base tracking-wide hover:shadow-[0_0_40px_rgba(74,158,255,0.4)] transition-all"
              >
                Testar gratuitamente
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#recursos"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-colors"
              >
                Ver recursos
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-sm text-white/40">
              +20.000 consultas respondidas · Usado por profissionais em 17 estados
            </p>
          </div>

          {/* Right: AI Interface mockup */}
          <div className="relative">
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a9eff]/20 via-[#8b5cf6]/10 to-transparent rounded-3xl blur-3xl" />

            {/* Interface card */}
            <div className="relative bg-[#0a1221]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white/5 rounded-lg px-4 py-1.5 text-xs text-white/40 font-mono">
                    formulator.clubedeformulas.com.br
                  </div>
                </div>
              </div>

              {/* Chat interface */}
              <div className="p-6 space-y-4 min-h-[400px]">
                {/* User prompt */}
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-[#4a9eff] to-[#8b5cf6] rounded-2xl rounded-tr-md px-5 py-3 max-w-[85%]">
                    <p className="text-white text-sm">
                      {typedText}
                      <span className={`inline-block w-0.5 h-4 bg-white ml-0.5 ${showCursor ? "opacity-100" : "opacity-0"}`} />
                    </p>
                  </div>
                </div>

                {/* AI response */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4a9eff] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-md px-5 py-4 max-w-[85%]">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#28c840] animate-pulse" />
                      <span className="text-xs text-[#28c840] font-semibold">Analisando base de dados...</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-white/10 rounded w-full animate-pulse" />
                      <div className="h-3 bg-white/10 rounded w-4/5 animate-pulse" style={{ animationDelay: "0.1s" }} />
                      <div className="h-3 bg-white/10 rounded w-3/5 animate-pulse" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-[10px] font-mono text-white/30 tracking-wider uppercase">
                  <span>Model: Formulator-v3.2</span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-[#0a1221] border border-[#4a9eff]/30 rounded-xl px-4 py-2 shadow-xl">
              <div className="text-[10px] text-[#4a9eff] font-bold tracking-wider uppercase mb-0.5">Precisão</div>
              <div className="text-xl font-serif text-white">97.3%</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-[#0a1221] border border-[#8b5cf6]/30 rounded-xl px-4 py-2 shadow-xl">
              <div className="text-[10px] text-[#8b5cf6] font-bold tracking-wider uppercase mb-0.5">Respostas</div>
              <div className="text-xl font-serif text-white">20.847</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#0a1221"
          />
        </svg>
      </div>
    </section>
  )
}
