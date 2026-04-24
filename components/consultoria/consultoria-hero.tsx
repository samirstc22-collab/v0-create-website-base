import Image from "next/image"
import { Sparkles, ShieldCheck, Users } from "lucide-react"

export function ConsultoriaHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#b87333]/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#2dd4bf]/10 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
          <defs>
            <pattern id="consHeroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#consHeroGrid)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/30 bg-[#b87333]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#e8a87c]">
            <Sparkles className="h-3.5 w-3.5" />
            Consultoria Personalizada
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
            A primeira consultoria construída{" "}
            <em className="text-[#e8a87c]">para a sua farmácia</em>. Não para o mercado.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/75 md:text-xl">
            O Samir Tannuri criou um método único no Brasil: em vez de aplicar o mesmo manual em todo lugar,
            ele <strong className="text-white">desenha uma estratégia sob medida</strong> para a realidade,
            o público e a lucratividade da sua drogaria ou farmácia de manipulação.
          </p>

          {/* Trust badges */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <ShieldCheck className="h-5 w-5 text-[#e8a87c]" />
              <div>
                <div className="text-sm font-medium text-white">+150</div>
                <div className="text-xs text-white/60">farmácias atendidas</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <Users className="h-5 w-5 text-[#e8a87c]" />
              <div>
                <div className="text-sm font-medium text-white">24 anos</div>
                <div className="text-xs text-white/60">de experiência real</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <Sparkles className="h-5 w-5 text-[#e8a87c]" />
              <div>
                <div className="text-sm font-medium text-white">100%</div>
                <div className="text-xs text-white/60">plano sob medida</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#tiers"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b87333] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#b87333]/20 transition hover:bg-[#a0632c]"
            >
              Ver planos disponíveis
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Agendar diagnóstico
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src="/images/samir-portrait-sofa.jpg"
                alt="Samir Tannuri, consultor especialista em farmácias e drogarias"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />
            </div>

            {/* Floating quote */}
            <div className="absolute -bottom-8 left-4 right-4 rounded-2xl border border-white/10 bg-[#0a1628] p-5 shadow-2xl md:left-auto md:right-[-20px] md:max-w-xs">
              <div className="font-serif text-sm italic leading-relaxed text-white">
                "Eu não entrego a mesma solução duas vezes — porque nenhuma farmácia é igual à outra."
              </div>
              <div className="mt-3 text-xs font-medium uppercase tracking-wider text-[#e8a87c]">
                Samir Tannuri
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-tr-3xl border-r-4 border-t-4 border-[#b87333]" />
          </div>
        </div>
      </div>
    </section>
  )
}
