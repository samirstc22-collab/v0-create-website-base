import Image from "next/image"
import { GraduationCap, Microscope, Mic } from "lucide-react"

export function SobreHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-10 h-80 w-80 rounded-full bg-[#2dd4bf]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-[#b87333]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:px-8">
        {/* Copy */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/30 bg-[#b87333]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#e8a87c]">
            Quem conduz a ST Farma
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
            Samir <em className="text-[#e8a87c]">Tannuri Cerveira</em>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Consultor em tecnologia magistral. <strong className="text-white">Seis anos
            coordenando P&D</strong> no maior grupo magistral do Brasil, mais de 500 farmácias
            atendidas tecnicamente e 1.000+ formuladores treinados. Hoje, essa experiência vira
            consultoria sob medida para indústrias, magistrais e marcas.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <GraduationCap className="mb-3 h-6 w-6 text-[#e8a87c]" />
              <div className="text-sm font-medium text-white">Consultor</div>
              <div className="text-xs text-white/60">Formulação Magistral</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Microscope className="mb-3 h-6 w-6 text-[#e8a87c]" />
              <div className="text-sm font-medium text-white">P&D</div>
              <div className="text-xs text-white/60">Indústria & Magistral</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Mic className="mb-3 h-6 w-6 text-[#e8a87c]" />
              <div className="text-sm font-medium text-white">Delegado Técnico</div>
              <div className="text-xs text-white/60">In-Cosmetics Paris 2025</div>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Samir Tannuri — Consultor em tecnologia magistral"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 40vw"
                priority
              />
            </div>
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#b87333]" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-[#2dd4bf]" />
          </div>
        </div>
      </div>
    </section>
  )
}
