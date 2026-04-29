import Image from "next/image"
import Link from "next/link"
import { Sparkles, ArrowRight, FlaskConical, Microscope } from "lucide-react"

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-[#0096B4]/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#B8783D]/15 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
          <defs>
            <pattern id="portfolioHeroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#portfolioHeroGrid)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        {/* Copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0096B4]/40 bg-[#0096B4]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2.5px] text-[#5eead4]">
            <Sparkles className="h-3.5 w-3.5" />
            Portfolio Cientifico 2019 — 2025
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl text-balance">
            +20 fórmulas autorais para <em className="text-[#e8a87c]">indústria cosmética</em> &amp;{" "}
            <em className="text-[#5eead4]">marcas líderes</em>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl text-pretty">
            Seis anos de pesquisa aplicada em <strong className="text-white">indústria Grau I e II</strong>,
            magistral e marcas próprias — em P&amp;D, criação de produto, inovação e formulação de
            matéria-prima.
          </p>

          {/* Stats */}
          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
              <div className="font-serif text-3xl text-white">20+</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[1.5px] text-white/55">
                Fórmulas autorais
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
              <div className="font-serif text-3xl text-white">I &amp; II</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[1.5px] text-white/55">
                Indústria · Grau
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
              <div className="font-serif text-3xl text-white">6</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[1.5px] text-white/55">
                Anos de P&amp;D
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
              <div className="font-serif text-3xl text-white">9</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[1.5px] text-white/55">
                Áreas terapêuticas
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#vitrine"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#B8783D] to-[#8a5729] px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_-10px_rgba(184,120,61,0.6)] transition-all hover:-translate-y-0.5"
            >
              <FlaskConical className="h-4 w-4" />
              Ver vitrine completa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
            >
              <Microscope className="h-4 w-4" />
              Solicitar briefing técnico
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#0096B4]/20 via-transparent to-[#B8783D]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/51gclugLt3L._AC_SL1200_-KEOu75hUCbTKotDCnEAgbYfwmd6svd.jpg"
              alt="Serum Facial Clareador Rosa Selvagem — Niacinamida 25%, Acido Hialuronico e Alpha-Arbutin"
              width={800}
              height={1000}
              className="w-full h-[520px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 text-[11px] font-bold uppercase tracking-[1.5px] text-[#0C2340] shadow-lg">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0096B4] animate-pulse" />
                Niacinamida 25% — Bench to Bedside
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 hidden md:block">
            <div className="rounded-2xl border border-[#d4af37]/30 bg-[#0a1628] px-4 py-3 shadow-2xl">
              <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#d4af37]">
                Visia&reg;
              </div>
              <div className="font-serif text-2xl text-white">+30,5%</div>
              <div className="text-[10px] text-white/60">melhora media</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
