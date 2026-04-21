import { Calendar, Mic } from "lucide-react"
import { FlaskIllustration, HexagonPattern } from "./illustrations"

export function Speaker() {
  const events = [
    {
      year: "2025",
      title: "20o Congresso Consulfarma",
      desc: "Apresentacao da Tecnica Fenol FREE | Curso de Formulacoes e Protocolos para Lasers",
    },
    {
      year: "2024",
      title: "Congresso Saude Estetica",
      desc: "Apresentacao mundial do 1o Peeling de Acido Azelaico em Pasta Anidra | Estudo Visia",
    },
    {
      year: "16o-19o",
      title: "Congressos Consulfarma",
      desc: "Speaker em 4 edicoes consecutivas | Cosmetologia avancada, seruns, peelings e tricologia",
    },
    {
      year: "2023",
      title: "Seminarios Cientificos Regionais",
      desc: "Cuiaba, Maringa, Goiania, Espirito Santo | Peelings quimicos e tratamento de melasma",
    },
    {
      year: "2022",
      title: "1o Simposio de Peelings Quimicos do Brasil",
      desc: "Co-Organizador | Evento inaugural sobre peelings quimicos magistrais",
    },
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <FlaskIllustration className="absolute top-20 right-[3%] w-24 h-32 text-teal opacity-8" />
      <HexagonPattern className="absolute bottom-20 left-[3%] w-32 h-32 text-copper opacity-8" />

      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[3px] uppercase text-copper inline-block mb-4">
            Speaker & Educador
          </span>
          <h2 className="font-serif font-normal text-[clamp(36px,4.5vw,52px)] text-navy mb-5 leading-[1.1] tracking-[-0.5px]">
            Palcos que formam opiniao
          </h2>
          <p className="text-lg text-muted max-w-[620px] mx-auto leading-relaxed">
            Mais de 7 congressos nacionais como speaker convidado — compartilhando P&D aplicado
            com milhares de prescritores e farmaceuticos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo Side */}
          <div className="rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(11,29,53,0.15)] relative hidden lg:block">
            <div className="w-full aspect-[4/5] bg-gradient-to-b from-navy-mid to-navy-deep flex items-center justify-center">
              <span className="font-serif text-[120px] text-white/10">SP</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-black/75 backdrop-blur-xl border border-white/15 rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2 mb-1">
                <Mic className="w-4 h-4 text-copper-light" />
                <div className="font-serif text-lg">Prof. Samir Tannuri</div>
              </div>
              <div className="text-sm text-white/70 tracking-wide">
                20o Congresso Consulfarma | 2025
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="flex flex-col gap-5">
            {events.map((event, i) => (
              <div
                key={i}
                className="group flex gap-6 p-6 bg-off-white border border-border rounded-2xl transition-all hover:border-copper hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center gap-2 text-copper min-w-[90px]">
                  <Calendar className="w-4 h-4 opacity-60" />
                  <span className="font-serif text-2xl leading-none">
                    {event.year}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="text-lg text-navy font-semibold mb-2 leading-tight group-hover:text-copper transition-colors">
                    {event.title}
                  </div>
                  <div className="text-base text-muted leading-relaxed">{event.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
