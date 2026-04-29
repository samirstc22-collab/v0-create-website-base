import Image from "next/image"
import Link from "next/link"
import { Sparkles, FlaskConical, Users, ShieldCheck, ArrowRight } from "lucide-react"

export function ConsultoriaMagistralHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#b87333]/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#2dd4bf]/10 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
          <defs>
            <pattern id="magHeroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#magHeroGrid)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/30 bg-[#b87333]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#e8a87c]">
            <FlaskConical className="h-3.5 w-3.5" />
            Consultoria Magistral
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Transforme sua farmacia em{" "}
            <em className="text-[#e8a87c]">referencia tecnica</em> do mercado
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/75 md:text-xl">
            Desenvolvo <strong className="text-white">portfolios autorais</strong>, protocolos clinicos diferenciados 
            e narrativas tecnicas que tiram sua farmacia da guerra de precos e conquistam prescritores.
          </p>

          {/* Trust badges */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <ShieldCheck className="h-5 w-5 text-[#e8a87c]" />
              <div>
                <div className="text-sm font-medium text-white">+500</div>
                <div className="text-xs text-white/60">farmacias atendidas</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <Users className="h-5 w-5 text-[#e8a87c]" />
              <div>
                <div className="text-sm font-medium text-white">6 anos</div>
                <div className="text-xs text-white/60">de P&D intensivo</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <Sparkles className="h-5 w-5 text-[#e8a87c]" />
              <div>
                <div className="text-sm font-medium text-white">100%</div>
                <div className="text-xs text-white/60">personalizado</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b87333] to-[#d4a574] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#b87333]/20 transition hover:opacity-90"
            >
              <Sparkles className="w-5 h-5" />
              Solicitar Diagnostico Tecnico
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5705-Hn707YGXAWd1o4MWk44jt8mtSKkBLX.jpg"
                alt="Serum premium desenvolvido para farmacia magistral"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-white/10 bg-[#0a1628]/95 backdrop-blur p-5 shadow-2xl md:left-auto md:right-[-20px] md:max-w-xs">
              <div className="font-serif text-sm italic leading-relaxed text-white">
                &ldquo;Nao entrego formulas genericas. Cada farmacia recebe um portfolio exclusivo.&rdquo;
              </div>
              <div className="mt-3 text-xs font-medium uppercase tracking-wider text-[#e8a87c]">
                Samir Tannuri
              </div>
            </div>

            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-tr-3xl border-r-4 border-t-4 border-[#b87333]" />
          </div>
        </div>
      </div>
    </section>
  )
}
