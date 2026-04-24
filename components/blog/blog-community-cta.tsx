import { Instagram, Users, Sparkles, ArrowUpRight } from "lucide-react"
import { HexagonPattern, DNAHelix } from "@/components/illustrations"

export function BlogCommunityCTA() {
  const perks = [
    { label: "400+ profissionais ativos", icon: Users },
    { label: "Lives e aulas gratuitas", icon: Sparkles },
    { label: "Bastidores da pesquisa", icon: Instagram },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7ef] via-white to-[#f2fbf9] py-24 lg:py-28">
      <HexagonPattern className="pointer-events-none absolute -right-10 -top-10 h-80 w-80 text-[#b87333] opacity-[0.06]" />
      <DNAHelix className="pointer-events-none absolute -left-8 bottom-10 h-72 w-24 text-[#2dd4bf] opacity-20" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-[#0a1628]/8 bg-white shadow-[0_40px_100px_-30px_rgba(10,22,40,0.25)]">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Left: visual / gradient poster */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#13243f] to-[#0a1628] p-12 md:p-16">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#e8a87c]/40 to-transparent blur-3xl" />
                <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-gradient-to-tr from-[#2dd4bf]/30 to-transparent blur-3xl" />
              </div>

              <div className="relative flex h-full flex-col items-start justify-between gap-10">
                {/* Instagram handle card */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-xl">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#feda75] via-[#fa7e1e] via-[#d62976] via-[#962fbf] to-[#4f5bd5]">
                    <Instagram className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[2px] text-white/60">
                      Instagram · Comunidade
                    </div>
                    <div className="font-serif text-xl text-white">@cienciadapele</div>
                  </div>
                </div>

                {/* Big number */}
                <div>
                  <div className="font-serif text-[96px] leading-none tracking-tight text-[#e8a87c] md:text-[128px]">
                    400
                    <span className="text-[#2dd4bf]">+</span>
                  </div>
                  <div className="mt-2 text-sm font-bold uppercase tracking-[3px] text-white/60">
                    Profissionais na comunidade
                  </div>
                </div>

                {/* Perks */}
                <ul className="w-full space-y-3">
                  {perks.map((perk) => {
                    const Icon = perk.icon
                    return (
                      <li key={perk.label} className="flex items-center gap-3 text-sm text-white/80">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06]">
                          <Icon className="h-4 w-4 text-[#e8a87c]" />
                        </div>
                        <span className="font-medium">{perk.label}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            {/* Right: copy + CTA */}
            <div className="flex flex-col justify-center p-12 md:p-16">
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-4 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#14b8a6]" />
                <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#0f766e]">
                  Comunidade gratuita
                </span>
              </div>

              <h2 className="mt-5 font-serif text-3xl leading-[1.05] tracking-tight text-[#0a1628] md:text-5xl lg:text-[56px]">
                <span className="italic text-[#b87333]">Ciência da Pele</span>
                <span className="block text-[#0a1628]">— o grupo onde nasce a próxima</span>
                <span className="block italic text-[#b87333]">geração magistral.</span>
              </h2>

              <p className="mt-6 text-base leading-[1.7] text-[#3b4a5c] md:text-lg">
                Um espaço curado pessoalmente pelo Samir Tannuri, onde mais de{" "}
                <strong className="text-[#0a1628]">400 profissionais, esteticistas e médicos</strong>{" "}
                discutem, todos os dias, casos clínicos reais, formulações inéditas, bastidores de
                pesquisa e os últimos congressos internacionais — sem filtros, sem jabá, sem custo.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://instagram.com/cienciadapele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#feda75] via-[#fa7e1e] via-[#d62976] via-[#962fbf] to-[#4f5bd5] px-8 py-4 text-base font-bold text-white shadow-[0_16px_40px_-10px_rgba(214,41,118,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-10px_rgba(214,41,118,0.8)]"
                >
                  <Instagram className="h-5 w-5" />
                  Entrar no @cienciadapele
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <span className="text-sm font-medium text-[#3b4a5c]">
                  100% gratuito · sem compromisso
                </span>
              </div>

              <div className="mt-8 border-t border-[#0a1628]/10 pt-6">
                <p className="text-sm italic leading-relaxed text-[#3b4a5c]">
                  &ldquo;É na Ciência da Pele que testo minhas ideias com quem está no balcão todo dia.
                  Lá eu escuto o Brasil real da farmácia — e é esse diálogo que move a minha pesquisa.&rdquo;
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[2px] text-[#b87333]">
                  — Samir Tannuri
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
