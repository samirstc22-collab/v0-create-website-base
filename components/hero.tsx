"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { MoleculeIllustration, DNAHelix, HexagonPattern } from "./illustrations"

export function Hero() {
  const [email, setEmail] = useState("")

  const stats = [
    { num: "4.000+", label: "Fórmulas validadas em bancada" },
    { num: "20+", label: "Indústrias cosméticas atendidas" },
    { num: "3", label: "Continentes em missão técnica" },
    { num: "1.000+", label: "Farmacêuticos formados" },
  ]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-navy via-navy-deep to-[#040C18] relative overflow-hidden"
    >
      {/* Decorative Illustrations */}
      <MoleculeIllustration className="absolute top-20 right-[5%] w-64 h-64 text-teal opacity-30 blur-[1px]" />
      <DNAHelix className="absolute bottom-10 left-[3%] w-20 h-60 text-copper opacity-20" />
      <HexagonPattern className="absolute top-1/3 right-[15%] w-48 h-48 text-white opacity-10" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-[15%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(10,143,158,0.18),transparent_65%)] blur-[60px]" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(192,133,74,0.12),transparent_65%)] blur-[50px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(10,143,158,0.06),transparent_50%)]" />

      {/* Molecular Background Pattern */}
      <svg className="absolute inset-0 opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mol" width="160" height="160" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="2.5" fill="#fff" />
            <circle cx="80" cy="40" r="2" fill="#fff" />
            <circle cx="148" cy="20" r="2.5" fill="#fff" />
            <circle cx="48" cy="90" r="2" fill="#fff" />
            <circle cx="120" cy="100" r="2.5" fill="#fff" />
            <circle cx="75" cy="145" r="2" fill="#fff" />
            <line x1="12" y1="12" x2="80" y2="40" stroke="#fff" strokeWidth="0.5" />
            <line x1="80" y1="40" x2="148" y2="20" stroke="#fff" strokeWidth="0.5" />
            <line x1="80" y1="40" x2="48" y2="90" stroke="#fff" strokeWidth="0.5" />
            <line x1="48" y1="90" x2="120" y2="100" stroke="#fff" strokeWidth="0.5" />
            <line x1="120" y1="100" x2="75" y2="145" stroke="#fff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mol)" />
      </svg>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-44 pb-28 w-full relative z-[2]">
        <div className="flex gap-20 items-center flex-wrap">
          <div className="flex-[1_1_580px] min-w-[300px]">
            {/* Kicker */}
            <div className="inline-flex items-center gap-3 bg-teal/15 border border-teal/30 rounded-full py-2.5 px-5 mb-10">
              <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-teal-light text-xs font-bold tracking-[2.5px] uppercase">
                Pesquisador · Consultor Industrial · Palestrante
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-normal text-[clamp(40px,6.5vw,78px)] leading-[1.01] text-white mb-8 tracking-[-1.8px]">
              Ciência que vira{" "}
              <span className="text-gradient-copper italic">fórmula.</span>
              <br />
              Fórmula que vira{" "}
              <span className="text-gradient-teal italic">resultado.</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-white/60 leading-[1.65] max-w-[580px] mb-10">
              Pesquisa & Desenvolvimento cosmético para indústrias, marcas independentes e
              farmácias magistrais de excelência.{" "}
              <span className="text-white/85">
                Bancada-UNICAMP, publicação peer-reviewed indexada e missões técnicas em
                três continentes — transformadas em protocolos aplicáveis ao seu balcão.
              </span>
            </p>

            {/* Email Form */}
            <div className="flex gap-3 max-w-[520px] flex-wrap">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-[1_1_260px] py-4 px-5 rounded-xl border border-white/15 bg-white/[0.06] text-white text-base font-sans outline-none transition-all focus:border-copper focus:bg-white/10 placeholder:text-white/35"
                placeholder="seu-email@farmacia.com.br"
              />
              <button className="bg-gradient-to-br from-copper to-copper-deep border-none rounded-xl py-4 px-8 text-white font-bold text-base whitespace-nowrap shadow-[0_8px_30px_rgba(192,133,74,0.35)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(192,133,74,0.5)] transition-all tracking-wide">
                Receber boletim
              </button>
            </div>

            <p className="text-sm text-white/35 mt-4 tracking-wide leading-relaxed">
              Protocolos exclusivos, lâminas técnicas e revisões científicas direto na sua caixa.
              Zero spam.
            </p>

            {/* Quick Links */}
            <div className="flex gap-5 mt-10 flex-wrap">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-white/65 hover:text-white text-sm font-semibold transition-colors"
              >
                <Play className="w-4 h-4" /> Conhecer a trajetória
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-copper-light hover:text-copper text-sm font-semibold transition-colors"
              >
                Ler o blog científico <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Visual Side */}
          <div className="flex-[0_1_460px] min-w-[300px] relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10">
              <div className="absolute top-6 left-6 bg-navy/90 backdrop-blur-xl border border-white/15 rounded-full py-2 px-4 text-xs font-bold text-copper-light tracking-[1.5px] uppercase z-[2]">
                | UNICAMP | DOI
              </div>
              <div className="w-full aspect-[4/5] bg-gradient-to-b from-navy-mid to-navy-deep flex items-center justify-center relative">
                <span className="font-serif text-[140px] text-white/[0.07]">Cf</span>
                <MoleculeIllustration className="absolute top-10 right-10 w-24 h-24 text-teal opacity-30" />
                <HexagonPattern className="absolute bottom-20 left-8 w-20 h-20 text-copper opacity-20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-deep/70 pointer-events-none" />
            </div>

            {/* Stats Card */}
            <div className="absolute bottom-[-35px] left-[-25px] right-[-25px] bg-navy/95 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-[3]">
              <div className="grid grid-cols-2 gap-5">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <span className="font-serif text-3xl text-copper-light leading-none block">
                      {stat.num}
                    </span>
                    <div className="text-xs text-white/40 mt-1.5 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
