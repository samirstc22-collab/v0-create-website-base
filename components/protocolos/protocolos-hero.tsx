"use client"

import { ArrowRight, Stethoscope, FlaskConical, FileCheck, Sparkles } from "lucide-react"
import Link from "next/link"

export function ProtocolosHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#1a4d6e] via-[#0d7a80] to-[#0a8f9e] overflow-hidden">
      {/* Medical Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
              <Stethoscope className="w-4 h-4 text-white" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-white/90">
                Para Clinicas & Prescritores
              </span>
            </div>

            <h1 className="font-serif text-[clamp(40px,5vw,64px)] text-white leading-[1.05] tracking-[-1px] mb-6">
              Protocolos{" "}
              <span className="text-[#e8f4f8]">Clinicos</span>
              <br />
              <span className="italic">Inovadores</span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed max-w-xl mb-8">
              Consultoria exclusiva para desenvolvimento de{" "}
              <strong className="text-white">protocolos dermatologicos</strong> com abordagem
              cutting-edge. Ativos de ultima geracao, evidencia cientifica e
              diferenciais competitivos para sua clinica.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: FlaskConical, text: "Ativos cutting-edge" },
                { icon: FileCheck, text: "Protocolos validados" },
                { icon: Sparkles, text: "Formulas exclusivas" },
                { icon: Stethoscope, text: "Suporte clinico" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white/90" />
                  </div>
                  <span className="text-sm font-medium text-white/80">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511981403000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0d7a80] px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all"
              >
                Solicitar Consultoria
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/mentoria"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-white/15 hover:border-white/30 transition-all"
              >
                Conhecer Mentoria
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl border border-white/10" />
              <div className="absolute inset-4 bg-white/5 rounded-2xl border border-white/10" />
              
              {/* Content */}
              <div className="absolute inset-8 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <Stethoscope className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">Dermatologia</h3>
                <p className="text-sm text-white/60 mb-6">Protocolos personalizados</p>
                
                {/* Protocol Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Melasma", "Acne", "Rosacea", "Anti-aging", "Sensitiva"].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="text-xs text-[#64748b] mb-1">Protocolos desenvolvidos</div>
                <div className="font-serif text-2xl text-[#0d7a80]">127+</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="text-xs text-[#64748b] mb-1">Clinicas atendidas</div>
                <div className="font-serif text-2xl text-[#0d7a80]">45+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
