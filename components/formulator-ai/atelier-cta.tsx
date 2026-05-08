"use client"

import Link from "next/link"
import { ArrowUpRight, Instagram } from "lucide-react"

export function AtelierCta() {
  return (
    <section className="relative bg-gradient-to-br from-[#0A1628] via-[#0F1F38] to-[#0A1628] text-white py-24 lg:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#c9a368]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#9DBEB1]/10 rounded-full blur-[160px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 185, 140, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 185, 140, 0.6) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="eyebrow text-[#c9a368] mb-6">Consultoria · Pesquisa · Formação</p>

        {/* Headline */}
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8 text-balance">
          Desenvolvimento de
          <br />
          <span className="italic text-gradient-copper">Formulações Dermatológicas</span>
        </h2>

        {/* Subtitle */}
        <p className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Consultoria técnica-científica em cosmetologia avançada para farmácias de manipulação,
          indústria cosmética e marcas dermocosméticas premium.
        </p>

        {/* Service tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {[
            "Bases galênicas exclusivas",
            "Protocolos magistrais",
            "Dossiês farmacotécnicos",
            "Rigor clínico",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold tracking-wide uppercase text-white/70 bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contato"
            className="group inline-flex items-center gap-3 bg-gradient-to-br from-[#c9a368] to-[#8a6d3a] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(201,163,104,0.3)] hover:shadow-[0_12px_40px_rgba(201,163,104,0.4)]"
          >
            Solicitar Consultoria
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/portfolio-inovacoes"
            className="group inline-flex items-center gap-3 bg-white/5 border border-white/15 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all hover:bg-white/10 hover:border-[#c9a368]/40"
          >
            Ver Portfólio Completo
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Footer signature */}
        <div className="border-t border-white/10 pt-10 max-w-md mx-auto">
          <p className="font-serif text-2xl md:text-3xl text-white tracking-tight mb-2">
            Prof. Samir Tannuri
          </p>
          <p className="text-[#9DBEB1] text-xs tracking-[2px] uppercase font-semibold mb-4">
            Pesquisa · Consultoria · Formação
          </p>

          <div className="flex items-center justify-center gap-6 text-sm">
            <a
              href="https://instagram.com/samir_farma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#c9a368] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @samir_farma
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white/60">Clube de Fórmulas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
