import Image from "next/image"
import { Microscope, Dna, Activity, GraduationCap } from "lucide-react"

const researchData = [
  { icon: Dna, label: "EGF", desc: "Epidermal Growth Factor — proliferação de queratinócitos" },
  { icon: Activity, label: "IGF-1", desc: "Insulin-like Growth Factor — síntese proteica dérmica" },
  { icon: Dna, label: "TGF-β3", desc: "Transforming Growth Factor — modulação de cicatrizes" },
  { icon: Activity, label: "VEGF", desc: "Vascular Endothelial Growth Factor — angiogênese tecidual" },
]

export function PortfolioResearch() {
  return (
    <section id="pesquisa-usf" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-[#0096B4]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0C2340]/15 bg-[#0C2340]/5 px-4 py-1.5">
            <GraduationCap className="h-3.5 w-3.5 text-[#0C2340]" />
            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#0C2340]">
              Marco 03 — Pesquisa Acadêmica
            </span>
          </div>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-[#0C2340] md:text-5xl text-balance">
            Pesquisa USF — Fatores de Crescimento em <em className="text-[#B8783D]">Fibroblastos</em>.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#475569] text-pretty">
            Estudo conduzido em parceria com a Universidade São Francisco investigando o efeito
            sinérgico de fatores de crescimento recombinantes em cultura de fibroblastos humanos —
            base científica para os protocolos de regeneração pós-procedimento.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#0096B4]/15 via-transparent to-[#0C2340]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-[#0C2340]/10 shadow-[0_20px_60px_-20px_rgba(12,35,64,0.3)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2487-eym4eG0kM3JYqNeGqletXnmSZiT2ky.jpeg"
                alt="Equipe de pesquisa em laboratório de cosmetologia avançada"
                width={800}
                height={1000}
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-xl bg-white/95 backdrop-blur p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Microscope className="h-5 w-5 text-[#0096B4]" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#0096B4]">
                        Pesquisa Aplicada
                      </div>
                      <div className="text-sm font-semibold text-[#0C2340]">
                        Cultura de fibroblastos humanos primários
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lab equipment images */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-[#0C2340]/10 shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2463-2ez8wTX15VFYpUwy5m8IVZ9n1UobcS.jpeg"
                  alt="Pesquisador com viscosímetro Rayneri em laboratório"
                  width={400}
                  height={250}
                  className="w-full h-[160px] object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-[#0C2340]/10 shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1698278552063-jkEnrdJIx1197ZehjC5zCReuicY212.jpeg"
                  alt="Sistemas micelares com diferentes ativos em desenvolvimento"
                  width={400}
                  height={250}
                  className="w-full h-[160px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-4 space-y-7">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#0C2340] mb-3">
                Objetivo cientifico
              </div>
              <p className="text-base leading-relaxed text-[#334155]">
                Avaliar a sinergia entre fatores de crescimento recombinantes e peptídeos
                biomiméticos sobre a proliferação celular, síntese de colágeno tipo I e III,
                expressão de elastina e modulação inflamatória em fibroblastos humanos primários.
              </p>
            </div>

            {/* Growth factors grid */}
            <div className="rounded-3xl border border-[#0C2340]/10 bg-gradient-to-br from-[#fafbfc] to-white p-6 shadow-sm">
              <div className="text-[11px] font-bold uppercase tracking-[2px] text-[#0C2340] mb-5">
                Fatores estudados
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {researchData.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-xl border border-[#0C2340]/8 bg-white p-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0096B4]/10 shrink-0">
                        <Icon className="h-4 w-4 text-[#0096B4]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#0C2340]">{item.label}</div>
                        <div className="mt-0.5 text-[12px] leading-snug text-[#64748b]">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Outcomes */}
            <div className="rounded-3xl bg-[#0C2340] p-6 text-white">
              <div className="text-[11px] font-bold uppercase tracking-[2px] text-[#5eead4] mb-4">
                Aplicações clínicas derivadas
              </div>
              <ul className="space-y-2.5 text-[14px]">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5eead4]" />
                  <span>Cremes regeneradores pós-laser e pós-peeling químico</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5eead4]" />
                  <span>Séruns anti-inflammaging com exossomos sintéticos biomiméticos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5eead4]" />
                  <span>Tônicos tricológicos com PDRN e peptídeos bioguiados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5eead4]" />
                  <span>Veículos lipossomais para vetorização de ativos termolábeis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
