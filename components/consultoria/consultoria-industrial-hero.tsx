import Image from "next/image"
import Link from "next/link"
import { Sparkles, Building2, Microscope, Globe, ArrowRight } from "lucide-react"

export function ConsultoriaIndustrialHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0db5c8]/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#b87333]/10 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
          <defs>
            <pattern id="indHeroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#indHeroGrid)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0db5c8]/30 bg-[#0db5c8]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#5eead4]">
            <Building2 className="h-3.5 w-3.5" />
            Consultoria Industrial
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            P&D de alta performance para{" "}
            <em className="text-[#5eead4]">industrias cosmeticas</em>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/75 md:text-xl">
            Do conceito a escala: desenvolvo <strong className="text-white">prototipos com sensorial refinado</strong>, 
            claims defensaveis e suporte completo para transferencia de tecnologia.
          </p>

          {/* Trust badges */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <Building2 className="h-5 w-5 text-[#5eead4]" />
              <div>
                <div className="text-sm font-medium text-white">6 anos</div>
                <div className="text-xs text-white/60">coordenando P&D</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <Microscope className="h-5 w-5 text-[#5eead4]" />
              <div>
                <div className="text-sm font-medium text-white">Paper</div>
                <div className="text-xs text-white/60">peer-reviewed</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <Globe className="h-5 w-5 text-[#5eead4]" />
              <div>
                <div className="text-sm font-medium text-white">3 missoes</div>
                <div className="text-xs text-white/60">internacionais</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0db5c8] to-[#5eead4] px-8 py-4 text-base font-semibold text-[#0C2340] shadow-lg shadow-[#0db5c8]/20 transition hover:opacity-90"
            >
              <Sparkles className="w-5 h-5" />
              Solicitar Proposta Tecnica
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4947-1tfYgi1azf3P1KdhBmhPNdNO8xFnrn.jpg"
                alt="Serum premium desenvolvido para industria cosmetica"
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
                &ldquo;Do benchmarking a formulacao final, com racional cientifico em cada etapa.&rdquo;
              </div>
              <div className="mt-3 text-xs font-medium uppercase tracking-wider text-[#5eead4]">
                Samir Tannuri
              </div>
            </div>

            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-tr-3xl border-r-4 border-t-4 border-[#0db5c8]" />
          </div>
        </div>
      </div>
    </section>
  )
}
