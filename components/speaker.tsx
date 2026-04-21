export function Speaker() {
  const events = [
    {
      year: "2025",
      title: "20° Congresso Consulfarma",
      desc: "Apresentação da Técnica Fenol FREE · Curso de Formulações e Protocolos para Lasers",
    },
    {
      year: "2024",
      title: "Congresso Saúde Estética",
      desc: "Apresentação mundial do 1° Peeling de Ácido Azelaico em Pasta Anidra · Estudo Visia®",
    },
    {
      year: "16°-19°",
      title: "Congressos Consulfarma",
      desc: "Speaker em 4 edições consecutivas · Cosmetologia avançada, séruns, peelings e tricologia",
    },
    {
      year: "2023",
      title: "Seminários Científicos Regionais",
      desc: "Cuiabá, Maringá, Goiânia, Espírito Santo · Peelings químicos e tratamento de melasma",
    },
    {
      year: "2022",
      title: "1° Simpósio de Peelings Químicos do Brasil",
      desc: "Co-Organizador · Evento inaugural sobre peelings químicos magistrais",
    },
  ]

  return (
    <section className="py-[110px] px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11.5px] font-bold tracking-[2.5px] uppercase text-copper inline-block mb-3.5">
            Speaker & Educador
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,44px)] text-navy mb-4 leading-[1.15] tracking-[-0.5px]">
            Palcos que formam opinião
          </h2>
          <p className="text-[15px] text-muted max-w-[580px] mx-auto leading-[1.7]">
            Mais de 7 congressos nacionais como speaker convidado — compartilhando P&D aplicado
            com milhares de prescritores e farmacêuticos.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-14 items-start max-md:grid-cols-1">
          {/* Photo Side */}
          <div className="rounded-[18px] overflow-hidden shadow-[0_20px_60px_rgba(11,29,53,0.15)] relative hidden md:block">
            <div className="w-full aspect-[4/5] bg-gradient-to-b from-navy-mid to-navy-deep flex items-center justify-center">
              <span className="font-serif text-[100px] text-white/10">SP</span>
            </div>
            <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-[12px] border border-white/15 rounded-[10px] p-2.5 px-4 text-white">
              <div className="font-serif text-[15px]">Prof. Samir Tannuri</div>
              <div className="text-[11px] text-white/70 mt-0.5 tracking-[0.5px]">
                20° Congresso Consulfarma · 2025
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="flex flex-col gap-4">
            {events.map((event, i) => (
              <div
                key={i}
                className="flex gap-5 p-5 px-[22px] bg-off-white border border-border rounded-[14px] transition-all hover:border-copper hover:bg-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]"
              >
                <div className="font-serif text-[22px] text-copper min-w-[72px] leading-none pt-0.5">
                  {event.year}
                </div>
                <div className="flex-1">
                  <div className="text-[15px] text-navy font-semibold mb-1 leading-[1.3]">
                    {event.title}
                  </div>
                  <div className="text-[13px] text-muted leading-[1.55]">{event.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
