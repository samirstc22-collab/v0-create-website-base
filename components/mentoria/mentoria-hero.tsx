"use client"

import { ArrowRight, Shield, Users, Microscope, Award } from "lucide-react"
import Link from "next/link"

export function MentoriaHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#0a1628] via-[#0C2340] to-[#1a3a5c] overflow-hidden">
      {/* Premium Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(184,120,61,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Exclusive Badge */}
            <div className="inline-flex items-center gap-2 bg-[#B8783D]/15 border border-[#B8783D]/30 rounded-full px-4 py-2 mb-8">
              <Shield className="w-4 h-4 text-[#B8783D]" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-[#B8783D]">
                Programa Exclusivo · Vagas Limitadas
              </span>
            </div>

            <h1 className="font-serif text-[clamp(40px,5vw,64px)] text-white leading-[1.05] tracking-[-1px] mb-6">
              Mentoria{" "}
              <span className="text-[#B8783D]">Premium</span>
              <br />
              <span className="text-white/90">em Formulacao</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-8">
              Pacote exclusivo de consultoria tecnica com{" "}
              <strong className="text-white">4 sessoes direcionadas</strong> para resolver
              duvidas especificas da industria cosmetica e farmacias magistrais. Atendimento
              personalizado com acesso direto ao consultor.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { icon: Users, value: "4", label: "Sessoes tecnicas" },
                { icon: Microscope, value: "100%", label: "Personalizado" },
                { icon: Award, value: "Premium", label: "Materiais inclusos" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#B8783D]" />
                  </div>
                  <div className="font-serif text-2xl text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#plans"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-[#B8783D] to-[#8a5729] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_32px_rgba(184,120,61,0.35)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(184,120,61,0.45)] transition-all"
              >
                Ver Planos Mensais
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/consultoria"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Consultoria Avulsa
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Hexagonal Frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 border-2 border-[#B8783D]/20 rotate-45 rounded-3xl" />
                <div className="absolute w-64 h-64 border border-[#B8783D]/30 rotate-12 rounded-3xl" />
              </div>
              
              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#B8783D]/20 to-[#B8783D]/5 border border-[#B8783D]/30 flex items-center justify-center">
                    <span className="font-serif text-6xl text-[#B8783D]">ST</span>
                  </div>
                  <div className="text-white/80 text-sm font-bold tracking-[3px] uppercase">
                    Mentoria Premium
                  </div>
                  <div className="text-white/40 text-xs mt-2">
                    Industria Cosmetica · Magistral
                  </div>
                </div>
              </div>

              {/* Floating Tags */}
              {[
                { text: "Peptideos", pos: "top-0 left-0" },
                { text: "Bioativos", pos: "top-0 right-0" },
                { text: "P&D", pos: "bottom-0 left-0" },
                { text: "Claims", pos: "bottom-0 right-0" },
              ].map((tag, i) => (
                <div
                  key={i}
                  className={`absolute ${tag.pos} bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5`}
                >
                  <span className="text-xs font-medium text-white/70">{tag.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
