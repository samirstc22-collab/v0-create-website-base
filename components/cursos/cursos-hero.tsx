import Image from "next/image"
import { GraduationCap, Award, Users } from "lucide-react"

export function CursosHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0d1d35] to-[#0a1628] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <svg width="100%" height="100%">
          <pattern id="grid-cursos" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-cursos)" />
        </svg>
      </div>

      {/* Glows */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#e8a87c]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-[#2dd4bf]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#e8a87c]/30 bg-[#e8a87c]/10 px-5 py-2">
              <GraduationCap className="h-4 w-4 text-[#e8a87c]" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#e8a87c]">
                Escola Clube de Fórmulas
              </span>
            </div>

            <h1 className="mt-7 font-serif text-4xl leading-[1.02] tracking-[-0.02em] text-white md:text-6xl lg:text-[82px]">
              Cursos que transformam farmacêuticos em{" "}
              <span className="italic text-[#e8a87c]">referências técnicas</span> da sua região.
            </h1>

            <p className="mt-7 max-w-[620px] text-lg leading-[1.7] text-white/70 md:text-xl">
              Formação intensiva em cosmetologia avançada, manipulação de alta performance e gestão
              lucrativa — construída com o mesmo rigor das melhores escolas de Paris, Tóquio e
              Amsterdam, e adaptada ao balcão brasileiro.{" "}
              <span className="font-semibold text-white">
                Do iniciante ao farmacêutico que quer virar autoridade.
              </span>
            </p>

            {/* Micro stats */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2.5px] text-[#e8a87c]">
                  <Users className="h-3 w-3" /> Alunos
                </div>
                <div className="mt-2 font-serif text-4xl text-white">12.000+</div>
                <div className="text-xs text-white/50">em 26 capitais</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2.5px] text-[#2dd4bf]">
                  <Award className="h-3 w-3" /> Satisfação
                </div>
                <div className="mt-2 font-serif text-4xl text-white">98%</div>
                <div className="text-xs text-white/50">recomendam</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2.5px] text-[#e8a87c]">
                  <GraduationCap className="h-3 w-3" /> Cursos
                </div>
                <div className="mt-2 font-serif text-4xl text-white">14</div>
                <div className="text-xs text-white/50">módulos ativos</div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#e8a87c]/25 to-[#2dd4bf]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Samir Tannuri em laboratório internacional"
                width={1000}
                height={1250}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/75 p-5 backdrop-blur-xl">
                <div className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#e8a87c]">
                  Treinamento EUROTEX · França
                </div>
                <p className="mt-1 font-serif text-lg leading-tight text-white">
                  O que você aprende aqui, ele aprendeu na origem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
