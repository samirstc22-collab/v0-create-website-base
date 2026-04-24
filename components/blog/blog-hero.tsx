import Image from "next/image"
import { BookOpen, FlaskConical, Microscope, Sparkles } from "lucide-react"
import { MoleculeIllustration, HexagonPattern } from "@/components/illustrations"

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2d4a] to-[#0a1628] pt-32 pb-24 lg:pt-44 lg:pb-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-[#2dd4bf]/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-[500px] w-[500px] rounded-full bg-[#b87333]/10 blur-3xl" />
      </div>

      {/* Decorative illustrations */}
      <MoleculeIllustration className="pointer-events-none absolute right-[4%] top-[18%] hidden h-56 w-56 text-[#2dd4bf] opacity-25 lg:block" />
      <HexagonPattern className="pointer-events-none absolute left-[5%] bottom-[10%] hidden h-48 w-48 text-[#b87333] opacity-15 lg:block" />

      {/* Fine grid overlay */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
        <defs>
          <pattern id="blogGrid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blogGrid)" />
      </svg>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Text column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-5 py-2.5">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#2dd4bf]" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#86efd4]">
                Blog Científico · Peer-Reviewed · Aplicação Prática
              </span>
            </div>

            <h1 className="mt-8 font-serif text-[clamp(44px,6vw,82px)] font-normal leading-[0.98] tracking-[-1.5px] text-white">
              Onde a ciência da farmácia{" "}
              <span className="italic text-[#e8a87c]">encontra o balcão</span>.
            </h1>

            <p className="mt-8 max-w-[640px] text-lg leading-relaxed text-white/65 md:text-xl">
              Artigos técnicos, revisões peer-reviewed e ensaios clínicos do Samir Tannuri —
              escritos para profissionais de saúde, pesquisadores e gestores que exigem{" "}
              <strong className="text-white">profundidade científica</strong> e{" "}
              <strong className="text-white">aplicabilidade imediata</strong> na mesma linha.
            </p>

            {/* Meta pillars */}
            <div className="mt-12 grid max-w-[620px] grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Microscope, label: "Peer-reviewed" },
                { icon: FlaskConical, label: "Protocolos" },
                { icon: BookOpen, label: "Revisões" },
                { icon: Sparkles, label: "Aplicação" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center backdrop-blur-sm"
                >
                  <item.icon className="h-5 w-5 text-[#e8a87c]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Author card column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[420px]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                <Image
                  src="/placeholder.svg?height=700&width=500"
                  alt="Samir Tannuri — autor dos artigos científicos"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/10 to-transparent" />

                {/* Author signature */}
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-black/60 p-5 backdrop-blur-xl">
                  <div className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#e8a87c]">
                    Autor convidado
                  </div>
                  <div className="mt-2 font-serif text-2xl text-white">Samir Tannuri</div>
                  <div className="mt-1 text-sm leading-relaxed text-white/65">
                    Professor · Consultor · Publicação indexada (DOI)
                  </div>
                </div>
              </div>

              {/* Floating credential badge */}
              <div className="absolute -left-5 -top-5 hidden rounded-2xl border border-white/10 bg-[#0a1628] px-5 py-4 shadow-2xl lg:block">
                <div className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#86efd4]">
                  Indexado
                </div>
                <div className="mt-1 font-serif text-base text-white">DOI · · Lattes</div>
              </div>

              {/* Corner accent */}
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-[#b87333]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
